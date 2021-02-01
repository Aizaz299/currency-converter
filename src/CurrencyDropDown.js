import React from "react"


const CurrencyDropDown = () =>{
    return(
        <select>
        <option value="grapefruit">Grapefruit</option>
        <option value="lime">PKR - Rupees</option>
        <option selected value="coconut">USD- Dollor</option>
        <option value="mango">DXB - Dirham </option>
      </select>
    )
}

export default CurrencyDropDown;