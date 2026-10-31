"use client";
import { useEffect, useState } from "react";
import styles from "./itemId.module.scss";
import { useParams } from "next/navigation";
import { API_KEY, Faviorate_Storage } from "@/constants";
import { AnalyzedInstructionsSteps, ItemType } from "@/types";
import IngredientCard from "@/components/ingredientCard";
import { PiTimerLight , PiCookingPotLight } from "react-icons/pi";
import { LuHeartPulse } from "react-icons/lu";
import CustomButton from "@/components/customButton";
import { useList } from "@/context/listContext";
import { GoBookmarkFill , GoBookmarkSlashFill  } from "react-icons/go";

const itemDetail = () => {
    const params = useParams();
    const [item,setItem] = useState<ItemType | null>(null);
    const { list:{ favItems } , setList} = useList();

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
    },[]);

    const existInFav = (id:number | undefined) => {
        if(id===undefined) return null;
        else {
            const result = favItems.find(i => i.id === id);
            if(result) return true;
            return false;
        }
    };

    const handleClick = () => {
        const exist = existInFav(item?.id);
        if(exist) {
            setList(prev => ({...prev , favItems:favItems.filter(i => i.id !==item?.id)}));
        } else {
            setList(prev => ({...prev , favItems:[...favItems,{id:item?.id ?? 0 , title:item?.title ?? "" , image:item?.image ?? ""}]}))
        }
    };

    useEffect(()=> {
        localStorage.setItem(Faviorate_Storage,JSON.stringify(favItems));
    },[favItems])

    const topInfoData = [
        { title: "prep time".toUpperCase() , info:`${item?.preparationMinutes} mins` , icon:<PiTimerLight fill="balck" size={15}/> , iconBgColor:"#ffdbd0"},
        { title: "cook time".toUpperCase() , info:`${item?.cookingMinutes} mins` , icon:<PiCookingPotLight fill="balck" size={15}/> , iconBgColor:"#ffdcbf"},
        { title: "health score".toUpperCase() , info:item?.healthScore , icon:<LuHeartPulse fill="balck" size={15}/> , iconBgColor:"#aceec4"},
    ];

    return <div className={styles.iteminfromationWrapper}>
        <div className={styles.title}>
            <h1>{item?.title}</h1>
            <p dangerouslySetInnerHTML={{__html:item?.instructions ?? ""}}></p>
        </div>
        <div className={styles.favButtonWrapper}>
            <CustomButton 
                title={!existInFav(item?.id) 
                ? ["Save to Favorites",<GoBookmarkFill size={15} fill="white"/>] 
                : ["unsave from Favorites",<GoBookmarkSlashFill size={15} fill="white"/>]} 
                onClick={handleClick}
            />
            </div>
        <div className={styles.topInfo}>
            {topInfoData.map(item =>
                <div className={styles.cardWrapper}>
                    <div className={styles.iconWrapper} style={{backgroundColor:`${item.iconBgColor}`}}>
                        {item.icon}
                    </div>
                    <div className={styles.cardInfo}>
                        <p className={styles.title}>{item.title}</p>
                        <p className={styles.info}>{item.info}</p>
                    </div>
                </div>
            )}
        </div>
        <div className={styles.imageWrapper}>
            <img src={item?.image} alt={item?.title} />
        </div>
        <p className={styles.summary} dangerouslySetInnerHTML={{__html:item?.summary ?? ""}}></p>
        <div className={styles.downInfo}>
        <div className={styles.ingredients}>
                <h2>Ingredients</h2>
                <div className={styles.ingredientsContainer}>
                    {item?.extendedIngredients?.map(i => 
                        <IngredientCard 
                            material={i.name}
                            measure={Number(i.amount).toFixed(1)}
                            unit={i.unit}
                            key={i.id}
                        />
                    )}
                </div>
            </div>
            
            <div className={styles.analyzedInstructions}>
                {item?.analyzedInstructions?.[0].steps?.map((step:AnalyzedInstructionsSteps) => 
                    <div className={styles.stepWrapper}>
                        <div className={styles.topSection}>
                            <div className={styles.stepNumber}>{step.number}</div>
                            <p className={styles.stepTitle}>{step.step}</p>
                        </div>
                        <div className={styles.midSection}>
                            {step.equipment.length ? <div className={styles.equipment}>
                                <p>Equipments:</p>
                                {step.equipment.map((e:{name:string}) => <div className={styles.detail}>{e.name}</div>)}
                            </div> : null}
                            {step.ingredients.length ? <div className={styles.Stepingredients}>
                                <p>Ingredients:</p>
                                {step.ingredients.map(i => <div className={styles.detail}>{i.name}</div>)}
                            </div> : null}
                        </div>
                    </div>
                )}
            </div>
        </div>
    </div>
};  

export default itemDetail;