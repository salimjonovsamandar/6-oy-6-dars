import styled from "styled-components";

const Title = styled.h1`
  text-align: center;
  margin-top: 50px;
  font-size: 28px;
  margin-bottom: 20px;
`;

const Table = styled.table`
  border: 1px solid black;
  padding: 5px;
  margin-top: 20px;
  margin-right: auto;
  margin-left: auto;
  width: 70%;
  border-collapse: collapse;
  margin-bottom: 50px;
`;
const Th = styled.th`
  padding: 15px;
  border: 1px solid black;
  font-size: 20px;

  &:first-child {
    width: 70px;
  }
  &:last-child {
    width: 70px;
  }
  &:nth-child(3) {
    width: 120px;
  }
  &:nth-child(4) {
    width: 480px;
  }
`;
const Td = styled.td`
  padding: 15px;
  border: 1px solid black;
  font-size: 20px;
  text-align: center;
  `

const Button = styled.button`
  padding: 5px;
  background-color: red;
  color: white;
  border: 1px solid transparent;
  transition: all 0.5s;
  font-size: 16px;
  &:hover {
    background-color: transparent;
    color: black;
    border: 1px solid black;
  }
`;

export { Title, Table, Th,Td,  Button };
