$(function (){
    $(".icon").click(function (){
        $('.navigation').toggleClass('nav_open');
    });
});

function copyT(element){
    const text = element.innerText;
    navigator.clipboard.writeText(text).then(() => {
        alert('Text copied')
    });
};