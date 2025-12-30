// 프로그레스
let progressMove = document.getElementById("progressMove");
let progressBtnPrev = document.getElementById("progressBtnPrev");
let progressBtnNext = document.getElementById("progressBtnNext");
let progressNum = document.getElementById("progressNum");

progressMove.style.transition = "transform 0.2s ease-in-out"

let currentProgressX = 0;
let currentProgressNum = 3;

progressBtnNext.addEventListener("click", (e) => {
    e.preventDefault();
    // 1회 클릭당 translateX 값이 220px 증가
    const progressStep = 220;
    const progressStepMax = 1100;
    currentProgressX += progressStep;
    // 1회 클릭당 번호 3 증가
    const progressNumStep = 3;
    currentProgressNum += progressNumStep;



    // 누적px이 1100px을 넘으면 0으로 리셋
    if (currentProgressX > progressStepMax) {
        currentProgressX = 0;
    };

    progressMove.style.transform = `translateX(${currentProgressX}px)`;

    if (currentProgressNum > 18) {
        currentProgressNum = 3;
    };
    progressNum.innerText = currentProgressNum;
});

progressBtnPrev.addEventListener("click", (e) => {
    e.preventDefault();
    // 1회 클릭당 translateX 값이 220px 감소
    const progressStep = -220;
    const progressStepMin = 0;
    currentProgressX += progressStep;
    // 1회 클릭당 번호 3 감소
    const progressNumStep = 3;
    currentProgressNum -= progressNumStep;



    // 누적px이 0px보다 낮으면 1100으로 리셋
    if (currentProgressX < progressStepMin) {
        currentProgressX = 1100;
    }

    progressMove.style.transform = `translateX(${currentProgressX}px)`;

<<<<<<< HEAD
    if (currentProgressNum < 4) {
        currentProgressNum = 24;
=======
    if (currentProgressNum <= 0) {
        currentProgressNum = 18;
>>>>>>> 9247c7f8fb31083f41bd13cc5e1b9f2b439ecd85
    }

    progressNum.innerText = currentProgressNum;
});