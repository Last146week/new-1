


/*var firstCheck = false,
    secondCheck = true,
    access = firstCheck ?"Доступ разрешен" : secondCheck ? "Доступ разрешен" : "Доступ запрешён";

console.log( access );  выводит в консоль "Доступ разрешён"*/

/*let name = "Alex", age = 18;
const aget = (age >= 18 && name === 'Alex') ? "контент доступен" : "контент запрещен";
console.log(aget);*/

/*var firstCheck = true, secondCheck = false;
const access = (firstCheck === true || secondCheck === true) ? "Доступ разрешен" : "Доступ запрешён";
console.log(access);*/

/*const name = 'John'; 
const age = 1;

if (name === 'John' && age >= 18){
	console.log ("Доступ разрешен");
}
else if (name !== 'John' && age < 18){   
	console.log("Доступ запрещён");
}
else if (name !== 'John' && age > 18){   
	console.log("inaf");
}
else if (name === 'John' && age < 18){   
	console.log("end");
}*/
/*const ru ='Русскиаай'
const en ='Английский'
let array = ['Русский','Английский'];
let array2 =[ru,en];
console.log (array, array2)*/
/*const array = [13,42,35,66]
for(i = 0; i < 10; i++) {
	console.log(array[i])
}*/
/*const array = [13,42,35,66];
let i = 0;
while(i < array.length){
	console.log(array[i]);
i++;}*/

const requestURL = 'https://jsonplaceholder.typicode.com/users'

function sendRequest(method, url,) {
    return fetch(url).then(response => {
      return response.json()
    })
}

  sendRequest('GET', requestURL)
 .then(data => console.log(data))
 .catch(err => console.log(err))


/*sendRequest('POST', requestURL, body)
  .then(data => console.log(data))
  .catch(err => console.log(err))*/
