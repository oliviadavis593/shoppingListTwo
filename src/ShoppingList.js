import React from 'react';
import ShoppingItem from './ShoppingItem';

function ShoppingList(props) {
    return(
        <ul>
            {props.items.map((item, index) =>
                <ShoppingItem 
                key={index}
                item={item}
                onDeleteItem={props.onDeleteItem}
                onCheckItem={props.onCheckItem}
                />    
            )}
        </ul>
    )
}

export default ShoppingList; 

/*====== Callback Props ===== (#4) */
//Implement the design in components:
//Filled component with some sample shopping items inside ShoppingItem component instance
//ShoppingList.js ===> ShoppingItem.js

/*============================================*/

/*====== Callback Props ===== (#2) */
//Implementing delete & check buttons: 
//ShoppingList component will need to pass these 2 function props into each ShoppingItem
//... so we can attach them to the buttons 
//ShoppingList component doesn't have access to the button nodes 
// So we need to give the callback props to each ShoppingItem
//ShoppingList.js ===> ShoppingItem.js
