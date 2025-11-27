import Toogler from "../components/Toogler";
import Card from "../components/Card";


const mock = Array.from({ length: 8 }, (_, i) => ({
    id: i,
    img: `https://picsum.photos/seed/${i}/200/200`,
    likes: [128, 67],
    comments: [31, 22],
    date: "9-08-2016",
    upload: "11-04-2016",
}));


export default function Body({ setMod, mod }) {

    return (
        <main className="max-w-3xl mx-auto flex flex-col w-full pb-4">
            <Toogler
                mod={mod}
                setMod={setMod}
            />

            <div 
                className={
                    mod === "grid"
                        ? "mt-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4"
                        : "mt-4 flex flex-col"
                }
            >
                {mock.map((p) => (
                    <Card
                        key={p.id}
                        item={p}
                        mod={mod}
                    />
                ))}
            </div>

            <button className="mx-auto block mt-6 px-6 py-2 border rounded-full text-gray-600 cursor-pointer hover:opacity-50">
                LOAD MORE
            </button>
        </main>
    );
}