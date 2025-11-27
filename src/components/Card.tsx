import { IoHeart } from "react-icons/io5";
import { BsChatRightFill } from "react-icons/bs";


export default function Card({ item, mod }) {
    if (mod === 'grid') return (
        <div
            className="bg-white shadow-sm rounded p-1 flex flex-col items-stretch"
        >
            <img
                src={item.img}
                alt=""
                className="rounded object-cover"
            />

            <div className="flex p-2">
                <div className="flex flex-col flex-1 justify-between">
                    <div className="font-medium text-sm">
                        Today
                    </div>
                    <div className="flex-col text-gray-600 text-sm">
                        <span className="flex items-center gap-1"><IoHeart size={18} /> {item.likes[0]}</span>
                        <span className="flex items-center gap-1 mt-1"><BsChatRightFill className="p-[1.5px]" size={18} /> {item.comments[0]}</span>
                    </div>
                </div>

                <div className="flex flex-col flex-1 justify-between">
                    <div className="font-medium whitespace-nowrap text-sm">
                        { item.date }
                    </div>
                    <div className="flex-col text-gray-600 text-sm mt-1">
                        <span className="flex items-center gap-1"><IoHeart size={18} /> {item.likes[1]}</span>
                        <span className="flex items-center gap-1 mt-1"><BsChatRightFill className="p-[1.5px]" size={18} /> {item.comments[1]}</span>
                    </div>
                </div>
            </div>
            <div className="text-xs flex text-gray-700 mt-2 gap-2 px-2">
                <div className="font-medium">
                    Image upload
                </div>
                <div>{item.upload}</div>
            </div>
        </div>
    );

    return (
        <div
            className="bg-white shadow-sm rounded mb-4 flex gap-4 items-stretch"
        >
            <img
                src={item.img}
                alt=""
                className="w-24 h-24 rounded object-cover mr-6"
            />

            <div className="flex flex-col flex-1 my-auto">
                <div className="font-medium">
                    Today
                </div>

                <div className="flex gap-4 text-gray-600 text-sm mt-1">
                    <span><IoHeart size={18} /> {item.likes[0]}</span>
                    <span><BsChatRightFill className="p-[1.5px]" size={18} /> {item.comments[0]}</span>
                </div>
            </div>

            <div className="flex flex-col flex-1 text-sm text-gray-700 my-auto">
                <div className="font-medium">
                    { item.date }
                </div>
                <div className="flex gap-4 text-gray-600 text-sm mt-1">
                    <span><IoHeart size={18} /> {item.likes[1]}</span>
                    <span><BsChatRightFill className="p-[1.5px]" size={18} /> {item.comments[1]}</span>
                </div>
            </div>

            <div className="flex flex-col flex-1 text-sm text-gray-700 my-auto">
                <div className="font-medium">
                    Image upload
                </div>
                <div className="mt-2">
                    { item.upload }
                </div>
            </div>
        </div>
    );
}