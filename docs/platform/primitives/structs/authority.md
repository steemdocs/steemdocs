
# `authority`

An `authority` is a struct containing the following three fields:

1. `weight_threshold`: Unsigned 32-bit integer. Default value is `0`.
2. `account_auths`: Flat map of [/platform/primitives/types/account_name.md](`account_name_type`) and [/platform/primitives/types/weight.md](`weight_type`).
3. `key_auths`: Flat map of [/platform/primitives/types/public_key.md](public_key_type) and [/platform/primitives/types/weight.md](`weight_type`)

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

---

- [include/steem/protocol/authority.hpp](https://github.com/steemit/steem/blob/master/libraries/protocol/include/steem/protocol/authority.hpp)
