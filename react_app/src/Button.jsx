function doSomething(event) {
    console.log("Button was clicked.");
    console.log(event);
}
function printBye() {
    console.log("bye!!!");
}
function handleHover() {
    console.log("hover!!");
}
function handleDoubleClick() {
    console.log("You double clicked me!!");
}
export default function Button() {
    return (
        <div>
            <button onClick={doSomething}>Click me!!</button>
            <p onClick={printBye}>This para is for demo!!</p>
            <button onDoubleClick={handleDoubleClick}>Double Click!! </button>
            <p onMouseOver={handleHover}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint aliquid optio tempora sunt, aliquam fugiat!</p>
        </div>
    );
}