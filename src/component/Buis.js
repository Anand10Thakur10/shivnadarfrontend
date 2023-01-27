import React from 'react'
import data from "./dataset.json"

export default function Buis() {
  return (
    <>
      <div class="border border-success p-2 mb-2">
      <div>
        <select>
            <option selected disabled="true">...select Iteam....</option>
            {
                data.map((result)=>(<option text={result.Country}>{result.Commodity}</option>))
            }
        </select>
        
      </div>
  </div>
  <div class="border border-success p-2 mb-2">
    <label for="exampleFormControlInput1" class="form-label">Quantity </label>
    <input type="text" class="form-control border-success" id="Quantity" placeholder="Quantity"/>

  </div>
  
  <div class="border border-success p-2 mb-2">
    <label for="exampleFormControlInput1" class="form-label">Destination </label>
    <input type="text" class="form-control border-success" id="destination" placeholder="destination"/>
  </div>

  <div class="border border-success p-2 mb-2">
    <label for="exampleFormControlInput1" class="form-label">Wearhouse1 </label>
    <input type="text" class="form-control border-success" id="wearhouse1" placeholder="Wearhouse1"/>
  </div>

  <div class="border border-success p-2 mb-2">
    <label for="exampleFormControlInput1" class="form-label">Wearhouse2 </label>
    <input type="text" class="form-control border-success" id="Wearhouse2" placeholder="wearhouse2"/>
  </div>


  <div>  <button type="button" class="btn btn-primary">Search</button>
  </div>
      </>
  )
}
