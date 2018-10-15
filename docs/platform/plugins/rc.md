---
plugins:
  plugin_code_url: https://github.com/steemit/steem/tree/master/libraries/plugins/rc
  api_code_url: https://github.com/steemit/steem/tree/master/libraries/plugins/apis/rc_api
---

# Resource Credits Plugin


## Subsidized Account Creation

A subsidized account can be claimed by paying a fee of 0 STEEM with the [`claim_account`](/platform/methods/claim_account.md) method. 

There are consensus and non-consensus limits on subsidized account creation.

The two primary consensus mechanisms are:

1. A global pool of subsidized accounts that is enforced in consensus. The dynamics of the pool are controlled by the witnesses.
2. Per witness consumption that prevents a compromised witness from draining the subsidized account pool.

The non-consensus limit exists in the RC Plugin and charges account creators RCs to create subsidized accounts. The consensus supply is used as input to determine the cost in RCs of creating a subsidized account.


## API

- [`find_rc_accounts`](/platform/methods/find_rc_accounts.md)
- `get_resource_params`
- `get_resource_pool`


## References

- [Velocity Hardfork Account Creation Guidelines](https://steemit.com/hf20/@steemitblog/velocity-hardfork-account-creation-guidelines)
