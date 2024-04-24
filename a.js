console.log("Bismillah");
/**
 *
 * @param {number} n
 * @var x = x-axis iteration
 * @var y = y-axis iteration
 */
function printA(n) {
  n = n % 2 == 0 ? n + 1 : n;
  let center = Math.round(n / 2);

  for (let y = 0; y < n; y++) {
    let str = "";
    for (let x = 0; x < n; x++) {
      if (center > 1) {
        if (x == center || x == center + y * 2) {
          str += "*";
        } else {
          str += " ";
        }
      } else if (center == 1) {
        str += "*";
      } else if (center < 1) {
        if (x == 0 || x == n - 1) {
          str += "*";
        } else {
          str += " ";
        }
      }
    }
    center--;
    console.log(str);
  }
}

console.log(printA(14));
