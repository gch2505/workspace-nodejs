const TrComponent = ({ list, todoList, setTodoList, toggleTodo }) => {
  return (
    <tr>
      <td className="align-middle">
        <input
          type="checkbox"
          id={list._id}
          onChange={(e) => {
            toggleTodo(list._id);
            console.log(list.done);
          }}
          checked={list.done && "checked"}
        />
      </td>
      <td className="col-8 align-middle">
        <label
          for={list._id}
          className="m-0"
          style={{
            textDecoration: list.done && "line-through",
            color: list.done && "#BBB",
          }}
        >
          {list.title}
        </label>
        <input type="text" className="form-control d-none col-10" />
      </td>
      <td className="col-4 text-center">
        <div className="d-flex justify-content-end">
          <button className="btn btn-warning mx-1">수정</button>
          <button
            className="btn btn-danger mx-1"
            onClick={(e) => {
              const newTodoList = todoList.filter((item) => {
                return list._id != item._id;
              });
              setTodoList(newTodoList);
            }}
          >
            삭제
          </button>
        </div>
      </td>
    </tr>
  );
};

export default TrComponent;
