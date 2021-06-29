import React, { Component } from 'react'
import ReactPhoneInput from "react-phone-input-2";
import 'react-phone-input-2/lib/style.css'

export default class PhoneCode extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             phone:""
        }
    }
    handleOnChange = value => {
        this.setState({ phone: value })
      };
      
    render() {
        return (
            <div>
               <ReactPhoneInput 
              
          inputExtraProps={{
            name: "phone",
            required: true,
            autoFocus: true
          }}
          defaultCountry={"India"}
          value={this.state.phone}
          onChange={this.handleOnChange}
        /> 
            </div>
        )
    }
}
