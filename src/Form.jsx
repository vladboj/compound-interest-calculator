function Form() {
  const formElements = [
    {
      id: "initialInvestment",
      label: "Initial Investment",
    },
    {
      id: "monthlyContribution",
      label: "Monthly Contribution",
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
    <form>
      {formElements.map((element) => (
        <div className="form-child">
          <label htmlFor={element.id}>{element.label}</label>
          <input id={element.id} />
        </div>
      ))}
      <input type="button" value="CALCULATE" />
    </form>
  );
}

export default Form;
