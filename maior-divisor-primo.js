function isPrime(n){
  for (let i=2; i<n; i++){
    if (n%i===0){
      return false;
    }
  }
  return true;
}
function largest_prime_factor(number){
  const numb=math.ceil(number/2);
  for (let i=numb; i>1; i--){
    if (number%i===0 && isPrime(i)){
      return i;
    }
  }
}