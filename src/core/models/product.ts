export interface Product {
  sku: string;
  displayName: string;
  amount: number;
  inDevelopment: string;
  broadcast: string;
  deprecated: boolean;
  dirty: boolean;
  validationErrors?: ValidationErrors;
}

export interface ValidationErrors {
  sku?: string;
  displayName?: string;
  amount?: string;
  inDevelopment?: string;
  broadcast?: string;
}
