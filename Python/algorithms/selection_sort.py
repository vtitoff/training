massive = [5, 8, 3, 1, 2, 4, 6, 7, 9, 10, 8]
sorted_massive = []
length = len(massive)
for i in range(0, length):
    while len(massive) >= 1:
        minimal = min(massive)
        minimal_index = massive.index(minimal)
        if massive[i]!=minimal:
            massive[0]

