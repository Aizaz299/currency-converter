import React from "react"


const CurrencyDropDown = () =>{
    return(
        <div className="ui selection dropdown">
                <input type="hidden" name="gender"/>  
                <i className="dropdown icon"></i>
                <div className="default text">Gender </div>
                    <div className="menu">
                        <div className="item" data-value="1">Male</div>
                        <div className="item" data-value="0">Female</div>
                    </div>
                    
        </div>
        
    )
}

export default CurrencyDropDown;