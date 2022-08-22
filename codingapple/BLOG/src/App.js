import "./App.css";
import React, { useState } from "react";

function App() {
  let [글제목, 글제목변경] = useState([
    "오우 저치기~",
    "외쳐 수찬갓",
    "쵸비우승",
  ]);

  let [따봉, 따봉변경] = useState([0, 0, 0]);
  let [modal, setModal] = useState(false);
  let [title, setTitle] = useState(0);
  let [입력값, 입력값변경] = useState("");

  return (
    <div className="App">
      <div className="black-nav">
        <h4>tech blog</h4>
      </div>
      <button
        onClick={() => {
          let copy = [...글제목];
          copy[0] = "역시이상호";
          글제목변경(copy);
        }}
      >
        역시이상호로 바꾸기
      </button>

      {글제목.map(function (a, i) {
        //글제목 갯수만큼 html생성
        return (
          <div className="list" key={i}>
            <h4
              onClick={() => {
                //제목 클릭시 모달을 i번째 modal을 띄워줌
                setModal(!modal);
                setTitle(i);
              }}
            >
              {글제목[i]}
              <span
                onClick={(e) => {
                  e.stopPropagation(); //상위html로 가는 랜더링을 막아준다
                  let copy = [...따봉]; //따봉 복사
                  copy[i] = copy[i] + 1; //복사한 i번째 따봉을 + 1해줌
                  따봉변경(copy);
                }}
              >
                👍
              </span>
              {따봉[i]}
            </h4>
            <p>8월3일</p>

            <button
              onClick={() => {
                //삭제
                let copy = [...글제목];
                copy.splice(i, 1); //splice는 삭제할 항목
                글제목변경(copy);
              }}
            >
              삭제
            </button>
          </div>
        );
      })}
      <input
        onChange={(e) => {
          입력값변경(e.target.value);
        }}
      />

      <button
        onClick={() => {
          let copy = [...글제목];
          copy.unshift(입력값);
          글제목변경(copy);
        }}
      >
        글발행
      </button>

      {modal === true ? <Modal title={title} 글제목={글제목} /> : null}
    </div>
  );

  //Modal state만들기
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
