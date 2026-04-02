import { peptides as peptides1to50 } from "./peptides";
import { peptides51to100 } from "./peptides-51-100";
import { peptides101to150 } from "./peptides-101-150";

export type { Peptide } from "./peptides";

export const allPeptides = [
  ...peptides1to50,
  ...peptides51to100,
  ...peptides101to150,
];
