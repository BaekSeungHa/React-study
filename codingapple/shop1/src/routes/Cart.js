import { Table } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { increase } from "../store/userSlice";
import { addCount } from "./../store";

function Cart() {
  let a = useSelector((state) => state.user);
  let dispatch = useDispatch();
  console.log(a);
  let b = useSelector((state) => state.cart);
  console.log(b[0].name);

  return (
    <div>
      <h6>
        {a.name}
        {a.age}의 장바구니
      </h6>

      <button
        onClick={() => {
          dispatch(increase(100));
        }}
      >
        버튼
      </button>

      <Table>
        <thead>
          <tr>
            <th>#</th>
            <th>상품명</th>
            <th>수량</th>
            <th>변경하기</th>
          </tr>
        </thead>
        <tbody>
          {b.map((a, i) => (
            <tr key={i}>
              <td>1</td>
              <td>{b[i].name}</td>
              <td>{b[i].count}</td>
              <td>안녕</td>
              <td>
                <button
                  onClick={() => {
                    dispatch(addCount(b[i].id));
                  }}
                >
                  +
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
    </div>
  );
}

export default Cart;
