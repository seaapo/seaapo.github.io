window.onload = () => {
    const menuThank = document.getElementById('menu-thank');
    const menuQuestion = document.getElementById('menu-questionnaire');
    const contentThank = document.getElementById('content-thank');
    const contentQuestion = document.getElementById('content-questionnaire');
    const hintThank = document.getElementById('hint-thank');
    const hintQuestion = document.getElementById('hint-questionnaire');

    menuThank.addEventListener('click', () => {
        console.log('click menu thank');
        menuThank.classList.add('active');
        menuQuestion.classList.remove('active');
        contentThank.classList.remove('hidden');
        contentQuestion.classList.add('hidden');
        hintThank.classList.remove('hidden');
        hintQuestion.classList.add('hidden');
    });

    menuQuestion.addEventListener('click', () => {
        console.log('click menu question');
        menuQuestion.classList.add('active');
        menuThank.classList.remove('active');
        contentThank.classList.add('hidden');
        contentQuestion.classList.remove('hidden');
        hintQuestion.classList.remove('hidden');
        hintThank.classList.add('hidden');
    })
};