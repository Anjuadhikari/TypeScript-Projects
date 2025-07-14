import styles from "./selectmodule.module.css";
type SelectOption = {
  label: string;
  value: string;
};

type SelectProps = {
  options: SelectOption[];
  value: SelectOption;
  onChange: (value: SelectOption) => void;
};

export default function Select({ value, onChange, options }: SelectProps) {
  return (
    <div className={styles.container}>
      <select 
        value={value.value}
        onChange={(e) => {
          const selected = options.find(
            (option: SelectOption) => option.value === e.target.value
          );
          if (selected) {
            onChange(selected);
          }
        }}
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
