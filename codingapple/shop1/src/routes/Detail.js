import { useEffect, useState } from "react";
import { Nav } from "react-bootstrap";
import { useParams } from "react-router-dom";
import styled from "styled-components";

function Detail(props) {
  let { id } = useParams();
  let 찾은상품 = props.shoes.find((x) => x.id == id);
  let [count, setCount] = useState(0);
  let [alert, setAlert] = useState(true);
  let [탭, 탭변경] = useState(2);

  useEffect(() => {
    let a = setTimeout(() => {
      setAlert(false);
    }, 2000);
    return () => {
      clearTimeout(a);
    };
  }, []);

  return (
    <div className="container">
      {alert == true ? (
        <div className="alert alert-warning">2초이내 구매시 할인</div>
      ) : null}

      <div className="row">
        <div className="col-md-6">
          <img
            src="https://codingapple1.github.io/shop/shoes1.jpg"
            width="100%"
          />
        </div>

        <div className="col-md-6">
          <h4 className="pt-5">{props.shoes[id].title}</h4>
          <p>{props.shoes[id].content}</p>
          <p>{props.shoes[id].price}원</p>
          <button className="btn btn-danger">주문하기</button>
        </div>
      </div>

      <Nav variant="tabs" defaultActiveKey="link0">
        <Nav.Item>
          <Nav.Link
            onClick={() => {
              탭변경(0);
            }}
            eventKey="link0"
          >
            이상호
          </Nav.Link>
        </Nav.Item>

        <Nav.Item>
          <Nav.Link
            onClick={() => {
              탭변경(1);
            }}
            eventKey="link1"
          >
            김민교
          </Nav.Link>
        </Nav.Item>

        <Nav.Item>
          <Nav.Link
            onClick={() => {
              탭변경(2);
            }}
            eventKey="link2"
          >
            수찬갓
          </Nav.Link>
        </Nav.Item>
      </Nav>
      <TabContent 탭={탭} />
    </div>
  );
}

function TabContent({ 탭 }) {
  let [fade, setFade] = useState("");
  let [fade1, setFade1] = useState("");
  useEffect(() => {
    setTimeout(() => {
      setFade1("end");
    }, 10);
    return () => {
      setFade1("");
    };
  }, [탭]);
  useEffect(() => {
    setTimeout(() => {
      setFade("end");
    });
    return () => {
      setFade("");
    };
  }, []);
  return (
    <>
      <div className={"start" + fade}>
        {[<div> 내용0</div>, <div>내용1</div>, <div>내용2</div>][탭]}
      </div>
      <div className={"container start" + fade1}>
        <div>Loading...</div>
      </div>
    </>
  );
}

export default Detail;
