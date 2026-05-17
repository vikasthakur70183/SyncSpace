import styles from "./InputField.module.css";

function InputField({ id, label, icon, className = "", ...inputProps }) {
  return (
    <div className={`${styles.field} ${className}`}>
      <label className={styles.label} htmlFor={id}>
        {label}
      </label>
      <div className={styles.inputWrap}>
        <input className={styles.input} id={id} {...inputProps} />
        {icon ? (
          <span className={`material-symbols-outlined ${styles.icon}`} aria-hidden="true">
            {icon}
          </span>
        ) : null}
      </div>
    </div>
  );
}

export default InputField;
