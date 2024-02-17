// Import the styles module
import styles from "./login.module.css";

function Login() {
  return (
    <div className={styles.container}>
      <div className={styles.main}>Login</div>
      <div className={styles.inpo}>
        <input type="text" placeholder="Username"  className={styles.inpo}/>
      </div>
      <div className={styles.inpo}>
        <input type="password" placeholder="Password" className={styles.inpo}/>
      </div>
      <button className={styles.btn} type="submit">
        Login
      </button>
      <button className={styles.btn} type="submit">
        Sign-Up
      </button>
    </div>
  );
}

export default Login;
