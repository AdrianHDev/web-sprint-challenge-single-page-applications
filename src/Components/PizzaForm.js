import React, { useState } from 'react';
import * as yup from 'yup';

const initialPizza = {
    name: "",
    size: "medium",
    pepperoni:false,
    sausage:false,
    "canadian-bacon":false,
    pineapple:false,
    "special-text": ""
}

const pizzaSchema = yup.object().shape({
    name: yup().required().string().min(5, "name must be at least 2 characters"),
    size: yup().required().string().matches(/(Small|Medium|Large)/),
    pepperoni: yup().required().bool(),
    sausage: yup().required().bool(),
    "canadian-bacon": yup().required().bool(),
    pineapple: yup().required().bool(),
    "special-text": yup().required().string()
})

const PizzaForm = () => {
    const [curPizza, setCurPizza] = useState(initialPizza)

    const updateValue = (event) => {
        setCurPizza({ ...curPizza, [event.target.name]: event.target.value })
    }

    const toggleTopping = (event) => {
        setCurPizza(() => {
            return {...curPizza, [event.target.name]: event.target.value }
        })
    }
    const handleSel = (event) => {
        setCurPIzza({ ...curPizza, [event.target.parent.name]: event.target.value })
    }

    return (
        <form>
            <label>
                Name:<br/>
                <input type="text" name="name" value={curPizza.name}></input>
            </label><br/>
            <label>
                Size:<br/>
                <select name="size" value={curPizza.size} onChange={handleSel}>
                    <option value="small">small</option>
                    <option value="medium">medium</option>
                    <option value="large">large</option>
                </select>
            </label><br/>

        </form>
    );
}