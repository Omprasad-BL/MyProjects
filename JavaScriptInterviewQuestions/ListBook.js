let arr = [
  {
    book: ["Hanunam Chalisa"],
  },
  {
    book: ["Mahabharatha", "Ramayana"],
  },
  {
    book: ["brothers", "Hello world"],
  },
];
let result=arr.reduce((list,books)=>{
    return [...list,...books.book]
},[])


console.log(result);