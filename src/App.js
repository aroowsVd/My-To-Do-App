import { createGlobalStyle } from "styled-components";
import Box from "./components/Box";
import CreateList from "./components/CreateList";
import Header from "./components/Header";
import Lists from "./components/Lists";

const GlobalStyle = createGlobalStyle`
  /* 여백 초기화 */
  body,div,ul,li,dl,dd,dt,ol,h1,h2,h3,h4,h5,h6,input,fieldset,legend,p,select,table,th,td,tr,textarea,button,form,figure,figcaption{margin:0; padding:0;}

  /* a 링크 초기화 */
  a {color: #222; text-decoration: none;}
  a:hover {color: #2698cb;}

  /* 폰트 초기화 */
  body, input, textarea, select, button, table {font-family:'Noto Sans KR', AppleSDGothicNeo-Regular,'Malgun Gothic','맑은 고딕',dotum,'돋움',sans-serif; color: #222; font-size: 13px; line-height: 1.5;}

  /* 폰트 스타일 초기화 */
  em,address {font-style: normal;}

  /* 블릿기호 초기화 */
  ul,li,ol {list-style:none;}

  /* 제목 태그 초기화 */
  h1,h2,h3,h4,h5,h6 {font-size: 13px; font-weight: normal;}

  /* 테두리 초기화 */
  img,fieldset {border:0 none;}

  /* 버튼 초기화 */
  button {border: 0;}

  /* 반응형 */
  video,img {width: 100%;}

  /* input style */
  input {background-image: none;}
  input[type=button],
  input[type=reset],
  input[type=text],
  input[type=password],
  input[type=submit],
  input[type=search],
  input[type=tel],
  input[type=email] {
      -webkit-appearance: none;
      border-radius: 0
  }
  input[type=search]::-webkit-search-cancel-button,
  input[type=search]::-webkit-search-decoration {
      -webkit-appearance: none
  }
  input:checked[type=checkbox] {
      background-color: #666;
      -webkit-appearance: checkbox
  }
  body {
  background:
  linear-gradient(27deg, #151515 5px, transparent 5px) 0 5px,
  linear-gradient(207deg, #151515 5px, transparent 5px) 10px 0px,
  linear-gradient(27deg, #222 5px, transparent 5px) 0px 10px,
  linear-gradient(207deg, #222 5px, transparent 5px) 10px 5px,
  linear-gradient(90deg, #1b1b1b 10px, transparent 10px),
  linear-gradient(#1d1d1d 25%, #1a1a1a 25%, #1a1a1a 50%, transparent 50%, transparent 75%, #242424 75%, #242424);
  background-color: #131313;
  background-size: 20px 20px;
  }
`;

function App() {
  return (
    <>
      <GlobalStyle />
      <Box>
        <Header />
        <Lists />
        <CreateList />
      </Box>
    </>
  );
}

export default App;
