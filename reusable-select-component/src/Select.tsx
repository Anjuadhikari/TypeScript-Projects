import { useState } from "react";
import styles from "./selectmodule.module.css";

type SelectOption = {
  label: string;
  value: string;
};

type SelectProps = {
  options: SelectOption[];
  value: SelectOption;
  onChange: (value: SelectOption | undefined) => void;
};

export default function Select({ value, onChange, options }: SelectProps) {
  const [isOpen, setIsOpen] = useState(false);

  const handleSelect = (option: SelectOption) => {
    onChange(option);
    setIsOpen(false); // close dropdown
  };

  return (
    <div className={styles.container}>
      <div className={styles.dropdown}>
        <div
          className={styles.selected}
          onClick={() => setIsOpen((prev) => !prev)}
        >
          {value.label}
          <span className={styles.arrow}>{isOpen ? "▲" : "▼"}</span>
        </div>

        {isOpen && (
          <div className={styles.options}>
            {options.map((option) => (
              <div
                key={option.value}
                className={styles.option}
                onClick={() => handleSelect(option)}
              >
                {option.label}
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
