import { BsGrid3X3GapFill } from "react-icons/bs";
import { FaList } from "react-icons/fa6";


export default function Toogler({ mod, setMod }) {
    const color1 = mod === 'line' ? '#3D8EDA' : '#C8C7C7';
    const color2 = mod === 'grid' ? '#3D8EDA' : '#C8C7C7';


    return (
        <div className="ml-auto flex gap-3 cursor-pointer">
            <FaList color={color1} size={24} onClick={()=> setMod('line')} />
            <BsGrid3X3GapFill color={color2} size={24} onClick={()=> setMod('grid')} />
        </div>
    );
}

