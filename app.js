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
    
    //Add Node to list
    ui.addNodeToList(node);

    // Clear fields
    ui.clearFields();

    e.preventDefault();
});


