import { COLUMNS,state,updateDragging,createOrderData,TABLES} from "./data.js";
import {createOrderHtml,html, updateDraggingHtml,moveToColumn} from "./view.js";
/**
 * A handler that fires when a user drags over any element inside a column. In
 * order to determine which column the user is dragging over the entire event
 * bubble path is checked with `event.path` (or `event.composedPath()` for
 * browsers that don't support `event.path`). The bubbling path is looped over
 * until an element with a `data-area` attribute is found. Once found both the
 * active dragging column is set in the `state` object in "data.js" and the HTML
 * is updated to reflect the new column.
 *
 * @param {Event} event
 */

const handleDragOver = (event) => {
  event.preventDefault();
  const path = event.path || event.composedPath();

  let column = null;
  for (const element of path) {
    const { area } = element.dataset;
    if (area) {
      column = area;
      break;
    }
  }

  if (!column) return;

  updateDragging({ over: column });
  updateDraggingHtml({over:column });
};

// ?
//The help modal
const helpBtn = document.querySelector('[data-help]');
const closeBtn = document.querySelector('[data-help-cancel]')


// Add a click event listener to the "Help" button
helpBtn.addEventListener('click', () => {
  // Show the "Help" overlay
  const helpOverlay = document.querySelector('[data-help-overlay]');
  helpOverlay.showModal();


  closeBtn.addEventListener('click', () => {
    helpOverlay.close()
  })
});



//Opens Add order menu
const handleAddToggle = () => {
  html.add.overlay.toggleAttribute("open");
};


html.other.add.addEventListener("click", handleAddToggle);
html.add.cancel.addEventListener("click", handleAddToggle);


//Submit information to the column
const handleAddSubmit = (event) => {
  event.preventDefault(); 

//Creates a new order
  const order = {
    id: state.orders,
    title: html.add.title.value,
    table: html.add.table.value,
    created: new Date(),
  };
  const orderElement = createOrderHtml(order);
  html.area.ordered.append(orderElement);


    // Add click event listener to new order element
  orderElement.addEventListener('click', () => {
    // Set title and table input values in Edit form to match clicked order
    html.edit.title.value = order.title;
    html.edit.table.value = order.table;
  });

// Reset form and hide add overlay 
  html.add.form.reset();
  html.add.overlay.close();
};
html.add.form.addEventListener("submit", handleAddSubmit);


//Edit modal
const handleEditToggle = () => {
  html.edit.overlay.toggleAttribute("open");
};
html.other.grid.addEventListener("click", handleEditToggle);
html.edit.cancel.addEventListener("click", handleEditToggle);


//Submit edited information
const handleEditSubmit = (event) => {
  event.preventDefault(); 

//creates a new object called order with some properties  
  const { id, title, table, created, column } = {
    title: html.edit.title.value,
    table: html.edit.table.value,
    created: new Date(),
    id: state.orders,
    column: html.edit.column.value,
  };
  const order = { id, title, table, created, column };

// Find the index of the order to be updated
  let orderId = -1; //-1 allows us to check if an order index has been found


// Find the order element in the HTML
  for (let i = 0; i < state.orders.length; i++) {
    if (state.orders[i].id === id) {
      orderId = i;
      break;
    }
  }


// Update the order data in the state object
  state.orders[orderId] = createOrderData(order);

// Update the order element with the new data
  const newOrder = createOrderHtml(order);
  const oldOrder= document.querySelector(`[data-id="${id}"]`);
  oldOrder.replaceWith(newOrder);


  // Move the order element to the correct column in the HTML
const areaMap = {
  ordered: html.area.ordered,
  preparing: html.area.preparing,
  served: html.area.served
};

if (column in areaMap) {
  areaMap[column].append(newOrder);
}
html.edit.overlay.close();
};

html.edit.form.addEventListener("submit", handleEditSubmit);


//Delete funtion
const handleDelete = (event) => {
  event.preventDefault(); // method is used to prevent the browser from executing the default action

//creates a new object called order with some properties
  const { id, title, table, created, column } = {
    title: html.edit.title.value,
    table: html.edit.table.value,
    created: new Date(),
    id: state.orders,
    column: html.edit.column.value,
  };

  const order = { id, title, table, created, column };

  // Find the index of the order to be updated
  let orderId = -1; //-1 allows us to check if an order index has been found
  
  // Find the order element in the HTML
  for (let i = 0; i < state.orders.length; i++) {
    if (state.orders[i].id === id) {
      orderId = i;
      break;
    }
  }
  // Delete the order element with the new data
  const newOrder = createOrderHtml(order);
  const oldOrder= document.querySelector(`[data-id="${id}"]`);
  oldOrder.remove(newOrder);
  html.edit.overlay.close();
};
html.edit.delete.addEventListener("click", handleDelete);



//  It sets the dragged variable to the element being dragged
let dragged;
const handleDragStart = (event) => {
  dragged = event.target;
};

//It appends the dragged element to the target element
const handleDragDrop = (event) => {
  event.target.append(dragged);
};


// It gets the closest parent element with a section tag and 
// sets its background color to an empty string
const handleDragEnd= (event) =>{
const background = event.target.closest("section");
event.target.closest("section").style.backgroundColor = "";
};


//attach event listeners to each column
for (const htmlArea of Object.values(html.area)){
  htmlArea.addEventListener("dragover", handleDragOver);
  htmlArea.addEventListener("dragstart", handleDragStart);
  htmlArea.addEventListener("drop", handleDragDrop);
  htmlArea.addEventListener("dragend", handleDragEnd);
}
