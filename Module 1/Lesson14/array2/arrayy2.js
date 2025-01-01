// const cities =[
//     ['HN' , 'SG' , 'DN'],
//     ["Tokyo" , "New York"],
//     ["Bangkok"]
// ]
// console.log(Array.isArray(cities[0]));
// console.log(Array.isArray(cities[1]));
// console.log(Array.isArray(cities[2]));
// console.log(cities);
//
// for (let i = 0 ; i < cities.length; i++) {
//     for (let j = 0 ; j < cities.length[i]; j++) {}
//     console.log(cities[i][j]);
// }

// su dung tu khoa new

const numbers = new Array(5);
for (let i =0 ; i< numbers.length; i++){
    numbers[i] = new Array(5);

}
const table = document.getElementById("table");
let row = '';
for ( let i = 0 ; i < numbers.length; i++){
    row += '<tr>';
    for ( let j = 0 ; j < numbers[i].length; j++){
        numbers[i][j] = Math.floor(Math.random() * 100) + 1;
        row += `<td>'${numbers[i][j]}'</td>`;
    }
    row += '</tr>';
}

table.innerHTML = row;
console.log(numbers);