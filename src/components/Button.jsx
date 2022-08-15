import React from "react";

const Button = React.memo(
  ({ onClick, type, className, children, ...props }) => {
    return (
      <button
        onClick={onClick}
        className={`btn btn-${type} ${className}`}
        {...props}
      >
        {children}
      </button>
    );
  }
);

export default Button;
