import { useState } from "react";
const CarDeleteModal = ({ modalData }) => {
  const [carName, setName] = useState(modalData.name);
  const [carPrice, setPrice] = useState(modalData.name);
  const [carCompany, setCompany] = useState(modalData.company);
  const [carYear, setYear] = useState(modalData.year);

  //   if (!modalData || modalData._id === null) {
  //     return null; // modalData가 없으면 아무것도 렌더링하지 않음
  //   }
  return (
    <div className="modal fade" id="deleteModal">
      <div className="modal-dialog">
        <div className="modal-content">
          {/* <!-- Modal Header --> */}
          <div className="modal-header">
            <h4 className="modal-title">삭제</h4>
            <button type="button" className="close" data-dismiss="modal">
              ×
            </button>
          </div>

          {/* <!-- Modal body --> */}
          <div className="modal-body">
            <span>{modalData.name}의 정보를 삭제하시겠습니까?</span>
          </div>

          {/* <!-- Modal footer --> */}
          <div className="modal-footer">
            <button
              type="button"
              className="btn btn-primary"
              data-dismiss="modal"
            >
              예
            </button>
            <button
              type="button"
              className="btn btn-danger"
              data-dismiss="modal"
            >
              아니오
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CarDeleteModal;
