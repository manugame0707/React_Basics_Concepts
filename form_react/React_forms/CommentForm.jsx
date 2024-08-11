import { useState } from "react";
import { useFormik } from "formik";
const validate = (values) => {
    const errors = {};
    if (!values.username) {
        errors.username = 'Username Required!!!';
    }

    return errors;
};

export default function CommentForm({ addNewComment }) {
    // let [formData, setFormData] = useState({
    //     username: "",
    //     remarks: "",
    //     rating: 5
    // });

    const formik = useFormik({
        initialValues: {
            username: "",
            remarks: "",
            rating: 5
        },
        validate,
        onSubmit: values => {
            alert(JSON.stringify(values, null, 2));
        },
    });

    // let handleInputChange = (event) => {
    //     setFormData((currData) => {
    //         return { ...currData, [event.target.name]: event.target.value };
    //     });
    // };
    // let handleSubmit = (event) => {
    //     console.log(formData);
    //     addNewComment(formData);
    //     event.preventDefault();
    //     setFormData({
    //         username: "",
    //         remarks: "",
    //         rating: 5
    //     });
    // };
    return (
        <div>
            <h4>Give  comments</h4>
            <form onSubmit={formik.handleSubmit}>
                <label htmlFor="username">username</label>
                <input type="text" id="username" placeholder="Enter username" onChange={formik.handleChange}
                    value={formik.values.username} name="username" />
                {formik.errors.username ? <p style={{ color: "red" }}>{formik.errors.username}</p> : null}
                <br /><br />
                <label htmlFor="remarks">Remarks</label>
                <textarea name="remarks" id="remarks" placeholder="Enter few comments" value={formik.values.remarks} onChange={formik.handleChange}></textarea>
                <br /><br />
                <label htmlFor="rating">Rating</label>
                <input type="number" min={1} max={5} id="rating" name="rating" value={formik.values.rating} onChange={formik.handleChange} />
                <br /><br />
                <button type="submit">Add Comments</button>
            </form>
        </div>
    );
}