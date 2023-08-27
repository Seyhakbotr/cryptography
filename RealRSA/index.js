function textToA1Z26(text) {
    let result = "";
    for (let i = 0; i < text.length; i++) {
        let code = text.toUpperCase().charCodeAt(i);
        if (code >= 65 && code <= 90) {
            // Convert letter to number (1-26)
            result += (code - 65) + " ";
        }
    }
    return result.trim();
}

function rsa() {
    var gcd, p, q, n, t, e, i, x;
    function isPrime(num) {
    for(let i = 2, sqrt = Math.sqrt(num); i <= sqrt; i++)
        if(num % i === 0) return false; 
    return num > 1;
}
    gcd = function (a, b) { return (!b) ? a : gcd(b, a % b); };
    p = document.getElementById('p').value;
    q = document.getElementById('q').value;
    if (!isPrime(p) || !isPrime(q)) {
        alert("Both P and Q need to be prime numbers.");
        return;
    }
    let text = document.getElementById('msg').value;
    let noString = textToA1Z26(text);
    let noArray = noString.split(" ").map(Number);
    n = p * q;
    t = (p - 1) * (q - 1);
    for (e = 2; e < t; e++) {
        if (gcd(e, t) == 1) {
            break;
        }
    }
    for (i = 0; i < 10; i++) {
        x = 1 + i * t
        if (x % e == 0) {
            d = x / e;
            break;
        }
    }
    document.getElementById('ciphertext(ct)').value = "";
    document.getElementById('decryptedtext(dt)').value = "";
    for (let no of noArray) {
        let bigNo = BigInt(no);
        let bigE = BigInt(e);
        let bigN = BigInt(n);
        let bigD = BigInt(d);
    
        let ctt = bigNo ** bigE;
        let ct = ctt % bigN;
        let dtt = ct ** bigD;
        let dt = dtt % bigN;
        
        document.getElementById('publickey(N)').value = n;
        document.getElementById('exponent(e)').value = e;
        document.getElementById('privatekey(d)').value = d;
        document.getElementById('ciphertext(ct)').value += ct.toString().padStart(2, '0') + " ";
        document.getElementById('decryptedtext(dt)').value += dt.toString().padStart(2, '0') + " ";
    }
}
window.onload = function() {
    document.getElementById('p').value = "";
    document.getElementById('q').value = "";
    document.getElementById('msg').value = "";
    document.getElementById('publickey(N)').value = "";
    document.getElementById('exponent(e)').value = "";
    document.getElementById('privatekey(d)').value = "";
    document.getElementById('ciphertext(ct)').value = "";
    document.getElementById('decryptedtext(dt)').value = "";
}