import SearchIcon from "@/icons/search";
import styles from "./customInput.module.scss";
import CustomButton from "../customButton";
import CrossIcon from "@/icons/cross";
import { MouseEventHandler } from "react";
import FoodIcon from "@/icons/food";

interface PropType {
    type: string;
    value?: string;
    onClick: MouseEventHandler;
    buttonOnClick?:MouseEventHandler;
    onChange?: (e:React.ChangeEvent<HTMLInputElement>)=>void;
    placeholder?: string;
}

const CustomInput = ({type="text" ,  onChange , value , placeholder , buttonOnClick , onClick}:PropType) => {
    return <div className={styles.inputContainer}>
        <div className={styles.leftSection}>
            <FoodIcon size={20} color="#aa3a09"/>
            <input type={type} onChange={onChange} value={value} placeholder={placeholder}/>
        </div>
        <div className={styles.rightSection}>
            {value && <div className={styles.crossWrapper} onClick={onClick}><CrossIcon size={12} color="#00000"/></div>}
            <CustomButton title={[<SearchIcon size={15} color="white"/>,"Find Recipes"]} onClick={buttonOnClick}/>
        </div>
    </div>
};

export default CustomInput;