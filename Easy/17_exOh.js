export const exOh = (str) => {
  let x = 0;
  let o = 0;

  [...str].forEach((item) => {
    item === "x" ? (x += 1) : (o += 1);
  });

  return x === o ? true : false;
};

/*

Ex Oh 

Using the JavaScript language, have the function ExOh(str) take the str parameter being passed and return the string true if there is an equal number of x's and o's, otherwise return the string false.

Only these two letters will be entered in the string, no punctuation or numbers.
For example: if str is "xooxxxxooxo" then the output should return false because there are 6 x's and 5 o's.

*/

/*

X O

JavaScript dilini kullanarak, ExOh(str) işlevinin iletilen str parametresini almasını ve eşit sayıda x ve o varsa dizeyi doğru döndürmesini sağlayın, aksi takdirde diziyi yanlış döndürün.

Dizide sadece bu iki harf girilecek, noktalama işareti veya sayı girilmeyecektir.
Örneğin: str "xooxxxxooxo" ise, 6 x ve 5 o olduğundan çıktı false döndürmelidir.

*/
