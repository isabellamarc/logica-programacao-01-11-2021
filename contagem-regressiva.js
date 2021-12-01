let x=10;

function count_down(x) {
  let str=x;
  for (let i=x-1; i>=0; i--){
    str+= "..." + i;
  }
  return str+"!!!";
}