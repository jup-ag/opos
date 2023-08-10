import BN from "bn.js";
import { Decimal } from "decimal.js";

export const bnToDecimal = (
  bn: BN,
  decimalPlaces: number | Decimal
): Decimal => {
  return new Decimal(bn.toString()).div(new Decimal(10).pow(decimalPlaces));
};

export const decimalToBn = (decimal: Decimal, decimalPlaces: number): BN => {
  return new BN(decimal.mul(new Decimal(10).pow(decimalPlaces)).toString());
};

export const bnToBigInt = (bn: BN): bigint => {
  return BigInt(bn.toString());
};

export const bigIntToBn = (bigInt: bigint): BN => {
  return new BN(bigInt.toString());
};

export const bigIntToDecimal = (
  bigInt: bigint,
  decimalPlaces: number | Decimal
): Decimal => {
  return new Decimal(bigInt.toString()).div(new Decimal(10).pow(decimalPlaces));
};

export const decimalToBigInt = (
  decimal: Decimal,
  decimalPlaces: number
): bigint => {
  return BigInt(decimal.mul(new Decimal(10).pow(decimalPlaces)).toString());
};
