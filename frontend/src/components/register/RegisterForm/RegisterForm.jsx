import { useState } from "react";
import { Link } from "react-router";
import { AuthApi } from "../../../Api/Auth";
import Button from "../../ui/Button";
import InputField from "../../ui/InputField";
import { REGISTER_FIELDS } from "../../../shared/constants/registerFields";
import styles from "./RegisterForm.module.css";

const initialFormState = REGISTER_FIELDS.reduce((values, field) => {
  values[field.name] = "";
  return values;
}, {});

const authApi = new AuthApi();

function RegisterForm() {
  const [formData, setFormData] = useState(initialFormState);
  const [status, setStatus] = useState("idle");
  const [message, setMessage] = useState("");
  const isSubmitting = status === "loading";

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((currentData) => ({
      ...currentData,
      [name]: value,
    }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    setStatus("loading");
    setMessage("");

    try {
      const response = await authApi.register({
        username: formData.fullName,
        email: formData.email,
        password: formData.password,
      });

      setStatus("succeeded");
      setMessage(response?.message || "Account created successfully.");
      setFormData(initialFormState);
    } catch (error) {
      setStatus("failed");
      setMessage(error.message || "Unable to create account.");
    }
  };

  return (
    <form className={styles.form} onSubmit={handleSubmit}>
      <div className={styles.fields}>
        {REGISTER_FIELDS.map((field) => (
          <InputField
            key={field.id}
            value={formData[field.name]}
            onChange={handleChange}
            disabled={isSubmitting}
            required
            {...field}
          />
        ))}
      </div>

      {message ? (
        <p className={status === "failed" ? styles.errorMessage : styles.successMessage}>
          {message}
        </p>
      ) : null}

      <div className={styles.ctaWrap}>
        <Button disabled={isSubmitting} icon={isSubmitting ? "sync" : "arrow_forward"} type="submit">
          {isSubmitting ? "Creating account..." : "Get Started Free"}
        </Button>
      </div>

      <label className={styles.consent} htmlFor="terms">
        <input className={styles.checkbox} disabled={isSubmitting} id="terms" type="checkbox" required />
        <span>
          I agree to the <Link to="/terms">Terms of Service</Link> and{" "}
          <Link to="/privacy">Privacy Policy</Link>.
        </span>
      </label>
    </form>
  );
}

export default RegisterForm;
