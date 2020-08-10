$(function() {
    $('#slider-bar').slider({
        range :'max',
        min : 0,
        max : 100,
        value :50,
        step : 1,
        orientation : 'horizontal',
        animate :'slow',
        slide:function(event,u){
            $('#data').val(u.value);
        }
    });
    $('#data').val($('#slider-bar').slider('value'));
});


let a = document.getElementById('data')
const b = document.getElementById('slider-bar') 

b.addEventListener("mouseup",()=> {
    if (100 >= a.value && a.value >= 81 ) {
            document.getElementById('result-box-a').value = '오늘의 기분은 매우 좋음';
       } else if (81 > a.value && a.value >= 61) {
            document.getElementById('result-box-a').value = '오늘의 기분은 좋음';
        } else if(61 > a.value && a.value >= 41){
            document.getElementById('result-box-a').value = '오늘의 기분은 보통';
        }else if(41 > a.value && a.value >= 21){
            document.getElementById('result-box-a').value = '오늘의 기분은 나쁨';
        }else {
            document.getElementById('result-box-a').value = '오늘의 기분은 매우 나쁨';
        }
        
    }
) 