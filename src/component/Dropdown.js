import React, { Component } from 'react'
import data from "./dataset.json"

export default class Dropdown extends Component {
  render() {
    return (
      <div>
        <select>
            <option selected disabled="true">...select Iteam....</option>
            {
                data.map((result)=>(<option text={result.Country}>{result.Commodity}</option>))
            }
        </select>
        
      </div>
    )
  }
}
