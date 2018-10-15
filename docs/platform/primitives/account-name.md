---
published: true
---

# Account Name

A string between 3 and 16 characters that identifies an account.
It can be divided into segments using period (`.`) characters.

Every segment must conform to the following rules:

1. The first character must be a lowercase letter (a-z)
2. The last character can be (a-z) or a number (0-9)
3. The remaining characters can be a-z, 0-9 and '-'


## Reference

- [Code for `is_valid_account_name()`](https://github.com/steemit/steem/blob/master/libraries/protocol/authority.cpp#L46)
- [Today I Learned: The rules for a valid Steem account username](https://steemit.com/til/@l0k1/today-i-learned-the-rules-for-a-valid-steem-account-username-and-how-to-find-out-stuff-by-reading-sourcecode)
- [The 5 Rules of a Valid Username on the Steem Blockchain](https://steemit.com/programming/@cryptosharon/the-5-rules-of-a-valid-username-on-the-steem-blockchain-and-a-3-sbd-contest-to-make-an-account-name-validation-regex)
