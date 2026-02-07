import { useState } from "react";
import "./LinkInput.scss";

function LinkInput() {
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(link);

    fetch("https://clc.is/api/links", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        domain: "clc.is",
        target_url: link,
      }),
    });
  };

  const [link, setValue] = useState("");

  const handleChange = (e) => {
    setValue(e.target.value);
  };

  return (
    <form className="link-input" onSubmit={handleSubmit}>
      <div className="link-input__container">
        <input
          className="link-input__input"
          onChange={handleChange}
          value={link}
          type="text"
          placeholder="Shorten a link here..."
        ></input>
        <input
          className="link-input__button"
          type="submit"
          value="Shorten it!"
        ></input>
      </div>
    </form>
  );
}

export default LinkInput;
