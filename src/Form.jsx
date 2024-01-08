import { useState } from "react";

function Form() {
  const [resultToggled, setResultToggled] = useState(false);
  const [finalAmount, setFinalAmount] = useState(null);

  function computeFinalAmount(
    initialInvestment,
    interestRate,
    timeLength,
    compoundFrequency
  ) {
    const numberOfTimesCompoundedPerYear =
      compoundFrequency === "anually" ? 1 : 12;
    const finalAmount =
      initialInvestment *
      (1 + interestRate / numberOfTimesCompoundedPerYear) **
        (numberOfTimesCompoundedPerYear * timeLength);
    return Math.round(finalAmount * 100) / 100;
  }

  function handleCalculate() {
    // Fetch input values and convert them to numbers
    const inputs = document.querySelectorAll(".form-child > input");
    const inputValues = [];
    inputs.forEach((input) => inputValues.push(Number(input.value)));

    // Compute final sum of money after x years of compounding
    const initialInvestment = inputValues[0];
    const interestRate = inputValues[1] / 100;
    const timeLength = inputValues[2];

    const compoundFrequency =
      document.querySelector("#compoundFrequency").value;
    const finalAmount = computeFinalAmount(
      initialInvestment,
      interestRate,
      timeLength,
      compoundFrequency
    );

    // Trigger rerendering with the new result
    setResultToggled(true);

    // Set the final amonunt using state
    setFinalAmount(finalAmount);
  }

  const formElements = [
    {
      id: "initialInvestment",
      label: "Initial Investment",
    },
    {
      id: "interestRate",
      label: "Interest Rate",
    },
    {
      id: "timeLength",
      label: "Length of Time in Years",
    },
  ];

  return (
    <>
      <form>
        {formElements.map((element) => (
          <div className="form-child" key={element.id}>
            <label htmlFor={element.id}>{element.label}</label>
            <input id={element.id} />
          </div>
        ))}
        <div className="form-child">
          <label htmlFor="compoundFrequency">Compound Frequency</label>
          <select id="compoundFrequency">
            <option value="default">--Select Compound Frequency--</option>
            <option value="anually">Anually</option>
            <option value="monthly">Monthly</option>
          </select>
        </div>
        <input type="button" value="CALCULATE" onClick={handleCalculate} />
      </form>
      {/* Conditionally render the result */}
      {resultToggled && (
        <div className="result">
          <p>The final amount you will have is ${finalAmount}</p>
        </div>
      )}
    </>
  );
}

export default Form;
