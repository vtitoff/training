from functools import reduce

party_voices = {}
party_places = {}
party_remains = {}
party_names = []

f = open('input.txt', 'r', encoding='utf8')
while 1 == 1:
    line = f.readline()
    if not line:
        break
    s = line.strip().split()
    party_voices[str(' '.join(s[:-1]))] = int(s[-1])
    party_names.append(str(' '.join(s[:-1])))
f.close()

selective_partial = sum(party_voices.values()) / 450

for key in party_voices.keys():
    party_places[key] = party_voices[key] // selective_partial
    party_remains[key] = party_voices[key] / selective_partial - party_places[key]

vacant_places = 450 - sum(party_places.values())

while vacant_places > 0:
    max_value = 0
    max_party = ''
    for party in party_remains:
        if party_remains[party] > max_value:
            max_value = party_remains[party]
            max_party = party
        elif party_remains[party] == max_value:
            if party_voices[party] > party_voices[max_party]:
                max_party = party
    party_places[max_party] += 1
    vacant_places -= 1

for party in party_names:
    print(party, int(party_places[party]))


# Статья 83 закона “О выборах депутатов Государственной Думы Федерального Собрания Российской Федерации” определяет следующий алгоритм
# пропорционального распределения мест в парламенте.

# Необходимо распределить 450 мест между партиями, участвовавших в выборах. 
# Сначала подсчитывается сумма голосов избирателей, поданных за каждую партию и подсчитывается сумма голосов, поданных за все партии. 
# Эта сумма делится на 450, получается величина, называемая “первое избирательное частное” (смысл первого избирательного частного - 
# это количество голосов избирателей, которое необходимо набрать для получения одного места в парламенте).

# Далее каждая партия получает столько мест в парламенте, чему равна целая часть от деления числа голосов за данную партию 
# на первое избирательное частное.

# Если после первого раунда распределения мест сумма количества мест, отданных партиям, меньше 450, 
# то оставшиеся места передаются по одному партиям, в порядке убывания дробной части частного от деления числа голосов 
# за данную партию на первое избирательное частное. Если же для двух партий эти дробные части равны, 
# то преимущество отдается той партии, которая получила большее число голосов.

# Формат ввода
# На вход программе подается список партий, участвовавших в выборах. Каждая строка входного файла содержит название партии 
# (строка, возможно, содержащая пробелы), затем, через пробел, количество голосов, полученных данной партией – число, не превосходящее 108.

# Формат вывода
# Программа должна вывести названия всех партий и количество голосов в парламенте, полученных данной партией. 
# Названия необходимо выводить в том же порядке, в котором они шли во входных данных.

# Пример 1
# Ввод	Вывод
# Party One 100000
# Party Two 200000
# Party Three 400000
# Party One 64
# Party Two 129
# Party Three 257
# Пример 2
# Ввод	Вывод
# Party number one 100
# Partytwo 100
# Party number one 225
# Partytwo 225
# Пример 3
# Ввод	Вывод
# Party number one 449
# Partytwo 1
# Party number one 449
# Partytwo 1
