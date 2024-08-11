export default function Price({ oldprice, newprice }) {
    let oldstyles = { textDecorationLine: "line-through", };
    let newStyle = { fontWeight: "bold", };
    let styles = {
        backgroundColor: "yellow",
        height: "40px",
        width: "200px",
        borderBottomLeftRadius: "14px",
        borderBottomRightRadius: "14px",

    }
    return (
        <div style={styles}>
            <span style={oldstyles}>{oldprice}</span>
            &nbsp;&nbsp;&nbsp;
            <span style={newStyle}>{newprice}</span>

        </div>
    );
}