//Node Constructor
function Node(title, target) {
    this.title = title;
    this.target = target;
}
//UI Constructor
function UI() {}

//Add Node to List
UI.prototype.addNodeToList = function(node){
  const list = document.getElementById('node-list');
  //Create tr element
  const row = document.createElement('tr');
  //Insert cols
  row.innerHTML = `
  <td>${node.title}</td>
  <td>${node.target}</td>
  <td><a href="#" class="delete">X<a></td>
  `;
  list.appendChild(row);
}
//Show Alerts
UI.prototype.showAlert = function(message, className) {
    //Create div
    const div = document.createElement
    ('div');
    //Add classes
    div.className = `alert ${className}`;
    //Add Text
    div.appendChild(document.createTextNode(message));
    //Get parent
    const container =
    document.querySelector('.container');
    // Get Form
    const form = document.querySelector
    ('#node-form');
    //Insert alert
    container.insertBefore(div, form);

    //Timeout
    setTimeout(function(){
        document.querySelector('.alert')
        .remove();
    }, 3000);
}

//Delete Book
UI.prototype.deleteBook = function(target){
    if(target.className === 'delete'){
        target.parentElement.parentElement.remove();
    }
}

// Clear Fields
UI.prototype.clearFields = function(){
    document.getElementById('title').value = '';
    document.getElementById('target').value = '';
}

//Event Listeners
document.getElementById('node-form').addEventListener('submit',
function(e){
    //Get Form Values
    const title = document.getElementById('title').value,
          target = document.getElementById('target').value

    //Instantiate
    const node = new Node(title, target);

    //Instantiate UI
    const ui = new UI();
    
    // Validation
    if(title ==='' || target === '' ) {
        //Error Alert
        ui.showAlert('Please fill in all fields', 'error');
    } else {

        //Add Node to list
        ui.addNodeToList(node);

        //Show success
        ui.showAlert('Book Added', 'success');

        // Clear fields
        ui.clearFields();

    }

    e.preventDefault();
});

 // Event Listener for Delete

 document.getElementById('node-list').addEventListener
 ('click', function(e){

     //Instatiate UI
     const ui = new UI();

     //Delete Book
     ui.deleteBook(e.target);

    //Show Message
     ui.showAlert('Book Removed', 'success')
     
    e.preventDefault();
 });

