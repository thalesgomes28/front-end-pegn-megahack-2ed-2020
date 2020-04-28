import styled from "styled-components";

export const Container = styled.div`
display: grid;
grid-template-columns: 250px 250px 250px 250px;
grid-template-rows: auto;

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
    margin: 10px 0 40px;
  }
  p {
    color: #ff3333;
    margin-bottom: 15px;
    border: 1px solid #ff3333;
    padding: 10px;
    width: 100%;
    text-align: center;
  }
  input {
    color: #777;
    
    flex: 1;
    height: 46px;
    margin-bottom: 15px;
    padding: 0 20px;    
    font-size: 16px;
    width: 100%;
    border: 1px solid rgb(0, 0, 156,0.6);
    border-radius: 5px;
    
    &::placeholder {
      color: rgb(253, 102, 21);
      opacity: 0.5;
    }
  }
  button {
    color: #fff;
    font-size: 16px;
    background: rgb(253, 102, 21);
    height: 56px;
    border: 0;
    border-radius: 5px;
    width: 100%;
  }
  hr {
    margin: 20px 0;
    border: none;
    border-bottom: 1px solid rgb(253, 102, 21);
    width: 100%;
  }
  a {
    font-size: 16;
    font-weight: bold;
    color: #00009C;
    text-decoration: none;
  }
`;
