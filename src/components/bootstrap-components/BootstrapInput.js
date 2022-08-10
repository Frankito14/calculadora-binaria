import React from "react";
export default function BootstrapInput(props){

    const Handle = props.function;
    return(
        <div class="mb-3 row">
        <label for="input" class="col-sm-2 col-form-label">{props.label}</label>
       <div class="col-sm-10">
           <input type={props.type} value={props.value} class="form-control" onChange={(e)=>Handle(e)} id="input"/>
       </div>
   </div>
    )
}
