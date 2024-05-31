const Button = ({ title, onClick, variant, disabled, fullwidth, type }) => {
  let className = "bg-primary p-1 text-white";

  if (fullwidth) {
    className += " w-full";
  }
  if (variant === "outlined") {
    className = className.replace(
      "bg-primary",
      "border border-primary text-primary bg-white"
    );
  }

  return (
    <button
      className={className}
      type={type}
      onClick={onClick}
      disabled={disabled}
    >
      {title}
    </button>
  );
};

import PropTypes from "prop-types";

Button.propTypes = {
  title: PropTypes.string.isRequired,
  onClick: PropTypes.func,
  variant: PropTypes.oneOf(["primary", "outlined"]),
  disabled: PropTypes.bool,
  fullwidth: PropTypes.bool,
  type: PropTypes.string,
};

export default Button;
