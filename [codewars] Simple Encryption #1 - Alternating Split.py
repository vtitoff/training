def decrypt(encrypted_text, n):
    while n > 0:
        encrypted = []
        even_massive = encrypted_text[len(encrypted_text)//2:]
        not_even_massive = encrypted_text[:len(encrypted_text)//2]
        for i in range(0, len(even_massive)-1):
            encrypted.append(even_massive[i])
            encrypted.append(not_even_massive[i])
        if len(even_massive)==len(not_even_massive):
            encrypted.append(even_massive[len(even_massive)-1])
            encrypted.append(not_even_massive[len(not_even_massive)-1])
        else:
            encrypted.append(even_massive[len(even_massive)-1])
        n -= 1
        encrypted_text=''.join(encrypted)
    return encrypted_text


def encrypt(text, n):
    massive = text
    while n > 0:
        even_massive = []
        not_even_massive = []
        for i in range(0, len(massive)):
            even_massive.append(massive[i]) if i % 2 == 0 else not_even_massive.append(massive[i])
        massive = ''.join(not_even_massive+even_massive)
        n -= 1
    return massive


print(encrypt("Собака поела собачьего дерьма", 2)) #" Tah itse sits!"
print(decrypt("hskt svr neetn!Ti aai eyitrsig", 1))


# Implement a pseudo-encryption algorithm which given a string S and an integer N concatenates all the odd-indexed characters of S with all the even-indexed characters of S, this process should be repeated N times.

# Examples:

# encrypt("012345", 1)  =>  "135024"
# encrypt("012345", 2)  =>  "135024"  ->  "304152"
# encrypt("012345", 3)  =>  "135024"  ->  "304152"  ->  "012345"

# encrypt("01234", 1)  =>  "13024"
# encrypt("01234", 2)  =>  "13024"  ->  "32104"
# encrypt("01234", 3)  =>  "13024"  ->  "32104"  ->  "20314"
# Together with the encryption function, you should also implement a decryption function which reverses the process.

# If the string S is an empty value or the integer N is not positive, return the first argument without changes.
