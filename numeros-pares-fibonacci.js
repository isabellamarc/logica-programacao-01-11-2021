function even_fibonacci_numbers(roof) {
  const series=[1, 2];
  while (series[series.length-1]<roof){
    const lastI=series.length-1;
    const sum=series[lastI]+series[lastI-1];
    if (sum>roof){
      break;
    }
    series.push(sum);
  }
  return series.reduce((acc, cur) => {
    if (cur%2===0){
      return cur+acc;
    }
    return acc;
  }, 0);
}