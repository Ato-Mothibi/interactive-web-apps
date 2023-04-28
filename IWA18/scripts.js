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


  // When the submit button is clicked, add the order to the selected table
   submitOrderBtn.addEventListener('click', () => {
    

     
        //Close the "Add Order" dialog
        addOverlay.close();
       });



const handleAddSubmit = (event) => {
  event.preventDefault();

// get the input values from the form
  
const title = document.querySelector('[data-add-title]').value;
const table = document.querySelector('[data-add-table]').value;

// create a new order element with the input values
const newOrderElement = document.createElement('div');
newOrderElement.classList.add('order');
newOrderElement.dataset.table = table;
newOrderElement.dataset.column = 'ordered';
newOrderElement.textContent = title;

const order = { id, title, table, created };
const created = new Date();
const id = Object.keys(state.orders).length + 1;
state.orders[id] = order;



// append the new order element to the "ordered" column
 
 const orderElement = createOrderHtml(order);
 html.area.ordered.append(orderElement);

 // Reset form and hide add overlay
 html.add.form.reset();


 html.add.form.addEventListener('submit', handleAddSubmit);
html.add.cancel.addEventListener('click', () => {
  html.add.form.reset();
  html.add.overlay.close();
});
html.add.overlay.addEventListener('close', () => {
  html.add.form.reset();

  })

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





