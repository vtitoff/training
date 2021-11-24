dictionary = {}
f = open('input.txt', 'r',  encoding='utf8')
while 1 == 1:
    line = f.readline()
    if not line:
        break
    s = line.strip().split()
    for i in s:
        if i in dictionary:
            dictionary[i] -= 1
        else:
            dictionary[i] = -1
f.close
massive = []
dop_massive=[]
for i in dictionary:
    massive.append((dictionary[i], i))
for i in sorted(massive):
    print(i[1])
    
# Дан текст. Выведите все слова, встречающиеся в тексте, по одному на каждую строку. Слова должны быть отсортированы по убыванию их количества появления в тексте, а при одинаковой частоте появления — в лексикографическом порядке. Указание. После того, как вы создадите словарь всех слов, вам захочется отсортировать его по частоте встречаемости слова. Желаемого можно добиться, если создать список, элементами которого будут кортежи из двух элементов: частота встречаемости слова и само слово. Например, [(2, 'hi'), (1, 'what'), (3, 'is')]. Тогда стандартная сортировка будет сортировать список кортежей, при этом кортежи сравниваются по первому элементу, а если они равны — то по второму. Это почти то, что требуется в задаче.

# Формат ввода
# Вводится текст.

# Формат вывода
# Выведите ответ на задачу.

# Пример 1
# Ввод	Вывод
# hi
# hi
# what is your name
# my name is bond
# james bond
# my name is damme
# van damme
# claude van damme
# jean claude van damme
# damme
# is
# name
# van
# bond
# claude
# hi
# my
# james
# jean
# what
# your
# Пример 2
# Ввод	Вывод
# oh you touch my tralala
# mmm my ding ding dong
# ding
# my
# dong
# mmm
# oh
# touch
# tralala
# you
# Пример 3
# Ввод	Вывод
# ai ai ai ai ai ai ai ai ai ai
# ai
