---
title: RocksDB
description: RocksDB a fast-on-disk data store with an advanced caching layer, which could further minimize latency when reading/writing to and from the disk as it is optimized for fast, low-latency storage.
---
# RocksDB

RocksDB a fast-on-disk data store with an advanced caching layer, which could further minimize latency when reading/writing to and from the disk as it is optimized for fast, low-latency storage. Used in production systems at multiple web-scale enterprises (Facebook, Yahoo, LinkedIn), RocksDB is based on LevelDB but with increased performance, thanks to its ability to exploit multiple CPU cores and SSD storage for input/output bound workloads. Its use in MyRocks, for example, led to less SSD storage use, longer SSD endurance, and more available IO capacity for handling queries.

In the [Steem blockchain](/glossary/steem-blockchain.md) context, it is used to dramatically improve the performance of account history plugin of [steemd](/glossary/steemd.md) starting with the v0.19.10.

**Learn More**: [https://rocksdb.org](https://rocksdb.org)