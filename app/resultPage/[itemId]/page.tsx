"use client";
import { useEffect, useState } from "react";
import styles from "./itemId.module.scss";
import { useParams } from "next/navigation";
import { API_KEY } from "@/constants";
import { ItemType } from "@/types";
import IngredientCard from "@/components/ingredientCard";

const itemDetail = () => {
    const params = useParams();
    const [item,setItem] = useState<ItemType | null>(null);

    useEffect(()=> {
        const fetching = async () => {
            try{
                const res = await fetch(`https://api.spoonacular.com/recipes/${params.itemId}/information?apiKey=${API_KEY}`);
                const data = await res.json();
                setItem(data);
                console.log("data:",data);
            } catch(err) {
                console.error("error in fetching the item information");
            }
        }
        fetching();
    },[])

    return <div className={styles.iteminfromationWrapper}>
        <div className={styles.title}>
            <h1>{item?.title}</h1>
            <p dangerouslySetInnerHTML={{__html:item?.summary ?? ""}}></p>
        </div>
        <div className={styles.imageWrapper}>
            <img src={item?.image} alt={item?.title} />
        </div>
        <div className={styles.ingredients}>
            <h2>Ingredients</h2>
            <div className={styles.ingredientsContainer}>
                {item?.extendedIngredients?.map(i => 
                    <IngredientCard 
                        img={i.name}
                        material={i.image}
                        measure={i.amount}
                        key={i.id}
                    />
                )}
            </div>
            <table className={styles.ingredientsTable}>
                <thead>
                    <tr>
                        <th>Material</th>
                        <th>Consistency</th>
                        <th>Measure</th>
                    </tr>
                </thead>
                <tbody>
                    {item?.extendedIngredients?.map(item => 
                        <tr key={item.id}>
                            <td>
                                {item.name}
                                <img src={item.image} alt={`${item.name}-image`} />
                            </td>
                            <td>{item.consistency}</td>
                            <td>{`${item.amount} ${item.unit}`}</td>
                        </tr>
                    )}
                </tbody>
            </table>
        </div>
    </div>
};  

export default itemDetail;