  import { useState } from "react";

  const App = () => {
    const [height, setHeight] = useState("");
    const [weight, setWeight] = useState("");
    const [result, setResult] = useState("");
    const calculateBMI = () => {
  if (!height || !weight) {
    setResult("Please enter both height and weight!");
    return;
  }

  const h = Number(height);
  const w = Number(weight);

  const heightInMeters = h / 100;
  const bmi = (w / (heightInMeters * heightInMeters)).toFixed(1);

  let category = "";
  if (+bmi < 18.5) category = "underweight";
  else if (+bmi < 25) category = "normal weight";
  else if (+bmi < 30) category = "overweight";
  else category = "obese";

  setResult(`Your BMI is ${bmi}: you are ${category}`);
};

    return (
      <div className="container">
        <h1>BMI calculator</h1>

        <label htmlFor="height">Height (cm) </label>
        <input type="number" id="height" placeholder="e. g 170 cm"
        value={height}
        onChange={(e)=>setHeight(e.target.value)} />

        <label htmlFor="weight">Weight (kg) </label>
        <input type="number" id="weight" placeholder="e. g 60 kg"
        value={weight}
        onChange={(e)=>setWeight(e.target.value)} />

        <button onClick={calculateBMI}>Calculate</button>

        <div className="result">{result}</div>
      </div>
    );
  };

  export default App;
