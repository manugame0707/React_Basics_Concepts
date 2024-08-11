import "./Product.css"
import Price from "./price";
function Product({ title, idx }) {
    // let isDiscount = price > 10000;
    // let styles = { backgroundColor: isDiscount ? "yellow" : "" }
    let oldPrice = ["12000", "14000", "15000", "20000"];
    let newPrice = ["8000", "16000", "13000", "25000"];
    let description = [["8000 DPI", "5 Programmable buttons"], ["intutive surface", "designed for iPad pro"], ["designed for iPad pro", "intutive surface"], ["wireless", "optical orientation"]];

    return (
        <div className="Product" >
            {/* style={styles} */}
            {/* <h3>{title}</h3>
            <h5>Price: {price}</h5> */}
            {/* {isDiscount ? <p> Discount : 5%</p> : null} */}
            {/* {isDiscount && <p> Discount : 5%</p>} */}
            {/* <p>{features.map((feature) => <li>feature</li>)}</p>
            <p>{features2.a}</p> */}
            <h4>{title}</h4>
            <p>{description[idx][0]}</p>
            <p>{description[idx][1]}</p>
            <Price oldprice={oldPrice[idx]} newprice={newPrice[idx]} />
        </div>
    );

}
export default Product;