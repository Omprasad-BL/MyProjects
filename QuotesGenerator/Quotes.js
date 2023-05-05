function generate() {
    var quote= document.getElementById("quote");
    var arr=[
        "Hello world",
        "Royal Brothers",
        "Brothers Bond",
        "Blood Bond",
        "Hey brother",
        "Hope for the Good things",
        "All is well ",
        "Krishna bless you for the good things"
    ]
    quote.innerHTML= arr[Math.floor(Math.random()*arr.length)]

}