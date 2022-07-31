import logo from "./logo.svg";
import "./App.css";
import { useState } from "react";

function App() {
  let post = "대구 라면 맛집";
  let [title, setTitle] = useState([
    "남자 코트, 추천",
    "강남 우동맛집",
    "파이썬독학",
  ]);
  let [따봉, 따봉변경] = useState(0);

  function orderTitle() {
    let newOrder = [...title].sort();
    setTitle(newOrder);
  }
  //함수는 return문 밖에서 사용
  return (
    <div className="App">
      <div className="black-nav">
        <h4>ReactBlog</h4>
      </div>

      <button onClick={orderTitle}>가나다순으로 정렬하기</button>

      <button
        onClick={() => {
          let copy = [...title];
          copy[0] = "여자 코트 추천";
          setTitle(copy);
        }}
      >
        글수정
      </button>
      <div className="list">
        <h4>
          {title[0]}
          <span
            onClick={() => {
              따봉변경(따봉 + 1);
            }}
          >
            👍
          </span>
          {따봉}
        </h4>
        <p>2월 17일 발행</p>
      </div>

      <div className="list">
        <h4>{title[1]}</h4>
        <p>2월 17일 발행</p>
      </div>

      <div className="list">
        <h4>{title[2]}</h4>
        <p>2월 17일 발행</p>
      </div>
      <Modal></Modal>
    </div>
  );
}

function Modal() {
  return (
    <div className="modal">
      <h4>제목</h4>
      <p>날짜</p>
      <p>상세내용</p>
    </div>
  );
}

export default App;
//return()안에는 병룔로
//태그 2개 이상 기입금지
