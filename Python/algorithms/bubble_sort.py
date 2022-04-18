massive = [5, 8, 1, 3, 4, 2, 7, 6, 10, 9]
for i in range(0, len(massive)):
    for j in range(1, len(massive)):
        print(f'i {i} j {j}')
        if massive[j-1] > massive[j]:
            massive[j-1], massive[j] = massive[j], massive[j-1]
print(massive)
