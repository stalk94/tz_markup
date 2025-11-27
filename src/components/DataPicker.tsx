import React, { useRef } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { FaTimes, FaCalendarAlt } from "react-icons/fa";



export default function CustomDatePicker({ selected, onChange, placeholder }) {
    const datePickerRef = useRef(null);

    const handleClear = () => onChange(null);
    const handleOpen = () => datePickerRef.current.setOpen(true);

    
    return (
        <div className="flex border rounded border-[#DEDEDE]">
            <DatePicker
                ref={datePickerRef}
                placeholderText={placeholder}
                selected={selected}
                onChange={onChange}
                dateFormat="dd-MM-yyyy"
                className="px-2 py-1 w-32 rounded-l border-none focus:outline-none"
            />
            <div className="flex">
                <button
                    type="button"
                    onClick={handleClear}
                    className="text-gray-500 hover:text-gray-700 bg-[#EBEBEB] px-2 py-1 rounded-r-l-none border-l border-[#DEDEDE] cursor-pointer"
                >
                    <FaTimes size={20} />
                </button>
                <button
                    type="button"
                    onClick={handleOpen}
                    className="text-gray-500 hover:text-gray-700 bg-[#EBEBEB] px-2 py-1 rounded-r border-l border-[#DEDEDE] cursor-pointer"
                >
                    <FaCalendarAlt size={18} />
                </button>
            </div>
        </div>
    );
}