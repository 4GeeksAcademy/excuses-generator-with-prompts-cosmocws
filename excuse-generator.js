"use strict";

const who = ["El perro", "Mi abuela", "Su tortuga", "Mi pajaro"];
const action = ["se comio", "rompio", "mojo", "perdio"];
const what = ["mi tarea", "las llaves", "el carro", "el documento"];
const when = ["antes de clase", "justo a tiempo", "mientras almorzaba", "anoche"];

function pickRandom(array) {
	const index = Math.floor(Math.random() * array.length);
	return array[index];
}

function generateExcuse() {
	const excuse = `${pickRandom(who)} ${pickRandom(action)} ${pickRandom(what)} ${pickRandom(when)}.`;
	console.log(excuse);
	return excuse;
}

if (require.main === module) {
	generateExcuse();
}

module.exports = { who, action, what, when, pickRandom, generateExcuse };
