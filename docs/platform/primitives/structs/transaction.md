# Transaction (`transaction`)

Struct containing the following fields:

1. `ref_block_num`: Unsigned 16-bit integer
2. `ref_block_prefix`: Unsigned 32-bit integer
3. `expiration`: ISO Date String
3. `operations`: Array of [operation](/platform/primitives/structs/operation.md) tuples.
4. `extensions`: Array of extensions
5. `signatures`: Array of [signatures](/platform/primitives/types/signature.md)

## References

- [include/steem/protocol/transaction.hpp](https://github.com/steemit/steem/blob/master/libraries/protocol/include/steem/protocol/transaction.hpp)
