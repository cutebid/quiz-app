import  {useState, useRef } from "react";

function Start({setUserName }) {
  const inputRef = useRef();
  const [errorMessage, seterrorMessage] = useState('')
  const [border, setBorder] = useState()
  const borderStyle = {
    border: '1px solid red'
  }
  const handleClick = () => {
        if (
          inputRef.current.value === "" ||
          !/^[a-zA-Z]*$/g.test(inputRef.current.value)
        ) {
          
          seterrorMessage("please enter a name");
          setBorder(borderStyle)
        } else {
          return setUserName(inputRef.current.value);
        }
  }
  return (
    <div className="start">
      <p> {errorMessage} </p>
      <input
        type="text"
        placeholder="please enter your name"
        className="start"
        ref={inputRef}
        style = {border}
      />
      <button
        className="classBtn"
        onClick={
             handleClick // inputRef.current.value && setUserName(inputRef.current.value)
        }
      >
        Start
      </button>
    </div>
  );
}

export default Start;
 


// put time for each questions
// responsiveness
// 