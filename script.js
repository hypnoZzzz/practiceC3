// function setCookie (name, value, options) {
// 	options = options || {};
// 	let expires = options.expires;
// 	if (typeof expires == 'number' && expires) {
// 		let dateS = new Date ();
// 		dateS.setTime(dateS.getTime() + expires * 10000);
// 		expires = options.expires = dateS;
// 	}

// 		if (expires && expires.toUTCString) {
// 			options.expires = expires.toUTCString();
// 		}

// 			value = encodeURIComponent(value);
// 			let updatedCookie = name + '=' + value;
// 			for (let propName in options) {
// 				updatedCookie += '; ' + propName;
// 				let propValue = options[propName];
// 				if (propValue !== true) {
// 					updatedCookie += '=' + propValue;
// 				}
// 			}
// 					document.cookie = updatedCookie;
// }

// setCookie('user', 'alex', 'expires = 20/03/2020')

// console.log(document.cookie)


function City (){
	let homeTown = document.getElementById('city').value;
	document.write('Ваш родной город - ' + homeTown + '!')
	document.getElementById('replacement').style.display = 'block';
}



function setCookie () {
	document.cookie = 'name=alex'
}

function getCookie () {
	alert (document.cookie)
}



// butt.onclick = function() {
//     var val = document.getElementById('elem1').value;
//     document.getElementById('str').innerHTML="Вы ввели: "+val;
// };