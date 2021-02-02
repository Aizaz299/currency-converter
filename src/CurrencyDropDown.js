import React from "react"


const CurrencyDropDown = () =>{
    return(
      <div className="ui container">
      <label>
        <select>
        <option value="Currency">Grapefruit</option>
        <option value="lime">PKR - Rupees</option>
        <option selected value="coconut">USD- Dollor</option>
        <option value="mango">DXB - Dirham </option>
      </select>
      </label>
      </div>
    )
}

export default CurrencyDropDown;