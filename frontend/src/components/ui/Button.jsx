import styles from "./Button.module.css";

function Button({ children, icon, className = "", type = "button", ...buttonProps }) {
  return (
    <button className={`${styles.button} ${className}`} type={type} {...buttonProps}>
      <span>{children}</span>
      {icon ? (
        <span className={`material-symbols-outlined ${styles.icon}`} aria-hidden="true">
          {icon}
        </span>
      ) : null}
    </button>
  );
}

export default Button;
