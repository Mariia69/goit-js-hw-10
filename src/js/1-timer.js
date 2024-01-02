import flatpickr from 'flatpickr';
import 'flatpickr/dist/flatpickr.min.css';

const options = {
  enableTime: true,
  time_24hr: true,
  defaultDate: new Date(),
  minuteIncrement: 1,
  onClose(selectedDates) {
    const userSelectedDate = selectedDates[0];

    if (userSelectedDate > new Date()) {
      document.querySelector('[data-start]').removeAttribute('disabled');
    } else {
      window.alert('Please choose a date in the future');
      document.querySelector('[data-start]').setAttribute('disabled', true);
    }
  },
};

flatpickr('#datetime-picker', options);

let countdownInterval;

document.querySelector('[data-start]').addEventListener('click', () => {
  const userSelectedDate = new Date(
    document.querySelector('#datetime-picker').value
  );
  const currentDate = new Date();
  const timeDifference = userSelectedDate - currentDate;

  if (timeDifference > 0) {
    startCountdown(timeDifference);
    document.querySelector('[data-start]').setAttribute('disabled', true);
  }
});

function startCountdown(timeDifference) {
  countdownInterval = setInterval(() => {
    const { days, hours, minutes, seconds } = convertMs(timeDifference);

    document.querySelector('[data-days]').innerText = addZero(days);
    document.querySelector('[data-hours]').innerText = addZero(hours);
    document.querySelector('[data-minutes]').innerText = addZero(minutes);
    document.querySelector('[data-seconds]').innerText = addZero(seconds);

    timeDifference -= 1000;

    if (timeDifference < 0) {
      clearInterval(countdownInterval);
      resetTimer();
      window.alert('Countdown finished!');
    }
  }, 1000);
}

function resetTimer() {
  document.querySelector('[data-days]').innerText = '00';
  document.querySelector('[data-hours]').innerText = '00';
  document.querySelector('[data-minutes]').innerText = '00';
  document.querySelector('[data-seconds]').innerText = '00';
}

function convertMs(ms) {
  const second = 1000;
  const minute = second * 60;
  const hour = minute * 60;
  const day = hour * 24;

  const days = Math.floor(ms / day);
  const hours = Math.floor((ms % day) / hour);
  const minutes = Math.floor(((ms % day) % hour) / minute);
  const seconds = Math.floor((((ms % day) % hour) % minute) / second);

  return { days, hours, minutes, seconds };
}

function addZero(value) {
  return value < 10 ? `0${value}` : value;
}