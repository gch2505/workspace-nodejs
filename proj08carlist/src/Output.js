import Caritem from "./Caritem";

const Output = ({ carList, showDetail, modifyCarData, RemoveCarData }) => {
  function makeRow() {
    return carList.map((car) => {
      return (
        <Caritem
          key={car._id}
          car={car}
          showDetail={showDetail}
          modifyCarData={modifyCarData}
          RemoveCarData={RemoveCarData}
        />
      );
    });
  }
  return (
    <div className="container">
      <h2>Car List</h2>
      <p>차 리스트</p>
      <table className="table table-striped">
        <thead>
          <tr>
            <th>NO</th>
            <th>NAME</th>
            <th>PRICE</th>
            <th>YEAR</th>
          </tr>
        </thead>
        <tbody>
          {/* tr을 반복문/forEach로 실행 */}
          {makeRow()}
        </tbody>
      </table>
    </div>
  );
};

export default Output;
