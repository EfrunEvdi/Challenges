export const arrayAddition = (arr) => {
  // 1. Yol
  // Array içerisinden max değeri Math.max() ile bulduktun sonra, splice ile çıkarttık. Sonranda yeni array'imiz içerisindeki değerleri topladık ve max değere eşit olup olmadıklarının kontrol ettik.
  const newArr = [...arr];
  let sum1 = 0;
  const maxValue1 = Math.max(...arr);

  newArr.splice(arr.indexOf(maxValue1), 1);

  for (let i = 0; i < newArr.length; i++) {
    sum1 += newArr[i];
  }
  return maxValue1 === sum1 ? true : false;

  // 2.Yol
  // Array üzerinde sort() metodu uygulayarak array'i küçükten büyüğe doğru sıraladık. Sonra son index haric diğer array elemanlarını topladık ve array'in en büyük yani elemana eşit olup olmadığını kontrol ettik.
  arr.sort((a, b) => a - b); // Küçükten büyüğe sıraladık.
  let sum2 = 0;
  const maxValue2 = arr[arr.length - 1];
  for (let i = 0; i < arr.length - 1; i++) {
    sum2 += arr[i];
  }

  return maxValue2 === sum2 ? true : false;

  // 3.Yol
  // Max değeri yine Math.max() metodu ile bulduktan sonra bütün array içerisindeki elemanları topladık ve ikiye böldük. Eğer bölüm max değere eşitse true aksi durumlarda ise yine false döndük.
  const maxValue3 = Math.max(...arr);
  let sum3 = 0;

  for (let i = 0; i < arr.length; i++) {
    sum3 += arr[i];
  }
  return sum3 / 2 === maxValue3 ? true : false;
};

/*

Array Addition 

Using the JavaScript language, have the function ArrayAdditionI(arr) take the array of numbers stored in arr and return the string true if any combination of numbers in the array can be added up to equal the largest number in the array, otherwise return the string false.

For example: if arr contains [4, 6, 23, 10, 1, 3] the output should return false because 4 + 6 + 10 + 3 + 1 != 23.(24).
The array will not be empty, will not contains all the same elements, and may contain negative numbers.

*/

/*

Dizi Ekleme

JavaScript dilini kullanarak, ArrayAdditionI(arr) işlevinin arr'de depolanan sayı dizisini almasını sağlayın ve dizideki herhangi bir sayı kombinasyonu dizideki en büyük sayıya eşit olacak şekilde toplanabilirse true dizesini döndürün, aksi takdirde dizeyi döndürün YANLIŞ.

Örneğin: arr [4, 6, 23, 10, 1, 3] içeriyorsa, 4 + 6 + 10 + 3 + 1 != 23.(24) olduğu için çıktı false dönmelidir.
Dizi boş olmayacak, tüm aynı öğeleri içermeyecek ve negatif sayılar içerebilir.

*/
