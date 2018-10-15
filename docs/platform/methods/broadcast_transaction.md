# `broadcast_transaction`


## Example request

```json
{
  "jsonrpc": "2.0",
  "method": "network_broadcast_api.broadcast_transaction",
  "params":{
    "trx":{
      "ref_block_num":1097,
      "ref_block_prefix":2181793527,
      "expiration":"2016-03-24T18:00:21",
      "operations":[
        [
          "operation_name",
          {
            "voter": "steemit",
            "author": "alice",
            "permlink": "a-post-by-alice",
            "weight": 10000
          }
        ]
      ],
      "extensions":[],
      "signatures":[]
    }
  },
  "id":1
}
```
