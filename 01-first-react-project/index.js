// as ile isim değiştirerek kullanabiliriz
import carp, { sum as topla, divition as bol } from './mathModule';

//Eğer çok metot import ediyorsak * işlemini kullanabiliriz. 'math.sum' gibi çağırıır
// import * as math from './mathModule';



console.log("Merhaba Dünya...");

console.log(topla(3, 4));
console.log(bol(5, 3));
console.log(carp(5, 3));
