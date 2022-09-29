import React from "react";
import { MainProps } from "./Main.props";
import styles from "./Main.module.css";
import cn from "classnames";

const Main = ({ className, children }: MainProps): JSX.Element => {
    return <div className={cn(className, styles.main)}>
        {children}
    </div>;
};

export default Main;
