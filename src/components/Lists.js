import { useEffect, useState } from "react";
import styled from "styled-components";
import axios from "axios";
import List from "./List";

const TodoContainer = styled.div`
  flex: 1;
  padding: 20px 32px;
  margin-bottom: 218px;
  overflow-y: auto;
`;

const Dl = styled.dl`
`;

function Lists() {
  const [toDoData, setToDoData] = useState([]);

  useEffect(() => {
    async function fetchToDo() {
      const res = await axios.get('http://localhost:3001/todos');
      setToDoData(res.data);
    }
    fetchToDo();
  }, []);

  return (
    <TodoContainer>
      <Dl>
        {toDoData.map((data) => (
          <List 
            key={data.id}
            id={data.id}
            todo={data.todo}
            context={data.context}
            date={data.date}
          />
        ))}
      </Dl>
    </TodoContainer>
  );
}

export default Lists;