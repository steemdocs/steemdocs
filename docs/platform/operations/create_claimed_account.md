
# `create_claimed_account_operation`

When an account has a non-zero balance of [`pending_claimed_accounts`](/platform/properties/pending_claimed_accounts.md), they can broadcast this operation to create a new account. This will decrement the caller’s [`pending_claimed_accounts`](/platform/properties/pending_claimed_accounts.md) balance by one and create the new account.

## Parameters

- `creator`: [account_name_type](/platform/primitives/types/account_name.md) of the creator.
- `new_account_name`: [account_name_type](/platform/primitives/types/account_name.md) of the new account.
- `active`: [authority](/platform/primitives/structs/authority.md)
- `owner`: [authority](/platform/primitives/structs/authority.md)
- `posting`: [authority](/platform/primitives/structs/authority.md)
- `memo_key`: [public_key](/platform/primitives/types/public_key.md)
- `json_metadata`: Stringified JSON metadata. Can simply be an empty string.

## Example Response

```json
{ 
  "id": "12345ab1234567abcde1a1ab12345a12a123456a",
  "block_num": 00012345,
  "trx_num": 24,
  "expired": false 
}
```
