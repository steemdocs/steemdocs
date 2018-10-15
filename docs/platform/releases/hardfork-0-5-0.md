---
title: Steem Hardfork 0.5.0 Release (HF5)
description: General documentation and information the 0.5.0 release.
---
# Hardfork 0.5.0 Release

## HF5 Major Changes

- [Witness](/glossary/witness.md) Version Reporting
- [HardFork](/glossary/hardfork.md) Voting by Witnesses
- Comment Deletion Operation
- Permlinks can contain any UTF-8 character
- Allowing Vote Changes
- [Custom JSON Operations](/glossary/custom-json.md)

### HF5 - Witness Version Reporting

This change involved automatically adding a header to the first [block](/glossary/block.md) produced by a witness after changing their version of the software they are running. This information is then used to know which version of the software witnesses are running. Vested stakeholders can know which version of the software witnesses are running and [vote](/glossary/voting.md) accordingly.

### HF5 - Hardfork Voting

The art of hardforking is ensuring that the majority of the network has upgraded their nodes prior to changing the validation logic. Under the new model introduced in **HF5**, the concept of a fork is known to all nodes. Witnesses publish the hardfork version number and the time at which it should take effect in their block header. This is published automatically when they update their code and produce a block with a version different than the last version published to the chain. The hardfork takes effect at the scheduled time if and only if 15 out of 21 active witnesses are on the same hard fork and time. Any witness (or miner) running old code will automatically stop producing blocks if the consensus hard fork number and time is not known to them.

### HF5 - Comment Deletion Operation

This change allowed any comments that has no replies and no pending payout to be deleted. The comment still exist on the [blockchain](/glossary/steem-blockchain.md), but the [permlink](/glossary/permlink.md) can be reused and it will not show up on steemit.com.

### HF5 -Permlink’s can be arbitrary UTF-8

This will allow more options for supporting many different languages.

### HF5 - Allowing Vote Changes

Prior to **HF5**, it was not possible for users to change their votes because of potential abuse. This hardfork introduced the ability to change votes but with some caveats to this to prevent attacks and to minimize potential abuse such as not being able to change your vote 2 hours before payout and that the change of vote still cost [mana](/glossary/mana.md).

### HF5 - Custom JSON Operations

This was a very important addition to the blockchain. Custom operations are how services such as Steemit can implement features such as “following”, and other features that do not require changes in currency validation logic. The data specifies the accounts and authority level (owner,active,posting) that must approve the transaction to be included. Each custom op has a name and a field containing arbitrary JSON data.

## HF5 Minor Changes

- Creating a comment requires a title, body, or meta data
- Existing [softforks](/glossary/softfork.md) (producer enforced) are now hardforks
- Updating vesting withdraw rate to be 0 when it already is 0 is forbidden
 
## HF5 Context

HF5 was an important step to make the Steem blockchain a powerful decentralized content management system. This was prior to the first payout that came out on July 4th 2016, and the Steemit Inc team was iterating quickly as a response to their userbase testing the first Steem web interface (steemit.com).

## Hardfork 0.5.0 Information
**Date:** May 26, 2016
**Official Github Release**: [0.5.0 Release](https://github.com/steemit/steem/releases/tag/v0.5.0)