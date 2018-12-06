// two ways to export the variable declaration
// we call it name export
// default export, you can only have one or none, and the naming is not important
// if file only serving one react components, then just use default export
const square = (x) => x*x; // inline name export
export const add = (a, b) => a+b; // export in one shot
const subtract = (a, b) => a-b; // default export

export {square, subtract as default};