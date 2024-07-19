import React, { useState } from "react";

const messages = [
  "Learn React ⚛️",
  "Apply for jobs 💼",
  "Invest your new income 🤑",
];

let App = () => {
  // Desctructring array
  let [open, setOpen] = useState(true);
  const [step, setStep] = useState(1);

  function handlePrevious() {
    if (step > 1) {
      // setStep(step - 1);
      // When we're not setting state based on the current state, we can use the other way mentioned above
      // Better way
      // Always use a call rather than calling current state variable
      setStep((curStep) => curStep - 1);
      return;
    }
  }
  function handleNext() {
    if (step <= 2) {
      // setStep(step + 1);
      // When we're not setting state based on the current state, we can use the other way mentioned above
      // Better way
      // Always use a call rather than calling current state variable
      setStep((curStep) => curStep + 1);
      return;
    }
  }

  function closeSteps() {
    if (open === true) {
      setOpen(false);
    } else {
      setOpen(true);
    }
  }
  return (
    <>
      {open && (
        <div className="steps">
          <div className="numbers">
            <div className={step === 1 ? "active" : ""}>1</div>
            <div className={step === 2 ? "active" : ""}>2</div>
            <div className={step === 3 ? "active" : ""}>3</div>
          </div>
          <p className="message">
            Step {step}: {messages[step - 1]}
          </p>
          <Buttons
            handlePrevious={handlePrevious} handleNext={handleNext} next={"Next"} previous={"Previous"}
          />
        </div>
      )}
      <button onClick={closeSteps} className="close">
        &times;
      </button>
    </>
  );
};

function Buttons({handlePrevious,handleNext,previous,next}) {
  return (
    <div className="buttons">
      <button
        onClick={handlePrevious}
        style={{ backgroundColor: "#7950f2", color: "#fff" }}
      >
        {previous}
      </button>
      <button
        onClick={handleNext}
        style={{ backgroundColor: "#7950f2", color: "#fff" }}
      >
        {next}
      </button>
    </div>
  );
}
export default App;
