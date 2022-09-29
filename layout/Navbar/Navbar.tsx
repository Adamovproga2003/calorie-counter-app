import React from "react";
import { NavbarProps } from "./Navbar.props";
import styles from "./Navbar.module.css";
import cn from "classnames";
import WeightIcon from './weight.svg';
import { AiFillHome, AiOutlineRise, AiOutlineAim } from 'react-icons/ai';
import { BsFillCalendarWeekFill } from "react-icons/bs";
import { RiContactsFill } from "react-icons/ri";
import LogOutIcon from "./exit.svg";
import Link from "next/link";
import { useRouter } from "next/router";

const Navbar = ({ className }: NavbarProps): JSX.Element => {

    const router = useRouter();

    return <div className={cn(className, styles.navBar)}>
        <div>
            <WeightIcon className={styles.weightIcon} />
        </div>
        <nav>
            <ul>
                <li>

                    <Link href="/">
                        <button className={router.pathname == "/" ? styles.active : ""}>
                            <AiFillHome />
                        </button>
                    </Link>
                </li>
                <li>
                    <Link href="/progression">
                        <button className={router.pathname == "/progression" ? styles.active : ""}>
                            <AiOutlineRise />
                        </button>
                    </Link>
                </li>
                <li>
                    <Link href="/goals">
                        <button className={router.pathname == "/goals" ? styles.active : ""}>
                            <AiOutlineAim />
                        </button>
                    </Link>
                </li>
                <li>
                    <Link href="/calendar">
                        <button className={router.pathname == "/calendar" ? styles.active : ""}>
                            <BsFillCalendarWeekFill />
                        </button>
                    </Link>
                </li>
                <li>
                    <Link href="/profile">
                        <button className={router.pathname == "/profile" ? styles.active : ""}>
                            <RiContactsFill />
                        </button>
                    </Link>
                </li>
            </ul>
        </nav>
        <div className={styles.logOut}>
            <button>
                <LogOutIcon />
            </button>
        </div>
    </div >;
};

export default Navbar;
