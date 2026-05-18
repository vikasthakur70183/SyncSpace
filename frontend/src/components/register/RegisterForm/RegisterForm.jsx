import { useState } from "react";
import { Link } from "react-router";
import Button from "../../ui/Button";
import InputField from "../../ui/InputField";
import { REGISTER_FIELDS } from "../../../shared/constants/registerFields";
import styles from "./RegisterForm.module.css";

const initialFormState = REGISTER_FIELDS.reduce((values, field) => {
  values[field.name] = "";
  return values;
}, {});

function RegisterForm() {
  const [formData, setFormData] = useState(initialFormState);

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((currentData) => ({
      ...currentData,
      [name]: value,
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log("Form submitted with data:", formData);
    setFormData(initialFormState);
  };

  return (
    <form className={styles.form} onSubmit={handleSubmit}>
      <div className={styles.fields}>
        {REGISTER_FIELDS.map((field) => (
          <InputField
            key={field.id}
            value={formData[field.name]}
            onChange={handleChange}
            required
            {...field}
          />
        ))}
      </div>

      <div className={styles.ctaWrap}>
        <Button icon="arrow_forward" type="submit">
          Get Started Free
        </Button>
      </div>

      <label className={styles.consent} htmlFor="terms">
        <input className={styles.checkbox} id="terms" type="checkbox" required />
        <span>
          I agree to the <Link to="/terms">Terms of Service</Link> and{" "}
          <Link to="/privacy">Privacy Policy</Link>.
        </span>
      </label>
    </form>
  );
}

export default RegisterForm;
