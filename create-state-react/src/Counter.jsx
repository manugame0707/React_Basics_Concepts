import { useState } from "react";
export default function Counter() {
    // let count = 0;
    // function inCount() {
    //     count += 1;
    //     console.log(count);
    // }
    let [count, setCount] = useState(0);
    let incCount = () => {
        setCount(count += 1);
        console.log(count);
    }
    return (
        <div>
            <h3>Count={count}</h3>
            <button onClick={incCount}>Increase Count</button>
        </div>
    );
}