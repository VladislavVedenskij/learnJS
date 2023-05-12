a = null;
b = 0;
console.log(a == b)

// undefined при сравнении и числами или строками приводится к Nan
// alert( undefined > 0 ); // false (1)
// alert( undefined < 0 ); // false (2)
// alert( undefined == 0 ); // false (3)

5 > 4; // true
'ананас' > 'яблоко'; // false
"2" > "12"; // true
undefined == null; // true
undefined === null // false
null == '\n0\n'; // false
null === +'\n0\n' // false 