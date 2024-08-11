function handleFormSubmit(event) {
    event.preventDefault();
    console.log("The form was submitted.");
}
export default function Form() {
    return (
        <form onSubmit={handleFormSubmit}>
            <input type="text" placeholder="Type something" />
            <button>Submit</button>
        </form>
    );
}