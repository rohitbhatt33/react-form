function add(a,b) {
  let sum = a+b;
  return sum;
}

function sub(a,b) {
  let sub = a-b;
  return sub;
}

function div(a,b) {
  let div = a / b;
  div = div.toPrecision(3);
  return div;
}
export { add , sub , div};

