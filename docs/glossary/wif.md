---
title: WIF - Steem Blockchain Glossary - SDN
description: Wallet Import Format (WIF, also known as Wallet Export Format) is a way of encoding a private ECDSA key so as to make it easier to copy. When users are demanded their WIF on the Steem blockchain, it refers to one of their private keys.
---
# WIF

**W**allet **I**mport **F**ormat (**WIF**, also known as Wallet Export Format) is a way of encoding a private ECDSA key so as to make it easier to copy. When users are demanded their WIF on the [Steem blockchain](/glossary/steem-blockchain.md), it refers to one of their private keys. For each user on Steem, there are 4 types of keys, each with their own [public](/glossary/public-key.md) and [private](/glossary/private-key.md) counterparts:

- [Posting Keys](/glossary/posting-key.md) - for [posting](/glossary/posting.md) and [upvoting](/glossary/voting.md) content
- [Active Keys](/glossary/active-key.md) - for [tranfers of funds](/glossary/transfer.md)  
- [Owner Keys](/glossary/owner-key.md) - for full access and changing all private/public keys 
- [Memo Keys](/glossary/memo-key.md) - for encrypted [memos](/glossary/memo.md)

## WIF - How Steem Signs Transactions With Keys

Everytime a user [post](/glossary/posting.md),[vote](/glossary/voting.me) or [transfer](/glossary/transfer.md),he/she is signing each [transaction](/glossary/transaction.md) with one of their private keys (depending on the action). Then, the system validates the transactions by using the [public key](/glossary/public-key.md). Authenticated transactions are added to the blockchain, while non-authenticated ones are rejected.

## Changing a WIF

When a user's change their [owner's key](/glossary/owner-key.md), all of their users keys (*public* and *private*) are changed.
