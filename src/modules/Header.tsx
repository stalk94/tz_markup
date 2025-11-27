import { useState } from "react";
import CustomDatePicker from "../components/DataPicker";
import Logo from "../components/Logo";


export default function Header() {
    const [from, setFrom] = useState(null);
    const [to, setTo] = useState(null);


    return (
        <header className="bg-[#ffffff76] shadow-sm p-6 items-center flex">
            <div className="mx-auto flex items-center justify-center gap-24">
                <Logo
                    width={120}
                    height={120}
                />
                <div className="flex flex-col">
                    <div className="flex items-center gap-4">
                        <div id="logo-text" className="text-2xl font-montserrat font-medium">
                            monblanproject
                        </div>
                        <button className="text-sm border border-[#7cbef7] text-[#7cbef7] px-4 py-1 rounded">
                            Start on 17-02-2016
                        </button>
                    </div>

                    <div className="mt-2 text-[black] flex gap-6 text-sm font-medium">
                        <span>870 posts</span>
                        <span>11,787 followers</span>
                        <span>112 following</span>
                    </div>


                    {/* Filters */}
                    <div className="mt-6 flex gap-4 flex-wrap">
                        <div className="flex items-center gap-2">
                            <span className="text-[black] text-sm">
                                Date
                            </span>
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
