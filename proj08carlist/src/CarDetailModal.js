const CarDetailModal = ({ modalData }) => {
  //   if (!modalData || modalData._id === null) {
  //     return null; // modalData가 없으면 아무것도 렌더링하지 않음
  //   }
  return (
    <div className="modal fade" id="detailModal">
      <div className="modal-dialog">
        <div className="modal-content">
          {/* <!-- Modal Header --> */}
          <div className="modal-header">
            <h4 className="modal-title">상세정보</h4>
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
                  <td>{modalData.name}</td>
                </tr>
                <tr>
                  <th>PRICE</th>
                  <td>{modalData.price}</td>
                </tr>
                <tr>
                  <th>COMPANY</th>
                  <td>{modalData.company}</td>
                </tr>
                <tr>
                  <th>YEAR</th>
                  <td>{modalData.year}</td>
                </tr>
              </tbody>
            </table>
          </div>

          {/* <!-- Modal footer --> */}
          <div className="modal-footer">
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
  );
};

export default CarDetailModal;
