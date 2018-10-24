# Asset (`asset_type`)

Either a string combining a fixed precision decimal point number and an asset symbol or an Asset object. The asset symbol can be one of:

- `STEEM` (precision 3)
- `VESTS` (precision 6)
- `SBD` (precision 3)
- `TESTS` (precision 6)
- `TBD` (precision 3)

e.g., `1.337 STEEM` or `{"amount": "1337","precision": 3,"nai": "@@000000021"}`

Asset values should never be encoded in any type of floating point format such as Double or Float. (For JavaScript use an add-on library such as `decimal.js` or `bignumber.js`. For Java use BigDecimal.)

The format of an Asset in an API response is either in the format of "NN.NN SYMBOL" or as an Asset object which supplies the whole digit amount, its precision (decimal position), and a "nai" value which indicates the Asset.

Example `nai` values:

- "nai": "@@000000013" represents `SBD`
- "nai": "@@000000021" represents `STEEM`
- "nai": "@@000000037" represents `VESTS`

The legacy `Condensor Api` usually supplies Assets as a single fixed String.
The newer `Database Api` usually supplies Assets as an Asset object.
