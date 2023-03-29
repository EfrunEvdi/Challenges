export const letterCapitalize = (str) => {
  // 1- String'i split metodu kullanarak bir array haline dönüştür ve tanımlanmış olan bir değişkene ata.
  let newStr = [];

  // 2-Array tipinde boş bir değişken tanımla,
  // 3- split() metodu bir array döner. Bu yüzden array içerisinde sırayla gezinebilmemiz için forEach metodu uygula,
  // 4- forEach metodu ile beraber array içerisindeki her kelime üzerinde sırasıyla charAt(), toUpperCase() ve slice() metodlarını uygulayarak, kelimenin önce ilk harfini büyüt sonra ise slice ile 1. index'ten itibaren oluşturulmuş kelimenin geri kalanı ile '+' operator kullanarak birleştir ve ilk başta tanımlanmış olan array tipindeki değişkene push() et.
  str.split(" ").forEach((word) => {
    newStr.push(word.charAt(0).toUpperCase() + word.slice(1, word.length));
  });

  // 5- İçi ilk harfleri büyütülmüş kelimelerle doldurulmuş olan array'i join metodu kullanarak aralarında bir adet boşluk kalacak şekilde string'e çevir  ve bu string'i de return et.
  return newStr.join(" ");
};

// const w1 = "merhaba";

// // charAt()

// const ilkHarf = w1.charAt(0).toUpperCase();
// const geriKalan = w1.slice(1, w1.length);

// console.log(ilkHarf + geriKalan);
// //console.log(geriKalan);

/*

Letter Capitalize 
Using the JavaScript language, have the function LetterCapitalize(str) take the str parameter being passed and capitalize the first letter of each word.

Words wil be separated by only one space.

*/

/*

Büyük Harf
JavaScript dilini kullanarak, LetterCapitalize(str) işlevinin geçirilen str parametresini almasını ve her kelimenin ilk harfini büyük yazmasını sağlayın.

Kelimeler yalnızca bir boşlukla ayrılacak.

*/
