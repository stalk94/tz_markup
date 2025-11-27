import { useState } from "react";
import Layout from "./components/Layout";
import Header from "./modules/Header";
import Body from "./modules/Body";



export default function App() {
    const [ mod, setMod ] = useState<'line' | 'grid'>('line');

    
    return (
        <>
            <section className="absolute w-full z-2">
                <Header />
                <Body 
                    mod={mod} 
                    setMod={setMod} 
                />
            </section>

            <Layout />
        </>
    );
}