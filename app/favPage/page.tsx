"use client"
import styles from "./favPage.module.scss";
import Card from "@/components/card";
import { GoBookmarkSlashFill } from "react-icons/go";
import { useList } from "@/context/listContext";
import { useEffect } from "react";
import { Faviorate_Storage } from "@/constants";

const favPage = () => {

    const {list:{favItems} , setList} = useList();

    const handleClick = (id:number) => {
        setList(prev => ({...prev , favItems:favItems.filter(i => i.id !== id)}))
    };

    useEffect(()=>{
        localStorage.setItem(Faviorate_Storage,JSON.stringify(favItems));
    },[favItems]);

    if(!favItems.length) {
        return <div className="min-h-screen w-full flex items-center justify-center">
            <h2 className={styles.emptyList}>You have not registered any item as favorite</h2>
        </div>
    }
    return <div className={styles.favPageContainer}>
        {favItems.map(i =>
        <div className={styles.cardWrapper}>
            <Card 
                image={i.image}
                title={i.title}
                key={i.id}
                href={`/resultPage/${i.id}`}
                favButtonState={false}
                item={i}
            />
            <div className={styles.unbookmarkWrapper} onClick={() => handleClick(i.id)}>
                <GoBookmarkSlashFill size={15} fill="black"/>
            </div>
        </div> 
        )}
    </div>
};

export default favPage;