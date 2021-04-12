import React from 'react';

import './Form.css'
import Input from '../inputContent/input.jsx'
import Button from '../buttonContent/Button.jsx'


class Form extends React.Component {
    render() {
        return (
            <div className="task-2">
                <h2>Task-2</h2>
                <form className="form">
                <div className="form-in">
                    <h3>Form</h3>
                    <Input place ="Name" type='text'/>
                    <Input place ="Password" type='password'/>
                    <Input place ="Email" type='text'/>
                    <Button />
                </div>
                </form>
            </div>
        )
    }
    

}

export default Form;