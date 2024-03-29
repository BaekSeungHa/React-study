import { createContext, useEffect, useState } from "react";
import { Navbar, Container, Nav } from "react-bootstrap";
import "./App.css";
import data from "./data";
import { Routes, Route, Link, useNavigate } from "react-router-dom";
import Detail from "./routes/Detail";
import axios from "axios";
import Cart from "./routes/Cart";

function App() {
  let result = useQuery("작명", () =>
    axios.get(
      "https://codingapple1.github.io/userdata.json".then((a) => {
        return a.data;
      })
    )
  );
  useEffect(() => {
    localStorage.setItem("watched", JSON.stringify([]));
  }, []);

  let [shoes, setShoes] = useState(data);
  let [재고] = useState([10, 11, 12]);
  let navigate = useNavigate();
  let [count, setCount] = useState(1);
  return (
    <div className="App">
      <Navbar bg="lgiht" variant="light">
        <Container>
          <Navbar.Brand href="/">ABC Mart</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link
              onClick={() => {
                navigate(-1);
              }}
            >
              Home
            </Nav.Link>

            <Nav.Link
              onClick={() => {
                navigate("/cart");
              }}
            >
              Cart
            </Nav.Link>
          </Nav>
          <Nav className="ms-auto">h1</Nav>
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
                    return <Card shoes={shoes[i]} i={i} key={i}></Card>;
                  })}
                </div>
              </div>
              <button
                onClick={() => {
                  setCount(count + 1);
                  if (count === 1) {
                    axios
                      .get("https://codingapple1.github.io/shop/data2.json")
                      .then((결과) => {
                        let copy = [...shoes, ...결과.data];
                        setShoes(copy);
                      });
                  }
                }}
              >
                더보기
              </button>
            </>
          }
        />
        <Route path="/detail/:id" element={<Detail shoes={shoes} />} />
        <Route path="/about" element={<About />} />
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
    console.log(props.i);
    return (
      <div
        className="col-md-4"
        onClick={() => {
          navigate(`/detail/${props.i}`);
        }}
      >
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
