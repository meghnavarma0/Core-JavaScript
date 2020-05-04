let user = {
	name: 'Meghna',
	location: {
		city: 'Lucknow',
		area: 'BBD'
	},
	office: {
		city: 'Banglore',
		state: 'Karnataka',
		field: {
			speciality: 'Frontend Development'
		}
	}
};
let newobject = {};

let magic = (obj, parent) => {
	for (let key in obj) {
		//console.log(typeof key);
		if (typeof obj[key] === 'object') {
			magic(obj[key], parent + '_' + key);
		} else {
			newobject[parent + '_' + key] = obj[key];
		}
	}
};

magic(user, 'user');
console.log('newobject', newobject);
console.log(user['name']);

let newuser = JSON.stringify(user);
console.log(newuser);

let JSuser = JSON.parse(newuser);
console.log(JSuser);

// Difference between object.key and object[key] :

// When you know the key name of an object, then, you can refer to it by object.key to fetch the correspinding value.

// When you do not know the name of the key, then you fetch it via a for in loop, then, the typeof key is string, so we have to use object[key]

// In short, when a key is of type string, you fetch values via object[key] else using object.key
