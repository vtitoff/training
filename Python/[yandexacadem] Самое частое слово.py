f = open('input.txt', 'r', encoding='utf8')
text = f.read().split()
f.close
dict = {}
res=[]
for i in text:
    if i not in dict:
        dict[i] = 0
    else:
        dict[i] += 1
maxword = max(dict.values())
for i in dict:
  if dict[i]==maxword:
    res.append(i)
print(sorted(res)[0])


# Дан текст. Выведите слово, которое в этом тексте встречается чаще всего. Если таких слов несколько, выведите то,
# которое меньше в лексикографическом порядке.

# Формат ввода
# Вводится текст.

# Формат вывода
# Выведите ответ на задачу.

# Пример 1
# Ввод	Вывод
# apple orange banana banana orange
# banana
# Пример 2
# Ввод	Вывод
# oh you touch my tralala mmm my ding ding dong
# ding
# Пример 3
# Ввод	Вывод
# q w e r t y u i o p
# a s d f g h j k l
# z x c v b n m
