//import
import { useState } from "react";
import Item from "./Item";
import {v4 as uuidv4} from 'uuid'

//
export default function Form(){
    //déclarer 
    const [data,setData]=useState([
        {txt:"sport",id:uuidv4()},
        {txt:"developer",id:uuidv4()},
        {txt:"designer",id:uuidv4()}
    ])
    const [stateInput,setStateInput]=useState()

//delete element
    const deleteElement =id =>{
        const filterState =data.filter(e=>{
            return e.id!==id;
        })
        setData(filterState)
    }
   
//pour input
    const linkedInput = e => {
        setStateInput(e);
    }

//ajouter nouvel élément
    const addTodo =(e) =>{
        console.log("work")
        e.preventDefault();
        const newArr = [...data] //copier l'élément dans un nouveau tableau
        const newTodo = {}; //déclarer un objet
        newTodo.txt =stateInput;
        newTodo.id=uuidv4();
        newArr.push(newTodo);  
        setData(newArr);
        setStateInput('')
    }


    return(
        <div className="m-auto px-4 col-12 col-sm-10 col-lg-6">
            <form onSubmit={ e => addTodo(e)} className="mb-3">
                <label htmlFor="todo" className="form-label mt-3">
                    Chose à faire
                </label>
                <input type="text"
                value={stateInput}
                onChange={e=>linkedInput(e.target.value)}
                className="form-control" id="todo"
                />
                <button className="mt-2 btn btn-primary d-block">
                    Envoyer
                </button>
            </form>
            <h2>Listes des choses  :</h2>
            <ul className="list-group">
                {data.map(e=>{
                return <Item txt={e.txt}
                             key={e.id}//for react 
                             deletFun={deleteElement}
                             id={e.id}
                        />
                })}
               
            </ul>
        </div>
    )
}