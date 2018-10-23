# Authority (`authority`)

An `authority` is a struct containing the following three fields:

1. `weight_threshold`: Unsigned 32-bit integer. Default value is `0`.
2. `account_auths`: Flat map of [`account_name_type`](/platform/primitives/types/account_name.md) and [`weight_type`](/platform/primitives/types/weight.md).
3. `key_auths`: Flat map of [`public_key_type`](/platform/primitives/types/public_key.md) and [`weight_type`](/platform/primitives/types/weight.md)

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

## References

- [include/steem/protocol/authority.hpp](https://github.com/steemit/steem/blob/master/libraries/protocol/include/steem/protocol/authority.hpp)
