// create fabonacci series

function getFabonacci(n) {
  let series = [];
  for (let i = 0; i < n; i++) {
    if (series.length === 0) {
      series.push(0);
    } else if (series.length === 1) {
      series.push(1);
    } else {
      let currentElement =
        series[series.length - 1] + series[series.length - 2];
      series.push(currentElement);
    }
  }
  return series;
}

console.log(getFabonacci(5));
