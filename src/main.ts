/**
 * 積立投資の複利計算（基本）
 *
 * @param annualAmount 年間積立投資額
 * @param annualRate 年利（5% なら 1.05）
 * @param years 積立年数
 * @returns accumulateValue 累積額
 */
const compoundInterestBasic = (
  annualAmount = 360000,
  annualRate = 1.05,
  years = 3,
): number => {
  const accumulateValue = Array.from({ length: years }).reduce<number>(
    (amount, _) => (amount + annualAmount) * annualRate,
    0,
  );

  return accumulateValue;
};

console.log(Math.trunc(compoundInterestBasic()).toLocaleString()); // 1,191,645

console.log("====================");

/**
 * 積立投資の複利計算（応用）
 *
 * ユースケース
 * 「n年はxx万円を積立てて、n年はxx万円を積立てる」ような、後から積立投資額を変更する場合の複利計算
 *
 * @param amounts 年間積立投資額
 * @param years 積立年数
 * @param rate 年利（5% なら 1.05）
 * @returns accumulateValue 累積額
 */
const compoundInterestApply = (
  amounts = [360000, 480000, 600000],
  years = [5, 10, 5],
  rate = 1.05,
): number => {
  const accumulateValue = amounts.reduce((acc, curr, i) => (
    Array.from({ length: years[i] })
      .reduce<number>((prev) => (prev + curr) * rate, acc)
  ), 0);

  return accumulateValue;
};

console.log(Math.trunc(compoundInterestApply()).toLocaleString()); // 15,914,059
