function loadingBar(progress) {
    if (progress < 0 || progress > 100 || progress % 10 !== 0) {
        console.log("Invalid input. Please provide a number between 0 and 100, divisible by 10.");
        return;
    }

    let percentage = progress;
    let barLength = progress / 10;
    let percentTags = '%'.repeat(barLength);
    let dots = '.'.repeat(10 - barLength);

    if (progress === 100) {
        console.log(`${percentage}% Complete!`);
        console.log(`[${'%'.repeat(10)}]`);
    } else {
        console.log(`${percentage}% [${percentTags}${dots}]`);
        console.log('Still loading...');
    }
}

loadingBar(50);
// loadingBar(100);