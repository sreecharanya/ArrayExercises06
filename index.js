//Arrays can hold different data types, even other arrays! A multi-dimensional array is one with entries that are themselves arrays.

//a) Define and initialize the arrays specified in the exercise to hold the name, chemical symbol and mass for different elements.
element1 = ['hydrogen', 'H', 1.008,'']
element2 = ['helium', 'He', 4.003]
element26 = ['iron', 'Fe', 55.85]
element8=['oxygen','o',15.9994]
//b) Define the array 'table', and use 'push' to add each of the element arrays to it. Print 'table' to see its structure.
let table=[];
element1.push('first element')
element2.push("second element")
element26.push("26th element")
element8.push("8th element")
table.push(element1)
table.push(element2)
table.push(element26)
table.push(element8)
console.log(table)

//c) Use bracket notation to examine the difference between printing 'table' with one index vs. two indices (table[][]).
console.log("_____________")
console.log(table[1]);
console.log(table[1][1]);


//d) Using bracket notation and the table array, print the mass of element1, the name for element 2 and the symbol for element26.
console.log("_____________")
console.log("mass",table[0][2])
console.log("name",table[1][0])
console.log("symbol",table[2][1])


//e) 'table' is an example of a 2-dimensional array. The first “level” contains the element arrays, and the second level holds the name/symbol/mass values. Experiment! Create a 3-dimensional array and print out one entry from each level in the array.
console.log("_____________")
console.log("Name of the first element:",table[0][0]);
console.log("Symbol of Helium element:",table[1][1]);
console.log("Number in the periodic table for Iron:",table[2][3])
console.log("Atomic mass of oxygen:",table[3][2])
