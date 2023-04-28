import { COLUMNS, state, updateDragging, createOrderData, TABLES } from "./data.js";
import { createOrderHtml, html, updateDraggingHtml, moveToColumn } from "./view.js";
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
  const path = event.path || event.composedPath()
  let column = null


  for (const element of path) {
    const { area } = element.dataset
    if (area) {
      column = area
      break;
    }
  }


  if (!column) return
  updateDragging({ over: column })
  updateDraggingHtml({ over: column })
  htmlArea.addEventListener('dragover', handleDragOver);
}


//? button
// Select the "Help" button
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


  // add order button
  // Select the "Add Order" button
  const addOrderBtn = document.querySelector('[data-add]');
  const tableSelect = document.querySelector('[data-add-table]');
  const submitOrderBtn = document.querySelector('[data-submit-order]');

// Add a click event listener to the "Add Order" button
  addOrderBtn.addEventListener('click', (event) => {
    event.preventDefault(); // prevent the default form submission behavior
  // Show the "Add Order" dialog
  const addOverlay = document.querySelector('[data-add-overlay]');
  addOverlay.showModal();

        // Select the "Cancel" button in the "Add Order" dialog
  const cancelBtn = document.querySelector('[data-add-cancel]');

  // Add a click event listener to the "Cancel" button
  cancelBtn.addEventListener('click', () => {
    // Hide the "Add Order" dialog
    const addOverlay = document.querySelector('[data-add-overlay]');
    addOverlay.close();
  });

});


//Add button to add order in the Ordered column


const handleAddSubmit = (event) => {
  event.preventDefault();


  // Get form input values
  const title = html.add.title.value;
  const table = html.add.table.value;


  // Create new order object and add to state
  const id = Object.keys(state.orders).length + 1;
  const created = new Date();
  const order = { id, title, table, created };
  state.orders[id] = order;


  // Create HTML element for new order and append to Ordered column
  const orderElement = createOrderHtml(order);
  html.area.ordered.append(orderElement);


  // Reset form and hide add overlay
  html.add.form.reset();
  html.add.overlay.close();
};


html.add.form.addEventListener('submit', handleAddSubmit);
html.add.cancel.addEventListener('click', () => {
  html.add.form.reset();
  html.add.overlay.close();
});
html.add.overlay.addEventListener('close', () => {
  html.add.form.reset();
});


// Cancel Button to close the add order overlay
const handleAddCancel = (event) => {
  event.preventDefault();


  // Clear form
  html.add.form.reset();


  // Close overlay
  html.add.overlay.removeAttribute('open');
}


html.add.form.addEventListener('submit', handleAddSubmit);
html.add.cancel.addEventListener('click', handleAddCancel);


//Editing orders




//Edit Order overlay Open
const handleEditToggle = () => {
  html.edit.overlay.toggleAttribute('open');
};
html.other.grid.addEventListener('click', handleEditToggle);


//Submit Changes
const handleEditSubmit = (event) => {
  event.preventDefault();
  const id = html.edit.id.value;
  const title = html.edit.title.value;
  const table = html.edit.table.value;
 
  const order = state.orders.find((order) => order.id === id);
  if (order) {
  order.title = title;
  order.table = table;
// update the order element on the page
const orderElement = document.querySelector(`.order[data-id="${id}"]`);
if (orderElement) {
  orderElement.querySelector('[data-order-title]').textContent = title;
  orderElement.querySelector('[data-order-table]').textContent = table;
};
  };


// close the "Edit Order" overlay
html.edit.overlay.close();
};


// add an event listener to the "submit" button in the "Edit Order" form
html.edit.form.addEventListener('submit', handleEditSubmit);




//Delete Button
const handleDelete = () => {
  
  const id = html.edit.id.value;
  const table = html.edit.table.value;
  // delete state.orders[id]; // remove order from state
  // document.id.innerHTML = '';
  // let index = overlay.options.length;
  // html.edit.form.remove(id);
  
  html.edit.form.remove();
  // html.area.orderElement.remove();
  html.edit.overlay.close(); // close the Edit Order overlay
  html.edit.form.reset(); // reset the form fields
};
html.edit.delete.addEventListener('click', handleDelete);


//Cancel Button
const handleEditToggleCancel = () => {
  html.edit.overlay.close();
};
html.edit.cancel.addEventListener('click', handleEditToggleCancel);



