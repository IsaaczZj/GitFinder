import { Outlet } from "react-router";
import Seach from "./Components/Seach/Seach";
import styles from "./App.module.css";
function App() {
  return (
    <div className={styles.app}>
      <h1>GitFinder</h1>
      <Outlet />
    </div>
  );
}

export default App;
