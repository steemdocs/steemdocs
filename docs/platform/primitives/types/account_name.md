# `account_name_type`

A valid account name consists of a dot-separated sequence of one or more labels consisting of the following rules:
 
1. Each label must be three characters or more
2. Each label must begin with a letter
3. Each label must end with a letter or digit
4. Each label must contain only letters, digits or hyphens

In addition, the following is required:

- All letters must be lowercase
- Length must be between (inclusive) `STEEM_MIN_ACCOUNT_NAME_LENGTH` (currently 3) and `STEEM_MAX_ACCOUNT_NAME_LENGTH` (currently 16)


## Reference

- [steem/protocol/authority.hpp](https://github.com/steemit/steem/blob/807fb40ec137a987dc53cee6d8455c7b6c47aeed/libraries/protocol/include/steem/protocol/authority.hpp#L67)
- [RFC 1035 - Domain Names](https://www.ietf.org/rfc/rfc1035.txt)
