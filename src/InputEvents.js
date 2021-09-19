import React, {Component} from 'react';

class InputElements extends Component{
    constructor(props){
        super (props);

       this.state = {
           mouseClicked : "false",
           numberOfMouseClicks: 0,
           inputText : "Input Text!",
           formInputText : "formInputText",
           formInputTextSubmitted: "formInputTextSubmitted",
           mousePositionX: "",
           mousePositionY: "",
           WindowScrollY: ""
       }
       this.handleMouseClick = this.handleMouseClick.bind(this);
    this.handleMouseDown = this.handleMouseDown.bind(this);
    this.handleMouseUp = this.handleMouseUp.bind(this);
    this.handleInputChange = this.handleInputChange.bind(this); 
    }
    handleMouseClick(){
        this.setState(
            (state)=>{
                return {
                    numberOfMouseClicks : this.state.numberOfMouseClicks +1
                } 
            }
        )
    }
    handleMouseDown(){
        this.setState(
            (state)=>{
                return {
                    mouseClicked : "true"
                }
            }
        )
    }
    handleMouseUp(){
        this.setState(
            (state)=>{
                return {
                    mouseClicked : "false"
                }
            }
        )
    }
    handleInputChange(e)
    {
        this.setState({
            inputText : e.target.value
        })
    }
    handleOnSubmit = (e) =>{
        e.preventDefault();
        this.setState({
            formInputTextSubmitted : this.state.formInputText
        })
    }
    handleFormInputChange =(e) => {
        this.setState({
            formInputText : e.target.value
        })
    }
    handleMouseMove = (e)=>{
        this.setState(
            {
                mousePositionY : e.nativeEvent.offsetY,
                mousePositionX : e.nativeEvent.offsetX,
            }
        )
    }
    componentDidMount(){
        window.addEventListener('scroll',this.handleScroll)
    }
    componentWillUnmount(){
        window.addEventListener('scroll',this.handleScroll)
    }
    handleScroll = (e)=>{
        this.setState({
            WindowScrollY : window.scrollY
        })
    }
    render(){
        return (
            <div onMouseMove = {this.handleMouseMove}>
                <section>
                    <h3>
                        Mouse Events:
                    </h3>
                    <button 
                    onClick = {this.handleMouseClick}
                    onMouseDown = {this.handleMouseDown}
                    onMouseUp = {this.handleMouseUp}>
                    Click Me!
                    </button>
                    <p>On Mouse Down : {this.state.mouseClicked} </p>
                    <p>On Mouse Click :{this.state.numberOfMouseClicks} </p>
                </section>

                <section>
                    <h3>Input Change Events:</h3>
                    <input 
                    type = "text"
                    value = {this.state.inputText}
                    onChange = {this.handleInputChange}
                    />
                    <p>Input Value: {this.state.inputText}</p>
                </section>

<section>
    <form
    onSubmit = {this.handleOnSubmit}
    >
    <input 
    onChange = {this.handleFormInputChange}
    type = "text"
    value = {this.state.formInputText}
    />
    <button type = "submit">Submit</button>
    <p>Input value: {this.state.formInputText}</p>
    <p>Submitted value: {this.state.formInputTextSubmitted}</p>
    </form>
</section>
<section>
    <h3>Mouse Position:</h3>
    <p>x:{this.state.mousePositionX}</p>
    <p>y:{this.state.mousePositionY}</p>
</section>
<section>
    <div>
        <h3>Windows scroll Position</h3>
        <p>Y : {this.state.WindowScrollY}</p>
    </div>
</section>
            </div>
        )
    }
}
export default InputElements;
