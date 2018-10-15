---
title: Steem Hardfork 0.2.0 Release (HF2)
description: General documentation and information regarding HF2 of the Steem Blockchain.
---

# Hardfork 0.2.0 Release

This is the first [hardfork](/glossary/hardfork.md) of the Steem blockchain after the original fork from the [Graphene Toolkit](https://github.com/cryptonomex/graphene).

- No new method or operation were introduced in this hardfork.
- No were disabled or deprecated in this hardfork.

## Context of HF2

This was in the very early days of the [Steem blockchain](/glossary/steem-blockchain.md) were there were only a few people who could access a user interface of the network. The Steemit Inc team, who was mainly in charge of developing the software, iterated quickly through a series of hardfork to make it functional as a decentralized content management system. 

**Changes:**
- recalculate witness votes
- update virtual schedule time on adding and removing of votes
- limit maximum number of witness votes to 30
- check block timestamp to verify it isn't in the future
- update fc with bug fixes for websockets

## Hardfork 0.2.0 Information
**Date:** Apr 25, 2016
**Commits since this release:** 3880 commits
**Official Github Release**: [0.2.0 Release](https://github.com/steemit/steem/releases/tag/v0.2.0)