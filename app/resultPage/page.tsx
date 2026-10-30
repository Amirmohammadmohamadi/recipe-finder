"use client"
import styles from "./resultPage.module.scss";
import Card from "@/components/card";
import CustomButton from "@/components/customButton";
import { Faviorate_Storage } from "@/constants";
import { useList } from "@/context/listContext";
import { ListItemType } from "@/types";
import { useEffect, useState } from "react";

const resultPage = () => {
    const { list:{items:listItems , favItems} } = useList();
    const [number,setNumber] = useState(12);


    const handleClick = () => {
      setNumber(prev => prev+12);
    };
    
    useEffect(()=> {
      localStorage.setItem(Faviorate_Storage,JSON.stringify(favItems));
    },[favItems]);
    
    return <div className={styles.resultPageContainer}>
        {listItems?.length ? <div className={styles.listWrapper}>
        <div className={styles.listRender}>
          {listItems.slice(0,number).map((item:ListItemType) => 
            <Card 
              image={item.image}
              title={item.title}
              key={item.id}
              href={`/resultPage/${item.id}`}
              item={item}
              favButtonState={true}
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