// append "remove" button to list item
var myList = document.getElementsByTagName("LI");
var i;
for (i = 0; i < myList.length; i++) {
  var span = document.createElement("SPAN");
  var del = document.createTextNode("\u00D7");
  span.className = "remove";
  span.appendChild(del);
  myList[i].appendChild(span);
}

// remove an item

var remove = document.getElementsByClassName("remove");
var i;
for (i = 0; i < remove.length; i++) {
  remove[i].onclick = function() {
    if (window.confirm("This item will be deleted.")) {
      var div = this.parentElement;
      div.style.display = "none";
    }
    
  }
}

// check item when clicked
var list = document.querySelector('ul');
list.addEventListener('click', function(ev) {
  if (ev.target.tagName === 'LI') {
    ev.target.classList.toggle('checked');
  }
}, false);


// add new item to list
function newElement() {
  var li = document.createElement("li");
  var inputValue = document.getElementById("myInput").value;
  var desc = document.getElementById("description").value;
  var deadline = document.getElementById("deadline").value;
  var item = inputValue + " - " + desc + " - " + deadline.split('T').join('   ');
  sessionStorage.setItem("item", item);
  var t = document.createTextNode(item);
  li.appendChild(t);
  if (inputValue === '' || desc === '') {
    alert("Please fill in all required information.");
  } else {
    document.getElementById("list").appendChild(li);
  }
  document.getElementById("myInput").value = "";
  document.getElementById("description").value = "";
  document.getElementById("deadline").value = "";

  var span = document.createElement("SPAN");
  var del = document.createTextNode("\u00D7");
  span.className = "remove";
  span.appendChild(del);
  li.appendChild(span);

  for (i = 0; i < remove.length; i++) {
    remove[i].onclick = function() {
      var div = this.parentElement;
      div.style.display = "none";
    }
  }
}

