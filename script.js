function inform(){
    alert("나는 alert 입니다");
}
function grade(){
    // document.getElementById('total').style.fontSize='30px';
    // $('#total').css({
    //    fontSize:30
    // });

    // $('#total').css("fontSize","30px");
    $('#total').css("fontSize",30);

    var kor1=parseInt(document.getElementById("kor1").innerHTML);
    var kor2=parseInt(document.getElementById("kor2").innerHTML);
    var first=document.getElementById("first_g");
    first.innerHTML=kor1+kor2;
    // first.style.color="red";
    $('#first_g').css("color","red");



    var eng1=parseInt(document.getElementById("eng1").innerHTML);
    var eng2=parseInt(document.getElementById("eng2").innerHTML);
    var first=document.getElementById("second_g");
    first.innerHTML=eng1+eng2;
    first.style.color="red";

    var math1=parseInt(document.getElementById("math1").innerHTML);
    var math2=parseInt(document.getElementById("math2").innerHTML);
    var first=document.getElementById("third_g");
    first.innerHTML=math1+math2;
    first.style.color="red";
}