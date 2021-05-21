import React, { useState } from 'react';
import * as yup from "yup";

const initialPizza = {
    name: "",
    size: "medium",
    pepperoni:false,
    sausage:false,
    "canadian-bacon":false,
    pineapple:false,
    "special-text": ""
}



const PizzaForm = () => {
    const [curPizza, setCurPizza] = useState(initialPizza)

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
                    <option value="small">small</option>
                    <option value="medium">medium</option>
                    <option value="large">large</option>
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
            <button>Submit Order.</button>
        </form>
    );
}

export default PizzaForm;