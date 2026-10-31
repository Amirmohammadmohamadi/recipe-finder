"use client"
import { MouseEventHandler, useEffect, useState } from "react";
import styles from "./card.module.scss";
import Link from "next/link";
import { TiHeartOutline } from "react-icons/ti";
import { useList } from "@/context/listContext";
import { ListItemType } from "@/types";
import { Faviorate_Storage } from "@/constants";

export type CardPropType = {
    image: string;
    title: string;
    href: string;
    item: ListItemType;
    favButtonState: boolean;
    onClick?: MouseEventHandler;
}

export type ItemType = Omit<CardPropType,"onClick"> & {id:string};

const Card = ({image , title  , href , onClick , item , favButtonState}:CardPropType) => {

    const { list:{ favItems } , setList } = useList();
    const [ state, setState] = useState(false);

    const handleFavClick = (id:number) => {
        setState(prev => {
            if(!prev) {
                setList(prev => ({...prev , favItems:[...favItems,item]}));
            }else {
                existInFav(id) ? setList(prev => ({...prev , favItems: favItems.filter(i=> i.id!==id)}))
                : null;
            }
            localStorage.setItem(Faviorate_Storage,JSON.stringify(favItems));
            return !prev
        });
    };

    const existInFav = (id:number) => {
        const result = favItems.find(i => i.id === id);
        if(result) return true;
        return false;
    }

    return <div className={styles.cardContainer} onClick={onClick}>
        <div className={styles.imageWrapper}>
            <img src={image}/>
        </div>
        <h2>{title}</h2>
        <div className={styles.link}><Link href={href} style={{position:"absolute",bottom:"10px",right:"10px"}}>Cook►</Link></div>
        {favButtonState ? <div className={styles.faviorateButton} onClick={() => handleFavClick(item.id)}>
             <TiHeartOutline size={15} fill={existInFav(item?.id) ? "red" : "black"}/>
        </div> : null}
    </div>
};

export default Card;