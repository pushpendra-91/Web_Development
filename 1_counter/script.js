function inc(){
    var num = Number(document.getElementById('num').innerHTML)
    document.getElementById('num').innerHTML = num+1
}

function dec()
{
    var num = Number(document.getElementById('num').innerHTML)
    document.getElementById('num').innerHTML = num-1

}
function neu()
{
    document.getElementById('num').innerHTML = 0
}