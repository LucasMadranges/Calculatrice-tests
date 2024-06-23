import Button from "./components/Button.tsx";

function App() {
    const arrNmbr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];
    const arrCal = ["+", "-", "*", "/"];

    return (
        <>
            <div className="p-4 border rounded-2xl w-[250px] border-blue-300 m-auto flex flex-col items-center justify-center">
                <div className="w-full bg-gray-300 mb-4 p-4 rounded-lg">
                    Text
                </div>
                <div className="grid grid-cols-3 mb-4 gap-2">
                    {arrNmbr.map((number, key) => <Button key={key}>{number}</Button>)}
                </div>
                <div className="grid grid-cols-3 gap-2">
                    {arrCal.map((btn, key) => <Button key={key}>{btn}</Button>)}
                </div>
            </div>
        </>
    );
}

export default App;
