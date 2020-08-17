let links = ['<a href="index.html">Home</a>', '<a href="contact.html">Contact</a>',
 '<a class="addForm">Add</a>'];
let nav = document.getElementById('menuItems');

for (let i=0; i<links.length; i++ ) {
	nav.innerHTML += links[i];
}

let a = document.querySelector('.addForm');

a.addEventListener('click', () => {
	divForm = document.querySelector('.divForm');
	divForm.style.display = 'block';
});

let selectObject = {
	input: document.getElementById('input'),
	head: document.getElementById('head'),
	button: document.getElementById('submitButton'),
	textarea: document.getElementById('textarea'),
	textField: document.getElementById('textField'),
	card: document.getElementById('card'),
	outputCards: document.getElementsByClassName('outputCards'),
	icon: document.getElementById('icon')
}

function newElements() {
	h1 = document.createElement('h1');
	h1.innerHTML = selectObject.input.value;
	selectObject.head.appendChild(h1);
	p = document.createElement('p');
	p.innerHTML = selectObject.textarea.value;
	selectObject.textField.appendChild(p);
	selectObject.card.style.display = 'block';
}

function remove(event) {
	event.target.style.display = 'none';
}

selectObject.button.addEventListener('click', newElements);
selectObject.head.addEventListener('click', remove);
selectObject.textField.addEventListener('click', remove);
// selectObject.icon.addEventListener('click', remove);


