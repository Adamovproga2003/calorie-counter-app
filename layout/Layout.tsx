import { FunctionComponent } from 'react';
import { LayoutProps } from './Layout.props';
import styles from './Layout.module.css';
import Header from './Header/Header';
import Navbar from './Navbar/Navbar';
import Main from './Main/Main';

const Layout = ({ children }: LayoutProps): JSX.Element => {
    return (
        <div className={styles.wrapper}>
            <Header className={styles.header} />
            <Navbar className={styles.navbar} />
            <Main className={styles.main}>
                {children}
            </Main>
        </div>
    );
};

export default Layout;
