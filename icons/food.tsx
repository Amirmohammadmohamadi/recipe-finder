import { IconPropType } from "@/types";
import { LuSoup } from "react-icons/lu";

const FoodIcon = ({size , color}:IconPropType) => {
    return <LuSoup size={size} fill={color}/>
};

export default FoodIcon;