let ar=[1,2,3,4,5,7];

// console.log(ar.length);

function missing(ar) {

    let l=ar.length;
    let sum=1;
for(let i=2;i<=(l+1);i++){
    sum=sum+i;
    console.log(sum); 
    sum=sum-ar[i-2];
    console.log(sum);
    console.log("=======================");
}
return sum;

    
}
console.log(missing(ar));