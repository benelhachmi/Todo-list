import React from 'react'

export default function Item(props) {
    return (
        <div>
            <li className="border d-flex justify-content-between align-items-center  p-2 m">
           <div className="p-3">{props.txt} </div>
           <button className="btn btn-danger p-2 h-50"
           onClick={() =>props.deletFun(props.id)}
           >Supprimer</button>
            </li>
        </div>
    )
}
