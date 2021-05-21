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
        <form id='pizza-form'>
            <label>
                Name:<br/>
                <input type="text" id='name-input' name="name" value={curPizza.name}></input>
            </label><br/>
            <label>
                Size:<br/>
                <select id='size-dropdown' name="size" value={curPizza.size} onChange={handleSel}>
                    <option value="small">small</option>
                    <option value="medium">medium</option>
                    <option value="large">large</option>
                </select>
            </label><br/>
            <label>
                Toppings:
                <label>
                    Pepperoni:
                    <input onChange={toggleTopping} type='checkbox' checked={curPizza.pepperoni} name='pepperoni'></input>
                </label><br/>
                <label>
                    Sausage:
                    <input onChange={toggleTopping} type='checkbox' checked={curPizza.sausage} name='sausage'></input>
                </label><br/>
                <label>
                    Canadian Bacon:
                    <input onChange={toggleTopping} type='checkbox' checked={curPizza['canadian-bacon']} name='canadian-bacon'></input>
                </label><br/>
                <label>
                    Pineapple:
                    <input onChange={toggleTopping} type='checkbox' checked={curPizza.pineapple} name='pineapple'></input>
                </label><br/>
            </label>
            <label>
                Special Instructions:
                <input type="text" id="special-text"></input>
            </label>
            <button>Submit Order.</button>
        </form>
    );
}