import styled from "styled-components";

const Form = styled.div`
  width: 30%;
  margin-left: auto;
  margin-right: auto;
  background-color: lightblue;
  margin-top: 20px;
  padding: 20px;
  border-radius: 20px;
`;
const Title = styled.h1`
  text-align: center;
  font-size: 28px;
  margin-bottom: 20px;
`;
const Leabel = styled.p`
  margin-top: 20px;
  font-size: 16px;
  font-weight: 600;
  margin-bottom: 5px;
  margin-left: 10px;
`;

const Input = styled.input`
  padding: 10px;
  font-size: 16px;
  width: 100%;
  border-radius: 10px;
  border: none;
`;
const Textarea = styled.textarea`
  width: 100%;
  font-size: 16px;  
  resize: none;
  height: 100px;
  border-radius: 10px;
  padding: 10px;
`;
const Button = styled.button`
  width: 100%;
  margin-top: 20px;
  padding: 10px;
  border-radius: 10px;
  border: 1px solid transparent;
  font-weight: 600;
  font-size: 20px;
  background-color: blue;
  color: white;
  transition: all 0.5s;
  &:hover {
    border: 1px solid black;
    background-color: transparent;
    color: black;
  }
`;

export { Form, Title, Input, Leabel, Textarea, Button };
