export const userValidation = (str) => {
  if (
    str.length >= 4 &&
    (/[a-zA-Z]/).test(str.slice(0, 1)) && // str.charAt(0)
    (/^\w+$/).test(str) &&
    (/[a-zA-Z0-9]/).test(str.slice(-1) // st.charAt(str.length-1)
    )
  ) {
    return true;
  } else {
    return false;
  }

  //-- Kullanılan ÖZellikler --//

  // And Operator
  // .length Property

  // Regular Expression (araştır)
  // .charAt() -- Parantez içindeki sayıya göre yazılan hanedeki harfi verir. .slice() -- 10 karakterlik bir kelime içerisindeki 4 ila 8. karakterler arasındaki karakterleri alırız.
  // .test() -- İçine yazılan karakterin uyumunu test eder.
};

/* Rules

1. The username is between 4 and 25 characters.
2. It must start with a letter.
3. It can only contain letters, numbers and the underscore character.
4. It cannot end with an underscore character.

If the username is valid then your program should return the string true.  

u__hello_world123

*/

/* Kurallar

1. Kullanıcı adı 4 ile 25 karakter arasındadır.
2. Harf ile başlamalıdır.
3. Yalnızca harf, sayı ve alt çizgi içerebilir. (/^\w+$/)
4. Alt çizgi karakteri ile bitemez.

Kullanıcı adı geçerliyse, programınız true dizesini döndürmelidir.

*/
