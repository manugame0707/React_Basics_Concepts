import { useState } from "react";
import { genTicket, sum } from "./helper";
import Ticket from "./Ticket";
import Button from "./Button";
// import "./Lottery.css";
export default function Lottery({ n = 3, winCondition }) {
    let [ticket, setTicket] = useState(genTicket(n));
    // let isWinning = sum(ticket) === winningSum;
    let isWinning = winCondition(ticket);
    let buyNewTicket = () => {
        setTicket(genTicket(n));
    };
    return (
        <div>
            <h1>Lottery Game!</h1>
            {/* <div className="ticket">
                <span>{ticket[0]}</span>
                <span>{ticket[1]}</span>
                <span>{ticket[2]}</span>

            </div> */}
            <Ticket ticket={ticket} />
            <br /><br /><br />
            <Button action={buyNewTicket} />
            <h3>{isWinning && "congratulation You Won!!!"}</h3>


        </div>
    );
}