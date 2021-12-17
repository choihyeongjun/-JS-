const quotes=[{
    quote:"병처럼 깨질지언정 캔처럼 찌그러지지말자",
    author:"이동찬",
},
{
    quote:"꿈을 이루고자 하는 용기만 있다면 모든 꿈을 이룰 수 있다",
    author:"월트 디즈니",
},
{
    quote:"비록 해가 지낟고 해도, 나에게는 전기불이 있다",
    author:"로커 커트 코베인",
},
{
    quote:"우리는 한 번도 존재하지 않았던 것을 꿈꿀 수 있는 사람들이 필요하다",
    author:"존 F. 케네디",
},
{
    quote:"무슨 일을 하기 전에는 그 일에 대해 기대를 가져야 한다",
    author:"농구선수 마이클 조던",
},
{
    quote:"조금도 도전하지 않으려고 하는 것이 인생에서 가장 위험한 일이다",
    author:"오프라 윈프리",
},
{
    quote:"행동은 모든 성공의 가장 기초적인 핵심이다",
    author:"파블로 피카소",
},
{
    quote:"용기란 죽을만큼 두려워도 무언가 해보는 것이다",
    author:"존 웨인",
},

{
    quote:"무언가를 위해 죽을 각오가 없다면, 인생을 살게 해줄 무언가도 가질 수 없을 것이다",
    author:"체게바라",
},
{
    quote:"승리는 가장 끈기 있는 사람에게 돌아간다",
    author:"보나파르트 나폴레옹",
},
];
const quote=document.querySelector("#quote span:first-child");
const author=document.querySelector("#quote span:last-child");
const daysQuote=quotes[Math.floor(Math.random()*quotes.length)];
quote.innerText=daysQuote.quote;
author.innerText=daysQuote.author;