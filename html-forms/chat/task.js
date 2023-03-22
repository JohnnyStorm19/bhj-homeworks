const redChatWidget = document.querySelector('.chat-widget');
const chatInput = document.querySelector('.chat-widget__input');
const messages = document.querySelector('.chat-widget__messages');
const messageError = document.querySelector('.error');

const greetings = ['Доброе утро!', 'Добрый день!', 'Добрый вечер!', 'Доброй ночи!'];
const botResponses = [
    'Что разум человека может постигнуть и во что он может поверить, того он способен достичь (Наполеон Хилл, журналист и писатель )',
    'Стремитесь не к успеху, а к ценностям, которые он дает (Альберт Эйнштейн)',
    'За свою карьеру я пропустил более 9000 бросков, проиграл почти 300 игр. 26 раз мне доверяли сделать финальный победный бросок, и я промахивался. Я терпел поражения снова, и снова, и снова. И именно поэтому я добился успеха (Майкл Джордан)',
    'Сложнее всего начать действовать, все остальное зависит только от упорства (Амелия Эрхарт)',
    'Надо любить жизнь больше, чем смысл жизни (Федор Достоевский)',
    'Жизнь - это то, что с тобой происходит, пока ты строишь планы (Джон Леннон)',
    'Логика может привести Вас от пункта А к пункту Б, а воображение — куда угодно (Альберт Эйнштейн)',
    'Начинать всегда стоит с того, что сеет сомнения (Борис Стругацкий)',
    'Настоящая ответственность бывает только личной (Фазиль Искандер)',
    'Неосмысленная жизнь не стоит того, чтобы жить (Сократ)',
    'Ваше время ограничено, не тратьте его, живя чужой жизнью (Стив Джобс)',
    'Победа - это еще не все, все - это постоянное желание побеждать (Винс Ломбарди, тренер по американскому футболу)',
    'Свобода ничего не стоит, если она не включает в себя свободу ошибаться (Махатма Ганди)'
];
const botQuestion = [
    'Я чувствую, что у вас есть вопрос, зададите?',
    'Вы бездействуете уже 30 секунд. Да, я считала. Может что-то хотите уточнить?',
    'Как ваш день?',
    'Если возникли вопросы - смело задавайте!',
    'Я знаю чему равно число ПИ, а вы?'
];

let intervalId = null;

redChatWidget.addEventListener('click', toActiveRedWidget);
chatInput.addEventListener('keyup', () => {
    clearInterval(intervalId);
    checkingValidity();
})
chatInput.addEventListener('blur', () => {
    clearInterval(intervalId);
    messageError.classList.remove('error_active');
    chatInput.classList.remove('invalid');
})
chatInput.addEventListener('focus', () => {
    intervalId = setInterval(() => {
        let randomNumber = Math.floor(Math.random() * botQuestion.length);
        messages.innerHTML +=
            `   
    <div class="message ">
         <div class="message__time">${new Date().toLocaleTimeString()}</div>
         <div class="message__text">
              ${botQuestion[randomNumber]}
         </div>
    </div>
        `
    }, 30000)
})

chatInput.addEventListener('input', () => {
    if(chatInput.value.charAt(0) === ' ') {
        chatInput.value = '';
      }
})

function toActiveRedWidget() {
    redChatWidget.classList.add('chat-widget_active');
}
function sentMessage(event) {
    let randomNumber = Math.floor(Math.random() * botResponses.length);
    if (event.key === 'Enter') {
        messages.innerHTML +=
            `  
            <div class="message message_client">
                <div class="message__time">${new Date().toLocaleTimeString()}</div>
                <div class="message__text">${chatInput.value}</div>
            </div>
            `
        setTimeout(() => {
            messages.innerHTML +=
                `   
            <div class="message ">
                 <div class="message__time">${new Date().toLocaleTimeString()}</div>
                 <div class="message__text">${sayHello()} ${botResponses[randomNumber]}</div>
            </div>
                `
            messageError.classList.remove('error_active');
            chatInput.classList.remove('invalid');
            let message = messages.children[messages.children.length - 1];
            message.scrollIntoView(false);
        }, 1000)
        chatInput.value = '';
    }
}

function sayHello() {
    let greeting = '';
    let hour = new Date().getHours();
    if (hour > 4 && hour < 11) {
        greeting = greetings[0];
    } else if (hour > 11 && hour < 18) {
        greeting = greetings[1];
    } else if (hour > 18 && hour < 23) {
        greeting = greetings[2];
    } else if (hour < 4 && hour > 0) {
        greeting = greetings[3];
    }
    return greeting;
}

function checkingValidity() {
    if (!chatInput.checkValidity()) {
        chatInput.classList.add('invalid');
        messageError.classList.add('error_active');
        chatInput.removeEventListener('keydown', sentMessage);
        return;
    } else {
        messageError.classList.remove('error_active');
        chatInput.classList.remove('invalid');
        chatInput.addEventListener('keydown', sentMessage);
    }
}


