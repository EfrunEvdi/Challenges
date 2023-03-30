export const abCheck = (str) => {
  // 1- Bize verilen string'i forEach kullanabilmek için array'e çevirdik. Burada kesinlikle boşlukları silmedik ve string'i en başta da küçük harfe dönüştürdük.  Bu noktada harf olmayan değerler ile bu işlemi gerçekleştireceğimizde toLowerCase() metodu hataya yol açacaktır. Bu sebeple size tavsiyem çözümünüzü buna göre güncellemenizdir.
  const arr = str.split("");
  let control = [];
  // 2- Oluşturduğumu array üzerinde forEach ile döngü oluşturduk ve eğer döngüdeki değer a harfi ise bu a harfinin indeksini bulduk ve kendisinden 3 karakter sonraki değerin b harfi olup olmadığını kontrol ettik.
  // 3- Eğer döngü içindeki harf a ve kendisinden sonra 4. karakter b ise oluşturduğumuz const control = [] array içerisine true ekledik. Diğer durumlar içinse bir işlem gerçekleştirmedik.
  arr.forEach((char) => {
    if (char === "a" && arr[arr.indexOf(char) + 4] === "b") {
      control.push(true);
    }
  });

  // 4- Son olarak da control array'inin içinde true varsa fonksiyonumuzun true, aksi durumlarda ise false dönmesini sağladık.
  return control.includes(true) ? true : false;

  // Kısa Çözüm
  // Bize verilen string üzerinde str.search("a...b") şeklinde search metodunu uyguladık ve eğer bu işlemden dönen değer -1'den büyükse true, aksi durumda ise false dönecek şekilde kodumuzu yazarak tamamladık.
  return str.search("a...b") > -1 ? true : false;
};

/*

AB Check

Using the JavaScript language, have the function ABChech(str) take the str parameter passed and return the string true if the characters a and b are separated by exactly 3 places anywhere in the string at least once

(ie. "lane borrowed" would result in true because ther is exactly three characters between a and b).
Otherwise return the string false.

*/

/*

AB Kontrolü

JavaScript dilini kullanarak, ABChech(str) işlevinin str parametresini geçirmesini sağlayın ve a ve b karakterleri dizenin herhangi bir yerinde en az bir kez tam olarak 3 basamakla ayrılmışsa dizeyi true döndürün.

(yani, "lane borrowed", a ve b arasında tam olarak üç karakter olduğu için doğru sonuç verir).
Aksi takdirde, dizeyi false olarak döndürün.

*/
