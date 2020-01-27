// With Method:
function vowelsAndConsonants0 (s) {
	let storeVow = [];
	let storeConst = [];
	let n = s.length;
	for (let i = 0; i < n; i++) {
		if (s[i] === 'a' || s[i] === 'e' || s[i] === 'i' || s[i] === 'o' || s[i] === 'u') {
			storeVow.push(s[i]);
		} else {
			storeConst.push(s[i]);
		}
	}
	console.log(storeVow.join('\n'));
	console.log(storeConst.join('\n'));
}

vowelsAndConsonants0('javascriptloops');

// Another One:
function vowelsAndConsonants1 (s) {
	let storeConst = [];
	let n = s.length;
	for (let i = 0; i < n; i++) {
		if (s[i] === 'a' || s[i] === 'e' || s[i] === 'i' || s[i] === 'o' || s[i] === 'u') {
			console.log(s[i]);
		} else {
			storeConst.push(s[i]);
		}
	}
	console.log(storeConst.join('\n'));
}

vowelsAndConsonants1('javascriptloops');

// Without Method:
function vowelsAndConsonants2 (s) {
	let storeConst = [];
	let n = s.length;
	for (let i = 0; i < n; i++) {
		if (s[i] === 'a' || s[i] === 'e' || s[i] === 'i' || s[i] === 'o' || s[i] === 'u') {
			console.log(s[i]);
		} else {
			storeConst.push(s[i]);
		}
	}
	for (let j = 0, m = storeConst.length; j < m; j++) {
		console.log(storeConst[j]);
	}
}

vowelsAndConsonants2('javascriptloops');
