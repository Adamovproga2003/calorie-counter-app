import type { NextPage } from "next";
import styles from "../styles/HomePage.module.css";
import Header from "../layout/Header/Header";
import Navbar from "../layout/Navbar/Navbar";
import Main from "../layout/Main/Main";

const Home: NextPage = () => {
  return (
    <div className={styles.homePage}>
      <Header className={styles.header} />
      <Navbar className={styles.navbar} />
      <Main className={styles.main} />
    </div>
  );
};

export default Home;
