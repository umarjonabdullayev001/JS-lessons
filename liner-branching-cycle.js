console.log("Hello World");

// Algo masalalari

const pi = Math.PI;

// 1.Kubik
{
  let x, V;
  x = 3;
  V = x ** 3;
  console.log(V);
}

// 2. Doira
{
  let r, S;
  r = 7;
  S = pi * r ** 2;
  console.log(S.toFixed(2));
}
// 3. Uchburchak
let S, h;
S = 8;
h = 5;
a = (2 * S) / h;
console.log(a.toFixed(2));

// 4. Shar yuzasi
{
  let r, V;
  r = 2;
  V = 4 * pi * r ** 2;
  console.log(V.toFixed(2));
}

// 5. Uchburchak yarm perimetri
{
  let a, b, c, p;
  a = 6;
  b = 6;
  c = 9;
  p = (1 / 2) * (6 + 6 + 9);
  console.log(p.toFixed(2));
}

// 6. Konus
{
  let h, r, V;
  h = 3;
  r = 5;
  V = (pi * r ** 2 * h) / 3;
  console.log(V.toFixed(2));
}

// 7. Vaqt
{
  let S, v, t;
  S = 2;
  v = 6;
  t = S / v;
  console.log(t.toFixed(2));
}

// 8. Erkin tushish
{
  let h, t;
  const g = 9.8;
  h = 2;
  t = Math.sqrt((2 * h) / g);
  console.log(t.toFixed(2));
}

// 9. Arifmetika
// 1s = 1ml tomchi 2 yilda x (l)
{
  let x, l;
  x = 2;
  l = (1 * 1 * 60 * 60 * 24 * 365 * 2) / 1000;
  console.log(l);
}

// 10.Summa
{
  let n, S;
  n = 4;
  S = (n * (n + 1)) / 2;
  console.log(S);
}

// 11. Og'irlik
{
  let m, F;
  const g = 9.8;
  m = 6;
  F = m * g;
  console.log(F.toFixed(2));
}

// 12. Kuch
{
  let m, a;
  m = 8;
  a = 2;
  F = m * a;
  console.log(F);
}

// 13. Tok kuchi
{
  let I, U, R;
  U = 8;
  R = 7;
  I = U / R;
  console.log(I.toFixed(3));
}

// 14. Zanjir
// parallel
{
  let R, R1, R2, R3;
  R1 = 1;
  R2 = 7;
  R3 = 3;
  R = 1 / (1 / R1 + 1 / R2 + 1 / R3);
  console.log(R.toFixed(2));
}

// 15. Chiziqli-1
{
  let x, y, c1;
  x = 9.79;
  y = 6.74;
  c1 =
    (x + y) / (x ** 2 + Math.abs((y ** 2 + 2) / (x + x ** 3 / 5))) +
    Math.E ** (y + 2);
  console.log(c1.toFixed(2));
}

// 16. Chiziqli-2
{
  let x, y, f1;
  x = 0.22;
  y = 6.17;
  f1 =
    (2 * Math.tan(x + pi / 6)) / (1 / 3 + Math.cos(y + x * x) ** 2) +
    Math.log2(x * x + 2);
  console.log(f1.toFixed(2));
}

// 17. Chiziqli-3
{
  console.time("Time taken");

  let x, y, f2;
  x = 3.19;
  y = 4.75;
  f2 =
    (1 / (x + (2 / x) * x + 3 / x ** 3) + Math.E ** (x * x + 3 * x)) /
      (Math.atan(x + y) + (5 + x) ** 2) -
    Math.cos(y * y + (x * x) / 2) ** 2;
  console.log(f2.toFixed(2));
  console.timeEnd("Time taken");
}

// 18. Cjiziqli-4
{
  let x, y, z;
  x = 4;
  y = 3;
  z =
    Math.log(
      Math.abs(
        (x + y) ** 2 +
          Math.sqrt(Math.abs(y) + 2) -
          (x - (x * y) / ((x * x) / 2 - 5))
      )
    ) +
    Math.cos(x + y) ** 2 / (x + y) ** 1 / 3;
  console.log(z.toFixed(2));
}

// 19. Chiziqli-5
{
  let x, y, T, A;
  x = 7.09;
  y = 3.92;
  A = (x * y + y * y) / (y * y + (y + x * y) / (Math.abs(x * y) + 5));
  T =
    (x * x + 1) / (x * x + A) +
    1 / (1 + Math.cos(x) + 1 / Math.sin(Math.abs(x)));
  console.log(T.toFixed(2));
}

// 20. Chiziqli-6
{
  let a, b, T, A;
  a = 0.36;
  b = 1.02;
  A = ((b * (a + b)) / (2 * b + a * b)) ** 0.25;
  T = a ** 0.2 + A * (a * a + b * b + 2);
  console.log(T.toFixed(2));
}

//  21. Chiziqli-7
{
  let x1, x2, c, d, F, A, B, C;
  x1 = 4.01;
  x2 = 0.33;
  c = 0;
  d = 1;
  A = c * x2 ** 3 + d * x1 ** 3 - c * d;
  B = (c * x1 ** 2 + d * x2 ** 2 + 7) ** 0.5;
  C = x1 * x2 ** 2 + d ** 3;
  F = Math.abs(Math.sin(Math.abs(A)) ** 2 / B) + Math.tan(C);
  console.log(F.toFixed(2));
}

// 22. Chiziqli-8
{
  let a, b, c, d, x, y2, A, B, C;
  a = 0;
  b = 0;
  c = 1;
  d = 1;
  x = 0.12;
  A = a * x * x + b * x + c;
  B = x * a ** 3 + b * b + a ** (b - c);
  C = Math.abs((a * x + b) / (c * x + d + 2 ** c));
  y2 = A / B + Math.cos(C);
  console.log(y2.toFixed(2));
}

// 23. Chiziqli-9
{
  let a, b, c, x, W1, A, B;
  a = 1;
  b = 1;
  c = 1;
  x = 0.33;
  A = Math.abs(x ** 3 + 3 * x) + Math.cos(x - 2);
  B = a / 4 + b / 3 + c / 2 + 1;
  W1 = 0.75 + (8.2 * x * x + A ** 0.5) / B;
  console.log(W1.toFixed(10));
}

// 24. Chiziqli-10
{
  let a, x, TT;
  a = 4;
  x = 1.28;
  TT =
    ((x - 1) ** 0.5 + (x + 2) ** 0.5 + Math.log10(x * a ** 0.5 + 2)) /
    ((x + 2) ** 0.5 + (x + 24) ** 0.5 + x ** 5) ** 0.5;
  console.log("Chiziqli-10 ", TT.toFixed(2));
}

//  25. Tarmolanuvchi-1
{
  let x, y;
  x = 11.99;
  y = 11.99000000001;
  if (x > y) {
    console.log("max(x,y) = x ->", x, " min(x,y) = y ->", y);
  } else {
    console.log("max(x,y) = y ->", y, "min(x,y) = x ->", x);
  }
}

// 26. Tarmoqlanuvchi-2
{
  let x, y, z;
  (x = 2.710000000000102), (y = 2.710000000001), (z = 3.14);
  if (x > y && x > z) console.log("max(x,y,z) =", x);
  if (y > x && y > z) console.log("max(x,y,z) =", y);
  if (z > y && z > x) console.log("max(x,y,z) =", z);

  if (x < y && x < z) console.log("min(x,y,z) =", x);
  if (y < x && y < z) console.log("min(x,y,z) =", y);
  if (z < y && z < x) console.log("min(x,y,z) =", z);
}

//  27. Tarmoqlanuvchi-3
{
  let x, y, z, A, B;
  x = 0;
  y = -0.0001;
  z = -5.0001;
  A = x + y + z;
  B = x + y / 2;
  maxx = x;
  minn = x;
  if (y > maxx) maxx = y;
  if (z > maxx) maxx = z;
  if (A > maxx) maxx = A;

  if (y < minn) minn = y;
  if (z < minn) minn = z;
  if (B < minn) minn = B;
  console.log("max=" + maxx, "min=" + minn);
}

// 28. Tarmoqlanuvchi-4
{
  let a, b, c;
  a = 4;
  b = 2;
  c = 3;
  if (a < b && b < c) console.log("yes");
  else console.log("no");
}

// 29. Tarmoqlanuvchi-5
{
  let a, b, c;
  a = -1;
  b = -3;
  c = -3;
  if (a <= b && b <= c) {
    a = 2 * a;
    b = 2 * b;
    c = 2 * c;
  } else {
    a = Math.abs(a);
    b = Math.abs(b);
    c = Math.abs(c);
  }
  console.log("a, b, c -> " + a, b, c);
}

// 30. Tarmoqlanuvchi-6
{
  let a, b;
  a = 1;
  b = 2;
  if (a > b) console.log("max=" + a);
  else console.log(a, b);
}

// 31. Tarmoqlanuvchi-7
{
  let a, b;
  a = 4;
  b = 0;
  if (a < b) {
    a = 0;
  }
}

// 32. Tarmoqlanuvchi-8
{
  console.log("Tarmoqlanuvchi-8 ");

  let x, y, z;
  x = 1.54;
  y = 1;
  z = 1.64;
  if (x >= 1 && x <= 3) console.log(x);
  if (y >= 1 && y <= 3) console.log(y);
  if (z >= 1 && z <= 3) console.log(z);
}

// 33. Tarmoqlanuvchi-9
{
  let a, b;
  a = 1;
  b = 0;
  let oldA = a;
  let oldB = b;
  if (a < b) {
    a = (a + b) / 2;
    b = 4 * oldX * b;
  } else {
    a = 4 * a * b;
    b = (oldA + b) / 2;
  }
  console.log(
    '"a" ning yangi qiymati ' +
      a.toFixed(1) +
      '\n"b" ning yangi qiymati ' +
      b.toFixed(1)
  );
}

// 34. Tarmoqlanuvchi-10
{
  let x, y, z;
  x = 0;
  y = 2;
  z = -2;
  if (x > 0) x = x * x;
  if (y > 0) y = y * y;
  if (z > 0) z = z * z;
  console.log("x=" + x, "y=" + y, "z=" + z);
}

// 35. Tarmoqlanuvchi-11
{
  let x, y, z;
  x = -3;
  y = -5;
  z = -8;
  if (x < 1 && y < 1 && z < 1) {
    let minn = Math.min(x, y, z);
    if (minn == x) {
      x = (y + z) / 2;
    } else if (minn == y) {
      y = (x + z) / 2;
    } else if (minn == z) {
      z = (x + y) / 2;
    }
  }
  console.log(x, y, z);
}
// 36. Tarmoqlanuvchi-12
{
  let a, b, c, d;
  a = 5;
  b = 2;
  c = 3;
  d = 4;
  if (a <= b && b <= c && c <= d) {
    let maxx = Math.max(a, b, c, d);
    a = maxx;
    b = maxx;
    c = maxx;
    d = maxx;
  } else {
    let minn = Math.min(a, b, c, d);
    a = minn;
    b = minn;
    c = minn;
    d = minn;
  }
  console.log(a, b, c, d);
}

// 36. Tarmoqlanuvchi-13
{
  let x, y;
  x = -13.07;
  y = 6.16;
  if (x < 0 && y < 0) {
    x = Math.abs(x);
    y = Math.abs(y);
  }
  if (x < 0 || y < 0) {
    x += 0.5;
    y += 0.5;
  }

  console.log(x, y);
}
// 37. Tarmoqlanuvchi-14
{
  let x, y, z, maxx;
  x = 1;
  y = 3;
  z = 7;
  if (x + y > z && x + z > y && y + z > x) {
    console.log("YES");
  } else console.log("NO");
}

// 38. Tarmoqlanuvchi-15
{
  let a, b, c;
  a = 3;
  b = 4;
  c = 3;
  const D = b * b - 4 * a * c;
  if (D > 0) {
    const X1 = (-b + D ** 0.5) / (2 * a);
    const X2 = (-b - D ** 0.5) / (2 * a);
    console.log("X1=" + X1, "X2=" + X2);
  }
  if (D == 0) {
    const X = (-b / 2) * a;
    console.log("D=0 tenglama bitta yechimga ega X=" + X);
  }
  if (D < 0) console.log("D<0 tenglama yechimga ega emas ");
}
let A = 1;
console.log(!A);

// 40. Sikl-1
console.log("                    Cycle started  !");

{
  let S, n;
  S = 0;
  n = 2;
  for (let i = 1; i <= n; i++) {
    S += Math.sin(i) / 2 ** i;
  }
  console.log("Sikl 1 " + S.toFixed(2));
}

// 41. Sikl-2
{
  let S, n;
  n = 2;
  S = 0;
  for (let i = 1; i <= n; i++) {
    S += ((-1) ** (i - 1) * Math.sin(i ** i)) / 2 ** i;
  }
  console.log(S.toFixed(2));
}

// 42. Sikl-3
{
  let S, n, f;
  f = 1;
  S = 0;
  n = 2;
  for (let i = 1; i <= n; i++) {
    for (let i = 1; i <= 2 * i - 1; i++) {
      f *= i;
    }
    S += (-1) ** (i - 1) / f;
  }
  console.log(f.toFixed(4));
}

// 43. Sikl-4
{
  let S, x, i;
  S = 0;
  x = 3;
  for (i = 1; i <= 2; i++) {
    S += (-1) ** (i - 1) / x ** (2 * i);
  }
  console.log(S.toFixed(3));
}
// 43. Sikl-4   ! While !
{
  let S, n, x;
  S = 0;
  x = 3;
  n = 1;
  while (n <= 2) {
    S += (-1) ** (n - 1) / x ** (2 * n);
    n++;
  }
  console.log("While " + S.toFixed(3));
}

// 44. Sikl-5
{
  let S, n, x;
  S = 0;
  n = 0;
  x = 1;
  while (n <= 1) {
    S += n / x ** (2 * n);
    n++;
  }
  console.log(S.toFixed(3));
}

// 45. Sikl-6
{
  let n, S, x;
  n = 2;
  x = 1;
  S = ((-1) ** (n - 1) * Math.sin(n * x)) / n; //the denominator cannot be zero
}

// 46. Sikl-7
{
  let n, x, S;
  S = 0;
  n = 1;
  x = 2;
  while (n <= 2) {
    S += x ** n / n ** (1 / 2);
    n++;
  }
  console.log(S.toFixed(3));
}

//47. Sikl-8
{
  let n, x, S, f;
  S = 0;
  n = 1;
  x = 1;
  f = 1;
  while (n <= 2) {
    f *= n;
    S += x ** n / f;
    n++;
  }
  console.log(S.toFixed(3));
}

//  48. Sikl-9
{
  let S, n, x, f;
  S = 0;
  n = 1;
  x = 1;
  f = 1;
  while (n <= 1) {
    f *= n;
    S += ((-1) ** n * x ** n) / f;
    n++;
  }
  console.log(S.toFixed(3));
}

//  49. Sikl-10
{
  let S, n, x, f;
  S = 0;
  n = 1;
  x = 2;
  f = 1;
  while (n <= 2) {
    f *= 2 * n - 1;
    S += ((-1) ** (n - 1) * x ** (2 * n - 1)) / f;
    n++;
  }
  console.log(S.toFixed(3));
}

// 50. Sikl-11
{
  let S, n, x, f;
  S = 0;
  x = 1;
  n = 4;
  for (let i = 1; i <= n; i++) {
    f = 1;
    for (let j = 1; j <= 2 * i - 2; j++) {
      f *= j;
      console.log(f);
    }
    S += ((-1) ** (i - 1) * x ** (2 * i - 2)) / f;
  }
  console.log(S.toFixed(3));
}

//  51. Sikl-12
{
  let S, f, x, n;
  S = 0;
  n = 2;
  x = 2;
  for (let i = 1; i <= n; i++) {
    f = 1;
    for (let j = 1; j <= 2 * i - 2; j++) f *= j;
    S += x ** (2 * i - 2) / f;
  }
  console.log(S.toFixed(3) + "  sikl-12");
}

//  52. Sikl-13
{
  let S, n, x, f;
  S = 0;
  n = 2;
  x = 2;
  for (let i = 1; i <= n; i++) {
    S += x ** (2 * i - 1) / (2 * i - 1);
  }
  console.log(S.toFixed(3));
}

//  53. Sikl-14
{
  let S, n, x, f;
  S = 0;
  n = 2;
  x = 2;
  for (let i = 1; i <= n; i++) {
    f = 1;
    for (let j = 1; j <= 2 * i - 1; j++) f *= j;
    S += x ** (2 * i - 1) / f;
  }
  console.log(S.toFixed(3) + " sikl-14");
}

//  54. Sikl-15
{
  let S, n, x, f;
  S = 0;
  n = 2;
  k = 2;
  f = 1;
  for (let i = 0; i <= n; i++) {
    if (i > 0) f *= i;
    S += ((-1) ** i * k ** i) / f;
  }
  console.log(S.toFixed(3) + " " + f);
}

//  55. Sikl-16
{
  let y, a, b, c;
  y = 0;
  a = 3;
  b = 3;
  c = 4;
  h = 3;
  for (let x = a; x <= c; x += h) {
    let A = (a * x + b) / (b * b + Math.cos(x) ** 2);
    y += A ** (1 / 3) - Math.sin(x * x) / (a * b);
  }
  console.log(y.toFixed(2));
}

// 56. Sikl-17
{
  let y, a, b, c, d;
  y = 0;
  a = 5;
  b = 2;
  c = 5;
  d = 7;
  for (let x = c; x <= d; x += 2) {
    let A = (Math.sin(a * x) + b ** (2 * c)) / (b * b + Math.cos(x) ** 2);
    y += A ** (1 / 3) - Math.sin(x * x) / (a * b);
  }
  console.log(y.toFixed(2));
}

// 57. Sikl-18
{
  let y, a, b, c;
  y = 0;
  a = 3;
  b = 4;
  c = 5;
  h = 2;
  for (let x = a; x <= b; x += h) {
    y += (a ** b + b ** x + c ** a) / (2 * x * x + 3 * a ** x);
  }
  console.log(y.toFixed(2) + "  sikl-18");
}

// 58. Sikl-19
{
  let y, a;
  y = 0;
  a = 3;
  pi = Math.PI;
  h = pi / 19; //step
  for (let x = -pi / 2; x <= pi; x += h) {
    y += (a ** a) ** (1 / 3) + x * x * Math.cos(a * x);
  }
  console.log(y.toFixed(2));
}

// 59. Sikl-20
{
  let y, a;
  y = 0;
  a = 3;
  h = 0.5; //step
  for (let x = 0; x <= 10; x += h) {
    y += a * Math.cos(x) - Math.sin(x * x);
  }
  console.log(y.toFixed(2));
}

// 60. Sikl-21
{
  let y, a, b, x;
  y = 0;
  a = 5;
  b = 4;
  x = 1;
  while (x <= 12) {
    let A = (b + Math.sin(x)) / (a ** 3 + Math.cos(x ** 3) ** 2);
    y += a * a + A ** (1 / 5);
    x += 2;
  }
  console.log(y.toFixed(2));
}

// 61. Sikl-22
{
  let y, a, b, c, x;
  y = 0;
  a = 2;
  b = 2;
  c = 3;
  x = 1;
  while (x <= 10) {
    y += (a * x * x) / b + x / c;
    x += 3;
  }
  console.log(y.toFixed(2));
}

// 62. Sikl-23
{
  let y, a, b, c, x;
  y = 0;
  a = 2;
  b = 4;
  c = 2;
  x = 5;
  while (x <= 10) {
    y += (a * a + b * x + x ** c) / (a * a + b * b + x * x);
    x += 0.5; //step
  }
  console.log(y.toFixed(2) + " sikl-23");
}

// 63. Sikl-24
{
  let y, a, b, c;
  y = 0;
  a = 3;
  b = 3;
  c = 2;
  h = 0.25; //step
  for (let x = -1; x <= 1; x += h) {
    let A = (Math.sin(a * x) + b ** c) / (b * b + Math.cos(x) ** 2);
    y += A ** (1 / 3) - Math.sin(x * x) / (a * b);
  }
  console.log(y.toFixed(2));
}

// 64. Sikl-25
{
  let y, a, b, c;
  y = 0;
  a = 3;
  b = 1;
  c = 3;
  for (let x = 1; x <= 20; x += 5) {
    y += (a * x * x + b * x + c) / (a * a + b * b + x * x);
  }
  console.log(y.toFixed(2));
}

// 65. Sikl-26
{
  let y, a, b, c;
  y = 0;
  a = 3;
  b = 3;
  c = 1;
  h = 0.25;
  for (let x = c; x <= b; x += h) {
    y += a * a * Math.cos(x) + Math.sin(x) / 2 + b * x * x;
  }
  console.log(y.toFixed(2));
}

//  67. Sikl-27
{
  let y, a, h;
  y = 0;
  a = 3;
  const pi = Math.PI;
  h = pi / 10;
  for (let x = -pi / 2; x <= pi; x += h) {
    y += 2 * (a ** Math.sin(2 * x)) ** (1 / 3) + x * x * Math.cos(a * x);
  }
  console.log(y.toFixed(2));
}

// 68. Sikl-28
{
  let y, a, b, c, d;
  y = 0;
  a = 4;
  b = 4;
  c = 2;
  d = 1;
  for (let x = d; x <= c; x += 1.5) {
    let A = (a * x + b) / (b * b + Math.cos(x) ** 2);
    y += A ** (1 / 5) - Math.sin(x * x) / (a * b);
  }
  console.log(y.toFixed(2));
}

//  69. Sikl-29
{
  let y, a, b, c;
  y = 0;
  a = 2;
  b = 2;
  c = 1;
  for (let x = 0; x <= 1; x += 0.25) {
    let A = (Math.sin(a * x) + b ** c) / (b * b + Math.cos(x) ** 2);
    y += A ** (1 / 2) - Math.sin(x * x) / (a * b);
  }
  console.log(y.toFixed(2));
}

//  70. Sikl-30
{
  let y, a, b, c;
  y = 0;
  a = 3;
  b = 3;
  c = 2;
  const pi = Math.PI,
    e = Math.E;
  for (let x = -pi; x <= pi; x += pi / 10) {
    y +=
      (Math.log(a ** (2 * Math.sin(x))) + e ** (2 * x)) / (Math.atan(x) + b) +
      c;
  }
  console.log(y.toFixed(2));
}

// 71. Sikl-31
{
  let S, P, SP, a, b, c, d;
  S = 0;
  P = 1;
  SP = 0;
  a = 2;
  b = 1;
  c = 2;
  d = 2;
  for (let m = 1; m <= a; m++) {
    S += (3 * m ** 3 + 4 * m + 5) / (m ** 3 + Math.log(m));
  }
  for (let k = 1; k <= b; k++) {
    P *= k / (k ** 3 + 7 * k + 5);
  }
  // SP
  let A = 1;
  for (let i = 1; i <= c; i++) {
    for (let m = 1; m <= d; m++) {
      A *= (Math.log(i) + m ** i) / m ** i;
    }
    SP += A;
  }
  console.log(S.toFixed(2) + " " + P.toFixed(2) + " " + SP.toFixed(2));
}

//  72. Sikl-32
{
  let S, P, SP, x, y, a, b;
  S = 0;
  P = 1;
  SP = 0;
  x = 1;
  y = 2;
  a = 2;
  b = 1;
  for (a = 1; a <= x; a++) {
    S += (a * a + 2 * a) / (a ** 3 + a * Math.cos(a) ** 2 + 1);
  }
  for (let i = 1; i <= y; i++) {
    P *= (i * i + 1) / ((i ** 3) ** (1 / i) + 2);
  }
  for (let i = 1; i <= a; i++) {
    let A = 1;
    for (let k = 1; k <= b; k++) {
      A *= Math.log((k ** i + k ** (1 / i)) / (k ** 3 + i ** (1 / k)));
    }
    SP += A;
  }
  console.log(
    "S=" +
      S.toFixed(2) +
      " " +
      "P=" +
      P.toFixed(2) +
      " " +
      "SP=" +
      SP.toFixed(2)
  );
}

// 73. Sikl-33
{
  let S, P, SP, x, y, a, b;
  S = 0;
  P = 1;
  SP = 0;
  x = 1;
  y = 1;
  a = 2;
  b = 2;
  for (let k = 1; k <= x; k++) {
    S += (k * k + Math.sin(k) + 5) / (k ** (7 / 5) + 1);
  }
  for (let n = 1; n <= y; n++) {
    P *= (n + n ** (1 / 2)) / (n - (n + 1) ** (1 / 5));
  }
  for (let k = 1; k <= a; k++) {
    let A = 1;
    for (let i = 1; i <= b; i++) {
      A *=
        (i * i + (k * k) ** (1 / i)) / ((Math.sin(i) + Math.cos(k)) * i ** k);
    }
    SP += A;
  }
  console.log(
    "S=" +
      S.toFixed(2) +
      " " +
      "P=" +
      P.toFixed(2) +
      " " +
      "SP=" +
      SP.toFixed(2)
  );
}

// 74. Sikl-34
{
  let S, P, SP, x, y, c, d;
  S = 0;
  P = 1;
  SP = 0;
  x = 2;
  y = 2;
  c = 2;
  d = 2;
  for (let a = 1; a <= x; a++) {
    S += (2 * a + Math.cos(a)) ** 2;
  }
  for (let a = 1; a <= y; a++) {
    P *= (a + 6) / (a * a + 2) ** (1 / 2);
  }
  for (let k = 1; k <= c; k++) {
    let A = 0;
    for (y = 1; y <= d; y++) {
      A += (k * k + y) / (k * k + y * y) ** (1 / 2);
    }
    SP += A;
  }
  console.log(
    "S=" +
      S.toFixed(2) +
      " " +
      "P=" +
      P.toFixed(2) +
      " " +
      "SP=" +
      SP.toFixed(2)
  );
}

// 75. Sikl-35
{
  let S, P, SP, x, y, c, d;
  S = 0;
  P = 1;
  SP = 0;
  x = 2;
  y = 2;
  c = 2;
  d = 1;
  for (let i = 1; i <= x; i++) {
    S += (i ** 4 + i ** 2 + 3) / (i + Math.E ** i) ** (1 / 2);
  }
  for (let k = 1; k <= y; k++) {
    P *= (k + 1) / (k ** 3 + 5 * k);
  }
  for (let m = 1; m <= c; m++) {
    let A = 1;
    for (n = 1; n <= d; n++) {
      A *= (Math.abs(m ** n - n ** m) / (m ** n + n ** m)) ** (1 / 2);
    }
    SP += A;
  }
  console.log(
    "S=" +
      S.toFixed(2) +
      " " +
      "P=" +
      P.toFixed(2) +
      " " +
      "SP=" +
      SP.toFixed(2)
  );
}

// 76. Sikl-36
{
  let S, P, SP, x, y, c, d;
  S = 0;
  P = 1;
  SP = 1;
  x = 2;
  y = 1;
  c = 2;
  d = 1;
  for (let k = 1; k <= x; k++) {
    S += ((-1) ** k * (k + 1)) / (k ** 3 + k ** 2 + 1);
  }
  for (let i = 1; i <= y; i++) {
    P *= (i ** 3 + Math.abs(i - 9)) / (Math.log(i) + 7 * i);
  }
  for (let n = 1; n <= c; n++) {
    A = 0;
    for (let m = 1; m <= d; m++) {
      A += ((-1) ** m * Math.log(m + 5)) / (m ** (n + 3) + n * m);
    }
    SP *= A;
  }
  console.log(
    "S=" +
      S.toFixed(2) +
      " " +
      "P=" +
      P.toFixed(2) +
      " " +
      "SP=" +
      SP.toFixed(2)
  );
}

// 77. Sikl-37
{
  let S, P, SP, x, y, c, d;
  S = 0;
  P = 1;
  SP = 0;
  x = 2;
  y = 2;
  c = 1;
  d = 1;
  for (let n = 1; n <= x; n++) {
    S += 1 / (5 - 17 * n + n ** 3);
  }
  for (let m = 1; m <= y; m++) {
    P *= (Math.abs(m - 5) + 1) ** (1 / 2) / (m * m + 4 * m - 1);
  }
  for (let i = 1; i <= c; i++) {
    A = 1;
    for (let k = 1; k <= d; k++) {
      A *=
        (((-1) ** i * Math.abs(Math.sin(k) + Math.E ** k) ** (1 / 7)) / 2) *
        Math.abs(4 * i ** 3 - k ** 4);
    }
    SP += A;
  }
  console.log(
    "S=" +
      S.toFixed(2) +
      " " +
      "P=" +
      P.toFixed(2) +
      " " +
      "SP=" +
      SP.toFixed(2)
  );
}

// 78. Sikl-38
{
  let S, P, SP, x, y, c, d;
  S = 0;
  P = 1;
  SP = 0;
  x = 1;
  y = 2;
  c = 2;
  d = 2;
  for (let a = 1; a <= x; a++) {
    S += (4 * a + 6 * Math.log(a)) / (a * a + a);
  }
  for (let a = 1; a <= y; a++) {
    P *= Math.abs(a - 6 * Math.cos(a)) / (a * a + a ** Math.log(a));
  }
  for (let k = 1; k <= c; k++) {
    A = 1;
    for (let a = 1; a <= d; a++) {
      A *= (a * k + x) / (k * k + y * y);
    }
    SP += A;
  }
  console.log(
    "S=" +
      S.toFixed(2) +
      " " +
      "P=" +
      P.toFixed(2) +
      " " +
      "SP=" +
      SP.toFixed(2)
  );
}

// 79. Sikl-39
{
  let S, P, SP, x, y, c, d;
  S = 0;
  P = 1;
  SP = 0;
  x = 2;
  y = 2;
  c = 1;
  d = 1;
  for (let k = 1; k <= x; k++) {
    S += k ** 3 + Math.E ** k;
  }
  for (let a = 3; a <= y; a++) {
    P *= (a * x) / (a * a + x * x) ** (1 / 2);
  }
  for (let i = 1; i <= c; i++) {
    A = 1;
    for (let j = 1; j <= d; j++) {
      A *= (i * x + j * j) / (i * i + j * y) ** (1 / 2);
    }
    SP += A;
  }
  console.log(
    "S=" +
      S.toFixed(2) +
      " " +
      "P=" +
      P.toFixed(2) +
      " " +
      "SP=" +
      SP.toFixed(2)
  );
}

// 80. Sikl-40
{
  let S, P, SP, x, y, c, d;
  S = 0;
  P = 1;
  SP = 1;
  x = 1;
  y = 2;
  c = 2;
  d = 2;
  for (let a = 1; a <= x; a++) {
    S += (a * x + 4) / (a + Math.log(6)) ** (1 / 2);
  }
  for (let a = 1; a <= y; a++) {
    P *= (a * x * x + 6) / Math.sin(a * x);
  }
  for (let i = 1; i <= c; i++) {
    A = 1;
    for (let j = 1; j <= d; j++) {
      A *= (i * j + x * y) / (j * x + y) ** (i / 2);
    }
    SP *= A;
  }
  console.log(
    "S=" +
      S.toFixed(2) +
      " " +
      "P=" +
      P.toFixed(2) +
      " " +
      "SP=" +
      SP.toFixed(2)
  );
}
