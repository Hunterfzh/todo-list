// ADD YOUR CODE BELOW

// 1. Start with an array of strings (ex: "grapes", "bread", "tea")
let todoItems = [
  // add more items here
];

// 2. Create variables for each interactive DOM element
const addItemButton = document.getElementById("add-item-button");
// add more variables below
const list = document.getElementById("list");
const textInput = document.getElementById("text");
const sortBtn = document.getElementById("sort");
const clearBtn = document.getElementById("clear");

// 3. Write a function to display all items in the #list element
function updateList() {
  // add your code here
  // Clearing the current list
  list.innerHTML = "";

  // Loop through each item and create a list element for it
  todoItems.forEach(function (item, index) {
    const li = document.createElement("li");
    li.textContent = item;

    // Remove item when clicked
    li.addEventListener("click", function () {
      todoItems.splice(index, 1);
      updateList();
    });

    list.appendChild(li);
  });
}

updateList();

// 4. Handle adding a new item when the form is submitted
addItemButton.addEventListener("click", function () {
  // add your code here

  const value = textInput.value.trim();

  // Bonus prompt: empty tasks not allowed
  if (value === "") return;

  todoItems.push(value);
  textInput.value = "";
  updateList();
});

// Also allows user to  press Enter to add an item
textInput.addEventListener("keydown", function (e) {
  if (e.key === "Enter") {
    addItemButton.click();
  }
});

// 5. Sort items alphabetically when sortBtn is clicked
sortBtn.addEventListener("click", () => {
  // add your code here
  todoItems.sort(function (a, b) {
    return a.localeCompare(b);
  });
  updateList();
});

// 6. Clear all items when clearBtn is clicked
clearBtn.addEventListener("click", () => {
  // add your code here
  todoItems = [];
  updateList();
});
