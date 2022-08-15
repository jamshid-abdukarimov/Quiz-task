import React from "react";

const Select = React.memo(
  ({ title, data, defaultValue, onChange, className = "", ...props }) => {
    return (
      <>
        <label className="mb-1">{title}</label>
        <select
          defaultValue={defaultValue}
          className={`form-select ${className}`}
          onChange={onChange}
          {...props}
        >
          {data.map((d) => (
            <option key={d.id} value={d.id}>
              {d.label}
            </option>
          ))}
        </select>
      </>
    );
  }
);

export default Select;
