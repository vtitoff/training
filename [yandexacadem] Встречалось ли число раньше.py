nums=list(map(int, input().split()))
dict={}
for i in nums:
    if i in dict:
        print('YES')
    else:
        dict[i]='num'
        print('NO') 

# Во входной строке записана последовательность чисел через пробел. Для каждого числа выведите слово YES (в отдельной строке), если это число ранее встречалось в последовательности или NO, если не встречалось.

# Формат ввода
# Вводится список чисел. Все числа списка находятся на одной строке.

# Формат вывода
# Выведите ответ на задачу.

# Пример
# Ввод	Вывод
# 1 2 3 2 3 4
# NO
# NO
# NO
# YES
# YES
# NO