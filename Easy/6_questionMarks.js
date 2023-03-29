export const questionMark = (str) => {
  // 1- str >= 5 kontrol et
  if (str.length < 5) {
    return false;
  }

  // 2- Soru işareti ve rakam olmayan bütün değerleri temizle
  const newStr = str.replace(/[^0-9?]/g, "");

  // 3- forEach için string -> array çevir
  const arr = newStr.split("");

  // 4- forEach içerisinde kullanılacak değişkenlerin (sums, sum, iterator) tanımlanması
  let sums = [];
  let sum = 0;
  let iterator = 0;

  // 5- forEach döngüsü ile her bir rakam ve kendisinden sonraki 4. karakterin toplanarak sum değişkenine eşitlenmesi ve sonrada bu değerin sums arrayine eklenmesi
  arr.forEach((item) => {
    if (item != "?") {
      sum = parseInt(item) + parseInt(arr[iterator + 4]);
      sums.push(sum);
    }

    iterator += 1; // Çok önemli bu kısım
  });
  //   console.log(str); // örnek
  //   console.log(newStr); // harfsiz hal
  //   console.log(sums); // toplamı sayı olan array

  // 6- sums arrayi içerisinde 10 değeri varsa true, yoksa false değerin dönülmesi
  //return sums.includes(10) ? true : false; // 1.Yol (Kısa)

  if (sums.includes(10)) {
    return true;
  } else {
    return false;
  }
};

/*

Have the function QuestionsMarks(str) take the str string parameter, which will contain single digit numbers, letters, and question marks, and check if there are exactly 3 question marks between every pair of two numbers that add up to 10. If so, then your program should return the string true, otherwise it should return the string false. If there aren't any two numbers that add up to 10 in the string, then your program should return false as well.

For example: if str is "arrb6???4xxbl5???eee5" then your program should return true because there are exactly 3 question marks between 6 and 4, and 3 question marks between 5 and 5 at the end of the string.

---- Test Değerleri ----

"arrb6?9"

"acc?7??sss?3rr1??????5"

"arrb6???4xxbl5???eee5"

*/

/*

QuestionsMarks(str) işlevi, tek basamaklı sayıları, harfleri ve soru işaretlerini içerecek olan str string parametresini alsın ve toplamı 10'a ulaşan her iki sayı çifti arasında tam olarak 3 soru işareti olup olmadığını kontrol ettirin. Varsa, o zaman programınız true dizesini döndürmelidir, aksi takdirde false dizesini döndürmelidir. Dizede toplamı 10'a ulaşan iki sayı yoksa, programınız da false döndürmelidir.

Örneğin: str "arrb6???4xxbl5???eee5" ise, dizinin sonunda 6 ile 4 arasında tam olarak 3 soru işareti ve 5 ile 5 arasında 3 soru işareti olduğu için programınız true değerini döndürmelidir.

---- Test Değerleri ----

"arrb6?9"

"acc?7?sss?3rr1??????5"

"arrb6???4xxbl5???eee5"

*/
