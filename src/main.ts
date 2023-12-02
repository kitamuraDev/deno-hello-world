type CompoundInterestFunc = (
  annualAmount?: number,
  annualRate?: number,
  years?: number,
) => number;

/**
 * 積立投資の複利計算
 *
 * @param annualAmount 年間積立投資額
 * @param annualRate 年利（5% なら 1.05）
 * @param years 積立年数
 * @returns accumulateValue 累積額
 */
const compoundInterest: CompoundInterestFunc = (
  annualAmount = 360000,
  annualRate = 1.05,
  years = 3,
) => {
  // for
  // let accumulateValue = 0;
  // for (let i = 1; i <= years; i++) {
  //   accumulateValue = (accumulateValue + annualAmount) * annualRate;
  // }

  // Array.prototype.reduce
  const accumulateValue = Array.from({ length: years }).reduce<number>(
    (amount, _) => (amount + annualAmount) * annualRate,
    0,
  );

  return accumulateValue;
};

console.log(compoundInterest().toLocaleString()); // 1,191,645
