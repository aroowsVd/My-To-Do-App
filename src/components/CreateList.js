import axios from "axios";
import { useState } from "react";
import styled from "styled-components";

const FormContainer = styled.div`
  width: 100%;
  position: absolute;
  bottom: 0;
  left: 0;
`;

const Form = styled.form`
  padding: 16px 32px;

  border-top: 1px solid #828282;

  display: flex;
  flex-direction: column;
`;

const Input = styled.input`
  color: #3c3c3c;
  font-size: 18px;
  padding: 5px 15px;
  margin-bottom: 10px;
  border: 2px solid #1F2024;
  &:focus {
    color: #3E4777;
    border: 2px solid #3E4777;
    outline: none;
  }
`;

const TextArea = styled.textarea`
  color: #3c3c3c;
  font-size: 18px;
  padding: 5px 15px;
  margin-bottom: 10px;
  border: 2px solid #1F2024;
  &:focus {
    color: #3E4777;
    border: 2px solid #3E4777;
    outline: none;
  }
`;

const Button = styled.button`
  cursor: pointer;
  border: 3px solid #3E4777;
  background-color: #fbfbfb;
  color: #3E4777;
  font-size: 20px;
  font-weight: 700;
  padding: 10px 0;

  transition: all 0.3s;
  &:hover {
    background-color: #3E4777;
    color: #fbfbfb;
  }
`;

function CreateList() {
  const [title, setTitle] = useState('');
  const [body, setBody] = useState('');

  const onSubmit = (e) => {
    e.preventDefault();
    let today = new Date();
    let year = today.getFullYear();
    let month = today.getMonth() + 1;
    let day = today.getDate();

    async function addTodo() {
      axios.post('http://localhost:3001/todos', {
        todo: title,
        context: body,
        date: `${year}/${month}/${day}`
      })
      .then(window.location.reload())
    }
    addTodo();
  }
  return (
    <FormContainer>
      <Form onSubmit={onSubmit}>
        <Input
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          placeholder="제목을 입력해주세요"
          required
        />
        <TextArea 
          value={body}
          onChange={(e) => setBody(e.target.value)}
          placeholder="할일을 입력해주세요"
          required
        />
        <Button>ADD</Button>
      </Form>
    </FormContainer>
  );
}

export default CreateList;