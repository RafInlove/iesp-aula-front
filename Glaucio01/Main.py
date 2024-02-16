pessoas = 0
totalHeight = 0
numH = 0
numM = 0
minHeight = 0
maxHeight = 0

while pessoas <= 14:
    pessoas = pessoas + 1
    print (f"Pessoa {pessoas}")
    height = float(input("Altura: "))
    gender = input("Gênero (H/M): ")

    if gender in ["H"]:
        totalHeight = totalHeight + height
        numH = numH + 1

    if gender in ["M"]:
        numM = numM + 1

    if minHeight >= 0:
        minHeight = height

    if minHeight <= height:
        minHeight = height

    if maxHeight <= height:
        maxHeight = height

print(f"Média de altura dos homens: {totalHeight/numH}")
print(f"Número de mulheres: {numM}")
print(f"Menor altura: {minHeight}")
print(f"Maior altura: {maxHeight}")