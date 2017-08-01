let anotherString = 'ccc';
const myString:string = 'abc';
const myBoolean: boolean = true;
const myBoth:string|boolean = 'abc';
const myNumber: number = 10.5;
const myArray: string[] = ['A', 'B', 'C'];
const myTuple: [string, number] = ['A', 10];

const myUnknow: any = [10, 'A', false];
const myVoid: void = null; //(específico para retorno de funções, o objetivo é deixar claro que a função não retorna nada)

const a = null;
const b = undefined;

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
