---
title: AppBase - Steem Blockchain Glossary - SDN
description: AppBase enables many components of the Steem blockchain to become modular by creating additional non-consensus blockchains as dedicated plugins. It was released as a softfork](/glossary/softfork.md within HF19.
---
# AppBase

**AppBase** enables many components of the [Steem blockchain](/glossary/steem-blockchain.md) to become modular by creating additional non-consensus blockchains as dedicated plugins. It was released as a [softfork](/glossary/softfork.md) within [HF19](https://github.com/steemit/steem/releases/tag/v0.19.10). These plugins can be updated much more rapidly because they do not require replaying the entire [blockchain](/glossary/blockchain.md). Practically speaking, **AppBase** enables different cores, or even different computers, to maintain different parts of the Steem blockchain.

This is significantly more efficient than requiring every core, and every computer in the network to maintain the entire blockchain. Modularizing the blockchain enables it to take full advantage of the modular nature of computers. This makes [steemd](/glossary/steemd.md) far more efficient and easier to maintain and scale.

**Learn more**: Read the [Steem Bluepaper](https://steem.com/steem-bluepaper.pdf) on Steem.com
