import Product from "./Product";
function ProductTab() {
    // let options = ["hi-tech", "durable", "fast"];
    // let option2 = { a: "colorful", b: "affordable" };
    let styles = {
        display: "flex",
        flexWrap: "wrap",
        justifyContent: "center",
        alignItems: "center",
    };
    return (
        <div style={styles}>
            {/* <Product title="Phone" price="30k" features={options} features2={option2} />
            <Product title="laptop" price={400000} features={["hi-tech", "durable", "fast"]} features2={{ a: "colorful", b: "affordable" }} />
            <Product title="pen" price="10" features={options} features2={option2} /> */}
            <Product title={"Logitech Mx Master"} idx={0} />
            <Product title={"Apple pencil 2nd Gen"} idx={1} />
            <Product title={"Zebronix Zeb-transformer"} idx={2} />
            <Product title={"Petronics Toool"} idx={3} />
        </div>
    );
}
export default ProductTab