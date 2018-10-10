---
title: Steem Hardfork 0.4.0 Release (HF4)
description: General documentation and information regarding HF4 of the Steem Blockchain.
---

# Hardfork 0.4.0 Release

This is the fourth [hardfork](/glossary/hardfork.md) of the [Steem blockchain](/glossary/steem-blockchain.md) after the original fork from the [Graphene Toolkit](https://github.com/cryptonomex/graphene). This one was mainly to fix a series of bugs that arised on the network.

- No new method or operation were introduced in this hardfork.
- No new method or operation were disabled or deprecated in this hardfork.

## Disabled API Disabled In Hardfork 4(HF4)

`report_over_production`

This operation was used to report a miner who signs two blocks at the same time. To be valid, the violation must be reported within STEEM_MAX_WITNESSES blocks of the head block (1 round) and the producer must be in the ACTIVE witness set.

Users not in the ACTIVE witness set should not have to worry about their key getting compromised and being used to produced multiple blocks so the attacker can report it and steel their vesting steem.

The result of the operation was to transfer the full [VESTING](/glossary/vests.md) STEEM balance of the [block producer](/glossary/witness.md) to the reporter.

**Roles:** active owner
**Parameters:** reporter first_block second_block
**Note:** Proof-Of-Work was completely disabled in [HF17](/releases(/hardfork-0-17-0.md)

## Context of HF4

This was in the very early days Steem were there were only a few people who could access a user interface of the network. The Steemit Inc team, who was mainly in charge of developing the software, iterated quickly through a series of hardfork to make it functional as a decentralized content management system

## Hardfork 0.4.0 Information
**Date:** May 3, 2016 (four days after [HF4](/releases/hardfork-0-4-0.md))
**Commits since this release:** 3832 commits
**Official Github Release**: [0.4.0 Release](https://github.com/steemit/steem/releases/tag/v0.4.0)