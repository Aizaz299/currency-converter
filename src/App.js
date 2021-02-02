import React from 'react'
import CurrencyDropDown from "./CurrencyDropDown";


export default class App extends React.Component{

    state = {currVal:1}
    onChangeValue=event=>{
        this.setState({currVal: event.target.value})
        console.log(this.state.currVal)
    }

    render() {
        return (

            <div className="ui container">
                 <label> Amount
                    <input type="text" 
                    placeholder="Currency"
                    value={this.state.currVal}
                    onChange={this.onChangeValue}/>
                </label>
                <div className="ui corner label">
                <i className="money bill alternate outline"></i>
                 </div>
                 
            <CurrencyDropDown/>
            <CurrencyDropDown/>    
             </div>
        
            )
    }

}