// const expensesTest =[{
//   id: '1',
//   description: 'Gum',
//   note: '',
//   amount: 195,
//   createAt: 0
// }, {
//   id: '2',
//   description: 'Rent',
//   note: '',
//   amount: 109500,
//   createAt: 0
// }]

export default (expenses)=>{
  
    return expenses.map((expense) => expense.amount).reduce((sum, value) => sum+value, 0);
   
}
