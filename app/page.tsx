"use client";
import CustomInput from "@/components/customInput";
import styles from "./homePage.module.scss";
import { useRouter } from "next/navigation";
import { API_KEY, List_Storage } from "@/constants";
import { useSearchValue } from "@/context/searchContext";
import { useList } from "@/context/listContext";

export default function Home() {
  const {state:inputValue,setState:setInputValue} = useSearchValue();
  const { list , setList } = useList();
  const router = useRouter();

  console.log("list:",list);
  const buttonClickHandler = async () => {
    if(!inputValue) return;

    try {
      const res = await fetch(`https://api.spoonacular.com/recipes/complexSearch?query=${inputValue}&number=100&apiKey=${API_KEY}`)
      const data = await res.json();

      if(data.results.length) {
        setList(prev => ({...prev , items:data.results}));
        sessionStorage.setItem(List_Storage,JSON.stringify(data.results));
        router.push("/resultPage");
      }
    } catch(err) {
      console.error("error in fetching data from server in main page.");
    }
  }

  return (
    <div className={styles.mainWrapper}>
      <CustomInput type="text" 
      placeholder="search foods or ingredints here" 
      value={inputValue}
      onChange={e => setInputValue(e.target.value)}
      onClick={() => setInputValue("")}
      buttonOnClick={() => buttonClickHandler()}
    />
    </div>
  );
}

