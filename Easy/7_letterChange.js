export const letterChange = (str) => {
  // 1- js charcode ve charcodeAt metotlarını kullanacağımız için ilk önce string içerisindeki harfleri toLowerCase metodu ile küçük harfe çeviriyoruz. replace metodu ile harfleri tarıyoruz ve ilk olarak eğer z varsa bu değeri hemen a ile değiştiriyoruz. Eğer harfimiz z değilse String.fromCharCode ve char.charcodeAt() kullanarak alfabedeki bir sonraki harf ile bu değeri değiştiriyoruz.
  let newStr = str.toLowerCase().replace(/[a-z]/gi, (char) => {
    if (char === "z") {
      return "a";
    } else {
      return String.fromCharCode(char.charCodeAt() + 1);
    }
  });

  // 2- Sesli harflari büyük harf haline getiriyoruz
  let vowelCapitalize = newStr.replace(/a|e|i|o|u/gi, (char) =>
    char.toUpperCase()
  );

  // 3- Son olarak da değeri return ediyoruz.
  return vowelCapitalize;

  //console.log("A".charCodeAt()); -- harfin karakter kodunu verir.
  //console.log(String.fromCharCode(65)); -- A
  //console.log(String.fromCharCode("A".charCodeAt() + 1)); -- B
};

/*

Using the JavaScript, have the function LetterChanges(str) take the str parameter being passed and modify is using the following algorith.

1- Replace every letter in the string with the letter following it in the alphabet(ie. c becomes d, z becomes a).

2- Then capitalize every vowel in this new string (a, e, i, o, u) and finally return this modified string.

*/

/*

JavaScript'i kullanarak, LetterChanges(str) işlevinin iletilen str parametresini almasını sağlayın ve aşağıdaki algoritmayı kullanarak değiştirin.

1- Dizideki her harfi alfabede kendisinden sonraki harfle değiştirin (ör. c d olur, z a olur).

2- Daha sonra bu yeni dizideki (a, e, i, o, u) her sesli harfi büyük yapın ve son olarak bu değiştirilmiş diziyi döndürün.

*/
