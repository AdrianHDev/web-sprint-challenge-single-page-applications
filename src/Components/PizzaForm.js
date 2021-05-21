import React, { useState } from 'react';
import  * as yup from "yup";
import axios from 'axios';

const reqUri = 'https://reqres.in/api/orders'

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
    name: yup.string().required().min(2, "name must be at least 2 characters"),
    size: yup.string().required().matches(/(small|medium|large)/),
    pepperoni: yup.bool().required(),
    sausage: yup.bool().required(),
    "canadian-bacon": yup.bool().required(),
    pineapple: yup.bool().required(),
    "special-text": yup.string(),
})


const PizzaForm = () => {
    const [curPizza, setCurPizza] = useState(initialPizza)

    const submitRequest = (data) => {
        axios.post(reqUri, data)
            .catch(err => console.error(err))
            .then(res => console.log(res));
    }
    const submitClicked = (event) => {
        event.preventDefault();
        let errors = [];
        pizzaSchema.validate(curPizza)
        .catch(e => {
            console.error(e);
            errors = e;
        }).then(() => {
            if (errors.length === 0) {
                submitRequest(curPizza);
            }
        })
    }
    const updateValue = (event) => {
        setCurPizza({ ...curPizza, [event.target.name]: event.target.value })
    }

    const toggleTopping = (event) => {
        setCurPizza(() => {
            console.log(event.target.name)
            return {...curPizza, [event.target.name]: !curPizza[event.target.name] }
        });
        console.log(curPizza);
    }
    const handleSel = (event) => {
        setCurPizza({ ...curPizza, [event.target.parent.name]: event.target.value })
    }

    return (
        <form id='pizza-form'>
            <label>
                <b>Name:</b><br/>
                <input type="text" id='name-input' name="name" value={curPizza.name} onChange={updateValue}></input>
            </label><br/>
            <label>
                <b>Size:</b><br/>
                <select id='size-dropdown' name="size" value={curPizza.size} onChange={handleSel}>
                    <option value="small">Small</option>
                    <option value="medium">Medium</option>
                    <option value="large">Large</option>
                </select>
            </label><br/>
            <label>
                <b>Toppings:</b><br/>
                <label>
                    Pepperoni:
                    <input onChange={toggleTopping} type='checkbox' checked={(curPizza.pepperoni === true)} name='pepperoni'></input>
                </label><br/>
                <label>
                    Sausage:
                    <input onChange={toggleTopping} type='checkbox' checked={curPizza.sausage === true} name='sausage'></input>
                </label><br/>
                <label>
                    Canadian Bacon:
                    <input onChange={toggleTopping} type='checkbox' checked={curPizza['canadian-bacon'] === true} name='canadian-bacon'></input>
                </label><br/>
                <label>
                    Pineapple:
                    <input onChange={toggleTopping} type='checkbox' checked={curPizza.pineapple === true} name='pineapple'></input>
                </label><br/>
            </label>
            <label>
                <b>Special Instructions</b>:<br/>
                <input type="text" value={curPizza['special-text']} onChange={updateValue} id="special-text"/><br/>
            </label>
            <button onClick={submitClicked}>Submit Order.</button>
        </form>
    );
}

export default PizzaForm;