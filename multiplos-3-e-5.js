function multiples_of_3_or_5(roof) {
  let total=0;
  for (let i=roof-1; i>0; i--){
    if (1%3===0 || i%5===0){
      total +=i;
    }
  }
  return total;
}