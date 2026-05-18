import styles from "./DashboardPage.module.css";

function DashboardPage() {
  return (
    <main className={styles.page}>
      <section className={styles.hero}>
        <p className={styles.eyebrow}>Protected Workspace</p>
        <h1>Welcome back to SyncSpace.</h1>
        <p>
          This dashboard is only available after login. Replace this shell with
          workspaces, channels, tasks, and team activity as those features come online.
        </p>
      </section>

      <section className={styles.grid} aria-label="Workspace overview">
        <article className={styles.panel}>
          <span className="material-symbols-outlined" aria-hidden="true">
            groups
          </span>
          <div>
            <h2>Team Presence</h2>
            <p>See active collaborators and workspace members.</p>
          </div>
        </article>
        <article className={styles.panel}>
          <span className="material-symbols-outlined" aria-hidden="true">
            task_alt
          </span>
          <div>
            <h2>Tasks</h2>
            <p>Track assigned work across your project rooms.</p>
          </div>
        </article>
        <article className={styles.panel}>
          <span className="material-symbols-outlined" aria-hidden="true">
            chat
          </span>
          <div>
            <h2>Channels</h2>
            <p>Keep conversations attached to the work they move forward.</p>
          </div>
        </article>
      </section>
    </main>
  );
}

export default DashboardPage;
