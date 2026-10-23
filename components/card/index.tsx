"use client"
import { MouseEventHandler } from "react";
import styles from "./card.module.scss";
import Link from "next/link";

export type CardPropType = {
    image: string;
    title: string;
    href: string;
    onClick?: MouseEventHandler;
}

export type ItemType = Omit<CardPropType,"onClick"> & {id:string};

const Card = ({image , title  , href , onClick}:CardPropType) => {
    return <div className={styles.cardContainer} onClick={onClick}>
        <div className={styles.imageWrapper}>
            <img src={image}/>
        </div>
        <h2>{title}</h2>
        <Link href={href} className={styles.link}>Cook ►</Link>
    </div>
};

export default Card;