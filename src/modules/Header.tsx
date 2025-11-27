import { useState } from "react";
import CustomDatePicker from "../components/DataPicker";
import Logo from "../components/Logo";


export default function Header() {
    const [from, setFrom] = useState(null);
    const [to, setTo] = useState(null);


    return (
        <header className="bg-[#ffffff76] shadow-sm p-6">
            <div className="mx-auto flex flex-col md:flex-row md:items-center justify-center gap-6 md:gap-24">

                <div className="flex justify-center w-full md:w-auto">
                    <Logo width={100} height={100} />
                </div>

                <div className="flex flex-col text-center md:text-left">
                    <div className="flex flex-col md:flex-row items-center gap-3 md:gap-4">
                        <div className="text-2xl font-montserrat font-medium">
                            monblanproject
                        </div>

                        <button className="text-sm border border-[#7cbef7] text-[#7cbef7] px-4 py-1 rounded">
                            Start on 17-02-2016
                        </button>
                    </div>

                    <div className="mt-2 text-black flex flex-wrap justify-center md:justify-start gap-4 text-sm font-medium">
                        <span>870 posts</span>
                        <span>11,787 followers</span>
                        <span>112 following</span>
                    </div>

                    <div className="mt-6 flex gap-4 flex-wrap justify-center md:justify-start">
                        <div className="flex items-center gap-2">
                            <span className="text-black text-sm">Date</span>
                            <CustomDatePicker
                                placeholder="from"
                                selected={from}
                                onChange={setFrom}
                            />
                        </div>

                        <div className="flex items-center gap-2">
                            <CustomDatePicker
                                placeholder="to"
                                selected={to}
                                onChange={setTo}
                            />
                        </div>
                    </div>
                </div>

            </div>
        </header>
    );
}
