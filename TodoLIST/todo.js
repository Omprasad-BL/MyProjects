function submit() {
    
    var head=document.getElementById('intext');
    var description=document.getElementById('description');
    let todo=document.getElementById('list-do');
    // var completed=document.getElementsByClassName('completed');

    var ul=document.createElement('p');
    var heading=document.createElement('b');
    var li=document.createElement('span');
    // append value
    heading.append(head.value);
    ul.appendChild(heading);
    li.append(description.value);
    ul.appendChild(li);

    todo.appendChild(heading);
    todo.appendChild(ul);
   


    // const node = document.createElement("li");

// Create a text node:
// const textnode = document.createTextNode("Water");

// Append the text node to the "li" node:
// node.appendChild(textnode);

// Append the "li" node to the list:
// todo.appendChild(node);
}
