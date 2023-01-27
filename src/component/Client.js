import React,{useState} from 'react'
import data from "./dataset.json"


export default function Client(props) {
   
  return (
    <>
    <div class="border border-success p-2 mb-2">
    <div>
        <select >
            <option selected disabled="true">...select Iteam....</option>
            {
                data.map((result)=>(<option text={result.Country}>{result.Commodity}</option>))
            }
        </select>
        
      </div>
  </div>
  <div class="border border-success p-2 mb-2">
    <label htmlFor="Quantity" class="form-label">Quantity </label>
    <input type="text" pattern="[0-9]*" class="form-control border-success" id="Quantity" placeholder="Quantity"   />
  </div>
  <div class="border border-success p-2 mb-2">
    <label for="exampleFormControlInput1" class="form-label">Destination </label>
    <input type="text" class="form-control border-success" id="destination" placeholder="destination"/>
  </div>
  <div>  <button type="button" class="btn btn-primary">Enter</button>
  </div>
  </>

  )
}
