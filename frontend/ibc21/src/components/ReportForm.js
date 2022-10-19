import { useState } from "react";
import { createReport } from "../utils/CreateReport";
import "./styles.css";

export default function Form() {
  const [inputs, setInputs] = useState({});

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const { report, error } = await createReport(inputs);
      if (error) throw error;
    } catch (err) {
      console.error(err);
    }
  };
  const handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;

    setInputs((prevState) => ({ ...prevState, [name]: value }));
  };

  return (
    <fieldset>
      <form onSubmit={handleSubmit}>
        <label>
          Name:
          <input type="text" name="name" onChange={handleChange} />
        </label>

        <label>
          Phone:(Optional)
          <input type="number" name="phone" onChange={handleChange} />
        </label>

        <label>
          email:(optional)
          <input name="email" onChange={handleChange} />
        </label>
        <label>
          Category:
          <input type="text" name="Category" onChange={handleChange} />
        </label>
        <label>
          Location:
          <input type="text" name="coordinates" onChange={handleChange} />
        </label>
        <label>
          Image:
          <input type="text" name="image" onChange={handleChange} />
        </label>
        <label>
          Title:
          <input name="title" onChange={handleChange} />
        </label>
        <label>
          Description:
          <textarea name="description" onChange={handleChange}></textarea>
        </label>

        <button>Submit</button>
      </form>
      <legend>
        <h1>Report an Issue</h1>
      </legend>
    </fieldset>
  );
}
