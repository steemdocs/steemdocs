# How to send encrypted memos on Steem

Normally steem memos are sent as plain text, this article describes how to format your memos for encryption. This feature was introduce in the [0.4.2 release](/releases/softfork-0-4-2.md) of [HF4](/releases/hardfork-0-4-0.md)

- [Encrypted Memos with CLI Wallet](#icli-wallet)
- [Encrypted Memos with SteemJS](#encrypted-memos-with-steemjs)
- [Encrypted Memos with Python](#encrypted-memos-with-python)
- [How the algorithm works](#algorithm)

## CLI Wallet

You must add "#" as the first character of your [memo](/glossary/memo.md) to encrypt it:

~~~~
unlocked >>> transfer from to "1.000 STEEM" "#encrypted memo" false
{
    "operations": [[ "transfer",{
         "from": "account1",
         "to": "account2",
         "amount": "1.000 STEEM",
         "memo": "#CqojqJfFwawzgnYSFUWokj...xAfynekJtySMsqK8A9doD4gHA5fDKgQTEfUKZgAm8Dx"
    } ]  ]
}
~~~~

When the wallet is unlocked and `get_account_history` is called, the "memo" field will be replaced with "encrypted memo" without the initial '#'.

## Encrypted memos with SteemJS

#### Sending Private Memos with SteemJS
~~~~
var encoded = steem.memo.encode(privateWifAccountA, publicWifAccountB, `#This is my private message`);
~~~~
Above code would return long encrypted text which can be used to send via any medium.

#### Receiving Private Memos with SteemJS
~~~~
var decoded = steem.memo.decode(privateWifAccountAOrB, encoded);
~~~~

## Encrypted memos with Python
#### Sending Private Memos with Python
~~~~
s = Steem(keys=["PRIVATE_MEMO_KEY"])
s.commit.transfer(
    "accountA", 
    0.001, 
    "SBD", 
    memo="#test message", 
    account="AccountB"
)
~~~~
#### Receiving Private Memos with Python
Steem-python's Memo class has a helper do decode memos. All you need is just passing [memo private key](/glossary/memo-key.md) and the encoded string. It will return the encoded message.
~~~~
from steembase import memo as Memo
from steembase.account import PrivateKey
print(Memo.decode_memo(
    PrivateKey("MEMO_PRIVATE_KEY"),
    "#Jj3eUdmGhs9dbee5crcPTA7hXybBw6TvkEG7NvLVsxTTnb4AHmLeYmQ58r4K4GTLGHZX8BcESDSP6reVz7toZF7xYT88eytJxuS1ChCsKHRKJY3MUyShcJhy36wGX1W31",
))
~~~~

## Algorithm

The algorithm for encrypting the memo involves the following steps:

#### Generate a memo_data struct containing:
~~~~
public_key   from
public_key   to
uint64_t     nonce
uint32_t     check
vector<char> encrypted
~~~~
#### Calculate the AES encryption key
~~~~
shared_secret = from_private_key.get_shared_secret( to );
/// ****concatenate nonce and shared secret (binary)****
encryption_key = sha512( nonce + shared_secret )
///< ****check is first 64 bit of sha256 hash treated as uint64_t truncated to 32 bits.****
check = sha256( encryption_key )._hash[0]
/// **pack the memo as a length-prefixed string, length is serialized as varint****
plain_text = pack( memo_text) 
encrypted = aes_encrypt( encryption_key, plain_text )
~~~~
#### Serialize memo_data 
Now convert the memo data into a vector and then convert it to base58:
~~~~
string result = '#' + to_base58( pack( memodata ) );
~~~~
The to and from keys should be fetched as the memo_key property on the respective [accounts](/glossary/account.md).

