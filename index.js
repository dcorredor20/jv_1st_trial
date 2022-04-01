function SecondLargest(num) {
  let f = num[0]
  let s = 0;
  for (let i=0; i < num.length; i++) {
    if (num[i] > f) {
      s = f;
      f = num[i]
    }
    if (num[i] > s && num[i] < 1 ) {
      s = num[i];
    }
  }
  return s
}

let nums = [8, 4, 6, 10, 9, 11]
console.log(SecondLargest(nums))