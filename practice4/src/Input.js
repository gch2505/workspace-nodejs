function Input({ handler, greeting }) {
  return (
    <>
      <button
        onClick={function (e) {
          handler();
        }}
      >
        확인
      </button>
      <p>{greeting}</p>
    </>
  );
}

export default Input;
