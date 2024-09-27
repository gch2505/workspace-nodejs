import { useState, useEffect } from "react";

const CarModifyModal = ({ modalData, modifyOk }) => {
  const [carName, setName] = useState(modalData.name);
  const [carPrice, setPrice] = useState(modalData.price);
  const [carCompany, setCompany] = useState(modalData.company);
  const [carYear, setYear] = useState(modalData.year);

  const resetData = () => {
    setName("#");
    setPrice(-1);
    setCompany("#");
    setYear(-1);
  };

  return (
    <>
      <div className="modal fade" id="modifyModal">
        <div className="modal-dialog">
          <div className="modal-content">
            {/* <!-- Modal Header --> */}
            <div className="modal-header">
              <h4 className="modal-title">자동차 정보 수정</h4>
              <button type="button" className="close" data-dismiss="modal">
                ×
              </button>
            </div>

            {/* <!-- Modal body --> */}
            <div className="modal-body">
              <table>
                <tbody>
                  <tr>
                    <th>ID</th>
                    <td>{modalData._id}</td>
                  </tr>
                  <tr>
                    <th>NAME</th>
                    <td>
                      <input
                        type="text"
                        value={carName == "#" ? modalData.name : carName}
                        onChange={(e) => {
                          setName(e.target.value);
                        }}
                      ></input>
                    </td>
                  </tr>
                  <tr>
                    <th>PRICE</th>
                    <td>
                      <input
                        type="text"
                        value={carPrice == -1 ? modalData.price : carPrice}
                        onChange={(e) => {
                          setPrice(e.target.value);
                        }}
                      ></input>
                    </td>
                  </tr>
                  <tr>
                    <th>COMPANY</th>
                    <td>
                      <input
                        type="text"
                        value={
                          carCompany == "#" ? modalData.company : carCompany
                        }
                        onChange={(e) => {
                          setCompany(e.target.value);
                        }}
                      ></input>
                    </td>
                  </tr>
                  <tr>
                    <th>YEAR</th>
                    <td>
                      <input
                        type="text"
                        value={carYear == -1 ? modalData.year : carYear}
                        onChange={(e) => {
                          setYear(e.target.value);
                        }}
                      ></input>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>

            {/* <!-- Modal footer --> */}
            <div className="modal-footer">
              <button
                onClick={(e) => {
                  const _id = modalData._id;
                  modifyOk({
                    _id,
                    name: carName,
                    price: carPrice,
                    company: carCompany,
                    year: carYear,
                  });
                  resetData();
                }}
                type="button"
                className="btn btn-primary"
                data-dismiss="modal"
              >
                수정완료
              </button>
              <button
                type="button"
                className="btn btn-danger"
                data-dismiss="modal"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default CarModifyModal;
