export interface TokenExtension {
  name: string;
  summary: string;
  description: string;
  docLink: string;
}

export const tokenExtensions: TokenExtension[] = [
  {
    name: "Mint Close Authority",
    summary: "Allows the mint authority to be closed, preventing further minting.",
    description: "This extension enables the mint authority to be closed, effectively preventing any further minting of tokens. It's useful for creating a fixed supply token or for transitioning control of a token's supply.",
    docLink: "https://spl.solana.com/token-2022/extensions#mint-close-authority"
  },
  {
    name: "Transfer Fees",
    summary: "Enables charging fees on token transfers.",
    description: "With this extension, a fee can be applied to token transfers. This can be used to generate revenue for the token issuer or to discourage frequent trading. The fee can be set as a percentage of the transfer amount.",
    docLink: "https://spl.solana.com/token-2022/extensions#transfer-fees"
  },
  {
    name: "Default Account State",
    summary: "Sets a default state for new token accounts.",
    description: "This extension allows setting a default state for newly created token accounts. It can be used to automatically freeze new accounts or apply other default settings, providing more control over token distribution and usage.",
    docLink: "https://spl.solana.com/token-2022/extensions#default-account-state"
  },
  {
    name: "Immutable Owner",
    summary: "Prevents the owner of a token account from being changed.",
    description: "This extension makes the owner of a token account immutable, ensuring that ownership cannot be transferred. This can be useful for certain types of tokens where permanent ownership is desired.",
    docLink: "https://spl.solana.com/token-2022/extensions#immutable-owner"
  },
  {
    name: "Non-Transferable Tokens",
    summary: "Creates tokens that cannot be transferred between accounts.",
    description: "This extension allows for the creation of tokens that cannot be transferred between accounts. This is useful for creating non-transferable assets, loyalty points, or other tokens that should remain with their original owner.",
    docLink: "https://spl.solana.com/token-2022/extensions#non-transferable"
  },
  {
    name: "Required Memo on Transfer",
    summary: "Requires a memo to be included with each transfer.",
    description: "This extension mandates that a memo must be included with every token transfer. This can be useful for compliance purposes, adding context to transactions, or implementing additional logic based on the memo content.",
    docLink: "https://spl.solana.com/token-2022/extensions#memo-transfer"
  },
  {
    name: "Reallocate",
    summary: "Allows reallocation of token account data.",
    description: "This extension enables the reallocation of token account data, allowing for more flexible management of token accounts. This can be useful for updating or expanding the capabilities of existing token accounts.",
    docLink: "https://spl.solana.com/token-2022/extensions#reallocate"
  },
  {
    name: "Interest-Bearing Tokens",
    summary: "Enables tokens to accrue interest over time.",
    description: "This extension allows tokens to accrue interest over time, similar to a savings account. This can be used to create yield-generating tokens or to implement time-based reward systems within a token ecosystem.",
    docLink: "https://spl.solana.com/token-2022/extensions#interest-bearing-tokens"
  },
  {
    name: "Permanent Delegate",
    summary: "Sets a permanent delegate for a token account.",
    description: "This extension allows setting a permanent delegate for a token account. The delegate has the authority to transfer tokens on behalf of the account owner, which can be useful for certain types of automated systems or managed accounts.",
    docLink: "https://spl.solana.com/token-2022/extensions#permanent-delegate"
  },
  {
    name: "CPI Guard",
    summary: "Prevents cross-program invocation of certain instructions.",
    description: "This extension adds a guard to prevent cross-program invocation (CPI) of certain instructions. This can be used to enhance security by restricting how other programs can interact with the token program.",
    docLink: "https://spl.solana.com/token-2022/extensions#cpi-guard"
  },
  {
    name: "Transfer Hook",
    summary: "Allows custom logic to be executed on transfers.",
    description: "This extension enables custom logic to be executed whenever a transfer occurs. This can be used to implement complex transfer rules, additional checks, or trigger other actions when tokens are moved.",
    docLink: "https://spl.solana.com/token-2022/extensions#transfer-hook"
  },
  {
    name: "Metadata Pointer",
    summary: "Points to off-chain metadata for the token.",
    description: "This extension allows a token to point to off-chain metadata. This can be used to associate additional information with a token, such as images, descriptions, or other data that doesn't need to be stored on-chain.",
    docLink: "https://spl.solana.com/token-2022/extensions#metadata-pointer"
  },
  {
    name: "Metadata",
    summary: "Stores on-chain metadata for the token.",
    description: "This extension enables the storage of metadata directly on-chain for a token. This can include information like the token's name, symbol, and other attributes that are important to have immediately available on-chain.",
    docLink: "https://spl.solana.com/token-2022/extensions#metadata"
  },
  {
    name: "Group Pointer",
    summary: "Points to a group configuration for the token.",
    description: "This extension allows a token to point to a group configuration. This can be used to associate tokens with specific groups or categories, enabling more complex token ecosystems.",
    docLink: "https://spl.solana.com/token-2022/extensions#group-pointer"
  },
  {
    name: "Group",
    summary: "Defines a group configuration for tokens.",
    description: "This extension allows the definition of a group configuration for tokens. This can be used to create token groups with shared properties or behaviors, useful for creating token families or categorized token systems.",
    docLink: "https://spl.solana.com/token-2022/extensions#group"
  },
  {
    name: "Member Pointer",
    summary: "Points to member information for the token.",
    description: "This extension allows a token to point to member information. This can be used to associate tokens with specific membership data or attributes, useful for creating membership or loyalty token systems.",
    docLink: "https://spl.solana.com/token-2022/extensions#member-pointer"
  },
  {
    name: "Member",
    summary: "Defines member information for tokens.",
    description: "This extension allows the definition of member information for tokens. This can be used to store membership details directly with the token, enabling the creation of sophisticated membership or access control systems.",
    docLink: "https://spl.solana.com/token-2022/extensions#member"
  },
  {
    name: "Confidential Transfers",
    summary: "Enables private token transfers.",
    description: "This extension allows for confidential transfers of tokens, enhancing privacy in transactions. It can be used to implement shielded transfers where the amount and potentially the sender and recipient are not publicly visible.",
    docLink: "https://spl.solana.com/token-2022/extensions#confidential-transfers"
  }
]
