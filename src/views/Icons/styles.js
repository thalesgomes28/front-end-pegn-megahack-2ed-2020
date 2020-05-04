import styled from 'styled-components';

const Section = styled.section`
    background-color: white;

`;

const Button = styled.button`
    height: 25px;
    margin: 0px 0px 0px 20px;
    background: white;
    border: 1px solid rgba(100, 100, 100, 0.5);
    border-radius: 5px;
    cursor: pointer;
`;

const Nav = styled.nav`
    display: flex;
    justify-content: flex-end;
`;


const Ul = styled.ul`
    list-style: none;
    display: flex;
    margin-right: 40px;
    justify-content: center;
    align-items: center;
`;


const Li = styled.li`
    margin-right: 15px;
    font-size: 15px;
    color: black;
`;

const H1 = styled.h1`
    color: white;
    margin-left: 40px;
`;

const P = styled.p`
    color: white;
    margin-left: 15px;
    margin-top: -20px;
`;

const Figure = styled.figure`
    margin: 0;
    padding: 0;
`;


const Figcaption = styled.figcaption`
    position: relative;
    top: -423px;
    height: 369px;
    width: 100%;
    background-color: rgba(50, 50, 50, 0.5);
    margin-bottom: -420px;
`;

const Section1 = styled.section`
    display: grid;
    grid-template-columns: 400px 400px;
    background-color: tomato;
    height: 100%;
`;


export { Li, Nav, Ul, Figcaption, H1, P, Button, Section, Section1, Figure }
