class Pessoa:
    def __init__(self,altura, sexo):
        self.altura = altura
        self.sexo = sexo

altura_input = input('Digite a altura em cm: ')
sexo_input = input('Digite M (masculino) ou F (feminino): ')

if sexo_input == 'M':
    sexo_input = "masculino"

if sexo_input == 'F':
    sexo_input = "feminino"

pessoa1 = Pessoa(altura=altura_input, sexo=sexo_input)
print(f"a pessoa 1 tem {pessoa1.altura}cm e é do sexo {pessoa1.sexo}")
