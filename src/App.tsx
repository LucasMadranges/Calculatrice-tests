import Button from "./components/Button.tsx";
import {useRef} from "react";

function App() {
    const arrNmbr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];
    const arrCal = ["+", "-", "*", "/", "+", "=", "C"];

    const refDisplay = useRef(null);

    return (
        <>
            <div className="p-4 border rounded-2xl w-[250px] border-blue-300 m-auto flex flex-col items-center justify-center">
                <input id="displayed"
                       ref={refDisplay}
                       className="w-full bg-gray-300 mb-4 p-4 rounded-lg h-[56px]"
                       readOnly={true}>
                </input>
                <div className="grid grid-cols-3 mb-4 gap-2">
                    {arrNmbr.map((number, key) => <Button key={key}
                                                          display={refDisplay}>{number}</Button>)}
                </div>
                <div className="grid grid-cols-3 gap-2">
                    {arrCal.map((btn, key) => <Button key={key}
                                                      display={refDisplay}>{btn}</Button>)}
                </div>
            </div>
        </>
    );
}

export default App;
