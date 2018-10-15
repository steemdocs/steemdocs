---
published: true
---

# `create_claimed_account`

When an account has a non-zero balance of [`pending_claimed_accounts`](/platform/operations/properties/pending_claimed_accounts.md), they can call `create_claimed_account` to create a new account. This will decrement the caller’s `pending_claimed_accounts` balance by one and create the new account.

## Arguments

- `creator`: [Account Name](/platform/primitives/account-name.md) of the creator.
- `new_account_name`: [Account Name](/platform/primitives/account-name.md) of the new account.
- `active`: Authority Object
- `owner`: Authority Object
- `posting`: Authority Object
- `memo_key`: Public Key String
- `json_metadata`: Stringified JSON metadata. Can simply be an empty string.

Example of an Authority Object: 

```json
{
    "weight_threshold": 1,
    "account_auths": [],
    "key_auths": [
      [
        "STM...",
        1
      ]
    ]
  }
```

## Example Response

```json
{ 
  "id": "12345ab1234567abcde1a1ab12345a12a123456a",
  "block_num": 00012345,
  "trx_num": 24,
  "expired": false 
}
```
