function drawMountain(valleyWidth, peakHeight) {
    let mountain = '';
    for (let i = 0; i < peakHeight; i++) {
        let spaces = ' '.repeat(peakHeight - i);
        let peaks = '*'.repeat(2 * i + 1);
        mountain += spaces + peaks + spaces + '\n';
    }
    let valley = '='.repeat(valleyWidth);
    return mountain + valley;
}

function animateTrain(valleyWidth, peakHeight) {
    const train = '🚂';
    const trainLength = 5;
    const animationFrames = 10;
    const animationDelay = 200;

    let mountainValley = drawMountain(valleyWidth, peakHeight);
    let trainPosition = 0;

    function animate() {
        for (let i = 0; i < animationFrames; i++) {
            setTimeout(() => {
                console.clear();
                console.log(mountainValley);
                console.log(' '.repeat(trainPosition) + train);
                trainPosition += trainLength;
                if (trainPosition > valleyWidth) {
                    trainPosition = 0;
                }
            }, i * animationDelay);
        }
    }

    animate();
}

// 调用函数开始动画
animateTrain(30, 5);
