export const alphabetSoup = (str) => {
  // 1- İlk olarak bize verilen değeri array'e çevirdik.
  // 2- Array Üzerinde .sort() metodunu uyguladık,
  // 3- Sıralanmış Array'i .join() metodu kullanarak return ettik.
  const arr = str.split("");
  const sortedArr = arr.sort();
  const newStr = sortedArr.join("");
  return newStr;

  //Kısa Yol
  return str.split("").sort().join("");

  // [^a-z] ---> yani harf olmayan her şeyi seçmesini söylüyoruz
  // g ---> global olarak yani verilen stringin tamamına bunu uygulatıyoruz
  // i ---> büyük küçük harf ayırt etmemesini söylüyoruz
  const arr2 = str.replace(/[^a-z]/gi, "");
  const newStr2 = str.split("").sort().join("");
  return newStr2;
};

/*

Alphabet Soup

Have the function AplhabetSoup(str) take the str string parameter being passed anr return the string with the letters in alphabeticial order ( ie. hello becomes ehllo).

Assume numbers and punctuation symbols will not be included in the string.

*/

/*

Alfabe çorbası

AlphabetSoup(str) işlevinin, iletilen str string parametresini almasını ve harfleri alfabetik sıraya göre dizgeyi döndürmesini sağlayın (yani, merhaba ehllo olur).

Dizide sayıların ve noktalama işaretlerinin yer almayacağını varsayalım.

*/
