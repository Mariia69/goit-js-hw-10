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
