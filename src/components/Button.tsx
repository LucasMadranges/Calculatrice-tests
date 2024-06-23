import {calculation} from "../utils/calculation.ts";

export default function Button({children, display}: { children: any, display: any }) {
    return (
        <button className="bg-gray-300 p-2 rounded-lg w-10 hover:bg-gray-400 transition"
                onClick={(e: any) => {
                    if (e.target.innerText === "C") {
                        display.current.value = "";
                    } else if (e.target.innerText === "=") {
                        let parts = display.current.value.split(/([-+/*])/);
                        let val1, val2, operator;

                        parts.map((item: any) => {
                            if (item === "") {
                                const index = parts.indexOf("");
                                if (index > -1) { // only splice array when item is found
                                    parts.splice(index, 1); // 2nd parameter means remove one item only
                                }
                            }
                        });

                        console.log(parts);

                        if (parts[0] === "-" && parts[3] !== "-") {
                            val1 = `-${parts[1]}`;
                            operator = parts[2];
                            val2 = parts[3];
                        } else if (parts[0] !== "-" && parts[2] === "-") {
                            val1 = parts[0];
                            operator = parts[1];
                            val2 = `-${parts[3]}`;
                        } else if (parts[0] === "-" && parts[3] === "-") {
                            val1 = `-${parts[1]}`;
                            operator = parts[2];
                            val2 = `-${parts[4]}`;
                        } else if (isNaN(parts[0]) && parts[0] !== "-") {
                            val1 = parts[1];
                            operator = parts[2];
                            val2 = parts[3];
                        } else if (isNaN(parts[2]) && parts[2] !== "-") {
                            val1 = parts[0];
                            operator = parts[1];
                            val2 = parts[3];
                        } else if ((isNaN(parts[2]) && parts[2] !== "-") && (isNaN(parts[0]) && parts[0])) {
                            val1 = parts[1];
                            operator = parts[2];
                            val2 = parts[4];
                        } else {
                            val1 = parts[0];
                            operator = parts[1];
                            val2 = parts[2];
                        }

                        switch (operator) {
                            case "+":
                                display.current.value = calculation(Number(val1), Number(val2), "sum");
                                break;
                            case "-":
                                display.current.value = calculation(Number(val1), Number(val2), "sub");
                                break;
                            case "*":
                                display.current.value = calculation(Number(val1), Number(val2), "mul");
                                break;
                            case "/":
                                display.current.value = calculation(Number(val1), Number(val2), "div");
                                break;
                        }

                    } else {
                        display.current.value += children;
                    }
                }}>
            {children}
        </button>
    );
}