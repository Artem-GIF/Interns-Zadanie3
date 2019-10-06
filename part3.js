const apply=(N, FUN, VALUE)=> { // n- колличество повторов функции
if (N === 0) {
return VALUE;
}
const NewValue = fun(VALUE);
return apply(N,FUN,NewValue);
}
