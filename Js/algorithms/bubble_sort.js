let a = [7, 3, 1, 5, 4, 2, 6];
for (i = 0; i < a.length - 1; i++) {
    for (j = 0; j < a.length; j++) {
        if (a[j] > a[j + 1]) {
            temp = a[j]
            a[j] = a[j + 1];
            a[j + 1] = temp
        }
    }
}
console.log(a);
