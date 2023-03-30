export const vowelCount = (str) => {
  // const arr = str.split("");

  // 1- Bize verilen String'in üzerinde forEach Döngüsü kullanabilmek için bir array oluşturduk.
  // 2- forEach içerisinde if bloğu, regeular expression ve .test metodu kullanarak döngü içerisinde yer alan karakterin sesli bir harf olup olmadığını kontrol ettik.

  let i = 0;
  [...str].forEach((letter) => {
    if (/[a/e/i/o/u/A/E/I/O/U]/.test(letter)) {
      i += 1;
    }
  });

  // 3- Son olarak da eğer döngüdeki karakter sesli harf ise sayacımızı bir arttırdık ve sonucu return ettik
  return i;
};

/*

Vowel Count

Using the JavaScript language, have the function VowelCount(str) take the str string parameter being passed and return the number of vowels the string contains(ie. "All cows eat grass" return 5).
Do not count y as a vowel for this challenge.

*/

/*

Sesli Harf Sayısı

JavaScript dilini kullanarak, VowelCount(str) işlevinin iletilen str string parametresini almasını ve dizenin içerdiği ünlülerin sayısını döndürmesini sağlayın (yani, "All cows eat grass" 5 döndürür).
Bu meydan okuma için y'yi sesli harf olarak saymayın.

*/
