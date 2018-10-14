# `claim_account`

Claim a subsidized account by spending resource credits.
Increments the caller's `pending_claimed_accounts` by one.

Accounts claimed using this operation can be created using the [`create_claimed_account`](/platform/operations/create_claimed_account.md) operation.

## Arguments

- `fee`: [Asset Quantity](/platform/primitives/asset-quantity.md)
- `creator`: [Account Name](/platform/primitives/account-name.md)

```json
{
  "fee": "0.000 STEEM",
  "creator": "SteemDocs"
}
```

## Example Response

```json
{ 
  "id": "a11160a2b43a908254cool48213373c001c0op01",
  "block_num": 00107096,
  "trx_num": 24,
  "expired": false
}
```
