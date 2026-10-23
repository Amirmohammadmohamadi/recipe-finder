import { IconPropType } from "@/types";
import { RxCross2 } from "react-icons/rx";

const CrossIcon = ({size , color}:IconPropType) => {
    return <RxCross2 size={size} fill={color} />
};

export default CrossIcon