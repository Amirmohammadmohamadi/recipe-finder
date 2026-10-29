"use client"
import styles from "./resultPage.module.scss";
import Card from "@/components/card";
import CustomButton from "@/components/customButton";
import { useFav } from "@/context/favoriteContext";
import { useList } from "@/context/listContext";
import { ListType } from "@/types";
import { useState } from "react";

const resultPage = () => {
    const { list } = useList();
    const [number,setNumber] = useState(12);
    const {state:favList , setState:setFavList} = useFav();

    console.log("list:",list);

    const handleClick = () => {
      setNumber(prev => prev+12);
    };

    const handleFavClick = (item:ListType) => {
      setFavList(prev => [...prev,item]);
    }
    
    return <div className={styles.resultPageContainer}>
        {list?.length ? <div className={styles.listWrapper}>
        <div className={styles.listRender}>
          {list.slice(0,number).map((item:ListType) => 
            <Card 
              image={item.image}
              title={item.title}
              key={item.id}
              href={`/resultPage/${item.id}`}
              id={item.id}
              favClick={()=>handleFavClick(item)}
            />
        )}
        </div>
      </div> : null
    }
    <CustomButton 
      title="Show More..." 
      variant="secondery" 
      onClick={() => handleClick()}
    />
    </div>
};

export default resultPage;