import type { NextPage } from "next";
import styles from "../styles/HomePage.module.css";
import Layout from "../layout/Layout";

const GoalsPage: NextPage = () => {
    return (
        <Layout>
            <div className={styles.goalsPage}>
                Goals Page
            </div>
        </Layout>
    );
};

export default GoalsPage;
