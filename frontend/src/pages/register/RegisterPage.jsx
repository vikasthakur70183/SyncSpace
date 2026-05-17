import { Link } from "react-router";
import RegisterForm from "../../components/register/RegisterForm/RegisterForm";
import styles from "./RegisterPage.module.css";

function RegisterPage() {
  return (
    <main className={styles.page}>
      <div className={styles.mesh} aria-hidden="true" />
      <div className={styles.shell}>
        <section className={styles.brandPanel} aria-label="SyncSpace introduction">
          <div className={`${styles.brandMark} ${styles.entranceOne}`}>
            <span className={styles.brandIcon}>
              <span className="material-symbols-outlined" aria-hidden="true">
                sync
              </span>
            </span>
            <span>SyncSpace</span>
          </div>

          <div className={styles.brandMain}>
            <h1 className={`${styles.title} ${styles.entranceTwo}`}>
              Where ideas find{" "}
              <span className={styles.glowText}>their structure.</span>
            </h1>
            <p className={`${styles.copy} ${styles.entranceThree}`}>
              Accelerate your team's creative flow with our precision-engineered
              collaborative workspace.
            </p>

            <div className={`${styles.visualization} ${styles.entranceThree}`} aria-hidden="true">
              <div className={styles.visualGlow} />
              <div className={styles.workspaceCards}>
                <div className={`${styles.workspaceCard} ${styles.cardSmall} ${styles.floatOne}`}>
                  <div className={styles.cardPill} />
                  <div className={styles.cardBlock} />
                  <div className={styles.avatarStack}>
                    <span className={styles.avatarCoral} />
                    <span className={styles.avatarCyan} />
                  </div>
                </div>

                <div className={`${styles.workspaceCard} ${styles.cardLarge} ${styles.floatTwo}`}>
                  <div className={styles.cardHeaderLine}>
                    <span className="material-symbols-outlined" aria-hidden="true">
                      bolt
                    </span>
                    <div className={styles.cardPillWide} />
                  </div>
                  <div className={styles.chartBlock}>
                    <span className="material-symbols-outlined" aria-hidden="true">
                      bar_chart
                    </span>
                  </div>
                  <div className={styles.progressRows}>
                    <span />
                    <span />
                    <span />
                  </div>
                </div>

                <div className={`${styles.workspaceCard} ${styles.cardSmall} ${styles.floatThree}`}>
                  <div className={styles.chatBubble}>
                    <span className="material-symbols-outlined" aria-hidden="true">
                      chat
                    </span>
                  </div>
                  <div className={styles.cardBlockSmall} />
                  <div className={styles.cardLine} />
                </div>
              </div>
            </div>
          </div>

          <div className={`${styles.socialProof} ${styles.entranceThree}`}>
            <div className={styles.avatarGroup} aria-hidden="true">
              <span className={styles.userOne}>AR</span>
              <span className={styles.userTwo}>MJ</span>
              <span className={styles.userMore}>+2k</span>
            </div>
            <div>
              <p>Trusted by world-class teams</p>
              <span>Join the collaborative elite</span>
            </div>
          </div>
        </section>

        <section className={styles.formSection} aria-labelledby="register-title">
          <div className={`${styles.card} ${styles.entranceTwo}`}>
            <div className={styles.cardAccent} aria-hidden="true" />
            <header className={styles.cardHeader}>
            <h2 className={styles.cardTitle} id="register-title">
              Create Account
            </h2>
            <p className={styles.cardText}>
              Start collaborating in seconds. No card required.
            </p>
            </header>

            <RegisterForm />

            <div className={styles.formFooter}>
              <div className={styles.divider} />
              <p className={styles.loginPrompt}>
                Already have an account?{" "}
                <Link className={styles.loginLink} to="/login">
                  Sign In
                </Link>
              </p>
              <div className={styles.securityBadge}>
                <span className="material-symbols-outlined" aria-hidden="true">
                  verified_user
                </span>
                <span>Enterprise Security Standard</span>
              </div>
            </div>
          </div>
        </section>
      </div>

      <footer className={styles.mobileFooter}>
        <p>© 2024 SyncSpace Industries</p>
      </footer>
    </main>
  );
}

export default RegisterPage;
