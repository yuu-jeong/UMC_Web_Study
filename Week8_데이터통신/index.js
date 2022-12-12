// 1. fetch : fetch(url, options) -> Promise의 형태

const result = [];

// fetch("https://jsonplaceholder.typicode.com/users")
// .then(response => response.json())
// .then(data => data.map(item => result.push(item.name))) 
// .catch(error => console.log(error))

// [{uer1}, {user2}]의 형식으로 저장되게 하기 위해 item.name을 push함
// console.log(result);


// 2. await

// const dataFetch = async() => {
//      	const response = await fetch("https://jsonplaceholder.typicode.com/users");
//      	const data = await response.json();
    
//      	//console.log(data);
//          return data
//     }

//     const dataResult = dataFetch();


// 3. axios -> fetch의 두개의 단계를 하나로 줄일 수 있음

axios.get("https://jsonplaceholder.typicode.com/users")
.then(data => console.log(data.data))

const dataFetch = async() => {
	const response = await axios.get("https://jsonplaceholder.typicode.com/users").data;

	return response;
}

const dataResult = dataFetch();

console.log(dataResult);