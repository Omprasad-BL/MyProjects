let arr = [22, 3, 3, 555, 355, 22];

function remove(ar) {
  let list = ar.filter((item, index) => {
    console.log("index");
    return ar.indexOf(item) !== index  ;
  });
  return list;
}
console.log(remove(arr));