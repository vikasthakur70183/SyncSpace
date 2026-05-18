import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useLocation, useNavigate } from "react-router";
import { loginUser, selectAuth } from "../../store/authSlice";
import styles from "./LoginPage.module.css";

function LoginPage() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const location = useLocation();
  const { error, isAuthenticated, status } = useSelector(selectAuth);
  const [credentials, setCredentials] = useState({
    email: "alex.rivera@syncspace.io",
    password: "",
  });

  const isSigningIn = status === "loading";
  const redirectTo = location.state?.from?.pathname || "/dashboard";

  useEffect(() => {
    if (isAuthenticated) {
      navigate(redirectTo, { replace: true });
    }
  }, [isAuthenticated, navigate, redirectTo]);

  const handleChange = (event) => {
    const { name, value } = event.target;
    setCredentials((currentCredentials) => ({
      ...currentCredentials,
      [name]: value,
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    dispatch(loginUser(credentials));
  };

  return (
    <main className={styles.page}>
      <div className={styles.accentPrimary} aria-hidden="true" />
      <div className={styles.accentSecondary} aria-hidden="true" />

      <div className={styles.shell}>
        <section className={styles.brandSection} aria-label="SyncSpace welcome">
          <div className={styles.brandName}>SyncSpace</div>
          <h1 className={styles.heroTitle}>
            Where ideas find their <span>rhythm.</span>
          </h1>
          <p className={styles.heroCopy}>
            Join a high-velocity environment built for creative teams to
            collaborate, iterate, and ship faster than ever.
          </p>

          <div className={styles.presence}>
            <div className={styles.avatarStack} aria-hidden="true">
              <span className={styles.avatarOne}>JD</span>
              <span className={styles.avatarTwo}>AS</span>
              <span className={styles.avatarThree}>MR</span>
            </div>
            <span>+12 teammates are online</span>
          </div>
        </section>

        <section className={styles.formSection} aria-labelledby="signin-title">
          <div className={styles.panel}>
            <div className={styles.panelLogo} aria-hidden="true">
              <span className="material-symbols-outlined">sync</span>
              <span>SyncSpace</span>
            </div>

            <header className={styles.panelHeader}>
              <h2 id="signin-title">Welcome back</h2>
              <p>Access your workspace to continue collaborating.</p>
            </header>

            <form
              className={`${styles.form} ${isSigningIn ? styles.formLoading : ""}`}
              aria-disabled={isSigningIn}
              onSubmit={handleSubmit}
            >
              <div className={styles.field}>
                <label className={styles.label} htmlFor="email">
                  Email Address
                </label>
                <div className={styles.inputWrap}>
                  <span className={`material-symbols-outlined ${styles.leftIcon}`} aria-hidden="true">
                    alternate_email
                  </span>
                  <input
                    className={styles.input}
                    id="email"
                    name="email"
                    onChange={handleChange}
                    readOnly={isSigningIn}
                    required
                    type="email"
                    value={credentials.email}
                  />
                </div>
              </div>

              <div className={styles.field}>
                <div className={styles.passwordHeader}>
                  <label className={styles.label} htmlFor="password">
                    Password
                  </label>
                  <span>Forgot?</span>
                </div>
                <div className={styles.inputWrap}>
                  <span className={`material-symbols-outlined ${styles.leftIcon}`} aria-hidden="true">
                    lock
                  </span>
                  <input
                    className={styles.input}
                    id="password"
                    name="password"
                    onChange={handleChange}
                    placeholder="Enter your password"
                    readOnly={isSigningIn}
                    required
                    type="password"
                    value={credentials.password}
                  />
                </div>
              </div>
              {error ? <p className={styles.errorMessage}>{error}</p> : null}

              <div className={styles.keepSignedIn}>
                <span className={styles.checkBox}>
                  <span className="material-symbols-outlined" aria-hidden="true">
                    check
                  </span>
                </span>
                <span>Stay signed in for 30 days</span>
              </div>
              <button
                className={`${styles.processingButton} ${isSigningIn ? styles.isLoading : ""}`}
                disabled={isSigningIn || !credentials.email || !credentials.password}
                type="submit"
                aria-busy={isSigningIn}
              >
                {isSigningIn ? <span className={styles.spinner} aria-hidden="true" /> : null}
                <span>{isSigningIn ? "Signing in..." : "Sign In"}</span>
                {!isSigningIn ? (
                  <span className="material-symbols-outlined" aria-hidden="true">
                    login
                  </span>
                ) : null}
              </button>
            </form>

            <div
              className={`${styles.socialArea} ${isSigningIn ? styles.socialLoading : ""}`}
              aria-disabled={isSigningIn}
            >
              <div className={styles.divider}>
                <span>Or continue with</span>
              </div>
              <div className={styles.socialGrid}>
                <button className={styles.socialButton} disabled type="button">
                  <span className={styles.googleIcon} aria-hidden="true">
                    G
                  </span>
                  <span>Google</span>
                </button>
                <button className={styles.socialButton} disabled type="button">
                  <span className="material-symbols-outlined" aria-hidden="true">
                    terminal
                  </span>
                  <span>GitHub</span>
                </button>
              </div>
            </div>

            <p className={styles.invitePrompt}>
              Don&apos;t have an account? <Link to="/">Sign up and register</Link>
            </p>
          </div>
        </section>
      </div>

      <div className={styles.statusPills} aria-hidden="true">
        <div className={styles.statusPill}>
          <span className={styles.statusDot} />
          <span>System Normal</span>
        </div>
        <div className={styles.statusPill}>
          <span className="material-symbols-outlined">verified_user</span>
          <span>End-to-End Encrypted</span>
        </div>
      </div>
    </main>
  );
}

export default LoginPage;
