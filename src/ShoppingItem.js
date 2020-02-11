import React from 'react';

function ShoppingItem(props) {
    return(
        <li>
            <h2 style={{textDecoration: props.item.checked ? 'line-through' : null}}>
                {props.item.name}
            </h2>
            <button 
            type='button'
            //onClick={props.onCheckItem}
            onClick={() => props.onCheckItem(props.item)}
            >
                check
            </button>
            <button 
            type='button'
            //onClick={props.onDeleteItem}
            onClick={() => props.onDeleteItem(props.item)}
            >
                delete
            </button>
        </li>
    )
}

ShoppingItem.defaultProps = {
    item: {}
}

export default ShoppingItem; 

/*====== Callback Props ===== (#4) */
//Implement the design in components:
//ShoppingItem component displays an individual item 
// The item will have a line through when checked (Lines: 6)
//It also has 2 buttons to check or delete 

/*====== Callback Props ===== (#5) */
//Testing: 
// It's a good time to make a snapshot test 
//Testing ===> App.js

/*====== Callback Props ===== (#8) */
//Implementing delete & check buttons:
//Now we need to invoke the appropriate callback props when an onClick is clicked in each button
//Adding an onClick to each button & using the callback prop
//If we click on these buttons in the browser - it'll invoke the appropriate callback 
// This would go all the way back up to the component tree - to the App component where we had both functions

/*====== Callback Props ===== (#9) */
//Implementing delete & check buttons:
//We'll change the onClick to use an arrow function & call the callback props with props.item (Lines: 12 & 19)
//ShoppingItem.js ===> App.js