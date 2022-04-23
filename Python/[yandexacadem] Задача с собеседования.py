s = 'AAAABBBCCDDEFFXXXXXXXX'
temp = s[0]
count = 1
answer = []
for i in range(1, len(s)):
    if s[i] == temp:
        count += 1
    else:
        if count > 1:
            answer.append(f'{temp}{count}')
            temp = s[i]
            count = 1
        else:
            answer.append(temp)
            temp = s[i]
            count = 1
if count > 1:
    answer.append(f'{temp}{count}')
    temp = s[i]
    count = 1
else:
    answer.append(temp)
    temp = s[i]
    count = 1
print(''.join(answer))
