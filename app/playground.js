var anotherString = 'ccc';
var myString = 'abc';
var myBoolean = true;
var myBoth = 'abc';
var myNumber = 10.5;
var myArray = ['A', 'B', 'C'];
var myTuple = ['A', 10];
var myUnknow = [10, 'A', false];
var myVoid = null; //(específico para retorno de funções, o objetivo é deixar claro que a função não retorna nada)
var a = null;
var b = undefined;
if (a === null) {
    console.log('aaaa');
}
if (typeof b == 'undefined') {
    console.log('bbbb');
}
//void diz que a funcao n retorna nada, por isso o return 'asd' esta errado
// const test = (): void => {
//   return 'asd';
// };
// const test = (): void => {
//   while (true)
// };
// console.log(myString);
// console.log(myBoolean);
// console.log(myNumber);
// console.log(myArray);
// console.log(myTuple);
