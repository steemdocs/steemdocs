---
title: Private Key
description: Private Keys are the cryptographically encoded version of a user's "password" used to perform actions on the Steem blockchain. Each account has 4 sets of public and private keys.
---
# Private Key

**Private Keys** (also known as [WIF](/glossary/wif.md) are the cryptographically encoded version of a user's "password" used to perform actions on the [Steem blockchain](/glossary/steem-blockchain.md). Each account has 4 sets of [public](/glossary/public-key.md) and **private keys**:

- [Posting Keys](/glossary/posting-key.md) - for [posting](/glossary/posting.md) and [upvoting](/glossary/voting.md) content
- [Active Keys](/glossary/active-key.md) - for [tranfers of funds](/glossary/transfer.md)  
- [Owner Keys](/glossary/owner-key.md) - for full access and changing all private/public keys 
- [Memo Keys](/glossary/memo-key.md) - for encrypted [memos](/glossary/memo.md)

## How Steem Signs Transactions With Keys

Everytime a user [post](/glossary/posting.md),[vote](/glossary/voting.me) or [transfer](/glossary/transfer.md),he/she is signing each [transaction](/glossary/transaction.md) with one of their **private keys** (depending on the action). Then, the system validates the transactions by using the [public key](/glossary/public-key.md). Authenticated transactions are added to the [blockchain](/glossary/blockchain.md), while non-authenticated ones are rejected.

## Changing a Private Key

When a user's change their [owner's key](/glossary/owner-key.md), all of their user's keys (public and private) are changed.
