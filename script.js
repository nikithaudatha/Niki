let responseCount = 1;
document.getElementById('yes').addEventListener('click', function () {
    showResponse(true);
    animateTeddy();
});

document.getElementById('no').addEventListener('click', function () {
    showResponse(false);
});

function showResponse(isYes) {
    const questionText = document.getElementById('question-text');
    const teddyContainer = document.getElementById('teddy-container');
    const yesOption = document.getElementById('yes');

    const noText = getNoText(responseCount);

    if (isYes) {
        questionText.innerText = 'Woah!!! Thankyuuuu...';
        teddyContainer.style.backgroundImage = "url('pics/teddy kiss.png')";
    } else {
        questionText.innerText = noText.text;
        yesOption.classList.add(`increased-size-${responseCount}`);
        teddyContainer.style.backgroundImage = `url('${noText.image}')`;      
    }
    responseCount++;

    const maxResponses = 10; 
    if (responseCount > maxResponses) {
        responseCount = 0; 
        for (let i = 1; i <= maxResponses; i++) {
            yesOption.classList.remove(`increased-size-${i}`);
        }
    }
}

function animateTeddy() {
    const teddyContainer = document.getElementById('teddy-container');

    teddyContainer.classList.add('heart-animation');

    setTimeout(() => {
        teddyContainer.classList.remove('heart-animation');
    }, 2000);
}

function getNoText(count) {
    switch (count) {
        case 1:
            return { text: 'Are you really sure?', image: 'pics/teddy think.jpeg' };
        case 2:
            return { text: 'Any second thoughts?', image: 'pics/teddy cute.jpeg' };
        case 3:
            return { text: 'How about Cute Fights?', image: 'pics/teddy fight.jpeg' };
        case 4:
            return { text: 'How about Cozy Cuddles?', image: 'pics/teddy hug.jpeg' };
        case 5:
            return { text: 'Still No?', image: 'pics/teddy sad.jpeg' };
        case 6:
            return { text: 'Lets Make memories?', image: 'pics/teddy love.jpeg' };
        case 7:
            return { text: 'Its gonna be fun!', image: 'pics/teddyhug.jpeg' };
        case 8:
            return { text: 'Wanna think again?', image: 'pics/teddy2.jpeg' };
        case 9:
            return { text: '100% sure?', image: 'pics/teddy3.jpeg' };
        default:
            return { text: 'Please say yes!', image: 'pics/teddy fight.jpeg' };
    }
}

