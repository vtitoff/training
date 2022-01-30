f= open('input.txt', 'r', encoding='utf8')
text=f.read().split()
f.close
dict={}
res=[]

for i in text:
  if i not in dict:
    dict[i]=0
    res.append(dict[i])
  else:
    dict[i]+=1
    res.append(dict[i])
print(' '.join(map(str, res)))


# Во входном файле (вы можете читать данные из файла input.txt) записан текст. 
# Словом считается последовательность непробельных символов идущих подряд, слова разделены одним или большим числом пробелов 
# или символами конца строки. Для каждого слова из этого текста подсчитайте, сколько раз оно встречалось в этом тексте ранее.

# Формат ввода
# Вводится текст.

# Формат вывода
# Выведите ответ на задачу.

# Пример 1
# Ввод	Вывод
# one two one tho three

# 0 0 1 0 0 
# Пример 2
# Ввод	Вывод
# She sells sea shells on the sea shore;
# The shells that she sells are sea shells I'm sure.
# So if she sells sea shells on the sea shore,
# I'm sure that the shells are sea shore shells.

# 0 0 0 0 0 0 1 0 0 1 0 0 1 0 2 2 0 0 0 0 1 2 3 3 1 1 4 0 1 0 1 2 4 1 5 0 0 
# Пример 3
# Ввод	Вывод
# aba aba; aba @?"
# 0 0 1 0 