function Input({ handler, greeting }) {
  return (
    <>
      <button onClick={handler}>확인</button>
      <p>{greeting}</p>
    </>
  );
}

export default Input;
