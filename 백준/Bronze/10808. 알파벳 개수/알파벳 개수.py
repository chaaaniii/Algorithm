a = input()
b = [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]

for i in a:
    b[ord(i)-97]+=1
for i in b:
    print(i, end=' ')