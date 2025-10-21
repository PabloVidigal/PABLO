console.clear();

/* ===================== 1) Leibniz – π ===================== */
(function () {
  const N = 1_000_000;
  let s = 0;
  for (let k = 0; k < N; k++) {
    s += Math.pow(-1, k) / (2 * k + 1);
  }
  const pi = 4 * s;
  console.log("[1] Leibniz π ≈", pi, " | erro =", Math.abs(pi - Math.PI));
})();

/* ===================== 2) Wallis – π/2 ===================== */
(function () {
  const N = 200_000;
  let p = 1;
  for (let n = 1; n <= N; n++) {
    const num = 2 * n;
    p *= (num / (num - 1)) * (num / (num + 1));
  }
  const pi = 2 * p;
  console.log("[2] Wallis π ≈", pi, " | erro =", Math.abs(pi - Math.PI));
})();

/* ===================== 3) Taylor – seno(x) ===================== */
(function () {
  const x = Math.PI / 3; // 60°
  const M = 10;
  let seno = 0;
  let termo = x;      // termo k=0 -> x^1/1!
  let fat = 1;        // 1!
  let pot = x;        // x^1
  for (let k = 0; k < M; k++) {
    if (k > 0) {
      // atualiza potência e fatorial para 2k+1
      const a = 2 * k;       // queremos chegar a 2k+1
      pot *= x * x;          // x^(2k+1) a partir de x^(2k-1)
      fat *= (a) * (a + 1);  // (2k)! -> (2k+1)! com multiplicações passo a passo
      termo = Math.pow(-1, k) * pot / fat;
    }
    seno += termo;
  }
  console.log("[3] sin(x) ≈", seno, " | Math.sin(x) =", Math.sin(x));
})();

/* ===================== 4) Taylor – e^1 ===================== */
(function () {
  const M = 15;
  let e = 0;
  let fat = 1; // 0! = 1
  for (let k = 0; k < M; k++) {
    if (k > 0) fat *= k; // k!
    e += 1 / fat;
  }
  console.log("[4] e ≈", e, " | Math.E =", Math.E);
})();

/* ===================== 5) Série alternada – ln(2) ===================== */
(function () {
  const N = 2_000_000;
  let s = 0;
  for (let k = 1; k <= N; k++) {
    s += Math.pow(-1, k + 1) / k;
  }
  console.log("[5] ln(2) ≈", s, " | Math.log(2) =", Math.log(2));
})();

/* ===================== 6) Série de Basel – π^2/6 ===================== */
(function () {
  const N = 1_000_000;
  let s = 0;
  for (let n = 1; n <= N; n++) {
    s += 1 / (n * n);
  }
  const alvo = Math.pow(Math.PI, 2) / 6;
  const erroRel = Math.abs(s - alvo) / alvo;
  console.log("[6] Σ 1/n^2 ≈", s, " | alvo =", alvo, " | erro relativo =", erroRel);
})();

/* ===================== 7) Monte Carlo – π ===================== */
(function () {
  const T = 5_000_00; // 500.000 (ajuste se quiser mais precisão)
  let dentro = 0;
  for (let i = 0; i < T; i++) {
    const x = Math.random();
    const y = Math.random();
    if (x * x + y * y <= 1) dentro++;
  }
  const pi = 4 * (dentro / T);
  console.log("[7] Monte Carlo π ≈", pi, " (T =", T + ")");
})();

/* ===================== 8) Nilakantha – π ===================== */
(function () {
  const N = 1_000_00; // 100.000 termos (ajuste livre)
  let pi = 3;
  for (let n = 1; n <= N; n++) {
    const a = 2 * n, b = a + 1, c = a + 2;
    const termo = 4 / (a * b * c);
    pi += Math.pow(-1, n + 1) * termo;
  }
  console.log("[8] Nilakantha π ≈", pi, " | erro =", Math.abs(pi - Math.PI));
})();

/* ===================== 9) Soma de auto-potências – últimos 6 dígitos ===================== */
(function () {
  const MOD = 1_000_000;
  let soma = 0;

  // potência modular por multiplicações (sem BigInt, sem arrays)
  function modPow(base, expo, mod) {
    let r = 1 % mod;
    for (let i = 0; i < expo; i++) {
      r = (r * base) % mod;
    }
    return r;
  }

  for (let i = 1; i <= 100; i++) {
    const add = modPow(i % MOD, i, MOD);
    soma = (soma + add) % MOD;
  }

  const ultimos6 = String(soma).padStart(6, "0");
  console.log("[9] Últimos 6 dígitos de Σ i^i (1..100):", ultimos6);
})();

/* ===================== 10) Mandelbrot – iterações até divergir ===================== */
(function () {
  const cre = -0.75, cim = 0.1;  // c = -0.75 + 0.1i
  let a = 0, b = 0;              // z0 = 0
  const Kmax = 1000;
  let k = 0;
  for (k = 0; k < Kmax; k++) {
    const aa = a * a - b * b + cre;   // parte real de z^2 + c
    const bb = 2 * a * b + cim;       // parte imag de z^2 + c
    a = aa; b = bb;
    const mod2 = a * a + b * b;       // |z|^2
    if (mod2 > 4) break;              // divergiu
  }
  console.log("[10] Iterações até divergir (Kmax=1000):", k, k === Kmax ? "(não divergiu)" : "");
})();
