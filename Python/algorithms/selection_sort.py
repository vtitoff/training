massive = [5, 8, 3, 1, 2, 4, 6, 7, 9, 10, 8]
sorted_massive = []
while len(massive):
    length = len(massive)
    minim = min(massive)
    min_index = massive.index(minim)
    massive[min_index], massive[length - 1] = massive[length - 1], massive[min_index]
    sorted_massive.append(massive.pop())

print(sorted_massive)
