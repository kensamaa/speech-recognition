const btn = document.querySelector('.bt');
const user=document.querySelector('.user');
const him= document.querySelector('.content');

const speechrecognition= window.speechrecognition || window.webkitSpeechRecognition;
const recognition=new speechrecognition();

const greetings=['i m good thanks','i m doing good','not bad'];

const fu=['dont be sad you are strong','no its ok just ignore the world','i m here for you','no stop be happy'];
recognition.onstart=function(){
    console.log("voice activated you can talk to microphone");
    //readLoud('hello amine    start speaking');
};

//when u stop talking
recognition.onresult=function(event){
    const current=event.resultIndex;
    const transcript=event.results[current][0].transcript;
    user.textContent=transcript;
    
    //readLoud("u said ");
    readLoud(transcript);
};

//add listener to the button
btn.addEventListener('click',()=>{
    recognition.start();
});

function readLoud(message){
    const speech=new SpeechSynthesisUtterance();
    speech.text='i dont know what you said';
    if(message.includes('how are you')){
        const textt=greetings[Math.floor(Math.random()*greetings.length)];
        him.textContent=textt;
        speech.text=textt;
    }
    else if(message.includes('sad')){
        const textt=fu[Math.floor(Math.random()*greetings.length)];
        him.textContent=textt;
        speech.text=textt;
    }
    else if(message.includes('say')){
        textt='thank you and i wish you very good luck in your study and your life '
        him.textContent=textt;
        speech.text=textt
    }
    speech.volume=1;
    speech.rate=1;
    speech.pitch=1;
    speech.lang = 'en-US';
    
    
    window.speechSynthesis.speak(speech);
};
