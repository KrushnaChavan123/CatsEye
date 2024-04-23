import React, { useState } from "react";

function AgePredictor() {
  const [name, setName] = useState("");
  const [predictedAge, setPredictedAge] = useState("");
  const [ageColor, setAgeColor] = useState("");

  const handleGetAge = async () => {
    const response = await fetch(`https://api.agify.io/?name=${name}`);
    const data = await response.json();
    setPredictedAge(data.age);

    if (data.age >= 1 && data.age <= 30) {
      setAgeColor("green");
    } else if (data.age >= 31 && data.age <= 60) {
      setAgeColor("blue");
    } else {
      setAgeColor("red");
    }
  };

  return (
    <>
      <h4>Age Predictor</h4>
      <div className="box">
        <div className="section">
          <p>Please enter your name</p>
          <input
            type="text"
            className="form-control"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <button className="btn btn-primary mt-3" onClick={handleGetAge}>
            Get Age
          </button>
        </div>
        <div
          className="section age-section"
          style={{
            border: "3px solid black",
            textAlign: "center",
            color: ageColor,
            borderRadius: "9px"
          }}
        >
          <h4 style={{ color: "black" }}>Your Age is</h4>
          <p style={{ fontSize: 78 }}>{predictedAge}</p>
        </div>
      </div>
    </>
  );
}

export default AgePredictor;
