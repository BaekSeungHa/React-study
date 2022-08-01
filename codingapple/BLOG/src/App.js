/* eslint-disable*/

import logo from "./logo.svg";
import "./App.css";
import { useState } from "react";

function App() {
  let post = "대구 라면 맛집";
  let [글제목, 글제목변경] = useState([
    "남자 코트 추천",
    "강남 우동맛집",
    "파이썬독학",
  ]);
  let [따봉, 따봉변경] = useState(0);
  let [modal, setModal] = useState(false);
  let [title, setTitle] = useState(0);
  return (
    <div className="App">
      <div className="black-nav">
        <h4>tech blog</h4>
      </div>
      {글제목.map(function (a, i) {
        return (
          <div className="list" key={i}>
            <h4
              onClick={() => {
                setModal(true);
                setTitle(i);
              }}
            >
              {글제목[i]}
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
        );
      })}
      {modal == true ? <Modal title={title} 글제목={글제목} /> : null}
    </div>
  );

  function Modal(props) {
    return (
      <div className="modal">
        <h4>{props.글제목[props.title]}</h4>
        <p>날짜</p>
        <p>상세내용</p>
        <button>글수정</button>
      </div>
    );
  }
}
export default App;

/* <button onClick={orderTitle}>가나다순으로 정렬하기</button> */

// function orderTitle() {

//   let newOrder = [...title].sort();
//   setTitle(newOrder);
// }
/* <button
        onClick={() => {
          let copy = [...title];
          copy[0] = "여자 코트 추천";
          setTitle(copy);
        }}
      >
        글수정
      </button> */
//ㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡ
/* <div className="list">
        <h4>
          {title[0]}
          <span
            onClick={() => {
              따봉변경(따봉 + 1);
            }}
          >
            
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
        <h4
          onClick={() => {
            setModal(true);
          }}
        >
          {title[2]}
        </h4>
        <p>2월 17일 발행</p>
      </div> */
//ㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡ
//return()안에는 병룔로
//태그 2개 이상 기입금지
//map //1. array 자료 갯수만큼 함수안의 코드 실행해줌
//2. 함수의 파라미터는 array안에 있던 자료임
//3. return에 뭐 적으면 array로 담아줌
//함수는 return문 밖에서 사용
