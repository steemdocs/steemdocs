
# `claim_account`

Claim a subsidized account by spending resource credits.  
Increments the caller's [`pending_claimed_accounts`](/platform/properties/pending_claimed_accounts.md) by one.

Accounts claimed using this operation can be created using the [`create_claimed_account`](/platform/operations/create_claimed_account.md) operation.

## Parameters

- `fee`: [`asset`](/platform/primitives/types/asset.md)
- `creator`: [`account_name`](/platform/primitives/types/account_name.md)
