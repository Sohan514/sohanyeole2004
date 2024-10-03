const goToSignInBtn = document.getElementById('goToSignInBtn');
const goToSignUpBtn = document.getElementById('goToSignUpBtn');
const signInBtn = document.getElementById('signInBtn');
const getStartedBtn = document.getElementById('getStartedBtn');
const jsLesson = document.getElementById('jsLesson');
const runCodeBtn = document.getElementById('runCodeBtn');
const nextBtn = document.getElementById('nextBtn');
const output = document.getElementById('output');

const page1 = document.getElementById('page1');
const page2 = document.getElementById('page2');
const page3 = document.getElementById('page3');
const page4 = document.getElementById('page4');
const page5 = document.getElementById('page5');

function showPage(pageToShow) {
    document.querySelectorAll('.page').forEach(page => {
        page.classList.remove('active');
    });
    pageToShow.classList.add('active');
}

goToSignInBtn.addEventListener('click', () => {
    showPage(page2); 
});

signInBtn.addEventListener('click', () => {
    showPage(page3); 
});

getStartedBtn.addEventListener('click', () => {
    showPage(page4); 
});

jsLesson.addEventListener('click', () => {
    showPage(page5); 
});

runCodeBtnone.addEventListener('click', () => {
    const result = "hello";
    output.textContent = result;
});

nextBtn.addEventListener('click', () => {
    showPage(page6);
});

runCodeBtntwo.addEventListener('click', () => {
    const result = "hello World";
    outputagain.textContent = result;
});

FinishBtn.addEventListener('click', () => {
    alert('Quiz Completed!');
});

showPage(page1);
