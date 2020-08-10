$(function() {
    $('#slider-bar').slider({
        range :'max',
        min : 0,
        max : 100,
        value :50,
        step : 1,
        orientation : 'horizontal',
        animate :'slow',
        slide:function(event,ui){
            $('#data-value').val(ui.value);
            
                if (100 >= ui.value && ui.value >= 81 ) {
                        document.getElementById('result-box-a').value = '오늘의 기분은 매우 좋음';
                   } else if (81 > ui.value && ui.value >= 61) {
                        document.getElementById('result-box-a').value = '오늘의 기분은 좋음';
                    } else if(61 > ui.value && ui.value >= 41){
                        document.getElementById('result-box-a').value = '오늘의 기분은 보통';
                    }else if(41 > ui.value && ui.value >= 21){
                        document.getElementById('result-box-a').value = '오늘의 기분은 나쁨';
                    }else {
                        document.getElementById('result-box-a').value = '오늘의 기분은 매우 나쁨';
                    }
                }
                });        
        
            $('#data-value').val($('#slider-bar').slider('value'));
    });

    document.getElementById("data-value").value