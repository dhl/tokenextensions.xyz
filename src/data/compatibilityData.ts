export interface CompatibilityData {
  name: string;
  type: string;
  extensions: {
    [key: string]: boolean | "planned" | "N/A";
  };
}

export const compatibilityData: CompatibilityData[] = [
  {
    name: "Phantom",
    type: "Wallet",
    extensions: {
      "Mint Close Authority": "N/A",
      "Default Account State": "N/A",
      "Immutable Owner": "N/A",
      "CPI Guard": "N/A",
      "Group Pointer": true,
      "Group": true,
      "Interest-Bearing Tokens": true,
      "Memo on Transfer": true,
      "Required Memo on Transfer": true,
      "Metadata": true,
      "Metadata Pointer": true,
      "Permanent Delegate": true,
      "Transfer Fees": true,
      "Transfer Hook": true,
      "Member": "planned",
      "Member Pointer": "planned",
      "Confidential Transfers": "planned",
    }
  }
]
