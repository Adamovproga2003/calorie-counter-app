import React from "react";
import styles from "./Header.module.css";
import { HeaderProps } from "./Header.props";
import WeightIcon from "./weight.svg";
import SearchIcon from "./search.svg";
import NotifyIcon from "./notification.svg";
import ArrowDownIcon from "./arrow-down.svg";
import Image from "next/image";
import cn from "classnames";
import { AiFillNotification } from "react-icons/ai";

const Header = ({ className }: HeaderProps): JSX.Element => {
    return (
        <header className={cn(className, styles.header)}>
            <div className={styles.greetingBlock}>
                <div className={styles.goodBlock}>
                    <span className={cn(styles.bold, styles.sm)}>Good Afternoon</span>
                </div>
                <div className={cn(styles.welcomeBlock, styles.md)}>Welcome Back</div>
            </div>
            <div className={styles.wrapper}>
                <div className={styles.relative}>
                    <label htmlFor="search">
                        <SearchIcon className={styles.searchIcon} />
                    </label>
                    <input type="text" placeholder="Search" className={styles.searchInput} id="search" />
                </div>
                <div className={styles.wrapperBlock}>
                    <div className={styles.remindBlock}>
                        <button className={styles.notifyButton}>
                            <AiFillNotification />
                        </button>
                    </div>
                    <button className={styles.userButton}>
                        <Image
                            src="https://images.pexels.com/photos/719396/pexels-photo-719396.jpeg?cs=srgb&dl=pexels-gabriel-peter-719396.jpg&fm=jpg"
                            alt="avatar"
                            width={100}
                            height={100}
                        />
                        <label>Smith Adam</label>
                        <ArrowDownIcon className={styles.arrowDownIcon} />
                    </button>
                </div>
            </div>
        </header>
    );
};

export default Header;
