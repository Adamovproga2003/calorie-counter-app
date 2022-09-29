import type { NextPage } from "next";
import styles from "../styles/HomePage.module.css";
import Layout from "../layout/Layout";

const ProfilePage: NextPage = () => {
    return (
        <Layout>
            <div className={styles.profilePage}>
                Profile Page
            </div>
        </Layout>
    );
};

export default ProfilePage;
