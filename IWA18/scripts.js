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
}


const handleDragStart = (event) => {
    const { id } = event.target.dataset
    updateDragging({ id })
    event.dataTransfer.setData('text/plain', id)
    event.dataTransfer.dropEffect = 'move'
}
const handleDragEnd = (event) => {
    updateDragging({ id: null, over: null })
    updateDraggingHtml({ id: null, over: null })
}


//const handleHelpToggle = (event) => {
    // Select the "Help" button
const helpBtn = document.querySelector('[data-help]');
const closeBtn = document.querySelector('[data-help-cancel]')
const addOrderButton = document.querySelector('.button')

// Add a click event listener to the "Help" button
helpBtn.addEventListener('click', () => {
  // Show the "Help" overlay
  const helpOverlay = document.querySelector('[data-help-overlay]');
  helpOverlay.showModal();
    //Close in ?
  closeBtn.addEventListener('click', () => {
    helpOverlay.close()
    addOrderButton.focus()

})
})
//}

// add order button
 // Select the "Add Order" button
 const addOrderBtn = document.querySelector('[data-add]');
 const tableSelect = document.querySelector('[data-add-table]');
 const submitOrderBtn = document.querySelector('[data-submit-order]');

 // Add a click event listener to the "Add Order" button
 addOrderBtn.addEventListener('click', () => {
 // Show the "Add Order" dialog
 const addOverlay = document.querySelector('[data-add-overlay]');
  addOverlay.showModal();

  // When the submit button is clicked, add the order to the selected table
  submitOrderBtn.addEventListener('click', () => {
    const tableId = tableSelect.value;
    const table = state.tables.find(table => table.id === tableId);
    const item = document.querySelector('[data-add-item]').value;
    const price = document.querySelector('[data-add-price]').value;

     // Add the new order to the table's orders array
     table.orders.push({ item, price });

     // Update the table's total cost
     table.total += parseFloat(price);
 
     // Update the UI to reflect the new order and total cost
     updateUI();
 
    
   });
 });

 // Select the "Cancel" button in the "Add Order" dialog
 const cancelBtn = document.querySelector('[data-add-cancel]');

 // Add a click event listener to the "Cancel" button
 cancelBtn.addEventListener('click', () => {
   // Hide the "Add Order" dialog
   const addOverlay = document.querySelector('[data-add-overlay]');
   addOverlay.close();
 });

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

// const handleAddToggle = (event) => {
//     const addOverlay = document.querySelector('.overlay.add')
//     if (addOverlay.classList.contains('active')) {
//         addOverlay.classList.remove('active')
//         html.other.add.focus()
//         clearAddForm()
//     } else {
//         addOverlay.classList.add('active')
//         html.add.cancel.focus()
//     }
// }


// const handleAddSubmit = (event) => {
//     event.preventDefault()
//     const form = event.target
//     const tableInput = form.elements.table
//     const orderInput = form.elements.order
//     const table = tableInput.value
//     const order = orderInput.value.trim()

//     if (!order) {
//         orderInput.focus()
//         return
//     }

//     const orderData = addOrder(table, order)
//     addOrderHtml(orderData)
//     handleAddToggle()
// }


// const handleEditToggle = (event) => {
//     const target = event.target.closest('.order')
//     if (!target) return

//     const { id, table, order, status } = getOrderData(target)
//     const editOverlay = document.querySelector('.overlay.edit')
//     const form = editOverlay.querySelector('form')
//     const tableInput = form.elements.table
//     const orderInput = form.elements.order
//     const statusInput = form.elements.status

//     tableInput.value = table
//     orderInput.value = order
//     statusInput.value = status
//     form.dataset.id = id

//     editOverlay.classList.add('active')
//     statusInput.focus()
// }


// const handleEditSubmit = (event) => {
//     event.preventDefault()
//     const form = event.target
//     const id = form.dataset.id
//     const tableInput = form.elements.table
//     const orderInput = form.elements.order
//     const statusInput = form.elements.status

//     const table = tableInput.value
//     const order = orderInput.value.trim()
//     const status = statusInput.value

//     if (!order) {
//         orderInput.focus()
//         return
//     }

//     updateOrder(id, table, order, status)
//     updateOrderHtml(id, table, order, status)
//     handleEditToggle()
// }


// const handleDelete = (event) => {
//     const form = event.target.closest('form')
//     const id = form.dataset.id
//     deleteOrder(id)
//     removeOrderHtml(id)
//     handleEditToggle()
// }


// html.add.cancel.addEventListener('click', handleAddToggle)
// html.other.add.addEventListener('click', handleAddToggle)
// html.add.form.addEventListener('submit', handleAddSubmit)

// html.other.grid.addEventListener('click', handleEditToggle)
// html.edit.cancel.addEventListener('click', handleEditToggle)
// html.edit.form.addEventListener('submit', handleEditSubmit)
// html.edit.delete.addEventListener('click', handleDelete)

// html.help.cancel.addEventListener('click', handleHelpToggle)
// html.other.help.addEventListener('click', handleHelpToggle)

// for (const htmlColumn of Object.values(html.columns)) {
//     htmlColumn.addEventListener('dragstart', handleDragStart)
//     htmlColumn.addEventListener('dragend', handleDragEnd)
// }

// for (const htmlArea of Object.values(html.area)) {
//     htmlArea.addEventListener('dragover', handleDragOver)
// }