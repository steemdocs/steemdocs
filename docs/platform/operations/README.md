# Operations

When broadcasting, callers use a tuple.

1. Type: A string. The [`operation`](/platform/primitives/structs/operation.md)'s name.
2. Parameters: An object containing the values for each of this operation's 
required parameter.

```json
[
   "operation-type",
   {
      "parameterA": 0,
      "parameterB": " ",
      "parameterC": {},
      "parameterD": [],
   }
]
```

## References

- [include/steem/protocol/operations.hpp](https://github.com/steemit/steem/blob/master/libraries/protocol/include/steem/protocol/operations.hpp)