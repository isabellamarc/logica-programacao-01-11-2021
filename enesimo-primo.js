function isPrime(n){
  for (let i=2; i<n; i++){
    if (n%i===0){
      return false;
    }
  }
  return true;
}

function nth_prime(n){
  const arr=[];
  for (let i=2; arr.length<n; i++){
    if (isPrime(i)){
      arr.push(i);
    }
  }
  return arr[n-1];
}