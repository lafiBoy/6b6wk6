function changeColor()
{
    var color = document.getElementById('color').value;
    var section = document.getElementsByTagName('section')[0];

    section.style.backgroundColor=color
}