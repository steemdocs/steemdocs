# Private Key

**Private Keys** (also known as [WIF](/glossary/wif.md) are the cryptographically encoded version of a user's "password" used to perform actions on the [Steem blockchain](/glossary/steem-blockchain.md).

For each user on [Steem](/glossary/steem-blockchain.md), there are 4 types of keys , each with their own [public](/glossary/public-key.md) and **private** counterparts:

- [Posting Keys](/glossary/posting-key.md)
- [Active Keys](/glossary/active-key.md)
- [Owner Keys](/glossary/owner-key.md)
- [Memo Keys](/glossary/memo-key.md)

## How Steem Signs Transactions With Keys

Everytime a user [post](/glossary/posting.md),[vote](/glossary/voting.me) or [transfer](/glossary/transfer.md),he/she is signing each [transaction](/glossary/transaction.md) with one of their **private keys** (depending on the action). Then, the system validates the transactions by using the [public key](/glossary/public-key.md). Authenticated transactions are added to the [blockchain](/glossary/blockchain.md), while non-authenticated ones are rejected.

## Changing a Private Key

When a user's change their [owner's key](/glossary/owner-key.md), all of their users keys (**public** and private) are changed.