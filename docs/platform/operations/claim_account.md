
# `claim_account_operation`

Claim a subsidized account by spending resource credits.
Increments the caller's [`pending_claimed_accounts`](/platform/properties/pending_claimed_accounts.md) by one.

Accounts claimed using this operation can be created using the [`create_claimed_account`](/platform/operations/create_claimed_account.md) operation.

When calling the operation, the account creator has an option to pay the account creation
fee in STEEM or [resource credits](/glossary/resource-credits.md). If the account creator wants to pay with resource credits, the fee should be 0.000 STEEM,
otherwise, it should match with the [`account_creation_fee`](/platform/properties/account_creation_fee.md) property set by witnesses.

## Parameters

- `creator`: [account_name](/platform/primitives/types/account_name.md)
- `fee`: [asset](/platform/primitives/types/asset.md)
- `extensions`: A list of [extension](/platform/primitives/types/extension.md) objects.
