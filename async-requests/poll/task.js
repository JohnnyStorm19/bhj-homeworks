const pollTitle = document.querySelector('.poll__title');
const pollAnswersBlock = document.getElementById('poll__answers');
const voteResults = document.querySelector('.vote-results');

//Запуск опроса
let xhr = new XMLHttpRequest();
let requestURL = 'https://students.netoservices.ru/nestjs-backend/poll';
xhr.open('GET', requestURL);
xhr.responseType = 'json'
xhr.addEventListener('load', () => {
    let answers = xhr.response.data.answers;
    let title = xhr.response.data.title;

    for (let i = 0; i < answers.length; i++) {
        pollTitle.innerHTML = title;
        pollAnswersBlock.innerHTML +=
            `<button class="poll__answer">${answers[i]}</button>`;
    }
    pollAnswersBlock.addEventListener('click', (event) => {
        let target = event.target;
        if (target.classList.contains('poll__answer')) {
            let answerText = target.textContent.trim();
            let answerIndex = answers.indexOf(answerText);
            let voteId = xhr.response.id;
            alert('Спасибо, ваш голос засчитан!');
            revealTheTruth(voteId, answerIndex);
        }
    })
})
xhr.send()

//функция для итогов опроса
function revealTheTruth(id, iAnswer) {
    const mainPoll = document.querySelector('.poll');
    mainPoll.style.display = 'none'; //скрываем голосование
    let xhr = new XMLHttpRequest();
    let requestURL = 'https://students.netoservices.ru/nestjs-backend/poll';
    xhr.open('POST', requestURL);
    xhr.responseType = 'json';

    xhr.addEventListener('load', () => {
        let resultResponse = xhr.response.stat;
        let numbersOfVotes = resultResponse.map(el => el['votes']); //достаем количество голосов
        let sum = numbersOfVotes.reduce((acc, item) => acc + item, 0);
        let percentagesArr = numbersOfVotes.map(el => +(el / sum * 100).toFixed(2)) //узнаем сколько голосов в %
        for (let i = 0; i < resultResponse.length; i++) {
            voteResults.innerHTML += `<p class="answer-results">${resultResponse[i].answer}:
            <span class="number-results">${percentagesArr[i]}% голосов</span>
            </p>
            `
        }
        voteResults.classList.add('vote-results_active')
    })

    xhr.setRequestHeader('Content-type', 'application/x-www-form-urlencoded')
    xhr.send(`vote=${id}&answer=${iAnswer}`);
}

