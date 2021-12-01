function firstNaturalSumSquare(n){
  let sum=0;
  for(let i=1; i<=n; i++){
    sum+=i;
  }
  return sum*sum;
}

function squaredSum(n){
  let sum=0;
  for(let i=1; i<=n; i++){
    sum+=i*i;
  }
  return sum;
}

function sum_square_difference(n){
  return firstNaturalSumSquare(n)-squaredSum(n);
}