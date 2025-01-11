function createSnowflakes() {
    const body = document.querySelector("body");
    const snowflakeCount = 70;

    for (let i = 0; i < snowflakeCount; i++) {
        const snowflake = document.createElement('div');
        snowflake.className = 'snowflake';
        snowflake.style.left = Math.random() * 100 + 'vw';
        snowflake.style.animationDuration = (Math.random() * 3 + 2) + 's';
        snowflake.style.opacity = Math.random();
        snowflake.style.transform = `scale(${Math.random()})`;
        body.appendChild(snowflake);
    }
}

createSnowflakes();
