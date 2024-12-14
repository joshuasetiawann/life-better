let rleaf = document.getElementById('rleaf');
let lleaf = document.getElementById('lleaf');
let lcloud = document.getElementById('lcloud');
let rcloud = document.getElementById('rcloud');

let lbush1 = document.getElementById('lbush1');
let lbush2 = document.getElementById('lbush2');
let lbush3 = document.getElementById('lbush3');
let lbush4 = document.getElementById('lbush4');

let forest = document.getElementById('forest');

let rbush1 = document.getElementById('rbush1');
let rbush2 = document.getElementById('rbush2');
let rbush3 = document.getElementById('rbush3');
let rbush4 = document.getElementById('rbush4');

window.addEventListener('scroll', () => {
    let value = window.scrollY;

    // Gerakan elemen-elemen sesuai efek parallax
    forest.style.top = value * 0.5 + 'px';

    lcloud.style.left = -value * 0.5 + 'px';
    rcloud.style.left = value * 0.5 + 'px';

    lleaf.style.top = value * 1.5 + 'px';
    rleaf.style.top = -value * 1.5 + 'px';

    lbush1.style.left = -value * 0.7 + 'px';
    lbush2.style.left = value * 0.7 + 'px';
    lbush3.style.left = -value * 0.5 + 'px';
    lbush4.style.left = value * 0.5 + 'px';

    rbush1.style.left = value * 0.7 + 'px';
    rbush2.style.left = -value * 0.7 + 'px';
    rbush3.style.left = value * 0.5 + 'px';
    rbush4.style.left = -value * 0.5 + 'px';
});