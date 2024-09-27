import "./App.css";
import CarDeleteModal from "./CarDeleteModal";
import CarDetailModal from "./CarDetailModal";
import CarModifyModal from "./CarModifyModal";
import Input from "./Input";
import Output from "./Output";
import { useState } from "react";

const App = () => {
  let carArr = [
    {
      _id: 1,
      name: "SONATA",
      price: 2500,
      company: "HYUNDAI",
      year: 2021,
    },
    {
      _id: 2,
      name: "GRANDEUR",
      price: 3500,
      company: "HYUNDAI",
      year: 2023,
    },
    {
      _id: 3,
      name: "K9",
      price: 2500,
      company: "HYUNDAI",
      year: 2019,
    },
    {
      _id: 4,
      name: "BMW",
      price: 4500,
      company: "HYUNDAI",
      year: 2018,
    },
  ];
  const [carList, setCarList] = useState(carArr);
  const [seqId, setSeqId] = useState(5);
  const [modalData, setModalData] = useState({
    _id: -1,
    name: "#",
    price: -1,
    company: "#",
    year: -1,
  });

  const appendCarData = (newCarData) => {
    newCarData._id = seqId;
    setSeqId(seqId + 1);
    console.log(newCarData, seqId);
    setCarList([...carList, newCarData]);
  };
  const showDetail = (car) => {
    setModalData(car);
  };
  const modifyCarData = (car) => {
    setModalData(car);
  };
  const RemoveCarData = (car) => {
    setModalData(car);
  };
  const modifyOk = (modifyCarData) => {
    console.log(">>> modifyOk:", modifyCarData);
    const idx = carList.findIndex((car) => {
      return car._id === modifyCarData._id;
    });
    if (idx != -1) {
      const newList = [...carList];
      newList[idx] = modifyCarData;
      setCarList(newList);
    }
  };

  return (
    <div className="App">
      <div className="App-header">
        <h1>가을을 남기고 간 사랑</h1>
      </div>
      <Input appendCarData={appendCarData} />
      <hr />
      <Output
        carList={carList}
        showDetail={showDetail}
        modifyCarData={modifyCarData}
        RemoveCarData={RemoveCarData}
      />

      <CarDetailModal modalData={modalData} />
      <CarModifyModal modalData={modalData} modifyOk={modifyOk} />
      <CarDeleteModal modalData={modalData} />
    </div>
  );
};

export default App;
