import React, {Component} from 'react';

class ShoppingList extends Component{
    constructor(props)
    {
        super(props);
        this.state = {
            newItemName: '',
            groceryItems : [
                {name: 'Bananas', id: 'item-1',completed: false},
                {name: 'Apples', id: 'item-2',completed: true},
                {name: 'Rice', id: 'item-3', completed : false}
            ],
            validationErrors : {},
            submitted: 0
        }
    }
    componentDidUpdate(prevProp,prevState){
      const prevStateString = JSON.stringify(prevState.groceryItems);
      const updatedstateString = JSON.stringify(this.state.groceryItems)
      if(prevStateString !== updatedstateString){
        console.log("save This: ", updatedstateString);
        localStorage.setItem("groceryItems", updatedstateString);
      }
    }
    componentDidMount(){
      const saveStateFromLocalStorate = localStorage.getItem('groceryItems');

      if(saveStateFromLocalStorate){

        this.setState({
          groceryItems : JSON.parse(saveStateFromLocalStorate)
        })
      }
    }
    handleCompletedToggle = (e)=>{
        const target = e.target;
        const itemindexValue = target.attributes.itemindex.value;
        const index = parseInt(itemindexValue,10);

        console.log('toggling ' + index);


        const newGroceryItemState = [...this.state.groceryItems];
        newGroceryItemState[index] = {
          ... newGroceryItemState[index],
          completed: target.checked
        }

        this.setState({
            groceryItems: newGroceryItemState
        }) 
    }
    handleOnSubmit = (e)=>{
        e.preventDefault();
        const isFormValid = this.validateFields();
        if(isFormValid){
            let newGroceryItemObject = {
                completed : false,
                name : this.state.newItemName,
                id : "item-" + Date.now()
            }
            
            this.setState((state) => {
                return {
                    submitted: state.submitted +1,
                    groceryItems: [...state.groceryItems,newGroceryItemObject],
                    newItemName : '',
                    validationErrors : {}
                }
            })
        }

    }
    validateFields(){
        const {
            newItemName 
        } = this.state
        const validationErrors = {}
        if(newItemName === '')
        {
            validationErrors["newItemNameError"] = "Please provide a value.";
            this.setState({
                validationErrors : validationErrors
            })
            return false;
        }
        return true;
    }
handleDelete = (e)=>{
    const target = e.target;
    const itemindexValue = target.attributes.itemindex.value;
    const index = parseInt(itemindexValue, 10)
    console.log('deleting: ' + index)


    const newGroceryItemsState = [...this.state.groceryItems]
newGroceryItemsState.splice(index,1);
    this.setState({
        groceryItems: newGroceryItemsState
    })
}
handleOnChange = (e) =>{
    this.setState({
        newItemName : e.target.value,
        validationErrors : {}
    })
}
    render(){
        const {
            newItemNameError: newItemNameError
        } = this.state.validationErrors

        const{
            groceryItems
        } = this.state
        return (
            <>
      <section>
        <h3>Shopping List</h3>
        { !groceryItems.length && <p>No items!</p> }
        <ul>
          {
            groceryItems.map((item, index) => {
              return (
                // <li key={index}>
                <li key={item.id}>
                  <input
                    type="checkbox"
                    checked={item.completed}
                    onChange={this.handleCompletedToggle}
                    itemindex={index} // lowercase 'itemindex' as per React docs
                  />
                  <span>{item.name}</span>
                  <button
                    itemindex={index}
                    onClick={this.handleDelete}
                  >
                    ✕
                  </button>
                </li>
              )
            })
          }
        </ul>
        <form onSubmit={this.handleOnSubmit}>
          <label>
            <span className="error">{newItemNameError}</span>
            <input
              type="text"
              name="newItemName"
              placeholder="Bananas"
              value={this.state.newItemName}
              onChange={this.handleOnChange}
            />
          </label>

          <button type="submit">Submit</button>

          <p>Submitted {this.state.submitted} times!</p>
        </form>
      </section>
      </>
        )
    }
}
export default ShoppingList;