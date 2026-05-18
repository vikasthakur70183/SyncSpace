import { Navigate, Outlet, useLocation, useNavigate } from "react-router";
import { useDispatch, useSelector } from "react-redux";
import { logout, selectAuth } from "../store/authSlice";
import styles from "./ProtectedLayout.module.css";

function ProtectedLayout() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const location = useLocation();
  const { isAuthenticated, user } = useSelector(selectAuth);

  const handleLogout = () => {
    dispatch(logout());
    navigate("/login", { replace: true });
  };

  if (!isAuthenticated) {
    return <Navigate to="/login" replace state={{ from: location }} />;
  }

  return (
    <div className={styles.layout}>
      <header className={styles.header}>
        <div className={styles.brand}>
          <span className="material-symbols-outlined" aria-hidden="true">
            sync
          </span>
          <span>SyncSpace</span>
        </div>

        <div className={styles.account}>
          <span>{user?.email || "Signed in"}</span>
          <button className={styles.logoutButton} type="button" onClick={handleLogout}>
            <span className="material-symbols-outlined" aria-hidden="true">
              logout
            </span>
          </button>
        </div>
      </header>

      <Outlet />
    </div>
  );
}

export default ProtectedLayout;
