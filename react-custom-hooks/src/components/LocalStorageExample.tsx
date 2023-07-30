import { ChangeEvent, useState } from "react";

function LocalStorageExample() {
  const [text, setText] = useState(() => {
    const saved_text = localStorage.getItem("input_text");
    return saved_text ? saved_text : "";
  });

  function handleChange(e: ChangeEvent<HTMLInputElement>) {
    setText(e.target.value);
    localStorage.setItem("input_text", e.target.value);
  }

  return (
    <div>
      <input type="text" value={text} onChange={handleChange} />
    </div>
  );
}

export default LocalStorageExample;
