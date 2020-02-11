import React, { Component } from 'react';


class AddItemForm extends Component {
    render() {
        return(
            <form>
                <input 
                type='text'
                placeholder='carrots'
                aria-label='Shopping list item'
                />
                <button type='submit'>Add Item</button>
            </form>
        )
    }
}

export default AddItemForm; 

/*====== Callback Props ===== (#2) */
//Implement the design in components:
//We are creating the AddItemForm component to display a form (no functionality yet)
//AddItemForm.js ===> ShoppingList.js

