let arrayOfTodos = [
  {
  "userId": 14,
  "id": 1,
  "title": "delectus aut autem",
  "completed": false
},
{
  "userId": 20,
  "id": 2,
  "title": "delectus aut autem",
  "completed": false
}]
console.log('userid', arrayOfTodos[0].userId)
const fetchTodos = () => {
  fetch('https://jsonplaceholder.typicode.com/todos')
  .then( (response) => response.json())
  .then( (json) => arrayOfTodos = json)
}

const logTodos = () => {
  console.log(arrayOfTodos)
}

const populateTodos = () => {
  
  //access the ol tag to insert list items
  var ol = document.getElementById('todo-list')
  
  for (let index = 0; index < 20; index++) {

  //created list item
  var listItem = document.createElement("li");

//loop through attay to poopulate don with each items title
  const elementTitle = arrayOfTodos[index].title
  

//created text to go inside <li> text </li> 
  var listItemText = document.createTextNode(elementTitle);

//append tecxt to the listItem
  listItem.appendChild(listItemText);
  
//append to ol li text li ol
  ol.appendChild(listItem)
  //this is to give li the id so we can later grab this id and remove the list item from the html doc
  listItem.setAttribute("id","liid")
 
  

var isComplete = arrayOfTodos[index].completed;
  
 for (let index = 0; index < 20; index++) {
   
    if (isComplete){
      (listItem.style.backgroundColor = "#FFB6C1")
   }
   else{
    (listItem.style.backgroundColor = "#FF0120")
   }

}
}
}

// Populate it with only todos with the userID that matches the number inputted
// Store the currently filtered todos in a variable
// So that you can create two more buttons that when clicked:
// Removes those todos
// Shows only todos that are either:
// completed
// not completed


// const submitAndSearch = () => {
// const takeIdNumber = arrayOfTodos[idNumber].title

// }
const populateTodosId = () => {
  var ol = document.getElementById('todo-list')
  var idNumber = document.getElementById('numInput').value
  for (let index = 0; index < 1; index++) {
    var listItem = document.createElement("li");
    const elementTitle = arrayOfTodos[idNumber - 1].title
    var listItemText = document.createTextNode(elementTitle);
    listItem.appendChild(listItemText);
    ol.appendChild(listItem)
    listItem.setAttribute("id","liid")
  }
  
  
  for (let index = 0; index < 20; index++) {
    
     if (isComplete){
       (listItem.style.backgroundColor = "#FFB6C1")
    }
    else{
     (listItem.style.backgroundColor = "#FF0120")
    }
}
}

var isComplete = arrayOfTodos[index].completed;
      
let filterComplete = () => {
    for (let index = 0; index < 20; index++) {  
      var myobj = document.getElementById("liid"); 
      if (isComplete) {
        myobj.remove()
      } else {
        (listItem.style.backgroundColor = "#FF0120") 
    };
  };
}


 let resetTodos = () => {   
    for (let i=0; i < 500; i++){   
      var myobj = document.getElementById("liid");   
      myobj.remove();
    } 
  }
