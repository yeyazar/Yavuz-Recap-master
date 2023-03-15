import { useState } from "react";

const UseStateObject = () => {
  const [person, setPerson] = useState({
    name: "Aga",
    surname: "Veli",
    salary: 10000,
  });

  const handleSalaryInc = () => {
    setPerson({ ...person, salary: person.salary + 500 });
  };
  const handleSalaryDec = () => {
    setPerson({ ...person, salary: person.salary - 500 });
  };

  return (
    <div className="container text-center mt-4">
      <h2 className="text-danger">Use State Counter</h2>
      <h3 className="display-4">
        {person.name} {person.surname}
      </h3>
      <h3 className="display-6">Salary:{person.salary}</h3>
      <button onClick={handleSalaryInc} className="btn btn-success">
        Salary Inc
      </button>
      <button
        onClick={() =>
          setPerson({ ...person, name: "no_name", surname: "no_surname" })
        }
        className="btn btn-danger"
      >
        CLR
      </button>
      <button onClick={handleSalaryDec} className="btn btn-warning">
        Salary Dec
      </button>
    </div>
  );
};

export default UseStateObject;
