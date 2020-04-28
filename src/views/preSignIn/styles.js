import styled from "styled-components";

export const Container = styled.div`
  font-family: 'Work Sans', sans-serif;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100vh;
`;

export const Form = styled.form`
  width: 400px;
  background: #fff;
  padding: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  
  img {
    width: 200px;
    margin: 10px 0 10px;
  }
  p {
    color: #777;
    margin-bottom: 15px;
   
    padding: 10px;
    width: 100%;
    text-align: center;
  }
  
  
  a {
    font-size: 16;
    font-weight: bold;
    color: #00009C;
    text-decoration: none;
  }
`;
