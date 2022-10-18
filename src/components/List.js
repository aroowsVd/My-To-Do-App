import { useState } from "react";
import styled from "styled-components";
import "./List.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPenToSquare } from "@fortawesome/free-regular-svg-icons";
import { faTrashCan } from "@fortawesome/free-regular-svg-icons";
import axios from "axios";

const Dt = styled.dt`
  background: #505662;
  border-left: 8px solid #1F2024;
  color: #B6BCCC;
  font-size: 16px;
  font-weight: 600;
  padding: 15px;
  position: relative;
  text-align: left;
  text-transform:uppercase;
  position: relative;

  transition: all .5s;
  &::after, &::before {
    content: "\f078";
    font-family: fontAwesome;
    position: absolute;
    right:15px;
    height:28px;
    top:0;
    bottom:0;
    margin:auto;

    transition:all .7s ease-in-out;
  }
  &::before {
    opacity:0;
    transition:all .4s ease-in-out;
  }
  &:hover {
    cursor:pointer;
  }
  span {
    font-size: 14px;
    margin-right: 15px;
    color: #B6BCCC;
    
    transition: all .5s;
  }
  svg {
      position: absolute;
      top: 17px;
      right: 35px;
  }
`;

const Dd = styled.dd`
  font-size: 14px;
  background: #1C1C1C;
  color: #edeff3;
  margin:0;
  overflow:hidden;
  padding:1px 15px;
  position: relative;

  transition: all .5s;
  textarea {
    width: 100%;
    color: #edeff3;
    background-color: #1C1C1C;
    ::-webkit-scrollbar {
      display: none;
    }
  }
  svg {
    font-size: 20px;
    position: absolute;
    bottom: 15px;
    right: 30px;
    opacity: 0;
    cursor: pointer;

    transition: all .3s;
  }
`;

function List({ todo, context, date, id }) {
  const [isActive, setIsActive] = useState(false);
  const [edit, setEdit] = useState(false);
  // fetch해온 data 저장소
  const [fetchData, setFetchData] = useState(context);

  const openAco = () => {
    setIsActive((crr) => !crr);
  }

  const editText = (e) => {
    setFetchData(e.target.value);
  }

  // 수정 data 함수
  async function patchContext() {
    await axios.patch(`http://localhost:3001/todos/${id}`, {
      context: fetchData
    });
  }
  // 삭제 data 함수
  async function deleteData() {
    await axios.delete(`http://localhost:3001/todos/${id}`)
  }

  const deleteBtn = () => {
    deleteData();
    window.location.reload();
  }
  const editBtn = () => {
    setEdit((crr) => !crr)
  }
  const resultEditBtn = () => {
    patchContext();
    setEdit((crr) => !crr);
  }

  return (
    <>
      <Dt className={isActive? 'open' : ''} onClick={openAco}>
        <span>{date}</span>
        {todo}
        <FontAwesomeIcon icon={faTrashCan} onClick={deleteBtn} />
      </Dt> 
      <Dd>
        {edit ? (
            <textarea onChange={editText}>{fetchData}</textarea>
          ) : (
            fetchData
          )}
        <FontAwesomeIcon icon={faPenToSquare} onClick={!edit ? editBtn : resultEditBtn} />
      </Dd>
    </>
  )
}

export default List;