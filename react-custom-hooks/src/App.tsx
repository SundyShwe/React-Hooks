import LocalStorageExample from "./components/LocalStorageExample";
import TimeoutExample from "./components/TimeoutExample";
import ToggleExample from "./components/ToggleExample";
const show_examples = {
  localstorage: true,
  timeout: false,
  toggle: false,
  array: false,
  debounce: false,
};
function App() {
  return (
    <>
      <div className="container">
        {show_examples.localstorage && <LocalStorageExample />}
        {show_examples.timeout && <TimeoutExample />}
        {show_examples.toggle && <ToggleExample />}
      </div>
    </>
  );
}

export default App;
