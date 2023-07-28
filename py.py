num = int(input())
def func():
    for i in range (2, num):
        if (num % i) == 0:
            isPrime = True
            break
    if (isPrime):
        print("prime")
    else:
        print("not prime")
func()