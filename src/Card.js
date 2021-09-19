import React, {Component} from 'react';

class Card extends Component{
    constructor(props){
        super(props);
        this.state = {
            firstname:'Jane Smith',
            initails : 'JS',
            info : [
                {title: 'Birthday', text : 'Jan 1, 1989'},
                {title: 'Address', text : 'Jhangi Abbottabad'},
                {title: 'Email', text : 'jane@email.com'},
                {title: 'Phone', text : '123 456 7890'}
            ]
        }
    }
    render(){
        const {
            firstname,
            initails,
            info
        } = this.state
        return (
            <React.Fragment>
                <section className = "card-container">
                    <header className ="card-header">
                        <span initails = {initails}></span>
                        <h2>{firstname}</h2>
                    </header>
                    <main>
                        <ul>
                           {info.map((row,index) => {
                               return (
                                   <li key = {index}>
                                       <span>{row.title}</span>
                                       {row.text?row.text: 'N/A'}
                                   </li>
                               )
                           })
                           }
                        </ul>
                    </main>
                </section>
            </React.Fragment>
        )
    }

}
export default Card;