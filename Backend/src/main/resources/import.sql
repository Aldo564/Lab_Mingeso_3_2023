# Preguntas nivel bajo
INSERT INTO pytest(ID_PYTEST, pregunta, respuesta, dificultad) VALUES (1,"#Cuál es la salida del siguiente código?\ni = 0\nwhile i < 5:\n    i = i + 1\n\nif i < 5:\n    print('A')\nelse:\n    print('B')", "B", 1);
INSERT INTO pytest(ID_PYTEST, pregunta, respuesta, dificultad) VALUES (2,"#Cuál es la salida del siguiente código?\ni = list(range(5))\nprint(i)","[0, 1, 2, 3, 4]", 1);
INSERT INTO pytest(ID_PYTEST, pregunta, respuesta, dificultad) VALUES (3,"#Cuál es el valor de i?\ni = 0\nwhile i < 10:\n    i = i + 1", "10", 1);
INSERT INTO pytest(ID_PYTEST, pregunta, respuesta, dificultad) VALUES (4,"#Cuál es la salida del siguiente código?\ndef funcion(a,b):\n    print(a+b)\n\nfuncion(1,2)", "3", 1);
INSERT INTO pytest(ID_PYTEST, pregunta, respuesta, dificultad) VALUES (5,"#Cuál es la salida del siguiente código?\nstring1 = 'hola'\nstring2 = 'mundo'\nprint(string1+string2)", "holamundo", 1);
INSERT INTO pytest(ID_PYTEST, pregunta, respuesta, dificultad) VALUES (6,"#Cuál es la salida del siguiente código?\nresultado = 5 + 3 * 2\nprint(resultado)", "11", 1);
INSERT INTO pytest(ID_PYTEST, pregunta, respuesta, dificultad) VALUES (7,"#Cuál es la salida del siguiente código?\nnombre = 'Juan'\nprint(nombre[1])", "u", 1);
INSERT INTO pytest(ID_PYTEST, pregunta, respuesta, dificultad) VALUES (8,"#Cuál es la salida del siguiente código?\nnumeros = [1, 2, 3]\nres = 0\n\nfor num in numeros:\n    res = res + num\n\nprint(res)", "6", 1);

# Preguntas nivel medio

INSERT INTO pytest(ID_PYTEST, pregunta, respuesta, dificultad) VALUES (9,"#Cuál es la salida del siguiente código?\ncadena = '¡Hola Mundo!'\nresultado = cadena[1:12:2]\nprint(resultado)", "Hl ud!", 2);
INSERT INTO pytest(ID_PYTEST, pregunta, respuesta, dificultad) VALUES (10,"#Cuál es la salida del siguiente código?\ndef invertir_palabra(palabra):\n    return palabra[::-1]\n\nmensaje = 'Python es genial'\nresultado = invertir_palabra(mensaje)\nprint(resultado)", "laineg se nohtyP", 2);
INSERT INTO pytest(ID_PYTEST, pregunta, respuesta, dificultad) VALUES (11, "#Cuál es la salida del siguiente código?\ndef funcion(cadena, caracter):\n    return caracter.join(cadena)\n\nmensaje = 'Hola'\nresultado = funcion(mensaje, '-')\nprint(resultado)", "H-o-l-a", 2);
INSERT INTO pytest(ID_PYTEST, pregunta, respuesta, dificultad) VALUES (12, "#Cuál es la salida del siguiente código?\nmensaje = '¡Hola a todos!'\nresultado = mensaje.split(' ')\nprint(resultado)", "['¡Hola', 'a', 'todos!']", 2);
INSERT INTO pytest(ID_PYTEST, pregunta, respuesta, dificultad) VALUES (13, "#Cuál es el valor de 'resultado'?\ncadena1 = 'Hola'\ncadena2 = 'Mundo'\nresultado = len(cadena1 + cadena2)", "9", 2);
INSERT INTO pytest(ID_PYTEST, pregunta, respuesta, dificultad) VALUES (14, "#Cuál es la salida del siguiente código?\nlista = ['a','b','c']\nlista2 = []\nfor letra in lista:\n    lista2.append(letra.upper())\n\nprint(lista2)", "['A','B','C']", 2);
INSERT INTO pytest(ID_PYTEST, pregunta, respuesta, dificultad) VALUES (15, "#Cuantos numeros imprime el siguiente código?\ni = list(range(5))\nfor num in i:\n    if(num % 2 == 0):\n        print(num)", "3", 2);
INSERT INTO pytest(ID_PYTEST, pregunta, respuesta, dificultad) VALUES (16, "#En que linea de codigo hay un error?\nfor i in range(10):\n    if i % 2 == 0:\n        print('Modulo 2')\n    else if 1 % 3 == 0:\n        print('Modulo 3')\n    else:\n        print('No es modulo 2 ni 3')", "4", 2);

# Preguntas nivel alto

INSERT INTO pytest(ID_PYTEST, pregunta, respuesta, dificultad) VALUES (17, "#Cuál es el valor de resultado?\ndef funcion_a(x):\n    return x * 2\n\ndef funcion_b(x):\n    return x + 5\n\ndef funcion_c(x):\n    return funcion_a(x) + funcion_b(x)\n\nresultado = funcion_c(10)", "35", 3);
INSERT INTO pytest(ID_PYTEST, pregunta, respuesta, dificultad) VALUES (18, "#Cuál es el valor de resultado?\ndef funcion_recursiva(n):\n    if n <= 0:\n        return 0\n    return n + funcion_recursiva(n - 1)\n\nresultado = funcion_recursiva(4)", "10", 3);
INSERT INTO pytest(ID_PYTEST, pregunta, respuesta, dificultad) VALUES (19, "#Cuál es el valor de resultado?\ndef funcion(cadena):\n    letras = 'aeiouAEIOU'\n    contador = 0\n    for letra in cadena:\n        if letra in letras:\n            contador += 1\n    return contador\n\nfrase = 'Hola mundo'\nresultado = funcion(frase)", "4", 3);
INSERT INTO pytest(ID_PYTEST, pregunta, respuesta, dificultad) VALUES (20, "#Cuál es el valor de resultado?\ndef funcion(lista):\n    nueva_lista = []\n    for num in lista:\n        nueva_lista.append(num * 2)\n    return nueva_lista\n\nnumeros = [1, 2, 3, 4]\nresultado = funcion(numeros)", "[2, 4, 6, 8]", 3);
INSERT INTO pytest(ID_PYTEST, pregunta, respuesta, dificultad) VALUES (21, "#Cuál es el valor de resultado?\ndef suma_pares_hasta(n):\n    suma = 0\n    for num in range(n + 1):\n        if num % 2 == 0:\n            suma += num\n    return suma\n\nresultado = suma_pares_hasta(10)", "30", 3);
INSERT INTO pytest(ID_PYTEST, pregunta, respuesta, dificultad) VALUES (22, "#Cuál es el valor de resultado?\ndef funcion(cadena1, cadena2):\n    return sorted(cadena1.lower()) == sorted(cadena2.lower())\n\npalabra1 = 'Listen'\npalabra2 = 'Silent'\nresultado = funcion(palabra1, palabra2)", "True", 3);
INSERT INTO pytest(ID_PYTEST, pregunta, respuesta, dificultad) VALUES (23, "#Cuál es el valor de resultado?\ndef funcion(texto, texto2):\n    return texto.lower().texto2(subcadena.lower())\n\ntexto = 'anita lava la tina, anita'\ntexto2 = 'anita'\nresultado = funcion(texto, texto2)", "2", 3);
INSERT INTO pytest(ID_PYTEST, pregunta, respuesta, dificultad) VALUES (24, "#Cuál es el valor de resultado?\ndef funcion(cadena):\n    return cadena.lower() == cadena.lower()[::-1]\n\npalabra = 'reconocer'\nresultado = funcion(palabra)", "True", 3);

