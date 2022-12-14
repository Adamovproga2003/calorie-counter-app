import type { NextPage } from "next";
import styles from "../styles/HomePage.module.css";
import Layout from "../layout/Layout";

const Home: NextPage = () => {
    return (
        <Layout>
            <div className={styles.homePage}>
                Home Page
            </div>
        </Layout>
    );
};

export default Home;
