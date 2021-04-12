import React from 'react'

import '../formContent/Form.css'

class Input extends React.Component{
    render() {
        return(
            <div>
                <input type={this.props.type} placeholder={this.props.place}></input>
            </div>
        )
    } 
}

export default Input