/* global compareNumeric */

dw("Эта надписть сделана JS из отдельного фала!"+"<br/>");
dws();
var ccc=6;
dw(ccc+"! = "+factorial(ccc)+" (rec)");
dw(ccc+"! = "+factorial2(ccc)+" (for)");
dws();
dw(" = "+fib2(ccc));
dws();
//dw(fib(ccc));
//dws();


var temp_str = "Hello - Сам привет!";
dw(temp_str+"(Длинной "+temp_str.length+") UPC - "+temp_str.toUpperCase());
dws();
var number = 123456789.333;
dw( number.toLocaleString() );

dws();

var min = 3,
  max = 8;
  rand = Math.random();
dw ("Free Random - "+rand);
dw( "Random - "+(min + rand * (max - min))+" ( >"+min+ " and <"+max+" )" );

dws();

var mystr = "Привет мои друзья !!!";
dw(mystr.slice(7));
dw(mystr.substr(7));
//ss=#1072
//dw(ss);

dws();
var str = '';
for (var i = 1034; i <= 1113; i++) {
  str += String.fromCharCode(i);
}
dw( str );

dws();
var aaaa= "вот тебе, бабушка, и Юрьев день ...";
dw(toUpperCase2(aaaa));
dw("============================")  ;



var checkStr= ['buy ViAgRA now', 'free xxxxx', "innocent rabbit"];
for (var i = 0; i <= 2; i++) {
    if (checkSpam(checkStr[i])){
        dw(checkStr[i]+' is SPAM');
    }else {
        dw(checkStr[i]+' Not SPAM');  
    }
    
};
dw("============================")  ;
var checkStr= ['buy ViAgRA now', 'free xxxxx', "innocent rabbit","Вот, что мне хотелось бы сказать на эту тему:"];
for (var i = 0; i <= checkStr.length-1; i++) {
    dw('1('+i+')-'+checkStr[i]);
    dw('------'+truncate(checkStr[i],5));
};

dw("============================");

dw(extractCurrencyValueUAH("$150"));


dw("============================");

var person = {
    name: 'Вася',
    surname: 'Петров'
    };
dw(person.name +' '+person.surname);

person.name='Сергей';
dw(person.name +' '+person.surname);
person['33']='-33';
person['44']='-44';
person['22']='-22';
dw("============================")  ;
var counter = 0;
for (var key in person) {
    dw(key+' - '+person[key]);
    counter++;
};
dw("Всего "+counter+" полей");
dw("============================")  ;

var schedule = {};
dw(isEmpty(schedule) ); // true
dw(isEmpty2(schedule) ); // true
schedule["8:30"] = "подъём";
dw( isEmpty(schedule) ); // false
dw( isEmpty2(schedule) ); // false
dw("============================")  ;

var salaries = {
  "Вася": 100,
  "Петя": 300,
  "Даша": 250
};

var staf_salary = 0;
for (var staff in salaries) {
    staf_salary+=salaries[staff];
};
dw(staf_salary);

var max_salary = 0, max_s_staff='';
for (var staff in salaries) {
    if (salaries[staff]>max_salary) {
        max_salary=salaries[staff];
        max_s_staff=staff;
    };
};
dw(max_s_staff+' зп - '+max_salary);
dw( max_s_staff || "нет сотрудников" );
dw("============================")  ;
var menu = {
  width: 200,
  height: 300,
  title: "My menu"
};
for (var ind in menu) {
    dw(ind+' - '+menu[ind]);
    };
multiplyNumeric(menu);
dw('-----after double-----');
for (var ind in menu) {
    dw(ind+' - '+menu[ind]);
    };
dw("============================")  ;
var time = {
  year: 2345,
  month: 11,
  day: 10,
  hour: 11,
  minute: 12,
  second: 13,
  microsecond: 123456
};

console.log(time); // (*)
dw(time.microsecond); 
time.microsecond++; // (**)

console.log(time);
dw(time.microsecond); 
time.microsecond++;

console.log(time);
dw(time.microsecond); 
time.microsecond++;
dw(time.microsecond); 

dw("============================")  ;

var styles = ['Джаз', 'Блюз'];
dwarr(styles);
dw('---');
styles[styles.length]='Рок-н-Ролл';
dwarr(styles);
dw('---');
styles[styles.length-2]='Классика';
dwarr(styles);
dw('---');
dw(styles.shift());
dw('---');
dwarr(styles);
dw('---');
styles.unshift('Рэп','Регги');
dwarr(styles);
dw('---');
dw("============================")  ;
var arr = ["Яблоко", "Апельсин", "Груша", "Лимон"];
dwarr(arr);
dw('---');
dw('Random - '+arr[randomLimit(0, arr.length-1)]);
dw("============================")  ;
//var calc_arr = [];
//var tempCalc=0;
//while (true) {
//    tempCalc = prompt('Введите число. Если нет числа окончание ввода.',tempCalc);
//    if (tempCalc === "" || tempCalc === null || isNaN(tempCalc)) break;
//    calc_arr[calc_arr.length]=tempCalc;
//};
//dwarr(calc_arr);
//dw('---');
//var sumArr=0;
//for (var i = 0; i < calc_arr.length; i++) {
//    sumArr += 5+calc_arr[i];    
//};
//dw(sumArr);
dw("============================")  ;
var arr = [1, 2, 3];
var arr2 = arr;
arr2[0] = 5;

dw( arr[0] );
dw( arr2[0] );
dw("============================");
arrf = ["test", 2, 1.5, false];

dw('"test" - '+findArr(arrf, "test")); // 0
dw('2  - '+findArr(arrf, 2)); // 1
dw('1.5 - '+findArr(arrf, 1.5)); // 2

dw('0 - '+findArr(arr, 0)); // -1
dw("============================");
var arr = [5, 4, 3, 8, 0, 3, 12];
dwarr(arr);
dw('---');
var filtered = filterRange(arr, 3, 5);
dwarr(filtered);
dw("============================");
var maxPrime = 100;
dw('Реализации «Решета Эратосфена» через массив до - '+maxPrime);
var prime =[], prime2 =[];
for (var i = 0; i<maxPrime; i++) prime.push(i+2);
dwarr(prime);
dw('---');
prime2 = toPrime(prime);
dwarr(prime2);
sumPrime2=0;
for (var i=0; i<prime2.length; i++){
//    sumPrime2 = sumPrime2 + (prime2[i]!=="X")? prime2[i]:0; 
    if (prime2[i]!=='X') {
        sumPrime2=sumPrime2+prime2[i];
    };
};
dw(sumPrime2);
dw("============================");

var arr = [];
for (var i = 2; i < 100; i++) {
  arr[i] = true;
};
//dwarr(arr);
//dw('---');
for (var i = 2; i < 100; i++) {
  arr[i] = true;
};
// шаг 2
var p = 2;
do {
  // шаг 3
  for (i = 2 * p; i < 100; i += p) {
    arr[i] = false;
  };
  // шаг 4
  for (i = p + 1; i < 100; i++) {
    if (arr[i]) break;
  };
  p = i;
} while (p * p < 100); // шаг 5
dwarr(arr);
dw('---');
var sum = 0;
for (i = 0; i < arr.length; i++) {
  if (arr[i]) {
    sum += i;
  };
};
dw(sum);
dw("============================");
var sumArr=[1,5,-3,3];
dwarr(sumArr);
dw(getMaxSubSum(sumArr));
dw(getMaxSubSum2(sumArr));
dw('---');

var sumArr=[-1, 2, 3, -9];
dwarr(sumArr);
dw(getMaxSubSum(sumArr));
dw(getMaxSubSum2(sumArr));
dw('---');

var sumArr=[2, -1, 2, 3, -9];
dwarr(sumArr);
dw(getMaxSubSum(sumArr));
dw(getMaxSubSum2(sumArr));
dw('---');

var sumArr=[-1, 2, 3, -9, 11];
dwarr(sumArr);
dw(getMaxSubSum(sumArr));
dw(getMaxSubSum2(sumArr));
dw('---');

var sumArr=[-2, -1, 1, 2];
dwarr(sumArr);
dw(getMaxSubSum(sumArr));
dw(getMaxSubSum2(sumArr));
dw('---');

var sumArr=[100, -9, 2, -3, 5];
dwarr(sumArr);
dw(getMaxSubSum(sumArr));
dw(getMaxSubSum2(sumArr));
dw('---');

var sumArr=[1, 2, 3];
dwarr(sumArr);
dw(getMaxSubSum(sumArr));
dw(getMaxSubSum2(sumArr));
dw('---');

var sumArr=[-1, -2, -3];
dwarr(sumArr);
dw(getMaxSubSum(sumArr));
dw(getMaxSubSum2(sumArr));
dw('---');
dw("============================");

var names = '2, 6, -9, 7';
var sumArr = names.split(', ');

dwarr(sumArr);
dw(getMaxSubSum(sumArr));
dw(getMaxSubSum2(sumArr));
dw('---');
dw("============================");
var arrStr = new Array(4).join("ля"); // ляляля
dwarr(arrStr);
dw(arrStr);
dw('---');
var strStr = '0987654321';
dwarr(strStr);
dw('---');

var arr = [ 15, 2, 1 ];
dw(arr);
dw(arr.sort());
dw(arr.sort(compareNumericShort));
dw('---');

[1, -2, 15, 2, 0, 8].sort(function(a, b) {
  dw( a + " <> " + b );
});
dw("============================");
dw(Object.keys(arr));
dw('---');
dw(Object.keys(time));
dw("============================");
var obj = {
  className: 'open menu ii yy ii'
};
dw(obj.className);
dw('0---');
addClass(obj, 'new'); // obj.className='open menu new'
dw(obj.className);
dw('---');
addClass(obj, 'open'); // без изменений (класс уже существует)
dw(obj.className);
dw('---');
addClass(obj, 'me'); // obj.className='open menu new me'
dw(obj.className);
dw('---');
dw("============================");

dw(camelize("background-color"));// == 'backgroundColor';
dw(camelize("list-style-image"));// == 'listStyleImage';
dw(camelize("-webkit-transition"));// == 'WebkitTransition';
dw("============================");
removeClass(obj, 'open'); // obj.className='menu'
dw(obj.className);
dw('---');
removeClass(obj, 'blabla'); // без изменений (нет такого класса)
dw(obj.className);
dw('---');
removeClass(obj, 'ii'); // без изменений (нет такого класса)
dw(obj.className);
dw('---');
dw("============================");

var arr = [5, 2, 1, -10, 8];
arr.sort(compareNumericReverse);
// отсортируйте?

dw( arr ); // 8, 5, 2, 1, -10
dw("============================");
var arr = ["HTML", "JavaScript", "CSS"];

var arrSorted= arr.concat().sort();

dw( arr ); // HTML, JavaScript, CSS (без изменений)
dw( arrSorted ); // CSS, HTML, JavaScript
dw("============================");

var arr = [1, 2, 3, 4, 5];
dw( arr ); 
arr.sort(compareRandom);
dw( arr ); 
arr.sort(compareRandom);
dw( arr ); 
arr.sort(compareRandom);
dw( arr ); 
arr.sort(compareRandom);
dw( arr ); 
arr.sort(compareRandom);
dw( arr ); // элементы в случайном порядке, например [3,5,1,2,4]
dw("============================");

var vasya = { name: "Вася", age: 23 };
var masha = { name: "Маша", age: 18 };
var vovochka = { name: "Вовочка", age: 6 };

var people = [ vasya , masha , vovochka ];

people.sort(compareAge);
//... ваш код ...

// теперь people: [vovochka, masha, vasya]
dw('Min. - '+people[0].age); // 6
for (var i = 0; i < people.length; i++) {
    dw(people[i].name+' - '+ people[i].age);   
}
dw("============================");

var list = {
  value: 1,
  next: {
    value: 2,
    next: {
      value: 3,
      next: {
        value: 4,
        next: null
      }
    }
  }
};
// аналог записанный по другому 
//var list = { value: 1 };
//list.next = { value: 2 };
//list.next.next = { value: 3 };
//list.next.next.next = { value: 4 };

printList(list);
dw("============================");
var arr = ["воз", "киборг", "корсет", "ЗОВ", "гробик", "костер", "сектор"];
//aclean(arr), которая возвращает массив слов, очищенный от анаграмм.
dw( aclean(arr));

dw("============================");
var strings = ["кришна", "кришна", "харе", "харе",
  "харе", "харе", "кришна", "кришна", "8-()"
];
//unique(arr), которая возвращает массив, содержащий только уникальные элементы arr.
dw( unique(strings) ); // кришна, харе, 8-()

dw("============================");
//Метод «arr.forEach(callback[, thisArg])» используется для перебора массива.
//Он для каждого элемента массива вызывает функцию callback.
//Этой функции он передаёт три параметра callback(item, i, arr):
var arr = ["Яблоко", "Апельсин", "Груша"];

arr.forEach(function(item, i, arr) {
  dw( i + ": " + item + " (массив:" + arr + ")" );
});
dw("============================");
var arr = ["Есть", "жизнь", "на", "Марсе"];

var arrLength = [];
for (var i = 0; i < arr.length; i++) {
  arrLength[i] = arr[i].length;
}
dw( arrLength ); // 4,5,2,5

var arr2Lengths = arr.map(function(arr) {
  return arr.length;
});
dw( arr2Lengths );

dw("============================");
var arr = [ 1, 2, 3, 4, 5, 6, 10]; //[ 1, 3, 6, 10, 15, 21, 31 ]
var arrs = getSums(arr);
dwarr(arrs);
dw('---');
var arr = [-2,-1,0,1,8,-5]; // [-2,-3,-3,-2,6,1].
var arrs = getSums(arr);
dwarr(arrs);

dw("============================");
dw(sssum(1, 2, 3, 4, 5, 6, 7, 8, 9 ));

dw("============================");
var now = new Date();
dw( now );
var da = new Date(2018,03,23);
dw(da);
var date = new Date(2011, 0, 1, 2, 3, 4, 567);
dw (date);

// текущая дата
var date = new Date();
// час в текущей временной зоне
dw('У нас (час) - '+date.getHours() );
// сколько сейчас времени в Лондоне?
// час в зоне GMT+0
dw('По гринвичу - '+ date.getUTCHours() );

dw("Наша таймзона - " + new Date().getTimezoneOffset()); 
 
var today = new Date;
today.setHours(0);
today.setFullYear(2018 , 01, 29);
dw(today);

var start = new Date; // засекли время
// что-то сделать
for (var i = 0; i < 10000000; i++) {
  var doSomething = i * i * i;
}
var end = new Date; // конец измерения
dw( "Цикл занял " + (end - start) + " ms" );

dw("============================");
dw("============================");
dw("============================");
dw("============================");

dw("==========End===============");

function sssum() {
//    Проверка самого себя на знание ".reduce("
//    var arg = [];
//    for (var i = 0; i < arguments.length; i++) {
//        arg[i] = arguments[i];
//    }
//    var result = arg.reduce(function(sum, current) {
//        return sum + current;
//    });
//     а теперь проще ;)
    var result=0;
    for (var i = 0; i < arguments.length; i++) {
        result += arguments[i];
    };  
    return result;
}
function getSums(arr) {
  var result = [];
  if (!arr.length) return result;
  var totalSum = arr.reduce(function(sum, item) {
    result.push(sum);
    return sum + item;
  });
  result.push(totalSum);

  return result;
}

function unique(arr) {
 // этот объект будем использовать для уникальности
  var obj = {};

  for (var i = 0; i < arr.length; i++) {
    obj[arr[i]] = arr[i]; // сохраняет только одно значение
  }
//  var result = [];
//  for (var key in obj) result.push(obj[key]);
//  return result;
    return Object.keys(obj);
}


function aclean(arr) {
  // этот объект будем использовать для уникальности
  var obj = {};

  for (var i = 0; i < arr.length; i++) {
    // разбить строку на буквы, отсортировать и слить обратно
    var sorted = arr[i].toLowerCase().split('').sort().join(''); // (*)

    obj[sorted] = arr[i]; // сохраняет только одно значение с таким ключом
  }

  var result = [];

  // теперь в obj находится для каждого ключа ровно одно значение
  for (var key in obj) result.push(obj[key]);

  return result;
}

function printList(list) {
  var tmp = list;

  while (tmp) {
    dw( tmp.value );
    tmp = tmp.next;
  }

}

function compareAge(personA, personB) {
  return personA.age - personB.age;
}


function camelize(str) {
    var arr = str.split('-');
    for (var i = 1; i < arr.length; i++) {
        arr[i]=toUpperCase2(arr[i]);
    }
    return str = arr.join('');
}

function removeClass(obj, str) {
    var classes = obj.className ? obj.className.split(' ') : [];
    while (classes.indexOf(str)>=0) {
        classes.splice(classes.indexOf(str),1);
    };
    obj.className = classes.join(' '); 
}
    
function addClass(obj, newElement) {
    var classes = obj.className ? obj.className.split(' ') : [];
    dwarr(classes);
    for (var i = 0; i < classes.length; i++) {
        if (classes[i] === newElement) return; // класс уже есть
      };
    classes.push(newElement); // добавить
    obj.className = classes.join(' '); // и обновить свойство
}

function compareNumericLong(a, b) {
  if (a > b) return 1;
  if (a < b) return -1;
}

function compareNumericShort(a, b) {
  return a - b;
}
function compareNumericReverse(a,b) {
  return b-a;
    
}
function getMaxSubSum(arr) {
    var maxSum=0;
    for (var i = 0; i<arr.length; i++) {
        tempSum=+arr[i];
        maxSum=Math.max(tempSum,maxSum);
        for (var ii=i+1; ii<arr.length; ii++){
            tempSum+=arr[ii];
            maxSum=Math.max(maxSum,tempSum);
        };
    };
    return maxSum;    
}

function getMaxSubSum2(arr) {
  var maxSum = 0,
    partialSum = 0;
  for (var i = 0; i < arr.length; i++) {
    partialSum += arr[i];
    maxSum = Math.max(maxSum, partialSum);
    if (partialSum < 0) partialSum = 0;
  };
  return maxSum;
};


function toPrime(arr) {
    for (var i = 0; i<arr.length; i++) {
        if (arr[i]==='X') continue;
        for (var ii=i+1; ii<arr.length; ii++){
            //dw('i='+i+' ii='+ii+'--- arr[ii]='+arr[ii]+'   arr[i]='+arr[ii]+'--- arr[ii] % arr[i] ='+arr[ii] % arr[i]);
            if (arr[ii] % arr[i]=== 0) arr[ii]='X';
            //dw('i='+i+' ii='+ii+'--- arr[ii]='+arr[ii]+'   arr[i]='+arr[ii]+'--- arr[ii] % arr[i] ='+arr[ii] % arr[i]);
        };
    };
    return arr;
}

function filterRange(arr, min, max){
    var newArr = [];
//    for (i in arr){
    for (var i=0; i < arr.length; i++){
        if (+arr[i]>=min && +arr[i]<=max){
//            newArr[newArr.length]=arr[i];
            newArr.push(arr[i]);
        }
    }
    return newArr;
}

function find8_12(array, value) {
// создаем пустой массив и проверяем поддерживается ли indexOf
    if ([].indexOf) {
      var find = function(array, value) {
        return array.indexOf(value);
      };
    } else {
      var find = function(array, value) {
        for (var i = 0; i < array.length; i++) {
          if (array[i] === value) return i;
        }
        return -1;
      };
    };
}

function findArr(arr,str) {
    var result=-1;
    for (var i in arr){
        if (arr[i]=== str){
            result=i;
            break;
        }
    }
    return result;
}

function compareRandom(a, b) {
  return Math.random() - 0.5;
}


function randomLimit(min, max) {
    if (!isNumeric(+min))min=0;
    if (!isNumeric(+max))max=1;
    if (min>max){
        var temp=max;
        max=min;
        min=temp;
    }
return Math.round((min + Math.random() * (max - min)));

}


function dwarr(arr) {
    for (var ind in arr) {
    dw('Элемент № '+ind+' Значение - '+arr[ind]);
    };
}

function multiplyNumeric(para) {
    for (var ind in para) {
        if (isNumeric(para[ind])) para[ind]*=2;
        };
}

function isNumeric(n) {
  return !isNaN(parseFloat(n)) && isFinite(n);
}

function isEmpty(obj) {
    var counter = 0;
    for (var key in obj) counter++;
    return (counter>0) ? false: true;
}

function isEmpty2(obj) {
  for (var key in obj) {
    return false;
  };
  return true;
}

function extractCurrencyValueUAH(str) {
    return +str.slice(1)*27;
}

function truncate(input_str, output_len) {
    var end_str='...';
    if (output_len<end_str.length||output_len===undefined)output_len=20;
    if (input_str.length<output_len){
       output_str=input_str;
    } else {
       output_str=input_str.slice(0,output_len-end_str.length)+end_str;
    };
    return output_str;
}

function checkSpam(inut_srt) {
    var is_spam=false;
    var spam=['viagra', 'XXX'];
    var upper_str=inut_srt.toUpperCase(); 
        for (var n = 0; n < spam.length; n++) {
        if (upper_str.indexOf(spam[n].toUpperCase())+1){
            is_spam=true;
//            dw(inut_srt+' is "'+is_spum +'" word - ('+spam[n]+')');
            break;
        };
    };
    return is_spam;
}


function toUpperCase2(str) {
    return str.charAt(0).toUpperCase()+str.slice(1);
}

function dw (a){
    if (a === undefined) a = ' ';
//  a = a || ' 9999';  
    return document.write(a+"<br/>");
};
function dws (){
    return document.write("****************************"+"<br/>");
};
  
function factorial(f){
    return (f != 1)  ? f * factorial(f-1):1;
}

function factorial2(f){
    var res=1;
    for (var i=1; i<=f; i++) {
        res=res*i;
    }
    return res;
}

function fib2(f) {
    var y;
    if (f<1){
        dw("0 - 0");
        return;
    }
    dw("1 - 1");
    if (f>=2) {
        var arr_fib = [0,1];
        for (var i=2;i<=f; i++) {
            arr_fib.push(arr_fib[i-2]+arr_fib[i-1]);
            dw(i+" - "+arr_fib[i]);
            y=i;
        }
    }
    return arr_fib[y];
}

//function fib(n) {
//  return n <= 1 ? n : fib(n - 1) + fib(n - 2);}

