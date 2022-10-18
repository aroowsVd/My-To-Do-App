import styled from "styled-components";
import '../font/font.css'

const Head = styled.div`
  padding: 30px 30px;
  background: linear-gradient(135deg, #3E4777 0%, #F46E6E 100%);;
  border-top-right-radius: 10px;
  border-top-left-radius: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Span = styled.span`
  font-family: "Pathway Gothic One", sans-serif;
  font-size: 40px;
  font-weight: 700;
  position: relative;
  letter-spacing: 3px;
  color: #F46E6E;
  padding-right: 10px;
  &:last-child {
    padding-right: 0;
  }
  &::before {
    content: "";
    height: 3px;
    position: absolute;
    bottom: 7px;
    background: #F46E6E;
    width: 0%;
    animation: voila 2s forwards linear;
  }
  @keyframes voila {
    to {
      width: 100%;
    }
  }
`;

function Header() {
  return (
    <Head>
      <Span>To</Span>
      <Span>Do</Span>
      <Span>List</Span>
    </Head>
  )
}

export default Header;