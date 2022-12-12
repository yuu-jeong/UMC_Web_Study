const $div = document.querySelector('.container');
const $form = document.querySelector('form');
const $input = document.querySelector('input');
const $button = document.querySelector('button');

// 1. 이벤트 핸들러
// target.이벤트이름 = 콜백함수 
// 콜백 함수이므로 괄호를 쓰지 않음, alert만 실행됨

// $div.onclick = () => console.log("clicked");
// $div.onclick = () => alert("clicked");

// function handleClick () {
//     console.log("clicked");
// }

// 2.addEventListener
// $div.addEventListener('click', handleClick);
// $div.addEventListener('click', () => alert("clicked"));

// function handleClick () {
//      console.log("clicked");
// }

//3. remove 
// $div.removeEventListener('click', handleClick);

// 4. 인자
$div.addEventListener('click', handleClick);

function handleClick (event) {
    console.log(event.target.innerText);
}

//handleChange는 실행하고 커서가 한 번 다른곳에 가야 실행됨
//dir은 객체에 대한 접근이 가능하게 함
$input.addEventListener('change', handleChange);
function handleChange (event) {
    console.dir(event.target.value);
}

//preventDefault는 submit을 하면 새로고침 되는 것을 막음
//event의 기본적인 동작 자체를 막음으로 값은 따로 저장해 줘야함
$form.addEventListener('submit', handleSubmit);
function handleSubmit (event) {
    event.preventDefault();
    const inputValue = $input.value;
    console.log(inputValue);
    $input.value=''; //초기화
}