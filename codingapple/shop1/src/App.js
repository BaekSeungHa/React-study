import { createContext, useEffect, useState } from "react";
import { Navbar, Container, Nav } from "react-bootstrap";
import "./App.css";
import data from "./data";
import { Routes, Route, Link, useNavigate } from "react-router-dom";
import Detail from "./routes/Detail";
import axios from "axios";
import Cart from "./routes/Cart";

function App() {
  useEffect(() => {
    localStorage.setItem("watched", JSON.stringify([]));
  }, []);

  let obg = { name: "kim" };
  localStorage.setItem("data", JSON.stringify(obg));
  let 꺼낸거 = localStorage.getItem("data");
  console.log(꺼낸거);
  console.log(JSON.parse(꺼낸거).name);

  let [shoes, setShoes] = useState(data);
  let [재고] = useState([10, 11, 12]);
  let navigate = useNavigate();

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
                    .get("https://codingapple1.github.io/shop/data2.json")
                    .then((결과) => {
                      let copy = [...shoes, ...결과.data];
                      setShoes(copy);
                    });
                }}
              >
                더보기
              </button>
            </>
          }
        />
        <Route path="/detail/:id" element={<Detail shoes={shoes} />} />
        <Route path="/cart" element={<Cart />} />
      </Routes>
    </div>
  );

  function About() {
    return (
      <div>
        <h4>회사정보임</h4>
      </div>
    );
  }

  function Card(props) {
    let navigate = useNavigate();
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
