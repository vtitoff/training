massive = [i for i in range(1, 1001)]


def binary_search(num):
    low = 0
    high = len(massive)
    mid = (low + high) // 2
    while low <= high:
        if num < massive[mid]:
            high = mid
            mid = (low + high) // 2
        elif num > massive[mid]:
            low = mid
            mid = (low + high) // 2
        else:
            return mid


print(binary_search(15))
