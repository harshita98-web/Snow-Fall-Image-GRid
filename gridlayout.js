const img = document.querySelectorAll(".dull");
img.forEach(t => t.addEventListener('mouseover', dull));
img.forEach(t => t.addEventListener('mouseout', bright));
function dull(){
    console.log('test',this)
    img.forEach(t => t.classList.add('hovers'));
    this.classList.remove('hovers');
}
function bright(){
 img.forEach(t => t.classList.remove('hovers'));
    this.classList.remove('hovers');
}