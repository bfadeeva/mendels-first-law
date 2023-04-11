const k = 25; // AA homozygous dominant
const m = 29; // Aa heterozygous
const n = 21; // aa homozygous recessive

const p = k + m + n;

const probability =
  // AA x AA
  (k/p) * ((k-1)/(p-1)) * 1 +
  // AA x Aa
  (k/p) * (m/(p-1)) * 1 +
  (m/p) * (k/(p-1)) * 1 +
  // AA x aa
  (k/p) * (n/(p-1)) * 1 +
  (n/p) * (k/(p-1)) * 1 +
  // Aa x Aa
  (m/p) * ((m-1)/(p-1)) * 0.75 +
  // Aa x aa
  (m/p) * (n/(p-1)) * 0.5 +
  (n/p) * (m/(p-1)) * 0.5;

console.log(probability.toFixed(5));