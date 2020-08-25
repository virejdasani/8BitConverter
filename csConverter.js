
var num = 0

function init() {
	num = 0
	update(0)
}

function update(n) {
	while (n > 255)
		n -= 256
	while (n < 0)
		n += 256
	document.forms.F0.dec.value = n + ""
	document.forms.F0.hex.value = tohex(n)
	document.forms.F0.bin.value = tobin(n)
	document.forms.F0.ascii.value = String.fromCharCode(n)
	num = n
}

function tohex(n) {
	// really sleazy...
	var s = ""
	for ( ; n >= 0; n /= 16) {
		rem = n % 16
		n -= rem
		if (rem == 15)
			s = "F" + s
		else if (rem == 14)
			s = "E" + s
		else if (rem == 13)
			s = "D" + s
		else if (rem == 12)
			s = "C" + s
		else if (rem == 11)
			s = "B" + s
		else if (rem == 10)
			s = "A" + s
		else
			s = rem + s
		if (n == 0)
			break
	}
	return s
}

function tobin(n) {
	var s = ""
	for ( ; n >= 0; n /= 2) {
		rem = n % 2
		n -= rem
		s = rem + s
		if (n == 0)
			break
	}
	return s
}

function atoi(s) {
	return s.charCodeAt(0)
}
