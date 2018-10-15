# `find_rc_accounts`

## Parameters

- accounts: Array of [account_name_type](/platform/primitives/types/account_name.md).

```json
[
  "find_rc_accounts", 
  { 
    "accounts": [ 
      "steemdocs" 
    ] 
  }
]
```

## Example Response

```json
{
  "rc_accounts": [
    { 
      "account": "steemdocs",
      "rc_manabar": { 
        "current_mana": "1184100902527", 
        "last_update_time": 1539540255
      },
      "max_rc_creation_adjustment": { 
        "amount": "6082305264", 
        "precision": 6, 
        "nai": "@@000000037" 
      },
      "max_rc": "11050772275233" 
    } 
  ]
}
```
