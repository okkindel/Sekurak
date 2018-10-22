import math
import pandas as pd
import numpy as np
import matplotlib.pyplot as plt

data = pd.read_csv('table.csv', sep=";")
arr = []

def parse(number):
    try:
        return str(number)
    except ValueError:
        return 0

def mod(a, b):
    return ((float(a) - float(b)) % 10)

all_a = data["KOD"]
all_b = data["KOD_WPISANY"]
all_c = data["ZAMKNIETY"]

for x in range (0, 31):

	a = parse(all_a[x])
	b = parse(all_b[x])
	c = parse(all_c[x])
	sum = 0
	changed = 0

	for i in range (0, 4):
	    x = int(a[i])
	    y = int(b[i])
	    res = min(mod(x, y), mod(y, x))
	    if res != 0.0:
	        changed = changed + 1
	    sum = sum + res

	changed = changed / 2
	#print(changed)
	sum = sum * changed
	arr.append(sum)

	print(a, b, c, sum)

print(arr)
arr.sort()
plt.plot(arr)
plt.show()