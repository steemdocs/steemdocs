# `signature_type`

Alias for `compact_signature`.

An elliptic curve signature represented as an array of 65 unsigned bytes.

Given a public key, an algorithm can be used on the signature to determine that it was originally produced from a hash and a private key, without needing to know the private key.

## References

- [include/fc/crypto/elliptic.hpp](https://github.com/steemit/steem/blob/master/libraries/fc/include/fc/crypto/elliptic.hpp)
