import { MouseEventHandler, ReactNode } from "react";
import styles from "./customButton.module.scss";

interface PropType {
    title: string | ReactNode;
    variant?: string;
    style?: string;
    onClick?: MouseEventHandler;
}

const CustomButton = ({title , variant="primary" , onClick , style }:PropType) => {
    return <div className={styles.buttonContainer} onClick={onClick}>
        <button className={`${styles[variant]} ${style}`}>{title}</button>
    </div>
};

export default CustomButton;