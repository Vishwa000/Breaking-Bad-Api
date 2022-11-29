let container = document.createElement('div')
container.setAttribute('id','cont')
container.classList.add('container')
document.body.appendChild(container)

let h1 = document.createElement('h1')
h1.innerHTML = 'BREAKING BAD'
h1.classList.add('text-center')
document.getElementById('cont').appendChild(h1)

let h3 = document.createElement('h3')
h3.innerHTML = 'Enter Number between 1 to 116'
h3.classList.add('text-center')
document.getElementById('cont').appendChild(h3)


let div3 = document.createElement('div')
div3.setAttribute('id','div3')
div3.classList.add("d-flex","justify-content-center")
document.getElementById('cont').appendChild(div3)

let form = document.createElement('form')
form.setAttribute('id','form')
document.getElementById('div3').appendChild(form)


let text1 = document.createElement('input')
text1.setAttribute('id','text1')
text1.innerHTML = 'enter width'
text1.setAttribute('onkeyup','brkbd(text1.value)')
text1.setAttribute('onkeypress','typing()')
text1.setAttribute('placeholder','Search here')
text1.classList.add('text','text-center')
document.getElementById('form').appendChild(text1)


let div1 = document.createElement('div')
div1.setAttribute('id','div1')
div1.classList.add('result','col-sm-12')
document.getElementById('cont').appendChild(div1)



let id = document.createElement('p')

let Name = document.createElement('p')

let birthday = document.createElement('p')

let occupation = document.createElement('p')

let Status = document.createElement('p')

let nickname = document.createElement('p')

let appearance = document.createElement('p')

let portrayed = document.createElement('p')

let category = document.createElement('p')







function brkbd(a){
	if(a>1 && a<116){
	let y=parseInt(a)
fetch(`https://www.breakingbadapi.com/api/characters/${y}`)
.then((x)=>x.json())
.then((res)=>{
	id.innerHTML = `<span id="style">ID : </span>${res[0].char_id}<br>`
	div1.appendChild(id)

	Name.innerHTML = `<span id="style">Name : </span>${res[0].name}<br>`
	div1.appendChild(Name)

	birthday.innerHTML = `<span id="style">Birthday : </span>${res.birthday}<br>`
	div1.appendChild(birthday)

	occupation.innerHTML = `<span id="style">Occupation : </span>${res[0].occupation}<br>`
	div1.appendChild(occupation)

	Status.innerHTML = `<span id="style">Status : </span>${res[0].status}<br>`
	div1.appendChild(Status)

	nickname.innerHTML = `<span id="style">Nickname : </span>${res[0].nickname}<br>`
	div1.appendChild(nickname)

	appearance.innerHTML = `<span id="style">appearance : </span>${res[0].appearance}<br>`
	div1.appendChild(appearance)

	portrayed.innerHTML = `<span id="style">portrayed : </span>${res[0].portrayed}<br>`
	div1.appendChild(portrayed)

    category.innerHTML = `<span id="style">Category : </span>${res[0].category}<br>`
	div1.appendChild(category)

    
	

})
	}	
	else if(a>116)
alert("please enter number between 1 - 116")
}

function typing(){
	let show = document.getElementById("result");
	if(event.charCode>=48 && event.charCode<=57 || event.key==="+" || event.key==="-" || event.key==="/" || event.key==="*"){
	   show.value += key;
	}
	else if(event.key==="Enter"){
		equal();
	}
	else{
	 alert("type only numbers");
	  event.preventDefault();
	}
 }