import type { NextPage } from "next";
import styles from "../styles/HomePage.module.css";
import Layout from "../layout/Layout";

const CalendarPage: NextPage = () => {
    return (
        <Layout>
            <div className={styles.calendarPage}>
                Calendar Page
            </div>
        </Layout>
    );
};

export default CalendarPage;
