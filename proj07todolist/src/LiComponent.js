const LiComponent = ({
  todo,
  todoList,
  setTodoList,
  toggleTodo,
  editTitle,
}) => {
  return (
    <li>
      <input
        type="checkbox"
        onChange={(e) => {
          toggleTodo(todo._id);
        }}
        checked={todo.done && "checked"}
      />
      <span
        onClick={(e) => {
          editTitle(todo);
        }}
        style={{ textDecoration: todo.done && "line-through" }}
      >
        {todo.title}
      </span>
      <button
        onClick={(e) => {
          const newList = todoList.filter((item) => {
            return item._id != todo._id;
          });
          setTodoList(newList);
        }}
      >
        Delete
      </button>
    </li>
  );
};

export default LiComponent;
