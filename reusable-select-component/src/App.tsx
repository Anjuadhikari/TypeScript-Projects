import { useState } from "react";
import Select from "./Select";
function App() {
  const options = [
    { label: "React", value: "react" },
    { label: "Vue", value: "vue" },
    { label: "Angular", value: "angular" },
    { label: "Svelte", value: "svelte" },
    { label: "Ember", value: "ember" },
    { label: "Backbone", value: "backbone" },
    { label: "Lit", value: "lit" },
    { label: "Preact", value: "preact" },
    { label: "Alpine", value: "alpine" },
    { label: "Solid", value: "solid" },
  ];
  const [selectedOption, setSelectedOption] = useState(options[0]);
  return (
    <div>
      <h1 style={{ textAlign: "center" }}>Choose a Framework</h1>
      <select
        value={selectedOption.value}
        onChange={(e) =>
          setSelectedOption(
            options.find((option) => option.value === e.target.value) || options[0]
          )
        }
      >
        {options.map((option) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
    </div>
  );
}

export default App;
