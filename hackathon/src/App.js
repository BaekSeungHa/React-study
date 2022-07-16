import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

function App() {
  let post = "대구 라면 맛집";
  let [글제목, b] = useState('남자 셔츠 추천');

  let num = [1, 2, 3];
  return (
  <div className="App">
    <div className="black-nav">
    <h4>블로그임</h4>
    </div>
    <div className="list">
      <h4>{ 글제목 }</h4>
      <p>7월 16일 발행</p>
    </div>   
  </div>
);
}

export default App;
//return()안에는 병룔로
//태그 2개 이상 기입금지