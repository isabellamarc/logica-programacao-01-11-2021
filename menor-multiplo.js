function smallest_multiple(roof){
  let numb=roof*2;

  while(true){
    let isDivisible=true;

    for (let i=1; i<=roof; i++){
      if (numb%i !==0){
        isDivisible=false;
        break;
      }
    }
    if (isDivisible) {
      return numb;
    }
  }
}