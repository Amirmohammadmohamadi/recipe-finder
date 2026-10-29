"use client"
import { MouseEventHandler } from "react";
import styles from "./card.module.scss";
import Link from "next/link";
import { TiHeartOutline } from "react-icons/ti";
import { useFav } from "@/context/favoriteContext";

export type CardPropType = {
    image: string;
    title: string;
    href: string;
    id: number;
    onClick?: MouseEventHandler;
    favClick?: MouseEventHandler;
}

export type ItemType = Omit<CardPropType,"onClick"> & {id:string};

const Card = ({image , title  , href , id , onClick , favClick}:CardPropType) => {

    const {state:favList} =useFav();

    const existInFav = (id:number) => {
        const result = favList.find(i => Number(i.id) === id);
        if(result) return true;
        return false;
    }

    return <div className={styles.cardContainer} onClick={onClick}>
        <div className={styles.imageWrapper}>
            <img src={image}/>
        </div>
        <h2>{title}</h2>
        <Link href={href} className={styles.link}>Cook ►</Link>
        <div className={styles.faviorateButton} onClick={favClick}>
            <TiHeartOutline size={10} fill={existInFav(id) ? "red" : "transparent"}/>
        </div>
    </div>
};

export default Card;