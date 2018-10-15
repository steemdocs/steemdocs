---
title: Hardfork
description: A hardfork, as it relates to blockchain technology, is a radical change to the protocol that makes previously invalid blocks/transactions valid. 
---
# Hardfork

A hardfork, as it relates to [blockchain technology](/glossary/blockchain.md), is a radical change to the protocol that makes previously invalid [blocks](/glossary/block.md)/transactions valid. Put differently, a **hardfork** is a permanent divergence from the previous version of the blockchain. 

On the [Steem Blockchain](/glossary/steem-blockchain.md), since [HF5](/platform/releases/hardfork-0-5-0.md), [witnesses](/glossary/witness.md) publish the **hardfork** version number and the time at which it should take effect in their block header. This is published automatically when they update their code and produce a block with a version different than the last version published to the chain.

The **hardfork** takes effect at the scheduled time if and only if 15 out of 21 active witnesses are on the same hardfork and time. Any witness (or miner) running old code will automatically stop producing blocks if the consensus hardfork number and time is not known to them.