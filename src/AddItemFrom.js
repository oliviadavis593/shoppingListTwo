import React, { Component } from 'react';


class AddItemForm extends Component {
    onSubmitForm = (e) => {
      e.preventDefault()
      // e.target['inputName'] references `<input name='inputName' />`
      this.props.onAddItem(e.target.itemToAdd.value)
    }
    render() {
      return (
        <form onSubmit={this.onSubmitForm}>
          <input
            name='itemToAdd'
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

/*====== Callback Props ===== (#11) */
//Implementing add item button:
//Now we'll call the callback prop when the form is submitted
//we can use properties of the event to get the value from the input node
//Note: make sure to add 'name='some-name' to the <input />
//AddItemForm.js ===> App.js