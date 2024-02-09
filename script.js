document.getElementById('yes').addEventListener('click', function () {
    showResponse(true);
});

document.getElementById('no').addEventListener('click', function () {
    showResponse(false);
});

function showResponse(isYes) {
    const responseContainer = document.getElementById('response-container');
    const proposalContainer = document.querySelector('.proposal-container');
    const optionYes = document.getElementById('yes');
    const optionNo = document.getElementById('no');

    proposalContainer.style.display = 'none';
    responseContainer.style.display = 'flex';

    if (isYes) {
        responseContainer.innerHTML = '<p>Yippee! Thank you very much. Let\'s do it.</p>';
        // Add cute teddy animation with heart shape
    } else {
        optionYes.style.transform = 'scale(1.5)';
        optionNo.innerText = 'Are you sure?';
        responseContainer.innerHTML = '<p>Think again...</p>';
        // Add cute teddy animation with pleading eyes
    }
}
