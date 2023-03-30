export const wordCount = (str) => {
  // İlk olarak bize verilen string'in önünde ve arkasında olması muhtemel boşlukları .trim() metodu ile sildik. Sonrasında .split() kullanarak bu string'i bir array'e çevirdik ve array'in uzunluğuna ise .length property ile ulaşarak, bu değeri return ettik.

  return str.trim().split(" ").length;

  //.trim() baştaki ve sondaki boşlukları siler cümlenin sonra boşluk bile olsa bunu yeni bie kelime sayısı olarak yazmaz.
};

/*

Word Count

Using the JavaScript language, have the function wordCount(str) take the str string parameter being passed and return the number of words the string contains (ie. "Never eat shredded wheat" would return 4).
Words will be separated by single spaces.

*/

/*

Sözcük sayısı

JavaScript dilini kullanarak, wordCount(str) işlevinin, iletilen str dize parametresini almasını ve dizenin içerdiği sözcük sayısını döndürmesini sağlayın (ör. "Asla kıyılmış buğday yemeyin" 4 döndürür).
Kelimeler tek boşlukla ayrılacaktır.

*/
