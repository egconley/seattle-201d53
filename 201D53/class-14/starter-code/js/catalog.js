/* global Product, Cart */

'use strict';

// Set up an empty cart for use on this page.
var cart = new Cart([]);

// On screen load, we call this method to put all of the busmall options
// (the things in the Product.allProducts array) into the drop down list.
function populateForm() {
  var selectElement = document.getElementById('items');
  console.log('hello');
  for (var i=0; i<Product.allProducts.length; i++) {
    var optionEl = document.createElement('option');
    optionEl.textContent = Product.allProducts[i].name;
    console.log('hello again');
    selectElement.appendChild(optionEl);
  }

}


// When someone submits the form, we need to add the selected item to the cart
// object, save the whole thing back to local storage and update the screen
// so that it shows the # of items in the cart and a quick preview of the cart itself.

var dropDown = document.getElementById('items');
dropDown.addEventListener('submit', handleSubmit);

var quantityBox = document.getElementById('quantity');
quantityBox.addEventListener('submit', handleSubmit);

function handleSubmit(event) {
  event.preventDefault();

  // Do all the things ...
  addSelectedItemToCart();
  cart.saveToLocalStorage();
  updateCounter();
  updateCartPreview();

}

// TODO: Add the selected item and quantity to the cart
function addSelectedItemToCart() {
  // TODO: suss out the item picked from the select list
  var selectedItem = Product.allProducts[dropDown.selectedIndex].name;
  // console.log(selectedItem);
  // TODO: get the quantity
  var selectedQuantity = Number(quantityBox.value);
  console.log(selectedQuantity);
  // TODO: using those, add one item to the Cart
    CartItem.product = selectedItem;
    CartItem.quantity = selectedQuantity;
    // console.log(CartItem.product, CartItem.quantity);
    // console.log('Cart.items: ', Cart);
    new Cart(CartItem);
}

// TODO: Update the cart count in the header nav with the number of items in the Cart
function updateCounter() {}

// TODO: As you add items into the cart, show them (item & quantity) in the cart preview div
function updateCartPreview() {
  // TODO: Get the item and quantity from the form
  // TODO: Add a new element to the cartContents div with that information
}

// Set up the "submit" event listener on the form.
// This is the trigger for the app. When a user "submits" the form, it will
// Call that handleSubmit method above and kick off the whole process
var catalogForm = document.getElementById('catalog');
catalogForm.addEventListener('submit', handleSubmit);

// Before anything else of value can happen, we need to fill in the select
// drop down list in the form.
populateForm();
