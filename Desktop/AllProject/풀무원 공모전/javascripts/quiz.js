function newdiv(){
  var lastCheck=false;
  controls.freeze=true;
    if(food==0){
    var div1 = document.createElement('div');
    document.getElementById('container').appendChild(div1);
    div1.style.backgroundImage = "url('images/quiz/quizscreen.png')";
    div1.id ="quiz1div1";

    var div2 = document.createElement('div');
    div1.appendChild(div2);
    div2.id ="quiz1div2";
    div2.className="quiz1divdiv2";

    var quizimg = document.createElement('div');
    div2.appendChild(quizimg);
    quizimg.innerHTML = "건강과 지속가능한 발전을 생각하며 사는 의식있는 생활양식을 설명하는 것은 무엇인가요?"
    quizimg.id ="quiz1quizimg";

    var quizans= document.createElement('div');
    div2.appendChild(quizans);
    quizans.innerHTML = "로하스는 건강과 지속가능한 발전을 생각하며 사는 의식 있는 생활양식을 의미합니다."
    quizans.id ="quiz1quizans";



    var ans = document.createElement('img');
    ans.src = "images/quiz/1_ans.png";
    div2.appendChild(ans);
    ans.id = "quiz1ansimg";

    var tryans = document.createElement('img');
    tryans.src = "images/quiz/1_try.png";
    div2.appendChild(tryans);
    tryans.id = "quiz1tryimg";


    var closebtn1 = document.createElement('button');
    closebtn1.id="quiz1closebtn";
    closebtn1.style.backgroundImage = "url('images/quiz/close.png')";
    closebtn1.style.backgroundRepeat = "no-repeat";
    div1.appendChild(closebtn1);

    $('#quiz1closebtn').click(function(){
      document.getElementById('quiz1div1').style.display ="none";
        controls.freeze=false;
  });

  var ul = document.createElement('ul');
  div2.appendChild(ul);


  for(var b=1;b<5;b++){
    var li = document.createElement('li');
    ul.appendChild(li);
    var btn = document.createElement('button');
    btn.id="quiz1"+"btn"+b;

    if(b==1){
    btn.innerHTML ="1. 욜로 (YOLO)"}
    else if(b==2){
      btn.innerHTML ="2. 바른 생활"
    }
    else if(b==3){
    btn.innerHTML ="3. 로하스"}
    else if(b==4){
      btn.innerHTML ="4. 자기 계발"
    }

    btn.className = "quiz1divbtn";
    li.appendChild(btn);
  }

  $('#quiz1btn3').click(function(){
    document.getElementById('quiz1tryimg').style.display ="none";
    document.getElementById('quiz1ansimg').style.display ="block";
    document.getElementById('quiz1quizans').style.display ="block";
    document.getElementById('quiz1closebtn').style.display ="block";
    document.getElementById('quiz1btn1').disabled ="true";
    document.getElementById('quiz1btn2').disabled ="true";
    document.getElementById('quiz1btn4').disabled ="true";
    document.getElementById('quiz1btn3').style.color = "#d20000";
  });

  $('#quiz1btn1').click(function(){
    document.getElementById('quiz1ansimg').style.display ="none";
    document.getElementById('quiz1tryimg').style.display ="block";
  });
  $('#quiz1btn2').click(function(){
    document.getElementById('quiz1ansimg').style.display ="none";
    document.getElementById('quiz1tryimg').style.display ="block";
  });
  $('#quiz1btn4').click(function(){
    document.getElementById('quiz1ansimg').style.display ="none";
    document.getElementById('quiz1tryimg').style.display ="block";
  });
}


if(food==1){
var div1 = document.createElement('div');
document.getElementById('container').appendChild(div1);
div1.style.backgroundImage = "url('images/quiz/quizscreen.png')";
div1.id ="quiz2div1";

var div2 = document.createElement('div');
div1.appendChild(div2);
div2.id ="quiz2div2";
div2.className="quiz2divdiv2";




var quizimg = document.createElement('div');
div2.appendChild(quizimg);
quizimg.innerHTML = "가족 그리고 지구를 위한 생활을 보다 깊고 넓게 생각하는 보다 기특해진 그린체의 새 이름은?"
quizimg.id ="quiz2quizimg";

var quizans= document.createElement('div');
div2.appendChild(quizans);
quizans.innerHTML = "가족 그리고 지구를 위한 생활을 보다 깊고 넓게 생각하는 보다 기특해진 <br>그린체의 새 이름은 풀무원 로하스입니다."
quizans.id ="quiz2quizans";


var ans = document.createElement('img');
ans.src = "images/quiz/2_ans.png";
div2.appendChild(ans);
ans.id = "quiz2ansimg";

var tryans = document.createElement('img');
tryans.src = "images/quiz/2_try.png";
div2.appendChild(tryans);
tryans.id = "quiz2tryimg";



var closebtn1 = document.createElement('button');
closebtn1.id="quiz2closebtn";
closebtn1.style.backgroundImage = "url('images/quiz/close.png')";
closebtn1.style.backgroundRepeat = "no-repeat";
div1.appendChild(closebtn1);

$('#quiz2closebtn').click(function(){
  document.getElementById('quiz2div1').style.display ="none";
    controls.freeze=false;
});

var ul = document.createElement('ul');
div2.appendChild(ul);


for(var b=1;b<5;b++){
var li = document.createElement('li');
ul.appendChild(li);
var btn = document.createElement('button');
btn.id="quiz2"+"btn"+b;
if(b==1){
btn.innerHTML ="1. 풀무원 로하스"}
else if(b==2){
  btn.innerHTML ="2. 그린체"
}
else if(b==3){
btn.innerHTML ="3. 풀무원 기특"}
else if(b==4){
  btn.innerHTML ="4. 녹색 식품"
}
btn.className = "quiz2divbtn";
li.appendChild(btn);
}

  $('#quiz2btn1').click(function(){
    document.getElementById('quiz2tryimg').style.display ="none";
    document.getElementById('quiz2ansimg').style.display ="block";
    document.getElementById('quiz2quizans').style.display ="block";
    document.getElementById('quiz2closebtn').style.display ="block";
    document.getElementById('quiz2btn2').disabled ="true";
    document.getElementById('quiz2btn3').disabled ="true";
    document.getElementById('quiz2btn4').disabled ="true";
    document.getElementById('quiz2btn1').style.color = "#d20000";

  });

  $('#quiz2btn3').click(function(){
    document.getElementById('quiz2ansimg').style.display ="none";
    document.getElementById('quiz2tryimg').style.display ="block";
  });
  $('#quiz2btn2').click(function(){
    document.getElementById('quiz2ansimg').style.display ="none";
    document.getElementById('quiz2tryimg').style.display ="block";
  });
  $('#quiz2btn4').click(function(){
    document.getElementById('quiz2ansimg').style.display ="none";
    document.getElementById('quiz2tryimg').style.display ="block";
  });

}

if(food==2){
var div1 = document.createElement('div');
document.getElementById('container').appendChild(div1);
div1.style.backgroundImage = "url('images/quiz/quizscreen.png')";
div1.id ="quiz3div1";

var div2 = document.createElement('div');
div1.appendChild(div2);
div2.id ="quiz3div2";
div2.className="quiz3divdiv2";




var quizimg = document.createElement('div');
div2.appendChild(quizimg);
quizimg.innerHTML = "풀무원 로하스가 고객을 위해 생각하지 않는 것은?"
quizimg.id ="quiz3quizimg";

var quizans= document.createElement('div');
div2.appendChild(quizans);
quizans.innerHTML = "풀무원 로하스는 고객을 위해 자연과 건강의 확장, 생각의 확장, 지속가능성의 확장을 중시합니다."
quizans.id ="quiz3quizans";


var ans = document.createElement('img');
ans.src = "images/quiz/3_ans.png";
div2.appendChild(ans);
ans.id = "quiz3ansimg";

var tryans = document.createElement('img');
tryans.src = "images/quiz/3_try.png";
div2.appendChild(tryans);
tryans.id = "quiz3tryimg";




var closebtn1 = document.createElement('button');
closebtn1.id="quiz3closebtn";
closebtn1.style.backgroundImage = "url('images/quiz/close.png')";
closebtn1.style.backgroundRepeat = "no-repeat";
div1.appendChild(closebtn1);

$('#quiz3closebtn').click(function(){
  document.getElementById('quiz3div1').style.display ="none";
    controls.freeze=false;
});

var ul = document.createElement('ul');
div2.appendChild(ul);


for(var b=1;b<5;b++){
var li = document.createElement('li');
ul.appendChild(li);
var btn = document.createElement('button');
btn.id="quiz3"+"btn"+b;
if(b==1){
btn.innerHTML ="1. 자연과 건강의 확장"}
else if(b==2){
  btn.innerHTML ="2. 생각의 확장"
}
else if(b==3){
btn.innerHTML ="3. 기업의 확장"}
else if(b==4){
  btn.innerHTML ="4. 지속가능성의 확장"
}
btn.className = "quiz3divbtn";
li.appendChild(btn);
}
$('#quiz3btn3').click(function(){
  document.getElementById('quiz3tryimg').style.display ="none";
  document.getElementById('quiz3ansimg').style.display ="block";
  document.getElementById('quiz3quizans').style.display ="block";
  document.getElementById('quiz3closebtn').style.display ="block";
  document.getElementById('quiz3btn1').disabled ="true";
  document.getElementById('quiz3btn2').disabled ="true";
  document.getElementById('quiz3btn4').disabled ="true";
  document.getElementById('quiz3btn3').style.color = "#d20000";
});

$('#quiz3btn1').click(function(){
  document.getElementById('quiz3ansimg').style.display ="none";
  document.getElementById('quiz3tryimg').style.display ="block";
});
$('#quiz3btn2').click(function(){
  document.getElementById('quiz3ansimg').style.display ="none";
  document.getElementById('quiz3tryimg').style.display ="block";
});
$('#quiz3btn4').click(function(){
  document.getElementById('quiz3ansimg').style.display ="none";
  document.getElementById('quiz3tryimg').style.display ="block";
});


}


if(food==3){
var div1 = document.createElement('div');
document.getElementById('container').appendChild(div1);
div1.style.backgroundImage = "url('images/quiz/quizscreen.png')";
div1.id ="quiz4div1";

var div2 = document.createElement('div');
div1.appendChild(div2);
div2.id ="quiz4div2";
div2.className="quiz4divdiv2";




var quizimg = document.createElement('div');
div2.appendChild(quizimg);
quizimg.innerHTML = "풀무원 로하스 구매 고객 대상으로 건강과 환경을 생각하는<br>로하스 생활 제품을 합리적인 가격에 공급하고 제품과 함께 정보를 제공하여<br>삶의 질을 향상시켜주는 회원몰은 어디일까요?"
quizimg.id ="quiz4quizimg";

var quizans= document.createElement('div');
div2.appendChild(quizans);
quizans.innerHTML = "자담터는 로하스 생활 제품의 정보를 제공하여 삶의 질을 향상시켜주고 <br>건강과 환경을 생각하는 로하스 제품을 합리적인 가격에 공급하는 온라인 몰입니다. "
quizans.id ="quiz4quizans";



var ans = document.createElement('img');
ans.src = "images/quiz/4_ans.png";
div2.appendChild(ans);
ans.id = "quiz4ansimg";

var tryans = document.createElement('img');
tryans.src = "images/quiz/4_try.png";
div2.appendChild(tryans);
tryans.id = "quiz4tryimg";



var closebtn1 = document.createElement('button');
closebtn1.id="quiz4closebtn";
closebtn1.style.backgroundImage = "url('images/quiz/close.png')";
closebtn1.style.backgroundRepeat = "no-repeat";
div1.appendChild(closebtn1);

$('#quiz4closebtn').click(function(){
  document.getElementById('quiz4div1').style.display ="none";
    controls.freeze=false;
});

var ul = document.createElement('ul');
ul.id="quiz4ul";
div2.appendChild(ul);


for(var b=1;b<5;b++){
var li = document.createElement('li');
ul.appendChild(li);
var btn = document.createElement('button');
btn.id="quiz4"+"btn"+b;
if(b==1){
btn.innerHTML ="1. 풀무원샵"}
else if(b==2){
  btn.innerHTML ="2. 자담터"
}
if(b==3){
btn.innerHTML ="3. 옥션"}
else if(b==4){
  btn.innerHTML ="4. 로하미"
}
btn.className = "quiz4divbtn";
li.appendChild(btn);
}

$('#quiz4btn2').click(function(){
  document.getElementById('quiz4tryimg').style.display ="none";
  document.getElementById('quiz4ansimg').style.display ="block";
  document.getElementById('quiz4quizans').style.display ="block";
  document.getElementById('quiz4closebtn').style.display ="block";
  document.getElementById('quiz4btn1').disabled ="true";
  document.getElementById('quiz4btn3').disabled ="true";
  document.getElementById('quiz4btn4').disabled ="true";
  document.getElementById('quiz4btn2').style.color = "#d20000";
});

$('#quiz4btn1').click(function(){
  document.getElementById('quiz4ansimg').style.display ="none";
  document.getElementById('quiz4tryimg').style.display ="block";
});
$('#quiz4btn3').click(function(){
  document.getElementById('quiz4ansimg').style.display ="none";
  document.getElementById('quiz4tryimg').style.display ="block";
});
$('#quiz4btn4').click(function(){
  document.getElementById('quiz4ansimg').style.display ="none";
  document.getElementById('quiz4tryimg').style.display ="block";
});


}


if(food==4){
var div1 = document.createElement('div');
document.getElementById('container').appendChild(div1);
div1.style.backgroundImage = "url('images/quiz/quizscreen.png')";
div1.id ="quiz5div1";

var div2 = document.createElement('div');
div1.appendChild(div2);
div2.id ="quiz5div2";
div2.className="quiz5divdiv2";



var quizimg = document.createElement('div');
div2.appendChild(quizimg);
quizimg.innerHTML = "자담터는 풀무원 건강 생활의 로하스 라이프를 추구하는 온라인몰로써<br> ________를(을) 의미합니다. 빈칸에 들어갈 말은 무엇일까요?"
quizimg.id ="quiz5quizimg";

var quizans= document.createElement('div');
div2.appendChild(quizans);
quizans.innerHTML = "자담터는 <자연과 이웃사랑을 담은 장터> 를 의미합니다."
quizans.id ="quiz5quizans";


var ans = document.createElement('img');
ans.src = "images/quiz/5_ans.png";
div2.appendChild(ans);
ans.id = "quiz5ansimg";

var tryans = document.createElement('img');
tryans.src = "images/quiz/5_try.png";
div2.appendChild(tryans);
tryans.id = "quiz5tryimg";


var closebtn1 = document.createElement('button');
closebtn1.id="quiz5closebtn";
closebtn1.style.backgroundImage = "url('images/quiz/close.png')";
closebtn1.style.backgroundRepeat = "no-repeat";
div1.appendChild(closebtn1);

$('#quiz5closebtn').click(function(){
  document.getElementById('quiz5div1').style.display ="none";
    controls.freeze=false;
});

var ul = document.createElement('ul');
ul.id="quiz5ul";
div2.appendChild(ul);


for(var b=1;b<5;b++){
var li = document.createElement('li');
ul.appendChild(li);
var btn = document.createElement('button');
btn.id="quiz5"+"btn"+b;
if(b==1){
btn.innerHTML ="1. 오직 가족만 생각하는 장터"}
if(b==2){
  btn.innerHTML ="2. 자연과 이웃사랑을 담는 장터"
}
else if(b==3){
btn.innerHTML ="3. 값 싼 제품을 제공하는 장터"}
else if(b==4){
  btn.innerHTML ="4. 품질 중심의 제품을 제공하는 장터"
}
btn.className = "quiz5divbtn";
li.appendChild(btn);
}

$('#quiz5btn2').click(function(){
  document.getElementById('quiz5tryimg').style.display ="none";
  document.getElementById('quiz5ansimg').style.display ="block";
  document.getElementById('quiz5quizans').style.display ="block";
  document.getElementById('quiz5closebtn').style.display ="block";
  document.getElementById('quiz5btn1').disabled ="true";
  document.getElementById('quiz5btn3').disabled ="true";
  document.getElementById('quiz5btn4').disabled ="true";
  document.getElementById('quiz5btn2').style.color = "#d20000";
});

$('#quiz5btn1').click(function(){
  document.getElementById('quiz5ansimg').style.display ="none";
  document.getElementById('quiz5tryimg').style.display ="block";
});
$('#quiz5btn3').click(function(){
  document.getElementById('quiz5ansimg').style.display ="none";
  document.getElementById('quiz5tryimg').style.display ="block";
});
$('#quiz5btn4').click(function(){
  document.getElementById('quiz5ansimg').style.display ="none";
  document.getElementById('quiz5tryimg').style.display ="block";
});

}

if(food==5){
var div1 = document.createElement('div');
document.getElementById('container').appendChild(div1);
div1.style.backgroundImage = "url('images/quiz/quizscreen.png')";
div1.id ="quiz6div1";

var div2 = document.createElement('div');
div1.appendChild(div2);
div2.id ="quiz6div2";
div2.className="quiz6divdiv2";




var quizimg = document.createElement('div');
div2.appendChild(quizimg);
quizimg.innerHTML = "자담터의 고객센터 이름은?"
quizimg.id ="quiz6quizimg";

var quizans= document.createElement('div');
div2.appendChild(quizans);
quizans.innerHTML = "자담터는 <자연과 이웃사랑을 담은 장터> 를 의미합니다."
quizans.id ="quiz6quizans";


var ans = document.createElement('img');
ans.src = "images/quiz/6_ans.png";
div2.appendChild(ans);
ans.id = "quiz6ansimg";

var tryans = document.createElement('img');
tryans.src = "images/quiz/6_try.png";
div2.appendChild(tryans);
tryans.id = "quiz6tryimg";



var closebtn1 = document.createElement('button');
closebtn1.id="quiz6closebtn";
closebtn1.style.backgroundImage = "url('images/quiz/close.png')";
closebtn1.style.backgroundRepeat = "no-repeat";
div1.appendChild(closebtn1);

$('#quiz6closebtn').click(function(){
  document.getElementById('quiz6div1').style.display ="none";
    controls.freeze=false;
});

var ul = document.createElement('ul');
div2.appendChild(ul);


for(var b=1;b<5;b++){
var li = document.createElement('li');
ul.appendChild(li);
var btn = document.createElement('button');
btn.id="quiz6"+"btn"+b;
if(b==1){
btn.innerHTML ="1. 고객 중심 센터"}
else if(b==2){
  btn.innerHTML ="2. 고객 기쁨 센터"
}
else if(b==3){
  btn.innerHTML ="3. 고객 사랑 센터"
}
else if(b==4){
  btn.innerHTML ="4. 고객 으뜸 센터"
}
btn.className = "quiz3divbtn";
li.appendChild(btn);
}

$('#quiz6btn2').click(function(){
  document.getElementById('quiz6tryimg').style.display ="none";
  document.getElementById('quiz6ansimg').style.display ="block";
  document.getElementById('quiz6quizans').style.display ="block";
  document.getElementById('quiz6closebtn').style.display ="block";
  document.getElementById('quiz6btn1').disabled ="true";
  document.getElementById('quiz6btn3').disabled ="true";
  document.getElementById('quiz6btn4').disabled ="true";
  document.getElementById('quiz6btn2').style.color = "#d20000";
});

$('#quiz6btn1').click(function(){
  document.getElementById('quiz6ansimg').style.display ="none";
  document.getElementById('quiz6tryimg').style.display ="block";
});
$('#quiz6btn3').click(function(){
  document.getElementById('quiz6ansimg').style.display ="none";
  document.getElementById('quiz6tryimg').style.display ="block";
});
$('#quiz6btn4').click(function(){
  document.getElementById('quiz6ansimg').style.display ="none";
  document.getElementById('quiz6tryimg').style.display ="block";
});




}


if(food==6){
var div1 = document.createElement('div');
document.getElementById('container').appendChild(div1);
div1.style.backgroundImage = "url('images/quiz/quizscreen.png')";
div1.id ="quiz7div1";

var div2 = document.createElement('div');
div1.appendChild(div2);
div2.id ="quiz7div2";
div2.className="quiz7divdiv2";




var quizimg = document.createElement('div');
div2.appendChild(quizimg);
quizimg.innerHTML = "자담터 이용 방법이 아닌 것은 무엇일까요?"
quizimg.id ="quiz7quizimg";

var quizans= document.createElement('div');
div2.appendChild(quizans);
quizans.innerHTML = "자담터는 풀무원 건강 생활의 로하스 라이프를 추구하는 온라인몰입니다."
quizans.id ="quiz7quizans";


var ans = document.createElement('img');
ans.src = "images/quiz/7_ans.png";
div2.appendChild(ans);
ans.id = "quiz7ansimg";

var tryans = document.createElement('img');
tryans.src = "images/quiz/7_try.png";
div2.appendChild(tryans);
tryans.id = "quiz7tryimg";



var closebtn1 = document.createElement('button');
closebtn1.id="quiz7closebtn";
closebtn1.style.backgroundImage = "url('images/quiz/close.png')";
closebtn1.style.backgroundRepeat = "no-repeat";
div1.appendChild(closebtn1);

$('#quiz7closebtn').click(function(){
  document.getElementById('quiz7div1').style.display ="none";
    controls.freeze=false;
});

var ul = document.createElement('ul');
div2.appendChild(ul);


for(var b=1;b<5;b++){
var li = document.createElement('li');
ul.appendChild(li);
var btn = document.createElement('button');
btn.id="quiz7"+"btn"+b;
if(b==1){
btn.innerHTML ="1. 자담터 앱 이용"}
else if(b==2){
  btn.innerHTML ="2. 자담터 온라인 사이트 이용"
}
else if(b==3){
  btn.innerHTML ="3. 카카오 플러스 친구"
}
else if(b==4){
  btn.innerHTML ="4. 자탐터 오프라인 매장 이용"
}
btn.className = "quiz3divbtn";
li.appendChild(btn);
}

$('#quiz7btn4').click(function(){
  document.getElementById('quiz7tryimg').style.display ="none";
  document.getElementById('quiz7ansimg').style.display ="block";
  document.getElementById('quiz7quizans').style.display ="block";
  document.getElementById('quiz7closebtn').style.display ="block";
  document.getElementById('quiz7btn1').disabled ="true";
  document.getElementById('quiz7btn2').disabled ="true";
  document.getElementById('quiz7btn3').disabled ="true";
  document.getElementById('quiz7btn4').style.color = "#d20000";
});

$('#quiz7btn1').click(function(){
  document.getElementById('quiz7ansimg').style.display ="none";
  document.getElementById('quiz7tryimg').style.display ="block";
});
$('#quiz7btn2').click(function(){
  document.getElementById('quiz7ansimg').style.display ="none";
  document.getElementById('quiz7tryimg').style.display ="block";
});
$('#quiz7btn3').click(function(){
  document.getElementById('quiz7ansimg').style.display ="none";
  document.getElementById('quiz7tryimg').style.display ="block";
});




}

if(food==7){
var div1 = document.createElement('div');
document.getElementById('container').appendChild(div1);
div1.style.backgroundImage = "url('images/quiz/quizscreen.png')";
div1.id ="quiz8div1";

var div2 = document.createElement('div');
div1.appendChild(div2);
div2.id ="quiz8div2";
div2.className="quiz8divdiv2";


var quizimg = document.createElement('div');
div2.appendChild(quizimg);
quizimg.innerHTML = "풀무원의 올해 캠페인 이름은 무엇일까요?"
quizimg.id ="quiz8quizimg";

var quizans= document.createElement('div');
div2.appendChild(quizans);
quizans.innerHTML = "2017년 바른먹거리 캠페인은 '바르게 차립니다'입니다.<br><a href='https://www.youtube.com/watch?v=6idiAUL46jg'  target='_blank'><캠페인 광고 보러가기></a>"
quizans.id ="quiz8quizans";


var ans = document.createElement('img');
ans.src = "images/quiz/8_ans.png";
div2.appendChild(ans);
ans.id = "quiz8ansimg";

var tryans = document.createElement('img');
tryans.src = "images/quiz/8_try.png";
div2.appendChild(tryans);
tryans.id = "quiz8tryimg";



var closebtn1 = document.createElement('button');
closebtn1.id="quiz8closebtn";
closebtn1.style.backgroundImage = "url('images/quiz/close.png')";
closebtn1.style.backgroundRepeat = "no-repeat";
div1.appendChild(closebtn1);

$('#quiz8closebtn').click(function(){
  document.getElementById('quiz8div1').style.display ="none";
    controls.freeze=false;
});

var ul = document.createElement('ul');
div2.appendChild(ul);


for(var b=1;b<5;b++){
var li = document.createElement('li');
ul.appendChild(li);
var btn = document.createElement('button');
btn.id="quiz8"+"btn"+b;
if(b==1){
btn.innerHTML ="1. '바른 먹거리' 캠페인"}
else if(b==2){
  btn.innerHTML ="2. '함께해요 211' 캠페인"
}
else if(b==3){
  btn.innerHTML ="3. '바르게 차립니다' 캠페인"
}
else if(b==4){
  btn.innerHTML ="4. '자연의 맛과 친구되기' 캠페인"
}
btn.className = "quiz3divbtn";
li.appendChild(btn);
}


$('#quiz8btn3').click(function(){
  document.getElementById('quiz8tryimg').style.display ="none";
  document.getElementById('quiz8ansimg').style.display ="block";
  document.getElementById('quiz8quizans').style.display ="block";
  // document.getElementById('quiz8closebtn').style.display ="block";
  document.getElementById('quiz8btn1').disabled ="true";
  document.getElementById('quiz8btn2').disabled ="true";
  document.getElementById('quiz8btn4').disabled ="true";
  document.getElementById('quiz8btn3').style.color = "#d20000";
   setInterval(function(){
     $(renderer.domElement).fadeOut(3000);
     $('#hud,#hurt,#quiz8ansimg,#quiz8quizans,#container').fadeOut(3000);
       if(audio.volume-0.05 >0.0 ){
         audio.volume-=0.05;
       }
       else{
         audio.pause();
       }
     $('body').append('<div id="success"><a target="_blank" href="https://www.pulmuone-lohas.com/pc/shop/product/prd_sub.do?cacode=11000000" id="link">자담터 들어가기</a></div>').show(2000);
     $('#success').css({width: WIDTH, height: HEIGHT});
   }, 2500);
});

$('#quiz8btn1').click(function(){
  document.getElementById('quiz8ansimg').style.display ="none";
  document.getElementById('quiz8tryimg').style.display ="block";
});
$('#quiz8btn2').click(function(){
  document.getElementById('quiz8ansimg').style.display ="none";
  document.getElementById('quiz8tryimg').style.display ="block";
});
$('#quiz8btn4').click(function(){
  document.getElementById('quiz8ansimg').style.display ="none";
  document.getElementById('quiz8tryimg').style.display ="block";
});




}

}
