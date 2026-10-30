"use client"
import { useFav } from "@/context/favoriteContext";
import styles from "./favPage.module.scss";
import Card from "@/components/card";

const favPage = () => {

    const { state:favList } = useFav();

    if(!favList.length) {
        return <div className="min-h-screen w-full flex items-center justify-center">
            <h2 className={styles.emptyList}>You have not registered any item as favorite</h2>
        </div>
    }
    return <div className={styles.favPageContainer}>
        {favList.map(i => 
            <Card 
                image={i.image}
                title={i.title}
                key={i.id}
                href={`/resultPage/${i.id}`}
                favButtonState={false}
                item={i}
            />
        )}
    </div>
};

export default favPage;