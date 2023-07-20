INSERT INTO
    pytest(ID_PYTEST, pregunta, respuesta, dificultad)
VALUES
    (1,"i = 0\nwhile i < 5:\n    i = i + 1\n\nif i < 5:\n    print("A")\nelse:\n    print("B")", "B", 1),
    (2,"i = list(range(5))\nprint(i)","[0, 1, 2, 3, 4]", 1),
    (3,"i = 0\nwhile i < 10:\n    i = i + 1", "10", 1);


