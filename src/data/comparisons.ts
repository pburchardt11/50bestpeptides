export interface Comparison {
  slug: string;
  title: string;
  description: string;
  peptide1Slug: string;
  peptide2Slug: string;
  peptide1Name: string;
  peptide2Name: string;
  categories: string[];
  introduction: string;
  peptide1Summary: string;
  peptide2Summary: string;
  comparisonPoints: {
    aspect: string;
    peptide1: string;
    peptide2: string;
  }[];
  verdict: string;
  tags: string[];
}

// Placeholder — will be populated by agent
export const comparisons: Comparison[] = [];
