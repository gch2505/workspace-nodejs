function Input({ btnState, startEnd }) {
  return (
    <>
      <button
        onClick={function (e) {
          btnState();
        }}
        id="startEndBtn"
      >
        {startEnd}
      </button>
      &nbsp;
      <button id="reset">Reset</button>
    </>
  );
}

export default Input;
