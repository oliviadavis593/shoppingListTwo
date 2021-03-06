import React, { Component } from 'react';
import AddItemForm from './AddItemFrom';
import ShoppingList from './ShoppingList';

class App extends Component {
  state = {
    shoppingItems: [
      /* put stub items in here for testing */
      { name: 'apples', checked: false },
      { name: 'oranges', checked: true },
      { name: 'bread', checked: false },
    ]
  };

  /*handleDelete() {
    console.log('handle delete item called')
  }*/
  handleDeleteItem = (item) => {
    const newItems = this.state.shoppingItems.filter(itm => itm !== item)
    this.setState({
      shoppingItems: newItems
    })
  }

  /*handleCheckItem() {
    console.log('handle check item called')
  }*/
  handleCheckItem = (item) => {
    const newItems = this.state.shoppingItems.map(itm => {
      if (itm === item) {
        itm.checked = !itm.checked
      }
      return itm
    })
    this.setState({
      shoppingItems: newItems
    })
  }

  handleAddItem = (itemName) => {
    const newItems = [
      ...this.state.shoppingItems,
      { name: itemName, checked: false }
    ]
    this.setState({
      shoppingItems: newItems
    })
  }

  render() {
    return(
      <>
      <header>
        <h1>Shopping List</h1>
      </header>
      <main>
        <section>
          <AddItemForm 
          onAddItem={this.handleAddItem}
          />
        </section>
        <section>
          <ShoppingList 
          items={this.state.shoppingItems}
          /*Add the two callback props here */
          onDeleteItem={this.handleDeleteItem}
          onCheckItem={this.handleCheckItem}
          />
        </section>
      </main>
      </>
    )
  }
}

export default App; 

/*====== Callback Props ===== (#1) */
//Implement the design in components 
// App component will contain app's title, addItemForm, & the shoppingList
//It also contains some starting sample state
//We created component instances for AddItemForm & ShoppingList - since they're children on App (Lines: 31 & 34)
//Since shoppingList is the container for the shoppingItems we need to pass the state into the component instance
//App.js ===> AddItemForm.js

/*============================================*/

/*====== Callback Props ===== (#1) */
//Implementing delete & check buttons: (Lines: 16-21)
//We can give one callback prop for each of the actions we need to perform (deleteItem & toggleItem)
//In order for these function to reach appropriate buttons - they need to  1st be passed through ShoppingList component instance
//App.js ===> ShoppingList.js

/*====== Callback Props ===== (#5) */
//Implementing delete & check buttons:
//Now we can implement the handler functions to use setState 
//This is normal JS - using array methods filter for delete and map for toggle (Lines: )
//Note: Notice the ' = (item) = {} ' usage of an arrow function so that we don't encouter the this problem

/*============================================*/

/*====== Callback Props ===== (#1) */
//Implementing add item button:
//We can use callback props again for adding an item to the list 
//We'll first pass in the callback prop from the App component (Lines: )
//App.js ===> AddItemForm.js

/*====== Callback Props ===== (#3) */
//Implementing add item button:
//Final step is to add the new item to the state (Lines: )