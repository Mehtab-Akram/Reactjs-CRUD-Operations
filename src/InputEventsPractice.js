import React, {Component, Components} from 'react';

class InputEventsPractice extends Component
{
    constructor(props){
        super(props);
        this.state = {
            MouseClicks : 0,
            MouseDown : 'false',
            InputValue : 'None',
            formInputValue :"",
            formSubmittedValue : "",
            MousePositionX : "",
            MousePositionY : "",
            ScrollPosition : ""
        }
    }
    handleOnClick = ()=>{
        this.setState(
            (state) =>{
                return {
                    MouseClicks : this.state.MouseClicks +1
                }
            }
            )
    }
    handleOnMouseDown =()=>{
        this.setState(
            {
                MouseDown : 'true'
            }
        )
    }
    handleOnMouseUp =()=>{
        this.setState(
             {
                MouseDown : 'false'
            }
        )
    }
    handleOnChange = (e)=>
    {
        this.setState(
                {
                    InputValue : e.target.value
                }
        )
    }
    handleOnSubmit =(e)=>
    {
        e.preventDefault();
        this.setState(
            {
                formSubmittedValue : this.state.formInputValue
            }
        )

    }
    handleFormInputChange = (e)=>
    {
        this.setState(
            {
                formInputValue : e.target.value
            }
        )
    }
    handleMouseMove = (e)=>
    {
        this.setState (
            {
                MousePositionX : e.nativeEvent.offsetX,
                MousePositionY : e.nativeEvent.offsetY,
            }
        )

    }
    componentDidMount(){
        window.addEventListener('scroll',this.handleScroll);
    }
    componentWillUnmount(){
        window.addEventListener('scroll',this.handleScroll)
    }
    handleScroll = (e)=>{
        this.setState (
            {
                ScrollPosition : window.scrollY
            }
        )
    }
    render(){
        return (
            <div onMouseMove = {this.handleMouseMove}
            onScroll = {this.handleMouseScroll}
            >
                <section>
                    <button
                    onClick = {this.handleOnClick}
                    onMouseDown = {this.handleOnMouseDown}
                    onMouseUp = {this.handleOnMouseUp}
                    >
                        Click me!
                    </button>
                    <p>Clicks : {this.state.MouseClicks}</p>
                    <p>Mouse Down : {this.state.MouseDown}</p>
                </section>
                <section>
                    <input 
                    type = "text"
                    value = {this.state.InputValue}
                    onChange = {this.handleOnChange}
                    />
                    <p>Input Value : {this.state.InputValue}</p>
                </section>

                <section>
                    <form
                    onSubmit = {this.handleOnSubmit}
                    >
                        <input 
                        type = "text"
                        value = {this.state.formInputValue}
                        onChange = {this.handleFormInputChange}
                        />
                        <input 
                        type ="submit"
                        />
                    </form>
                    <p>Submitted Value = {this.state.formSubmittedValue}</p>
                </section>
                <section>
                    <p>X: {this.state.MousePositionX} </p>
                    <p>Y: {this.state.MousePositionX} </p>
                </section>
                <section>
                    Scroll Position = {this.state.ScrollPosition}
                </section>
            </div>
        )
    }

}
export default InputEventsPractice;