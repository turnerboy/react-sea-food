import React from 'react';
import { getFunName } from '../helpers';

class StorePicker extends React.Component{
    storeInput = React.createRef();

    goToStore = (event) => {
        // 1. Prevent onSubmit
        event.preventDefault();
        // 2. Get text value
        const storeName = this.storeInput.current.value
        // 3. Put it on url
        this.props.history.push(`/store/${storeName}`)

    }
    render(){
        return(
        <form className="store-selector" onSubmit={this.goToStore}>
            <h2>Please Enter a Store</h2>
            <input 
                type="text"
                ref = {this.storeInput}  
                required placeholder="Store Name" 
                defaultValue={getFunName()}>
            </input>
            <button type="submit">Visit Store ➤</button>
        </form>
        )
    }
}

export default StorePicker;
