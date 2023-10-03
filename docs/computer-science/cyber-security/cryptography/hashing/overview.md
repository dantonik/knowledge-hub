# Overview

Many encryption algorithms use hashing to enhance cybersecurity.

## Cryptography Hashes
- SHA-1 (Secure Hash Standard)
- SHA-2
- SHA-3
- MD2 (Message Digest)
- MD4
- MD5

[OpenSSL](https://www.openssl.org/)  

### Implementations
[Secure Hash Standard](https://csrc.nist.gov/files/pubs/fips/180-4/upd1/final/docs/fips180-4-draft-aug2014.pdf)  
[MD5](https://www.rfc-editor.org/rfc/rfc1321)  

### Threads
Rainbow tables

### How to defeat lookup tables
"Salt" is added to each password before hashing.  
The salt does not need to be private.  
examples:
- system date
- IP address
- rand() function
- CPU load
- User name or similar

