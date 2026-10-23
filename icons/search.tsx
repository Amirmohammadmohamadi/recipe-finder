import { IconPropType } from "@/types";
import { IoMdSearch } from "react-icons/io";

const SearchIcon = ({color, size}:IconPropType) => {
    return <div className="hover:cursor-pointer">
            <IoMdSearch 
                size={size} 
                fill={color}
            />
        </div>
};

export default SearchIcon;