console.log("Hello");

// Factorrial
{
  function factorial(a) {
    let f = 1,
      x;
    x = 2 * a - 6; //factorial limit
    if (a < 0) {
      console.log("manfiy sondan factorial chiqmaydi");
    }
    for (let i = 1; i <= x; i++) {
      f *= i;
    }
    return f;
  }
  const result = factorial(5);
  console.log(result);
}

{
  let S = 0;
  const arr = [8, 37, 42, 64, 16, 7, 40, 12, 13, 21, 24, 11, 8];
  const h = arr.length;
  for (let i = 0; i < h; i++) {
    S += arr[i];
  }
  let avg = S / h;
  let h2 = 0,
    avg2,
    ss = 0;
  for (let i = 0; i < h; i++) {
    if (arr[i] < avg) {
      h2++;
      ss += arr[i];
      avg2 = ss / h2;
    }
  }
  console.log("avg2=" + avg2.toFixed(2) + "  h2=" + h2);
}

// Massive - 2
{
  let a,
    b,
    h,
    numbers = [];
  numbers = [44, 99, 55, 12];
  a = 1;
  b = 3;
  h = numbers.length;
  const min = Math.min(...numbers);
  for (let i = a - 1; i <= b - 1; i++) {
    numbers[i] = numbers[i] / min;
  }
  console.log(numbers.map((aaa) => aaa.toFixed(1)));
}

//  Massive - 3
{
  function massive3(numbers, k, l) {
    let S, h;
    S = 0;
    h = 0;
    for (let i = k - 1; i <= l - 1; i++) {
      h++;
      S += numbers[i];
    }
    avg = S / h;
    return avg;
  }
  let numbers = [6, 93, 73, 62, 26, 28, 65, 74, 53, 59];

  let result = massive3(numbers, 2, 7);
  console.log(result.toFixed(2));
}

//  Massive - 5
{
  function averageOutsideRange(numbers, a, b) {
    let S, h;
    S = 0;
    h = 0;
    for (let i = 0; i < numbers.length; i++) {
      if (i < a - 1 || i > b - 1) {
        S += numbers[i];
        h++;
      }
    }
    avg = S / h;
    return avg;
  }
  let numbers = [51, 49, 9, 76, 56, 78];
  result = averageOutsideRange(numbers, 2, 4);
  console.log(result + "  massive 5");
}

//  Massive - 6
{
  function sumOfSquares(arr) {
    let S = 0;
    const h = arr.length;
    for (let i = 0; i < h; i++) {
      S += arr[i] ** 2;
    }
    return S;
  }

  let arr = [24, 50, 72, 96, 95];
  result = sumOfSquares(arr);
  console.log(result);
}

//  Massive - 7
{
  function divideByMax(arr) {
    let max = Math.max(...arr);
    for (let i = 0; i < arr.length; i++) {
      arr[i] = arr[i] / max;
    }
    return arr;
  }

  let arr = [37, 23, 51, 47, 12, 23, 90, 85, 98];
  result = divideByMax(arr);
  console.log(result.map((num) => num.toFixed(2)));
}

// Massive - 8
{
  function divideByMin(arr) {
    let min = Math.min(...arr);
    for (let i = 0; i < arr.length; i++) {
      arr[i] = arr[i] / min;
    }
    return arr;
  }

  let massive = [69, 48, 58, 45, 57, 55, 88, 89, 85];
  result = divideByMin(massive);
  console.log(result.map((minNum) => minNum.toFixed(2)));
}

//  Massive - 9
{
  function logProductAbove(arr, M) {
    let P = 1;
    for (let i = 0; i < arr.length; i++) {
      if (arr[i] > M) {
        P *= arr[i];
      }
    }
    return Math.log(P).toFixed(2);
  }

  let arr = [26, 18, 32, 68, 81],
    arr2 = [49, 39, 42, 12, 53, 35, 94, 21, 35, 12];
  result = logProductAbove(arr, 6);
  result2 = logProductAbove(arr2, 12);
  console.log(result + "\n" + result2);
}

//  Massive - 10
{
  function productOfKandM(arr, M, K) {
    let product = 1;
    for (let i = 0; i < arr.length; i++) {
      if (arr[i] == M || arr[i] == K) {
        product *= arr[i];
      }
    }
    return product;
  }

  let arr = [7, 11, 83, 18, 31, 3, 12, 3];
  result = productOfKandM(arr, 31, 3);
  console.log(result);
}

//  Massive - 11
{
  function sumAboveM(arr, M) {
    let sum = 0;
    for (let i = 0; i < arr.length; i++) {
      if (arr[i] > M) {
        sum += arr[i];
      }
    }
    return sum;
  }
  let numbers = [12, 88, 30, 87];
  let result = sumAboveM(numbers, 80);
  console.log(result);
}

//  Massive - 12
{
  function multipToSumRatio(arr) {
    let sum, multip;
    sum = 0;
    multip = 1;
    for (let i = 0; i < arr.length; i += 2) {
      multip *= arr[i];
    }
    for (let i = 1; i < arr.length; i += 2) {
      sum += arr[i];
    }
    value = multip / sum;
    return value.toFixed(2);
  }
  let numbers = [38, 34, 13, 48];
  let result = multipToSumRatio(numbers);
  console.log(result);
}

//  Massive - 13
{
  function negativeAvg(arr) {
    let sum, h;
    sum = 0;
    h = 0;
    for (let i = 0; i < arr.length; i++) {
      if (arr[i] < 0) {
        sum += arr[i];
        h++;
      }
    }
    resultFunction = sum / h;
    return resultFunction.toFixed(2);
  }

  let numbers = [63, 89, -6, 48, 77, -19, 16, 73, -72, 34];
  const result = negativeAvg(numbers);
  console.log(result);
}

//  Massive - 14
{
  function sinOfMultiples2Or5(arr) {
    let multip = 1;
    for (let i = 0; i < arr.length; i++) {
      if (arr[i] % 2 == 0 || arr[i] % 5 == 0) {
        multip *= arr[i];
      }
    }
    sin = Math.sin(multip);
    return sin.toFixed(2);
  }
  let numbers = [62, 54, 24, 95, 67, 62, 25, 17, 77, 50, 38, 12, 90, 59, 7];
  console.log(sinOfMultiples2Or5(numbers));
}

//  Massive - 15
{
  function squareSumBelowM(arr, M) {
    let sum = 0;
    for (let i = 0; i < arr.length; i++) {
      if (arr[i] < M) {
        sum += arr[i] ** 2;
      }
    }
    return sum;
  }

  let num = [85, 15, 57, 68, 18, 67, 7, 45, 69, 21, 1, 5, 98, 34];
  let result = squareSumBelowM(num, 92);
  console.log(result + " massiv - 15");
}

//  Massive - 16
{
  function divideByMax(arr) {
    const max = Math.max(...arr);
    for (let i = 0; i < arr.length; i++) {
      arr[i] = arr[i] / max;
    }
    return arr;
  }
  let num = [30, 31, 30, 94, 61, 41, 74, 78];
  let result = divideByMax(num);
  console.log(result.map((i) => i.toFixed(2)));
}

//  Massive - 17
{
  function oddIndexSum(numbers) {
    let sum = 0;
    for (let i = 0; i < numbers.length; i += 2) {
      sum += numbers[i];
    }
    return sum;
  }
  let arr = [93, 64, 63, 8, 50, 24, 32, 80, 3, 76];
  console.log(oddIndexSum(arr));
}

//  Massive - 18
{
  function averageOfOddIndices(numbers) {
    let sum, h;
    sum = 0;
    h = 0;
    for (let i = 0; i < numbers.length; i += 2) {
      sum += numbers[i];
      h++;
    }
    avg = sum / h;
    return avg.toFixed(2);
  }

  let arr = [76, 12, 51, 50, 98];
  let result = averageOfOddIndices(arr);
  console.log(result + " 51.00 masive 18");
}

//  Massive - 19
{
  function oddValuesAvg(num) {
    let sum, h;
    sum = 0;
    h = 0;
    for (let i = 0; i < num.length; i++) {
      if (num[i] % 2 != 0) {
        sum += num[i];
        h++;
      }
    }
    avg = sum / h;
    return avg.toFixed(2);
  }
  let arr = [23, 87, 77, 4, 14, 57, 91, 16, 80, 7, 45, 78, 46];
  console.log(oddValuesAvg(arr));
}

//  Massive - 20
{
  function countOutOfRange(arr, x, y) {
    let h = 0;
    for (let i = 0; i < arr.length; i++) {
      if (arr[i] < x || arr[i] > y) {
        h++;
      }
    }
    return h;
  }
  let nums = [14, 51, -83, 42, -85, -77, 91, 70, -98, 54];
  let result = countOutOfRange(nums, 50, 99);
  console.log(result);
}

//  Massive - 21
{
  function sumAfterIndexM(arr, M) {
    let sum = 0;
    for (let i = M; i < arr.length; i++) {
      sum += arr[i];
    }
    return sum;
  }
  let nums = [93, 91, -45, 84, 94, -67, 48, 95, -29];
  let result = sumAfterIndexM(nums, 5);
  console.log(result);
}

//  Massive - 22
{
  const squaresSumAvg = (arr) => {
    let sum, h;
    sumSquare = 0;
    sum = 0;
    h = 0;
    for (let i = 0; i < arr.length; i++) {
      sumSquare += arr[i] ** 2;
      sum += arr[i];
      h++;
    }
    avg = sum / h;
    return sumSquare, avg.toFixed(2);
  };
  let num = [21, 0, -72, 39, 72, -26, 76, 48, -18, 14, 26, -21, 33];
  let result = squaresSumAvg(num);
  console.log(result);
}
