import TicketNum from "./TicketNum";
import "./Ticket1.css"
export default function Ticket({ ticket }) {
    return (
        <div className="Ticket1">
            <p>Ticket</p>
            {ticket.map((num, idx) => (
                <TicketNum num={num} key={idx} />
            ))}
        </div>
    );
}