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
    { label: "Alpine.js", value: "alpine" },
    { label: "Solid.js", value: "solid" },
    { label: "Inferno", value: "inferno" },
    { label: "Mithril", value: "mithril" },
    { label: "Stimulus", value: "stimulus" },
  ];

  const [selected, setSelected] = useState(options[0]);

  return (
    <div>
      <h2 style={{ textAlign: "center", marginTop: "5px" }}>
        Choose a Framework
      </h2>
      <Select
        options={options}
        value={selected}
        onChange={(option) => {
          if (option) setSelected(option);
        }}
      />
    </div>
  );
}

export default App;
