import { useState } from "react";
import "./Input.css";

const Input = ({ appendCarData }) => {
  const [name, setName] = useState("");
  const [price, setPrice] = useState(undefined);
  const [company, setCompany] = useState("");
  const [year, setYear] = useState(undefined);
  return (
    <div className="container">
      <div className="input-group">
        <div className="input-group-prepend">
          <span
            className="input-group-text"
            style={{ borderBottomLeftRadius: "0" }}
          >
            Name
          </span>
        </div>
        <input
          type="text"
          className="form-control"
          placeholder="name"
          value={name}
          onChange={(e) => {
            setName(e.target.value);
          }}
          style={{ borderBottomRightRadius: "0" }}
        />
      </div>
      <div className="input-group">
        <div className="input-group-prepend">
          <span className="input-group-text" style={{ borderRadius: "0" }}>
            Price
          </span>
        </div>
        <input
          type="text"
          className="form-control"
          placeholder="price"
          value={price}
          onChange={(e) => {
            setPrice(e.target.value);
          }}
          style={{ borderRadius: "0" }}
        />
      </div>
      <div className="input-group">
        <div className="input-group-prepend">
          <span className="input-group-text" style={{ borderRadius: "0" }}>
            Company
          </span>
        </div>
        <input
          type="text"
          className="form-control"
          placeholder="company"
          value={company}
          onChange={(e) => {
            setCompany(e.target.value);
          }}
          style={{ borderRadius: "0" }}
        />
      </div>
      <div className="input-group mb-3">
        <div className="input-group-prepend">
          <span
            className="input-group-text"
            style={{ borderTopLeftRadius: "0" }}
          >
            Year
          </span>
        </div>
        <input
          type="text"
          className="form-control"
          placeholder="year"
          value={year}
          onChange={(e) => {
            setYear(e.target.value);
          }}
          style={{ borderTopRightRadius: "0" }}
        />
      </div>
      <div>
        <button
          id="saveBtn"
          className="btn btn-primary mr-2"
          onClick={(e) => {
            const newCarData = { name, price, company, year };
            appendCarData(newCarData);

            setName("");
            setPrice("");
            setCompany("");
            setYear("");
          }}
        >
          SAVE
        </button>
      </div>
    </div>
  );
};

export default Input;
