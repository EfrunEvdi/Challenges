export const secondGreatLow = (arr) => {
  // 1- İlk olarak array içerisinde kendini tekrarlayan sayılardan forEach döngüsü ve array.includes() metodu kullanarak kurtuluyoruz.
  let newArr = [];
  arr.forEach((num) => {
    !newArr.includes(num) && newArr.push(num);
  });
  // 2- Array içerisindeki sayıları array.sort() metodu kullanarak küçükten büyüğe doğru sıralıyoruz.
  newArr.sort((a, b) => a - b);
  console.log(newArr[1]);
  console.log(newArr[newArr.length - 2]);
  // 3- Eğer Array 2 adet sayıdan oluşuyorsa hemen en küçük ikinci sayı olarak büyük sayıyı ve en büyük ikinci sayı olarak da en küçük değeri return ediyoruz.
  // 4- Eğer array'in eleman sayısı 2'den fazlaysa da en küçük ikinci değer olarak Array'in 1. indeksindeki elemanı, en büyük ikinci eleman olarak da array'in en sondan 2. indeksindeki sayıyı aralarına "-" ekleyerek return ediyoruz.
  if (newArr.length === 2) {
    return newArr[1] + "-" + newArr[0]();
  } else {
    return newArr[1] + "-" + newArr[newArr.length - 2];
  }
};

/*
Second Great Low
Using the JavaScript language, have the function SecondGreatLow(arr) take the array of numbers stored in arr and return the second lowest and second greatest numbers, respectively, separated by a spacde.

For example: if arr contains [7, 7, 12, 98, 106] the output should be 12 98.

The array will not be empty and will containsat least 2 numbers.

It can get tricky if there's just two numbers!

*/

/*
İkinci Büyük Düşük
JavaScript dilini kullanarak, SecondGreatLow(arr) işlevinin dizide depolanan sayı dizisini almasını ve bir boşlukla ayrılmış olarak sırasıyla ikinci en düşük ve ikinci en büyük sayıları döndürmesini sağlayın.

Örneğin: arr [7, 7, 12, 98, 106] içeriyorsa, çıktı 12 98 olmalıdır.

Dizi boş olmayacak ve en az 2 sayı içerecektir.

Sadece iki sayı varsa zor olabilir!

*/
