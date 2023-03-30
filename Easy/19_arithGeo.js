export const arithGeo = (arr) => {
  /*
    - İlk olarak değişkenleri tanımladık, 
    
    let diff = arr[1] - arr[0] - Array'in aritmetik olarak nitelendirilebilmesi için ardışık elemanlar arasındaki fark sabit olmalıdır
    let ratio = arr[1] / arr[0] - Array'ın geometri olarak nitelendirilebilmesi için ardışık elemanlar arasındaki oran sabit olmalıdır.
    let isArithmetic = true - Array içerisinde ardışık elemanlar arasındaki farkın değişik olması durumunda false yapılacak.
    let isGeometric = true - Array içerisinde ardışık elemanlar arasındaki oranın değişik olması durumunda false yapılacak.
    */

  // 2- for döngüsü içinde if bloğu kullanarak array içerisindeki ardışık değerler arasındaki farkın diff değişkenine eşit olup olmadığını kontrol ettik. Eğer farklı bir değer varsa da isArithmetic değişkeninin değerini false olarak değiştirdik.

  let diff = arr[1] - arr[0];
  let ratio = arr[1] / arr[0];
  let isArithmetic = true;
  let isGeometric = true;
  for (let i = 1; i < arr.length; i++) {
    if (arr[i] - arr[i - 1] != diff) {
      isArithmetic = false;
    }

    if (arr[i] / arr[i - 1] != ratio) {
      isGeometric = false;
    }
  }

  if (isArithmetic === true) {
    return "Arithmetic";
  } else if (isGeometric === true) {
    return "Geometric";
  } else {
    return -1;
  }
  return isArithmetic;
};

// 3- for döngüsü içinde if bloğu kullanarak array içerisindeki ardışık değerler arasındaki oranın ratio değişkenine eşit olup olmadığını kontrol ettik. Eğer farklı bir değer varsa da isGeometric değişkeninin değerini false olarak değiştirdik.
// 4- Yeni bir if boluğu oluşturduk. Eğer isArithmetic değişkeni true ise "Aritmehtic", isGeometric değişkeni true ise "Geometric", diğer durumlarda ise -1 return ettik.

/*

Arith Geo

Using the JavaScript language, have the function ArithGeo(arr) take the arrat of numbers stored in arr and return the string "Arithmetic" if it follows an arithmetic pattern or return "Geometric" if it follows a geometric pattern. If the sequence doesn't follow either pattern return -1. An arithmetic sequence is one where the difference between each of the numbers is consistent, where as in a geometric sequence, each term after the first is multiplied by some constatn or common ratio.

Aritmetic example: [2. 4, 6, 8] and
Geometric example : [2, 6, 18, 54].

Negative numbers may be entered as parameters, 0 will not be entered, and no array will contains all the same elements.

*/

/*

Arith Geo

JavaScript dilini kullanarak, ArithGeo(arr) işlevinin arr'de depolanan sayıların dizisini almasını ve bir aritmetik deseni izliyorsa "Arithmetic" dizesini veya geometrik bir deseni izliyorsa "Geometric" dizesini döndürmesini sağlayın. Dizi iki örüntüyü de takip etmiyorsa -1 döndürür. Bir aritmetik dizi, sayıların her biri arasındaki farkın tutarlı olduğu bir dizidir; burada, geometrik bir dizide olduğu gibi, birinciden sonraki her terim bir sabit veya ortak oranla çarpılır.

Aritmetik örnek: [2. 4, 6, 8] ve
Geometrik örnek : [2, 6, 18, 54].

Negatif sayılar parametre olarak girilebilir, 0 girilmez ve hiçbir dizi aynı elemanları içermez.

*/
