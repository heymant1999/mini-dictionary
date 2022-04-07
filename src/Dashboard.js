/* eslint-disable react/prop-types */
import {
  TextField,
  Stack,
  Grid,
  Typography,
  LinearProgress,
  Box,
} from "@mui/material";
import { grey } from "@mui/material/colors";
import { useEffect, useState } from "react";
import axios from "axios";
import { data } from "./words";
import { CustomPaper, CustomContainer, Li } from "./layout/components";

export function Dashboard() {
  const [suggestions, setSuggestions] = useState([]);
  const [showSuggestions, setShowSuggestions] = useState(true);
  const [meaning, setMeaning] = useState();
  const [searchText, setSearchText] = useState("");
  const [loading, setLoading] = useState(false);

  const updateSuggestions = (value) => {
    setShowSuggestions(true);
    setSuggestions(
      value
        ? data.words
            .filter((word) => word.startsWith(value))
            .slice(0, 5)
            .map((w, i) =>
              i === 0
                ? { word: w, isSelected: true }
                : { word: w, isSelected: false }
            )
        : []
    );
  };

  useEffect(() => {
    updateSuggestions(searchText);
  }, [searchText]);

  const getWordMeaning = async (word) => {
    setShowSuggestions(false);
    setSearchText(word);
    setLoading(true);
    axios
      .get(`https://api.dictionaryapi.dev/api/v2/entries/en/${word}`)
      .then((res) => {
        setLoading(false);
        setMeaning(res?.data[0].meanings[0].definitions[0].definition);
        setShowSuggestions(false);
      })
      .catch((e) => {
        setLoading(false);
        setMeaning(
          "Error: Something went wrong, could not get meaning for this word"
        );
        setShowSuggestions(false);
      });
  };

  const setSelected = (index) => {
    setSuggestions(
      suggestions.map((s, i) =>
        i === index ? { ...s, isSelected: true } : { ...s, isSelected: false }
      )
    );
  };

  return (
    <CustomContainer>
      <CustomPaper justifyContent="center" alignItems="start">
        <Stack width={500} spacing={2} mt={8}>
          <Grid item xs={12} md={12}>
            <TextField
              size="small"
              onChange={(e) => {
                setSearchText(e.target.value);
              }}
              value={searchText}
              sx={{ borderBlockColor: "red" }}
              label="search"
              fullWidth
              variant="outlined"
              onKeyUp={(ev) => {
                if (ev.key === "Enter") {
                  setSearchText(suggestions.find((s) => s.isSelected).word);
                  getWordMeaning(suggestions.find((s) => s.isSelected).word);
                  setShowSuggestions(false);
                  ev.preventDefault();
                }
                if (ev.key === "ArrowUp") {
                  let index = suggestions.indexOf(
                    suggestions.find((s) => s.isSelected)
                  );
                  if (index > 0) {
                    index -= 1;
                  } else {
                    index = 0;
                  }
                  setSelected(index);
                }
                if (ev.key === "ArrowDown") {
                  let index = suggestions.indexOf(
                    suggestions.find((s) => s.isSelected)
                  );
                  if (index < 4) {
                    index += 1;
                  } else {
                    index = 4;
                  }
                  setSelected(index);
                }
              }}
            />
            {loading && (
              <Box mt={0.2} sx={{ width: "100%" }}>
                <LinearProgress style={{ color: grey[500] }} />
              </Box>
            )}
          </Grid>
          {showSuggestions ? (
            <Suggestions
              suggestions={suggestions}
              getWordMeaning={getWordMeaning}
              setSelected={(index) => setSelected(index)}
            />
          ) : (
            <WordMeaning meaning={meaning} loading={loading} />
          )}
        </Stack>
      </CustomPaper>
    </CustomContainer>
  );
}

function Suggestions({ suggestions, getWordMeaning, setSelected }) {
  return (
    <Stack container spacing={0.5}>
      {suggestions.map((s, index) => (
        <Li
          onMouseOver={() => setSelected(index)}
          backgroundColor={s.isSelected && "#3A3845"}
          onClick={(e) => getWordMeaning(s.word)}
        >
          <Typography size="small">{s.word}</Typography>
        </Li>
      ))}
    </Stack>
  );
}

function WordMeaning({ meaning, loading }) {
  return loading ? <p>..loading</p> : <p>{meaning}</p>;
}
