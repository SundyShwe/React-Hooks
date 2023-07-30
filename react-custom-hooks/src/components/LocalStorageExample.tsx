import useLocalStorage from "../hooks/useLocalStorage";

function LocalStorageExample() {
  const [text, setText] = useLocalStorage("text_input", "");

  return (
    <div>
      <input
        type="text"
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
    </div>
  );
}

export default LocalStorageExample;
