"use client"
import styles from "./resultPage.module.scss";
import Card from "@/components/card";
import CustomButton from "@/components/customButton";
import { useList } from "@/context/listContext";
import { ListType } from "@/types";

const resultPage = () => {
    const { list } = useList();
    console.log("list:",list);
    
    return <div className={styles.resultPageContainer}>
        {list?.length ? <div className={styles.listWrapper}>
        <div className={styles.listRender}>
          {list.map((item:ListType) => 
            <Card 
              image={item.image}
              title={item.title}
              key={item.id}
              href={`/resultPage/${item.id}`}
            />
        )}
        </div>
        {/* <CustomButton title="Show more" onClick={()=> setNumber(prev => prev+12)}/> */}
      </div> : null
    }
    </div>
};

export default resultPage;