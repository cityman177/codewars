// 100
// Вы получаете массив чисел, возвращаете сумму всех положительных чисел.
// Пример [1,-4,7,12]=>1 + 7 + 12 = 20
// Примечание: если суммировать нечего, по умолчанию используется сумма 0.

function sumPositive(arr) {
    return arr.filter(e => e > 0).reduce((x, i) => x + i, 0);
  }
  //console.log(sumPositive([1,-4,7,12]));
  
  
  
  //101
  // Простой, учитывая строку слов, возвращает длину самого короткого слова (слов).
  // Строка никогда не будет пустой, и вам не нужно учитывать разные типы данных.
  
  function shortestWord(s) {
    const lens = s.split(' ').map((e) => e.length);
    return Math.min(...lens)
    // Math.min(8, 4, 1, 9, 4)

    // const lens = [1, 2, 3];
    // Math.min(1, 2, 3)

    // return .sort((a, b) => a - b).shift();
  }
  //console.log(shortestWord('bitcoin take over the world maybe who knows perhaps'));
  
  
  
  //102
  // В этом ката вы создадите функцию, которая принимает список неотрицательных целых чисел 
  // и строк и возвращает новый список с отфильтрованными строками.
  // пример
  // filter_list([1,2,'a','b']) == [1,2]
  // filter_list([1,'a','b',0,15]) == [1,0,15]
  // filter_list([1,2,'aasf','1','123',123]) == [1,2,123]
  
  function listFiltering(l) {
    return l.filter(e => typeof e === 'number');
  }
  //console.log(listFiltering([1, 2,'aasf','1','123', 123]));
  
  

  //103
  // Добро пожаловать. В этом ката вас просят возвести в квадрат каждую цифру числа и соединить их.
  // Например, если мы запустим 9119 через функцию, выйдет 811181, потому что 9**2 равно 81, а 1**2 равно 1.
  // Примечание: функция принимает целое число и возвращает целое число.
  
  function squareDigit(num) {
    return +num
      .toString()
      .split('')
      .map(e => e ** 2)
      .join('');
  }
  //console.log(squareDigit(9119));
  
  

  //(104)
  // Я дам вам целое число. Верни мне фигуру такой же длины и ширины, как целое число. 
  // Целое число будет целым числом от 1 до 50.
  // пример
  // n = 3, поэтому я ожидаю, что будет квадрат 3x3, как показано ниже, в виде строки:
  // +++
  // +++
  // +++
  
  function generateShape(int){
    let out = '';
    for (let i = 0; i < int; i++) {
      out += '+'.repeat(int);
      if (i < int-1) {
        out += '\n';
      }
    }
    return out;
    //return Array(int).fill('+'.repeat(int)).join('\n');
    }
  //console.log(generateShape(3));
  
  
  
  //105
  // Создайте программу, которая фильтрует список строк и возвращает список только 
  // с именами ваших друзей.
  // Если в имени ровно 4 буквы, можете быть уверены, что это должен быть ваш друг!
  //  В противном случае можете быть уверены, что он не ...
  // Пример: Input = ["Ryan", "Kieran", "Jason", "Yous"], Output = ["Ryan", "Yous"].
  // т.е.
  // friend ["Ryan", "Kieran", "Mark"] `shouldBe` ["Ryan", "Mark"]
  // Примечание: сохраняйте исходный порядок имен в выводе.
  
  function friend(friends) {
    return friends.filter(e => e.length === 4);
  }
  //console.log(friend(["Ryan", "Kieran", "Jason", "Yous"]));
  
  
  
  //[106]
  // Возвращает количество (количество) гласных в заданной строке.
  // Мы будем считать (a, e, i, o, u) это гласными (но не y).
  // Входная строка будет состоять только из строчных букв и / или пробелов.
  
  function getCount(str) {
    let out = 0;
    for (let i = 0; i < str.length; i++) {
      let t1 = 'aeiou'.includes(str[i]);
      if (t1 === true) {
        out += str[i].length
      }
    }
    return out;
     //return Array.from(str).filter(e => 'aeiou'.includes(e)).length;
  }
  //console.log(getCount('abracadabra'));
  
  
  
  //107
  // У некоторых чисел есть забавные свойства. Например:
  // 89 -> 8¹ + 9² = 89 * 1
  // 695 -> 6² + 9³ + 5⁴ = 1390 = 695 * 2
  // 46288 -> 4³ + 6⁴ + 2⁵ + 8⁶ + 8⁷ = 2360688 = 46288 * 51
  // Учитывая положительное целое число n, записанное как abcd ... (a, b, c, d ... - цифры) 
  // и положительное целое число p
  // мы хотим найти положительное целое число k, если оно существует, например, сумма цифр n,
  //  взятых в последовательные степени p, равна k * n.
  // Другими словами:
  // Существует ли целое число k, например: (a ^ p + b ^ (p + 1) + c ^ (p + 2) + d ^ (p + 3) + ...) = n * k
  // Если это так, мы вернем k, если не вернем -1.
  // Примечание : n и p всегда будут строго положительными целыми числами.
  // digPow(89, 1) should return 1 since 8¹ + 9² = 89 = 89 * 1
  // digPow(92, 1) should return -1 since there is no k such as 9¹ + 2² equals 92 * k
  // digPow(695, 2) should return 2 since 6² + 9³ + 5⁴= 1390 = 695 * 2
  // digPow(46288, 3) should return 51 since 4³ + 6⁴+ 2⁵ + 8⁶ + 8⁷ = 2360688 = 46288 * 51
  
  function digPow(n, p) {
  // i   0  1  2  3
  //   [ 5, 2, 3, 4 ]
  // p === 2

  // 5 ** 2 + 2 ** 3 + 3 ** 4 + 4 ** 5

  // acc, number, i
  // 0    5       0  → 25
  // 25   2       1  → 33
  // 33   3       2  → 124
  // 124  4       3  → 1148
    const num = n
      .toString()
      .split('')
      .map(Number)
      .reduce(
        (acc, number, i) => acc + number ** (p + i),
        0
      );

    return num % n === 0 ? num / n : - 1;
  }
  //console.log(digPow(92, 1));
  
  
  
  // 108
  // Ваша цель в этом ката - реализовать функцию различия, которая вычитает один список из другого
  // и возвращает результат.
  // Он должен удалить все значения из списка a, которые присутствуют в списке b.
  // arrayDiff([1,2],[1]) == [2]
  // Если значение присутствует в b, все его вхождения должны быть удалены из другого:
  // arrayDiff([1,2,2,2,3],[2]) == [1,3]
  
  function arrayDiff(a, b) {
    return a.filter(e => !b.includes(e));
  }
  //console.log(arrayDiff([1, 2, 2, 2, 3], [2]));
  
  
  
  //109
  // Напишите функцию, которая принимает в качестве аргумента одну строку (word). 
  // Функция должна возвращать упорядоченный список, содержащий индексы всех 
  // заглавных букв в строке.
  // пример
  // Test.assertSimilar( capitals('CodEWaRs'), [0,3,4,6] );
  
  function capitals(word) {
    return word
      .split('')
      .map((e, i) => e.toUpperCase() === e ? i : null)
      .filter(x => x !== null);
  }

  // ['100'] == 100
  // '' == 0
  // '0' == 0
  // '' != '0'

  //console.log(capitals('CodEWaRs'));
  
  
  
  //(110)
  // Напишите функцию insertDash(num)/, InsertDash(int num)которая будет вставлять тире ('-') 
  // между каждыми двумя нечетными числами в num. Например: если число 454793, 
  // вывод должен быть 4547-9-3. Не считайте ноль как нечетное число.
  // Обратите внимание, что число всегда будет неотрицательным (> = 0).
  
  function insertDash(num) {
    //return num.toString().replace(/[13579](?=[13579])/g, "$&-");
  //return num.toString().split('').reduce((a, b) => a[a.length-1] % 2 && b % 2 ? a + '-' + b : a + b);
    const t1 = num.toString();
    let sum = '';
    for (let i = 0; i < t1.length; i++) {
      sum += t1[i];
      if (t1[i] % 2 === 1 && i < t1.length - 1 && t1[i + 1] % 2 === 1) {
        sum += '-';
      }
    }
    return sum;
  }
  //console.log(insertDash(454793));
  
  
  
  //[111]
  // Учитывая массив (arr) в качестве аргумента, завершите функцию, countSmileys которая 
  // должна вернуть общее количество улыбающихся лиц.
  // Правила улыбающегося лица:
  // Каждый смайлик должен содержать допустимую пару глаз. Глаза можно пометить как : или ;
  // У смайлика может быть нос, но это не обязательно. Допустимые символы для носа - или ~
  // Каждое улыбающееся лицо должно иметь улыбающийся рот , который должен быть отмечен либо ) или D
  // Не допускается использование дополнительных символов, кроме упомянутых.
  // Примеры действительных смайлов: :) :D ;-D :~)
  // Недействительные смайлы: ;( :> :} :]
  // пример
  // countSmileys([':)', ';(', ';}', ':-D']);       // should return 2;
  // countSmileys([';D', ':-(', ':-)', ';~)']);     // should return 3;
  // countSmileys([';]', ':[', ';*', ':$', ';-D']); // should return 1;
  
  function countSmileys(arr) {
    let smileys = [":)",";)",":-)",";-)",";~)",":~)",":D",";D",":-D",":~D",";-D",";~D"];
    return arr.filter(e => smileys.includes(e)).length;
    // return arr.filter(e => /^[:;][-~]?[)D]$/.test(e)).length;
  }
  //console.log(countSmileys([':)', ';(', ';}', ':-D']));
  
  
  
  // (112)
  // Вызов:
  // Учитывая двумерный массив, верните новый массив, который переносит только те массивы из оригинала, 
  // которые не были пустыми и все элементы которых относятся к одному типу (то есть однородны). Для 
  // простоты массивы внутри массива будут содержать только символы и целые числа.
  // Пример:
  // Учитывая [[1, 5, 4], ['a', 3, 5], ['b'], [], ['1', 2, 3]], ваша функция должна вернуть [[1, 5, 4], ['b']].
  // Дополнение:
  // Имейте в виду, что для этого ката мы предполагаем, что пустые массивы не являются однородными.
  // Результирующие массивы должны быть в том порядке, в котором они были изначально, и не должны изменять свои значения.
  // Неявное приведение типов не допускается. Подмассив [1, '2'] будет считаться недопустимым и должен быть отфильтрован.
  
  function arrHomogenous(arrays) {
    return arrays.filter(e => e.length !== 0 && e.every(x => typeof x === typeof e[0]));
  }
  //console.log(arrHomogenous([[1, 5, 4], ['a', 3, 5], ['b'], [], ['1', 2, 3]]));
  
  
  
  //(113)
  // Время выиграть в лотерею!
  // Учитывая лотерейный билет (билет), представленный массивом из двух значений, вы должны выяснить, 
  // выиграли ли вы джекпот. Пример билета:
  // [ [ 'ABC', 65 ], [ 'HGR', 74 ], [ 'BYHT', 74 ] ]
  // Для этого вы должны сначала подсчитать «мини-выигрыши» на своем билете. В каждом подмассиве есть 
  // как строка, так и число. Если код любого из символов в строке совпадает с номером, вы получаете 
  // мини-выигрыш. Обратите внимание, у вас может быть только одна мини-победа на каждый подмассив.
  // После того, как вы подсчитали все свои мини-выигрыши, сравните это число с другим введенным значением 
  // (выигрыш). Если ваша сумма больше или равна (выигрыш), верните «Победитель!». Иначе верните «Неудачник!».
  // Все входные данные будут в правильном формате. Строки на билетах не всегда одинаковой длины.
  
  function bingo(ticket, win) {
    return ticket.filter(e => e[0].split('').some(x => x.charCodeAt(0) == e[1])).length >= win ? 'Winner!' : 'Loser!';
  }
  //console.log(bingo([['ABC', 65 ], ['HGR', 74], ['BYHT', 74]], 1));
  
  
  
  //114
  // Сценарий
  // Несколько человек стоят в ряд, разделенные на две команды . Первый человек входит в команду 1, 
  // второй идет в команду 2 , третий переходит в команду 1 , и так далее.
  // Задача
  // Учитывая массив положительных целых чисел (веса людей) , верните новый массив / кортеж из двух 
  // целых чисел , где первое - это общий вес команды 1 , а второе - общий вес команды 2 .
  // Примечания
  // Размер массива составляет по меньшей мере 1 .
  // Все числа будут положительными .
  // Примеры ввода >> вывода
  // rowWeights([13, 27, 49])  ==>  return (62, 27)
  // Пояснение :
  // Первый элемент 62 - это общий вес команды 1 , а второй элемент 27 - это общий вес команды 2 .
  // rowWeights([50, 60, 70, 80])  ==>  return (120, 140)
  // Пояснение :
  // Первый элемент 120 - это общий вес команды 1 , а второй элемент 140 - это общий вес команды 2 .
  // rowWeights([80])  ==>  return (80, 0)
  // Пояснение :
  // Первый элемент 80 - это общий вес команды 1 , а второй элемент 0 - это общий вес команды 2 .
  
  function rowWeights(array){
    let even = array.filter((_, i) => i % 2 === 0).reduce((a, b) => a+b, 0);
    let odd = array.filter((_, i) => i % 2 === 1).reduce((a, b) => a+b, 0);
    return [even, odd];

    // const arr = [0, 0];
    // for(let i = 0; i < arr.length; i++) {
    //     arr[i % 2] += array[i];
    // }
    // return arr;
    
    //return array.reduce((a,b,i)=>(a[i%2]+=b,a),[0,0])
  }
  //console.log(rowWeights([29]));
  
  
  
  //(115)
  //Ваша задача - завершить функцию, которая принимает строку и возвращает массив со всеми возможными поворотами данной строки в верхнем регистре.
  //Должен вернуться:
  // [ "CODEWARS",
  //   "ODEWARSC",
  //   "DEWARSCO",
  //   "EWARSCOD",
  //   "WARSCODE",
  //   "ARSCODEW"
  //   "RSCODEWA",
  //   "SCODEWAR" ]
  
  function scrollingText(text){
    return Array(text.length).fill(text).map((e, i) => (e.slice(i) + e.slice(0, i)).toUpperCase());
  }
  //console.log(scrollingText("abc"));



  //116
//   Реализовать zipWith
// zipWith принимает функцию и два массива и объединяет массивы вместе, применяя функцию к каждой паре значений.
// Значение функции - один новый массив.
// Если массивы имеют неодинаковую длину, результат будет такой же длины, как и самый короткий.
// (Значения более длинного массива просто не используются.)
// Входные данные не должны изменяться.
// Примеры
// zipWith( Math.pow, [10,10,10,10], [0,1,2,3] )      =>  [1,10,100,1000]
// zipWith( Math.max, [1,4,7,1,4,7], [4,7,1,4,7,1] )  =>  [4,7,7,4,7,7]

// zipWith( function(a,b) { return a+b; }, [0,1,2,3], [0,1,2,3] )  =>  [0,2,4,6]  Both forms are valid.
// zipWith( (a,b) => a+b,                  [0,1,2,3], [0,1,2,3] )  =>  [0,2,4,6]  Both are functions.


function zipWith(fn, a1, a2) {
  let out = [];
  for (let i = 0; i < a1.length && i < a2.length; i++) {
    out.push(fn(a1[i], a2[i]))
  }
  return out;
}
const first = ['qwe', 'zz', 'y', 'asdfg'];
const second = [4, 2, 7, 1, 2];

//console.log(zipWith((a, b) => a + b, first, second));
//['qwe4', 'zz2', 'y7', 'asdfg1'];



//117
// Учитывая массив целых чисел, верните новый массив с удвоением каждого значения.
// Например:
// [1, 2, 3] --> [2, 4, 6]
// Для новичков попробуйте использовать этот map метод - он очень пригодится, 
// так что его полезно знать.

function maps(x) {
  return x.map(e => e * 2);
}
//console.log(maps([1, 2, 3]));


//118
// Я новичок в кодировании, и теперь я хочу получить сумму двух массивов ... 
// фактически сумму всех их элементов. Буду признателен за вашу помощь.
// PS В каждый массив входят только целые числа. Выход - тоже число.

function arrayPlusArray(arr1, arr2) {
  // let out = 0;
  // for (let i = 0; i < arr1.length && i < arr2.length; i++) {
  //  out += arr1[i] + arr2[i];
  // }
  //   return out;

  const t1 = arr1.reduce((a, i) => a + i, 0);
  const t2 = arr2.reduce((a, i) => a + i, 0);
  return t1 + t2;

  //return arr1.concat(arr2).reduce((acc, cur) => acc + cur);
}
//console.log(arrayPlusArray([-1, -2, -3], [-4, -5, -6]));


//119
// Каждое значение в массиве является массивом?
// Это должно проверить только второе измерение массива. 
// Значения вложенных массивов не обязательно должны быть массивами.
// Примеры:
// [[1],[2]] => true
// ['1','2'] => false
// [{1:1},{2:2}] => false

const arrCheck = value => value.every(e => Array.isArray(e));
//console.log(arrCheck([[1], [2], [3]]));
//console.log(arrCheck(['A', 'R', 'R', 'A', 'Y']));
//console.log(arrCheck([[],{}]));


//120
// Сделайте коробку
// Учитывая число в качестве параметра, верните массив, содержащий строки, 
// образующие поле.
// Как это:
// п = 5
// [
//   '-----',
//   '-   -',
//   '-   -',
//   '-   -',
//   '-----'
// ]

function box(n){
  let out = [];
  out.push('-'.repeat(n));
  for (let i = 2; i < n; i++) {
    if (n > 2) {
    out.push('-' + ' '.repeat(n-2) + '-');
    }
  }
  out.push('-'.repeat(n));
  return out;
  // let arr = [] 
  // for (let i = 0; i < n; i++) {
  //   if (i === 0 || i === (n - 1)) {
  //     arr.push('-'.repeat(n))
  //   } else {
  //     arr.push(`-${' '.repeat(n - 2)}-`)
  //   } 
  // }
  // return arr

  //return Array.from({length: n}, (a, i) => i === 0 || i === n - 1 ? '-'.repeat(n) : '-' + ' '.repeat(n - 2) + '-');
 }
//console.log(box(5));



//121
// Магический индекс в массиве A [1 ... n-1] определяется как такой индекс, что A [i] = i. 
// Учитывая отсортированный массив различных целых чисел, напишите метод для поиска магического 
// индекса, если он существует, в массиве A.

// findMagic([-20,-10,2,10,20]); // Returns 2

function findMagic(arr) {
  //Почему не работает цикл?
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === i) {
      return arr[i];
    }
  }
  return -1;

  // let out = arr.filter((e, i) => e === i);
  // return out.lenght === 0 ? -1 : out[0];

  // return arr.findIndex(i => arr[i] === i);
}
//console.log(findMagic([-20, -10, 2, 10, 20]));



//122
// Вызов:
// Учитывая двумерный массив целых чисел, верните уплощенную версию массива со всеми целыми числами 
// в отсортированном (возрастающем) порядке.
// Пример:
// [[3, 2, 1], [4, 6, 5], [], [9, 7, 8]], ваша функция должна возвращать [1, 2, 3, 4, 5, 6, 7, 8 , 9].
// Дополнение:
// Учтите, что JavaScript по умолчанию сортирует объекты по алфавиту. За дополнительной информацией 
// обращайтесь:

// http://stackoverflow.com/questions/6093874/why-doesnt-the-sort-function-of-javascript-work-well

[1,[1,[[[[[[[5]]], 7, [888, [[[[[[9]]]]]]]]]]]]].flat(Infinity);

function flattenAndSort(arr) {
  // let out = [];
  // for (const i of arr) {
  //   // for (const k of i) {
  //   //   out.push(k);
  //   // }
  //   out.push(...i);
  // }
  const out = arr.flat();
  return out.sort((a, b) => a - b);

  //return [].concat(...array).sort((a,b) => a - b);

  //как обрабатывать многомерные массивы с помощью map и/или reduce?
}
//console.log(flattenAndSort([[1, 3, 5], [100], [2, 4, 6]]));




//123
// Напишите функцию, которая принимает массив чисел (целые числа для тестов) и целевое число. Он должен 
// найти два разных элемента в массиве, которые при сложении дают целевое значение. Индексы этих пунктов 
// должны быть затем возвращены в кортеже следующим образом: (index1, index2).

// Для целей этого ката некоторые тесты могут иметь несколько ответов; будут приняты любые действующие 
// решения.

// Ввод всегда будет действительным (числа будут массивом длиной 2 или больше, и все элементы будут 
// числами; цель всегда будет суммой двух разных элементов из этого массива).

// twoSum [1, 2, 3] 4 === (0, 2)

function twoSum(arr, num) {
  let out = [];
  for (let i = 0; i < arr.length; i++) {
    for (let k = i + 1; k < arr.length; k++) {
      if (arr[i] + arr[k] === num) {
        out.push(i, k);
      }
    }
  }

  //почему не работает этот цикл?
  // for (const i of arr) {
  //   for (const [j, k] of arr.entries()) {
  //     if (i + k === num) {
  //       out.push(j);
  //     }
  //   }
  // }

  return out;
}
//console.log(twoSum([996, 587, 438, 650, 720, 694, 700, 863, 310, 789], 1439));




//124
// Напишите функцию, которая принимает массив чисел (целые числа для тестов) и целевое число. Он должен найти два разных 
// элемента в массиве, которые при сложении дают целевое значение. Индексы этих пунктов должны быть затем возвращены в 
// кортеже следующим образом: (index1, index2).

// Для целей этого ката некоторые тесты могут иметь несколько ответов; будут приняты любые действующие решения.

// Ввод всегда будет действительным (числа будут массивом длиной 2 или больше, и все элементы будут числами; цель всегда 
//   будет суммой двух разных элементов из этого массива).


// twoSum [1, 2, 3] 4 === (0, 2)

function twoSum(arr, num) {
  let out = [];
  for (let i = 0; i < arr.length; i++) {
    for (let k = i + 1; k < arr.length; k++) {
      if (arr[i] + arr[k] === num) {
        out.push(i, k);
      }
    }
  }
  return out;
}
//console.log(twoSum ([1, 2, 3], 4));




//125
// Вы получаете массив массивов.
// Если вы отсортируете массивы по их длине, вы увидите, что их значения длины являются последовательными.
// Но не хватает одного массива!


// Вам нужно написать метод, возвращающий длину недостающего массива.

// Example:
// [[1, 2], [4, 5, 1, 1], [1], [5, 6, 7, 8, 9]] --> 3

// Если массив массивов равен нулю / нулю или пуст, метод должен вернуть 0.

// Если массив в массиве равен нулю или пуст, метод также должен возвращать 0!
// Всегда будет отсутствующий элемент, и его длина всегда будет между заданными массивами.

// Получайте удовольствие от кодирования и, пожалуйста, не забудьте проголосовать и оценить это ката! :-)

// Я создал другие каты. Посмотрите, нравится ли вам кодирование и вызовы.

function getLengthOfMissingArray(arrayOfArrays) {
  const lengths = (arrayOfArrays.filter(el => Array.isArray(el)) || [])
      .map(el => el ? el.length : 0)
      .sort((a, b) => a-b);
  if (lengths.includes(0)) {
    return 0;
  }
  for (let i = 0; i < lengths.length - 1; i++) {
    if (lengths[i] + 1 !== lengths[i + 1]) {
      return lengths[i] + 1;
    }
  }
  return 0; 
}
//console.log(getLengthOfMissingArray([[ 5, 2, 9 ], [ 4, 5, 1, 1 ], [ 1 ], [ 5, 6, 7, 8, 9 ]]));




//126
// Получен поток данных, который необходимо изменить.

// Каждый сегмент имеет длину 8 бит, что означает, что порядок этих сегментов необходимо поменять 
// местами, например:

// 11111111  00000000  00001111  10101010
//  (byte1)   (byte2)   (byte3)   (byte4)
// должно стать:

// 10101010  00001111  00000000  11111111
//  (byte4)   (byte3)   (byte2)   (byte1)
// Общее количество битов всегда будет кратно 8.

// Данные представлены в виде массива как такового:

// [1,1,1,1,1,1,1,1,0,0,0,0,0,0,0,0,0,0,0,0,1,1,1,1,1,0,1,0,1,0,1,0]

function dataReverse(data) {
  return [].concat(...Array(data.length/8).fill().map(el => data.splice(-8)));
}
//console.log(dataReverse([1,1,1,1,1,1,1,1,0,0,0,0,0,0,0,0,0,0,0,0,1,1,1,1,1,0,1,0,1,0,1,0]));




//126
// Цель этого упражнения - преобразовать строку в новую строку, где каждый символ в новой строке соответствует тому, 
// "("если этот символ появляется только один раз в исходной строке или ")"если этот символ появляется более одного 
// раза в исходной строке. Игнорируйте использование заглавных букв при определении того, является ли символ дубликатом.

// Примеры
// "din"      =>  "((("
// "recede"   =>  "()()()"
// "Success"  =>  ")())())"
// "(( @"     =>  "))((" 
// Ноты

// В сообщениях с утверждениями может быть неясно, что они отображают на некоторых языках. Если вы читаете 
// "...It Should encode XXX", "XXX"это ожидаемый результат, а не ввод!

function duplicateEncode(word){
  // return word
  //   .toLowerCase()
  //   .split('')
  //   .map((el, i, arr) => arr.indexOf(el) !== arr.lastIndexOf(el) ? ')' : '(')
  //   .join('');

  // let map = {};
  // let characters = word.toLowerCase().split('');
  
  // characters.forEach(char => {
  //   map[char] = map[char] ? ')' : '(';
  // });
  // return characters.map(char => map[char]).join('');

  let result = "";
    word = word.toLocaleLowerCase();
    for (var i = 0; i < word.length; i++) {
      word.split(word.charAt(i)).length > 2 ? result += ")" :result += "(";
    }
    return result;
}
//console.log(duplicateEncode("Success"));



//127
// Для данной строки используйте заглавные буквы, которые занимают четные индексы и нечетные индексы отдельно, и верните, 
// как показано ниже. Индекс 0 будет считаться четным.

// Например, capitalize("abcdef") = ['AbCdEf', 'aBcDeF']. Дополнительные примеры см. В тестовых примерах.

// Ввод будет строчной строкой без пробелов.

// Удачи!

function capitalize(s){
  // let even = '';
  // let odd = '';
  // for (let i = 0; i < s.length; i++) {
  //   if (i%2 === 0) {
  //     even += s[i].toUpperCase();
  //   } else {
  //     even += s[i];
  //   }
  //   if (i%2 === 1) {
  //     odd += s[i].toUpperCase();
  //   } else {
  //     odd += s[i];
  //   }
    
  // }
  // return [even, odd];

  const odd = s.split("").map((e, i) => i % 2 === 1 ? e.toUpperCase() : e).join("");
  const even = s.split("").map((e, i) => i % 2 === 0 ? e.toUpperCase() : e).join("");
  return [even, odd];
}
//console.log(capitalize("abcdef"));




//128
// Вам будет предоставлен массив чисел. Вы должны отсортировать нечетные числа в порядке возрастания, 
// оставив четные числа на своих исходных позициях.
// Примеры
// [7, 1]  =>  [1, 7]
// [5, 8, 6, 3, 4]  =>  [3, 8, 6, 5, 4]
// [9, 8, 7, 6, 5, 4, 3, 2, 1, 0]  =>  [1, 8, 3, 6, 5, 4, 7, 2, 9, 0]

function sortArray(array) {
  const odd = array.filter(el => el % 2).sort((a, b) => a - b);
  return array.map(el => el % 2 ? odd.shift() : el);
}
//console.log(sortArray([9, 8, 7, 6, 5, 4, 3, 2, 1, 0]));



//133
// Вам будет дан массив целых чисел. Ваша задача - взять этот массив и найти индекс N, в котором сумма целых чисел 
// слева от N равна сумме целых чисел справа от N. Если нет индекса, который мог бы сделать это, вернитесь -1.

// Например:

// Допустим, вам дан массив {1,2,3,4,3,2,1}:
// ваша функция вернет индекс 3, потому что в 3-й позиции массива сумма левой части индекса ( {1,2,3}) и сумма правой 
// части индекса ( {3,2,1}) равны 6.

// Посмотрим еще на один.
// Вам дан массив {1,100,50,-51,1,1}:
// ваша функция вернет индекс 1, потому что в 1-й позиции массива сумма левой части индекса ( {1}) и сумма правой 
// части индекса ( {50,-51,1,1}) равны 1.

// Последний:
// вам дан массив с {20,10,-80,10,10,15,35}
// индексом 0, левая сторона - {}
// правая сторона. {10,-80,10,10,15,35}
// Они оба равны 0 при добавлении. (Пустые массивы в этой задаче равны 0)
// Индекс 0 - это место, где левая и правая стороны равны.

// Примечание: помните, что в большинстве языков программирования / сценариев индекс массива начинается с 0.

// Вход:
// целочисленный массив длины 0 < arr < 1000. Числа в массиве могут быть любыми целыми положительными или 
// отрицательными.

// Выходные данные:
// наименьший индекс, в N котором сторона слева N равна стороне справа N. Если вы не найдете индекс, соответствующий 
// этим правилам, вы вернетесь -1.

// Примечание.
// Если вам дан массив с несколькими ответами, верните наименьший правильный индекс.

function findEvenIndex(arr) {
  let res = 0;

  return res;
}
console.log(findEvenIndex([1,100,50,-51,1,1]));