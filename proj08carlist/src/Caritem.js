const Caritem = ({ car, showDetail, modifyCarData, removeCarData }) => {
  // console.log(carList);
  const { _id, name, price, company, year } = car;
  return (
    <tr>
      <td>{_id}</td>
      <td>
        <button
          className="btn"
          onClick={(e) => {
            showDetail(car);
          }}
          data-toggle="modal"
          data-target="#detailModal"
        >
          {name}
        </button>
      </td>
      <td>{price}</td>
      <td>{year}</td>
      <td>
        <button
          className="btn btn-warning"
          onClick={(e) => {
            modifyCarData(car);
          }}
          data-toggle="modal"
          data-target="#modifyModal"
        >
          수정
        </button>
      </td>
      <td>
        <button
          className="btn btn-danger"
          onClick={(e) => {
            removeCarData(car);
          }}
          data-toggle="modal"
          data-target="#deleteModal"
        >
          삭제
        </button>
      </td>
    </tr>
  );
};

export default Caritem;
