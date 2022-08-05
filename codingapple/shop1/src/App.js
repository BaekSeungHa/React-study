import "./App.css";
import { Navbar, Container, Nav } from "react-bootstrap";
import { useState } from "react";
import data from "./data";
import { Routes, Route, Link } from "react-router-dom";
import Detail from "./routes/Detail";
import axios from "axios";
function App() {
  let [shoes] = useState(data);

  return (
    <div className="App">
      <Navbar bg="lgiht" variant="light">
        <Container className="main">
          <Navbar.Brand href="#home" className="home">
            ABC Mart
          </Navbar.Brand>
          <Nav.Link as={Link} to="/">
            Home
          </Nav.Link>
          <Nav.Link as={Link} to="/detail">
            Detail
          </Nav.Link>
        </Container>
      </Navbar>

      <Routes>
        <Route
          path="/"
          element={
            <>
              <div className="main-bg"></div>
              <div className="container">
                <div className="row">
                  {shoes.map((a, i) => {
                    return <Card shoes={shoes[i]} i={i}></Card>;
                  })}
                </div>
              </div>
              <button
                onClick={() => {
                  axios
                    .get("hㅁㄴㅇple1.github.io/shop/data2.json")
                    .then((data) => {
                      console.log(data.data);
                    })
                    .catch(() => {
                      console.log("실패함 ㅅㄱ");
                    });
                }}
              >
                서버값
              </button>
            </>
          }
        />
        <Route path="/detail/:id" element={<Detail shoes={shoes} />} />
      </Routes>
    </div>
  );

  function Card(props) {
    return (
      <div className="col-md-4">
        <img
          src={
            "https://codingapple1.github.io/shop/shoes" + (props.i + 1) + ".jpg"
          }
          width="80%"
        />
        <h5>{props.shoes.title}</h5>
        <p>{props.shoes.price}원</p>
      </div>
    );
  }
}

export default App;
