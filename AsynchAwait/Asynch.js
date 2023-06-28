// async function Demo(ml) {
//     var val= new Promise((resolve, reject)=>setTimeout(resolve,ml));
//     resolve("Hello resolved")
//     return val;
// }
// Demo(2000);


function prom(timeout) {
    var promise = new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve("hello Issue resolved");

        }, timeout);
        reject("issue not resolved ");
    });

    //   Promise work
    promise.then((result) => {
        console.log(result);
    }).catch((err) => {
        console.log(err);
    });
}
prom(3000);


//  using async await  and  Fetch
async function Demo2() {
    var dataa = await fetch("https://dummyjson.com/users");

    var ans = await dataa.json();
    // console.log( typeof ans);

    console.log(ans.users[5].image);

    // For each for all elements stored in form of array
    ans.users.forEach(element => {
        console.log(element.firstName.trim(), "\t \t \t", element.lastName.trim(), "\t \t", element.birthDate)
    });

}
Demo2();


//  Fetch api
function fetchText() {
    fetch('https://dummyjson.com/users')
        .then(response => response.json())
        // .then(data => data.users.map((element) => {
        .then((element) => {

            //  HERE IAM CONVERTING FROM JSON OBJECT THEN ACCESSING THOSE VALUES USING FOREACH LOOP
            console.log(element);
            let table = "<tr><th>fname</th><th>lname</th><th> address</th> <th> phone</th> <th> email</th></tr>";
            element.users.forEach(element => {
        // console.log(element.firstName.trim(), "\t \t \t", element.lastName.trim(), "\t \t", element.birthDate)

                table += "<tr><td>";
                table += element.firstName;
                table += "</td><td>";
                table += element.lastName;
                table += "</td><td>";
                table += element.address.address;
                table += "</td><td>";
                table += element.phone;
                table += "</td><td>";
                table += element.email;
                table += "</td></tr>";
    });
               
            
            document.getElementById("tbl").innerHTML = table;
        })

        // }))
        .catch((err) => {
            console.log(err);
        })


}
fetchText();




