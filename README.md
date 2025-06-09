### Hexlet tests and linter status:
[![Actions Status](https://github.com/RomanPekshuev/frontend-project-44/actions/workflows/hexlet-check.yml/badge.svg)](https://github.com/RomanPekshuev/frontend-project-44/actions)
[![Maintainability](https://api.codeclimate.com/v1/badges/aee818130a9f5e7d0088/maintainability)](https://codeclimate.com/github/RomanPekshuev/frontend-project-44/maintainability)

# Brain Games: Проверка на чётность

Добро пожаловать в игру "Проверка на чётность"! В этой игре вам предстоит определить, является ли случайное число чётным или нечётным.

## Описание игры

В начале игры вам будет предложено ввести ваше имя. Затем вы увидите инструкции:

- Ответьте "yes", если число чётное.
- Ответьте "no", если число нечётное.

Вы должны дать правильный ответ на три вопроса подряд, чтобы выиграть. Если вы дадите неверный ответ или введёте некорректные данные, игра завершится, и вы получите сообщение с правильным ответом.

### Пример игрового процесса

Welcome to the Brain Games!
May I have your name? Sam
Hello, Sam!
Answer "yes" if the number is even, otherwise answer "no".
Question: 15
Your answer: no
Correct!
Question: 6
Your answer: yes
Correct!
Question: 7
Your answer: no
Correct!
Congratulations, Sam!

Если вы ошибётесь:

Welcome to the Brain Games!
May I have your name? Bill
Hello, Bill!
Answer "yes" if the number is even, otherwise answer "no".
Question: 15
Your answer: yes
'yes' is wrong answer ;(. Correct answer was 'no'.
Let's try again, Bill!

## Установка

1. Клонируйте репозиторий:
   
bash
   git clone https://github.com/ваш-логин/brain-games.git   cd brain-games
   
2. Установите зависимости:
   
bash
   npm install
   
3. Запустите игру:
   
bash
   npm run brain-even
   
## Структура проекта

- bin/brain-even.js: исполняемый файл для игры "Проверка на чётность".
- src/cli.js: файл для обработки ввода/вывода (не изменяйте).
- bin/brain-games.js: основной исполняемый файл (не изменяйте).

## Ссылки

- [Don’t repeat yourself (DRY)](https://ru.wikipedia.org/wiki/Don%27t_repeat_yourself)
- [You Aren't Gonna Need It (YAGNI)](https://ru.wikipedia.org/wiki/You_aren%27t_gonna_need_it)
- [Keep It Simple, Stupid (KISS)](https://ru.wikipedia.org/wiki/KISS_principle)
- [Магические числа](https://ru.wikipedia.org/wiki/Магическое_число)

## Запись сессии

Запись сессии игры доступна по следующей ссылке: [asciinema](https://asciinema.org/a/ваш_идентификатор_записи)

Надеемся, вам понравится играть в "Проверка на чётность"! Удачи!

# Brain Games: Калькулятор

Добро пожаловать в игру "Калькулятор"! В этой игре вам предстоит решить случайные математические выражения и ввести правильный ответ.

## Описание игры

В начале игры вам будет предложено ввести ваше имя. Затем вы увидите инструкции:

- Вам будет показано случайное математическое выражение, например 35 + 16.
- Вы должны вычислить результат и ввести его.

Вы должны дать правильный ответ на три вопроса подряд, чтобы выиграть. Если вы дадите неверный ответ, игра завершится, и вы получите сообщение с правильным ответом.

### Пример игрового процесса

Welcome to the Brain Games!
May I have your name? Sam
Hello, Sam!
What is the result of the expression?
Question: 4 + 10
Your answer: 14
Correct!
Question: 25 - 11
Your answer: 14
Correct!
Question: 25 * 7
Your answer: 175
Correct!
Congratulations, Sam!

Если вы ошибётесь:

Welcome to the Brain Games!
May I have your name? Bill
Hello, Bill!
What is the result of the expression?
Question: 25 * 7
Your answer: 145
'145' is wrong answer ;(. Correct answer was '175'.
Let's try again, Bill!

Запустите игру:
   
bash
   npm run brain-calc

## Структура проекта

- bin/brain-calc.js: исполняемый файл для игры "Калькулятор".
- src/index.js: файл с общей логикой для всех игр.
- src/cli.js: файл для обработки ввода/вывода (не изменяйте).
- bin/brain-games.js: основной исполняемый файл (не изменяйте).

## Ссылки

- [Принцип открытости/закрытости](https://ru.wikipedia.org/wiki/Принцип_открытости/закрытости)
- [Интерфейс](https://ru.wikipedia.org/wiki/Интерфейс)
- [Побочные эффекты](https://ru.wikipedia.org/wiki/Побочный_эффект)
- [Построение правильной архитектуры](https://ru.wikipedia.org/wiki/Архитектура_программного_обеспечения)

## Запись сессии

Запись сессии игры доступна по следующей ссылке: [asciinema](https://asciinema.org/a/ваш_идентификатор_записи)

Надеемся, вам понравится играть в "Калькулятор"! Удачи!

# Brain Games: НОД

Добро пожаловать в игру "Наибольший Общий Делитель (НОД)"! В этой игре вам предстоит вычислить наибольший общий делитель двух случайных чисел.

## Описание игры

В начале игры вам будет предложено ввести ваше имя. Затем вы увидите инструкции:

- Вам будет показано два случайных числа, например 25 50.
- Вы должны вычислить НОД этих чисел и ввести его.

Вы должны дать правильный ответ на три вопроса подряд, чтобы выиграть. Если вы дадите неверный ответ, игра завершится, и вы получите сообщение с правильным ответом.

### Пример игрового процесса

Welcome to the Brain Games!
May I have your name? Sam
Hello, Sam!
Find the greatest common divisor of given numbers.
Question: 25 50
Your answer: 25
Correct!
Question: 100 52
Your answer: 4
Correct!
Question: 3 9
Your answer: 3
Correct!
Congratulations, Sam!

Если вы ошибётесь:

Welcome to the Brain Games!
May I have your name? Sam
Hello, Sam!
Find the greatest common divisor of given numbers.
Question: 25 50
Your answer: 1
'1' is wrong answer ;(. Correct answer was '25'.
Let's try again, Sam!

Запустите игру:
   
bash
   npm run brain-gcd

## Структура проекта

- bin/brain-gcd.js: исполняемый файл для игры "НОД".
- src/index.js: файл с общей логикой для всех игр.
- src/cli.js: файл для обработки ввода/вывода (не изменяйте).
- bin/brain-games.js: основной исполняемый файл (не изменяйте).

## Ссылки

- [Принцип открытости/закрытости](https://ru.wikipedia.org/wiki/Принцип_открытости/закрытости)
- [Интерфейс](https://ru.wikipedia.org/wiki/Интерфейс)
- [Побочные эффекты](https://ru.wikipedia.org/wiki/Побочный_эффект)
- [Построение правильной архитектуры](https://ru.wikipedia.org/wiki/Архитектура_программного_обеспечения)

## Запись сессии

Запись сессии игры доступна по следующей ссылке: [asciinema](https://asciinema.org/a/ваш_идентификатор_записи)

Надеемся, вам понравится играть в "НОД"! Удачи!

# Brain Games: Арифметическая прогрессия

Добро пожаловать в игру "Арифметическая прогрессия"! В этой игре вам предстоит определить недостающее число в ряду, образующем арифметическую прогрессию.

## Описание игры

В начале игры вам будет предложено ввести ваше имя. Затем вы увидите инструкции:

- Вам будет показан ряд чисел, образующий арифметическую прогрессию, с заменённым на два точки (..) одним из чисел.
- Вы должны определить недостающее число и ввести его.

Вы должны дать правильный ответ на три вопроса подряд, чтобы выиграть. Если вы дадите неверный ответ, игра завершится, и вы получите сообщение с правильным ответом.

### Пример игрового процесса

Welcome to the Brain Games!
May I have your name? Sam
Hello, Sam!
What number is missing in the progression?
Question: 5 7 9 11 13 .. 17 19 21 23
Your answer: 15
Correct!
Question: 2 5 8 .. 14 17 20 23 26 29
Your answer: 11
Correct!
Question: 14 19 24 29 34 39 44 49 54 ..
Your answer: 59
Correct!
Congratulations, Sam!

Если вы ошибётесь:

Welcome to the Brain Games!
May I have your name? Sam
Hello, Sam!
What number is missing in the progression?
Question: 5 7 9 11 13 .. 17 19 21 23
Your answer: 1
'1' is wrong answer ;(. Correct answer was '15'.
Let's try again, Sam!

Запустите игру:
   
bash
   npm run brain-progression
   
## Структура проекта

- bin/brain-progression.js: исполняемый файл для игры "Арифметическая прогрессия".
- src/index.js: файл с общей логикой для всех игр.
- src/cli.js: файл для обработки ввода/вывода (не изменяйте).
- bin/brain-games.js: основной исполняемый файл (не изменяйте).

## Ссылки

- [Принцип открытости/закрытости](https://ru.wikipedia.org/wiki/Принцип_открытости/закрытости)
- [Интерфейс](https://ru.wikipedia.org/wiki/Интерфейс)
- [Побочные эффекты](https://ru.wikipedia.org/wiki/Побочный_эффект)
- [Построение правильной архитектуры](https://ru.wikipedia.org/wiki/Архитектура_программного_обеспечения)

## Запись сессии

Запись сессии игры доступна по следующей ссылке: [asciinema](https://asciinema.org/a/ваш_идентификатор_записи)

Надеемся, вам понравится играть в "Арифметическую прогрессию"! Удачи!

# Brain Games: Простое ли число?

Добро пожаловать в игру "Простое ли число?"! В этой игре вам предстоит определить, является ли заданное число простым.

## Описание игры

В начале игры вам будет предложено ввести ваше имя. Затем вы увидите инструкции:

- Вам будет показано число, и вам нужно ответить "yes", если это число простое, или "no", если оно составное.
- Вы должны дать правильный ответ на три вопроса подряд, чтобы выиграть. Если вы дадите неверный ответ, игра завершится, и вы получите сообщение с правильным ответом.

### Пример игрового процесса

Welcome to the Brain Games!
May I have your name? Sam
Hello, Sam!
Answer "yes" if given number is prime. Otherwise answer "no".
Question: 7
Your answer: yes
Correct!
Question: 10
Your answer: no
Correct!
Question: 13
Your answer: yes
Correct!
Congratulations, Sam!

Если вы ошибётесь:

Welcome to the Brain Games!
May I have your name? Sam
Hello, Sam!
Answer "yes" if given number is prime. Otherwise answer "no".
Question: 4
Your answer: yes
'yes' is wrong answer ;(. Correct answer was 'no'.
Let's try again, Sam!

Запустите игру:
   
bash
   npm run brain-prime
   
## Структура проекта

- bin/brain-prime.js: исполняемый файл для игры "Простое ли число?".
- src/index.js: файл с общей логикой для всех игр.
- src/cli.js: файл для обработки ввода/вывода (не изменяйте).
- bin/brain-games.js: основной исполняемый файл (не изменяйте).

## Ссылки

- [Предикаты](https://ru.wikipedia.org/wiki/Предикат_(логика))
- [Список простых чисел](https://ru.wikipedia.org/wiki/Простое_число)
- [Задачи](https://ru.wikipedia.org/wiki/Задача)

## Запись сессии

Запись сессии игры доступна по следующей ссылке: [asciinema](https://asciinema.org/a/ваш_идентификатор_записи)

Надеемся, вам понравится играть в "Простое ли число?"! Удачи!
