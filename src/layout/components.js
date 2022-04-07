import styled from "styled-components";

export const CustomPaper = styled.div`
  display: flex;
  justify-content: ${(props) => props.justifyContent};
  align-items: ${(props) =>
    props.alignItems === "start" ? "start ! important" : "center"};
  border-radius: 16px;
  padding: 24px;
  width: 85%;
  margin: 2rem;
  align-items: center;
  opacity: 1;
  height: 90vh;
  background: linear-gradient(to top right, #000000, #000000, transparent),
    url("https://vip-go.shutterstock.com/blog/wp-content/uploads/sites/5/2020/05/shutterstock_407554567.jpg")
      no-repeat top center;
  background-size: 100%;
`;

export const CustomContainer = styled.div`
  display: flex;
  justify-content: center;
`;

export const Li = styled.li`
  list-style-type: none;
  background-color: ${(props) => props.backgroundColor};
  border-radius: 4px;
  padding-left: 16px;
`;
