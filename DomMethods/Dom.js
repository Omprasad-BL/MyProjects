let create=document.createElement('div');
console.log(create);
create.innerHTML="Hello";
// create.setAttribute.(create,"hello");


let head=document.createElement('h3');
console.log(head);
head.innerText="Hoe";

create.append("brothers");
create.append(head);


create.append(head);

create.id="HelloItsId";
create.className="HellItsClass";




let tag=document.createElement('h1');
  let text= tag.innerText="omi"
    // tag.append(text);
    document.body.append(tag);


    var table=document.createElement('table');
    document.body.append(table);

    table.style.border="2px solid red";
     var tr=document.createElement('tr');
    //  tr.innerText="table Row";
    var td1=document.createElement('td');
    var td2=document.createElement('td');
    var td3=document.createElement('td');

    td1.innerText="One";
    td2.innerText="Two";
    td3.innerText="Three";
    td1.style.border="1px solid red";
    td2.style.border="1px solid red";
    td3.style.border="1px solid red";
    tr.append(td1);
    tr.append(td2);
    tr.append(td3);

    table.append(tr);
     












