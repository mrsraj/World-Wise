
import styles from "./Form.module.css";

import { useNavigate } from "react-router-dom";

function Form() {
    const navigate = useNavigate();

    function handleSubmit(e) {
        console.log("handled");

        e.preventDefault();
        navigate(-1);
    }

    function GoPrevPage() {
        navigate(-1);
    }

    return (
        <div>
            <form action="#" className={styles.form} onSubmit={handleSubmit}>
                <input type="text" id="name" name="name" />
                <input type="text" id="name" name="name" />
                <input type="text" id="name" name="name" />
                <button type="submit">Add</button>
            </form>
            <button onClick={GoPrevPage}>-back</button>
        </div>
    )
}

export default Form;