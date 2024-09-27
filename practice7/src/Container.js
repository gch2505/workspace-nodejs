import { useState } from "react";
import TrComponent from "./TrComponent";

const Container = () => {
  // input의 내용을 받아오는 state
  const [newTodo, setNewTodo] = useState("");

  // 더미 데이터
  let todoArr = [
    { _id: "todo0001", title: "할 일 1", done: false },
    { _id: "todo0002", title: "할 일 2", done: false },
    { _id: "todo0003", title: "할 일 3", done: false },
  ];

  // list 내용 state
  const [todoList, setTodoList] = useState(todoArr);
  // ID state
  const [todoID, setTodoID] = useState(4);

  function toggleTodo(_id) {
    const idx = todoList.findIndex((list) => {
      return list._id === _id;
    });
    if (idx != -1) {
      const newTodoList = [...todoList];
      newTodoList[idx].done = !newTodoList[idx].done;
      setTodoList(newTodoList);
    }
  }

  function renderList() {
    return todoList.map((list) => {
      return (
        <TrComponent
          key={list._id}
          list={list}
          todoList={todoList}
          toggleTodo={toggleTodo}
          setTodoList={setTodoList}
        />
      );
    });
  }

  function addNewTodo() {
    let newTodoList = [
      ...todoList,
      { _id: "todo000" + todoID, title: newTodo, done: false },
    ];
    setTodoList(newTodoList);
    setTodoID(todoID + 1);
    setNewTodo("");
  }


  return (
    <div id="container">
      <div className="d-flex align-items-center justify-content-center m-2">
        <input
          type="text"
          id="newTodo"
          value={newTodo}
          className="form-control d-inline-block col-10 mr-2"
          placeholder="해야 할 일을 적어주세요."
          onChange={(e) => {
            setNewTodo(e.target.value);
          }}
        />
        <button id="addBtn" className="btn btn-dark" onClick={addNewTodo}>
          추가
        </button>
      </div>
      <table className="table table-striped">
        <thead>
          <tr>
            <th style={{ width: "37px" }}></th>
            <th colSpan={2}>할 일 목록</th>
          </tr>
        </thead>
        <tbody>
          {/* tr td 생성하는 함수 만들기 */}
          {renderList()}
        </tbody>
      </table>
    </div>
  );
};

export default Container;
