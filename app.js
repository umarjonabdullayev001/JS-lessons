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
