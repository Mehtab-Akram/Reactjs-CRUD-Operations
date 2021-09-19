import React, {Component} from 'react';

class FormValidation extends Component{
    constructor(props){
        super(props);
        this.state={
            name : "",
            address  : "",
            AcceptedTerms : true,
            ValidationErrors : {},
            Submissions : 0
        }
    }
    HandleOnChange = (e)=>{
        const target = e.target;
        const name = target.name;
        const value = (
            target.type === 'text'
            ? target.value
            : target.checked
        )
        this.setState({
            [name]: value
        })
    }
    HandleSubmit = (e)=>
    {
        e.preventDefault();

        this.ValidateFileds();
    }
    ValidateFileds = ()=>{
        const {
            name,
            address,
            AcceptedTerms
        } = this.state

        const errors = {}
        if(!name){
            errors["name"] = "Name cannot be empty.";
        }
        if(!address){
            errors['address'] = "Address Cannot be empty.";
        }
        if(!AcceptedTerms){
            errors['acceptedTerms'] = 'Please accept terms.';
        }

        if(Object.keys(errors).length === 0){
            this.setState({
                Submissions : this.state.Submissions + 1
            })
        }
        this.setState ({
            ValidationErrors : errors
        })
    }
    render(){
        const {
            name,
            address,
            acceptedTerms
        } = this.state.ValidationErrors
        return (
            <React.Fragment>
                <form
                onSubmit = {this.HandleSubmit}
                >
                    <p>Name</p>
                    <input 
                    type = "text"
                    name = "name"
                    value = {this.state.name}
                    onChange = {this.HandleOnChange}
                    /><br/>
                    <span> {name}</span>
                    <p></p>
                    <br/>
                    <p>Address</p>
                    <input
                    type = "text"
                    name = "address"
                    value = {this.state.address}
                    onChange = {this.HandleOnChange}
                    /><br/>
                    <span> {address}</span>
                    <br/>
                    <input 
                    type ="checkbox"
                    name = "AcceptedTerms"
                    checked = {this.state.AcceptedTerms}
                    onChange= {this.HandleOnChange}
                    /><br/>
                    <p> Agree to terms.</p>
                    <span> {acceptedTerms}</span>
                    <br/>
<p> Submitted {this.state.Submissions} times!</p>
<br/>

<input 
type = 'submit'
/>

                </form>
            </React.Fragment>
        )
    }
}

export default FormValidation;