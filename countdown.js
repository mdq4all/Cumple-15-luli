const getRemainTime = deadLine => {
    let now = new Date(),
        remainTime = (new Date(deadLine) - now +1000) / 1000,
        remainSeconds = ("0" + Math.floor(remainTime % 60)).slice(-2),
        remainMinutes = ("0" + Math.floor(remainTime / 60 % 60)).slice(-2),
        remainHours = ("0" + Math.floor(remainTime / 3600 % 60)).slice(-2),
        remainDays = Math.floor(remainTime / (3600 * 24));
    return {
        remainTime,
        remainSeconds,
        remainMinutes,
        remainHours,
        remainDays
    }
};

const countdown = (deadLine, elem, message) => {

    const timerUpdate = setInterval(() => {
        let time = getRemainTime(deadLine);
        elem.innerHTML = `<div class="date_container">
                            <span>${time.remainDays}</span>
                            <span>dias,</span>
                          </div>
                          <div class="date_container">
                            <span>${time.remainHours}</span>
                            <span>horas,</span>
                          </div>
                          <div class="date_container">
                            <span>${time.remainMinutes}</span>
                            <span>m,</span>
                          </div>
                          <div class="date_container">
                            <span>${time.remainSeconds}</span>
                            <span>s</span>
                          </div>
                        `;
        if (time.remainTime <= 1) {
            clearInterval(timerUpdate);
            elem.innerHTML = message;
        };
    }, 1000);
}
export default countdown;