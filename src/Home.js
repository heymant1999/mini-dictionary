/* eslint-disable react/prop-types */
import styled from 'styled-components';
import { TextField, InputAdornment, IconButton, Button, Stack, Grid, Container, Paper, Typography } from '@mui/material';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import EmailIcon from '@mui/icons-material/Email';
import { green, red, grey } from '@mui/material/colors';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';
import axios from 'axios';
import { data } from './words';

const CustomPaper = styled.div`
display:flex;
border-radius: 16px;
padding: 24px;
height: 500px;
width: 50%;
margin: 2rem;
align-items: center;
  opacity: 1;
  background: linear-gradient(to top right, #000000,#000000, transparent), url("https://vip-go.shutterstock.com/blog/wp-content/uploads/sites/5/2020/05/shutterstock_407554567.jpg")  no-repeat top center;
  `;


export function Home() {
    const [suggestions, setSuggestions] = useState([]);
    const [showSuggestions, setShowSuggestions] = useState(true);
    const [meaning, setMeaning] = useState();
    const [searchText, setSearchText] = useState('');

    const updateSuggestions = (value) => {
        setShowSuggestions(true);
        setSuggestions(value
            ? data.words.filter((word) => word.startsWith(value)).slice(0, 5)
                .map((w, i) =>
                    i === 0 ?
                        { word: w, isSelected: true } :
                        { word: w, isSelected: false }
                ) : [])
    }

    useEffect(() => {
        updateSuggestions(searchText);
    }, [searchText])
    const getWordMeaning = async (word) => {
        console.log("get meaning for:", word);
        setShowSuggestions(false);
        setSearchText(word);
        const result = await axios.get(`https://api.dictionaryapi.dev/api/v2/entries/en/${word}`);
        console.log(result);
        console.log(result.data[0].meanings[0].definitions[0].definition);
        setMeaning(result.data[0].meanings[0].definitions[0].definition);
        setShowSuggestions(false);
    }

    return (
        <CustomPaper >
            <Stack maxWidth={400} spacing={2} >
                <Grid item xs={12} md={4} >
                    <TextField
                        size="small"
                        onChange={(e) => { setSearchText(e.target.value) }}
                        value={searchText}
                        sx={{ borderBlockColor: 'red' }}
                        label="search"
                        fullWidth
                        variant="outlined"
                        onKeyUp={(ev) => {
                            console.log(ev.key);
                            if (ev.key === 'Enter') {
                                setSearchText(suggestions.find(s=>s.isSelected).word);
                                getWordMeaning(suggestions.find(s=>s.isSelected).word);
                                setShowSuggestions(false);
                                ev.preventDefault();
                            }
                            if (ev.key === 'ArrowUp') {
                                let index = suggestions.indexOf(suggestions.find(s => s.isSelected));
                                console.log(index);
                                if (index > 0) {
                                    index -= 1;
                                } else {
                                    index = 0;
                                }
                                setSuggestions(suggestions.map((s, i) => i === index
                                    ? { ...s, isSelected: true } : { ...s, isSelected: false }))
                            }
                            if (ev.key === 'ArrowDown') {
                                let index = suggestions.indexOf(suggestions.find(s => s.isSelected));
                                console.log(index);
                                if (index < 4) {
                                    index += 1;
                                } else {
                                    index = 4;
                                }
                                setSuggestions(suggestions.map((s, i) => i === index
                                    ? { ...s, isSelected: true } : { ...s, isSelected: false }))
                            }
                        }}
                    />
                </Grid>
                {showSuggestions ?
                    <Suggestions suggestions={suggestions} getWordMeaning={getWordMeaning} />
                    : <WordMeaning meaning={meaning} />}
            </Stack>
        </CustomPaper>
    );
}

function Suggestions({ suggestions, getWordMeaning }) {
    return (
        suggestions.map(s =>
            <Grid item px={1} sx={s.isSelected ? { backgroundColor: '#3A3845', borderRadius: '4px' } : {}}
                onClick={(e) => getWordMeaning(s.word)}>
                <Typography
                size="small"
                >{s.word}</Typography>
            </Grid>)
    )

}

function WordMeaning({ meaning }) {
    return (
        <p>{meaning}</p>
    )
}