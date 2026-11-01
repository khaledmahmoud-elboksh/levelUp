# Answers: Two stores for the same token

1. lsSecWrap_ plus a hash of the logical key.

2. bulk-actions writes through react-secure-storage. The shell reads localStorageSecureWrapper, which looks up a different key and a different encoding.

3. The key is derived from navigator fields in the page, and the result is only hidden from a casual glance in devtools.
