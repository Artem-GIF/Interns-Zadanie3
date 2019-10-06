function substr(STR, K, N) { // k-первый элемент,n- колличество символов
let SUB='';

const A= (K<0) ? 0: K;
const B= (N>STR.lenght) ? STR.lenght-1: N;

if (STR !=='' || A !=='' && B !=='' ){
  for(i=K;i<B;i++) {
    SUB+=STR[i];
    }
  }
else {
  SUB===STR;}
return SUB;}
