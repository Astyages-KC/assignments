const  dockey = document.getElementsByClassName('red-box')[0] 

dockey.addEventListener('mousemove', function(e) {
    const x = e.clientX;
    const y = e.clientY;
    let coords = `x ${x} : y ${y}`;
    document.getElementById('coords').innerHTML = coords
}) 