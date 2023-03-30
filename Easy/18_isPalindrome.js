export const isPalindrome = (str) => {
  // 1 - Bize verilen string içerisinde noktalama ve rakamlar olmayacağı söylenmekte olup, kelimenin içerisinde boşluk ve büyük harf gibi farklılıkların olup olmayacağından bahsedilmediği için, ilk olarak str içerisindeki olabilecek boşluklardan replace metodu ile kurtulduk. Sonrasından ise verilen string'i toLowerCase ile küçük harften oluşan bir şekle getirdik. Çünkü sorunun çözümünde kullanacağımız "===" küçük ve büyük harf ayrımını yapacak ve palindrome olan bir kelimeyi büyük küçük harf farklılığı yüzünden palindrome değil olarak sınıflandıracaktır.
  const newStr = str.replace(/ /g, "").toLowerCase();

  // 2- Olası boşluklardan arındırılmış ve aynı boyuta getirlmiş harflerden oluşan kelimemizi tam olarak tersi le kıyasladık ve eğer her iki kelime de eşitse fonksiyonumuzun true, aksi durumda ise false dönmesini sağladık.
  return newStr.split("").reverse().join("") === newStr ? true : false;
};

/* 

Palindrome

Using the JavaScript language, have the function Palindrome(str) take the str parameter being passed and return the string true if the parameter is a palindrome, (the string is the same forward as it is backward) otherwise return the string false.

For Example: "racecar" is also "racecar" backwards.
-- Punctuation and numbers will not be part of the string.

*/

/*

Palindrom

JavaScript dilini kullanarak, Palindrome(str) işlevinin aktarılmakta olan str parametresini almasını ve parametre bir palindrom ise true dizesini döndürmesini sağlayın (dize ileri ve geri aynıdır), aksi takdirde false dizesini döndürür.

Örneğin: "racecar" aynı zamanda geriye doğru "racecar"dır.
-- Noktalama işaretleri ve sayılar dizenin bir parçası olmayacaktır.

*/
