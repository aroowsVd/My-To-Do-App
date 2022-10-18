import styled from "styled-components"

const BoxContainer = styled.div`
  width: 500px;
  height: 700px;
  border-radius: 10px;
  background-color: white;
  margin: 0 auto;
  margin-top: 100px;
  display: flex;
  flex-direction: column;
  position: relative;
`;

function Box({ children }) {
  return (
    <BoxContainer>{children}</BoxContainer>
  )
}

export default Box;