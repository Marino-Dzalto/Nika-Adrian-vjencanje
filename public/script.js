const btn = document.getElementById('button');
const optionButtons = document.querySelectorAll('.option-btn');
const additionalMessageInput = document.getElementById('additional_message');

let selectedOptions = [];

optionButtons.forEach((button) => {
  button.addEventListener('click', function () {
    const option = this.getAttribute('data-option');
    const index = selectedOptions.indexOf(option);

    if (index === -1) {
      selectedOptions.push(option);
      this.classList.add('selected');
    } else {
      selectedOptions.splice(index, 1);
      this.classList.remove('selected');
    }

    alert(`Selected options: ${selectedOptions.join(', ')}`);
  });
});

document.getElementById('form').addEventListener('submit', function (event) {
  event.preventDefault();

  // You can remove the check for nameInput.value if not required
  // if (!selectedOptions.length === 0) {
  if (selectedOptions.length === 0) {
    alert('Molim odaberite barem jednu opciju.');
    return;
  }

  btn.value = 'Slanje...';

  const serviceID = 'default_service';
  const templateID = 'template_m1saikj';

  let message = 'Potvrda dolaska: ';

  if (selectedOptions.length === 1) {
    if (selectedOptions[0] === 'dolazak') {
      message += 'Dolazak u crkvu.';
    } else if (selectedOptions[0] === 'vege') {
      message += 'Vege menu.';
    } else if (selectedOptions[0] === 'lauba') {
      message += 'Dolazak u Laubu.';
    }
  } else {
    message += selectedOptions.map((option) => {
      if (option === 'dolazak') {
        return 'dolazak u crkvu';
      } else if (option === 'vege') {
        return 'vege menu';
      } else if (option === 'lauba') {
        return 'dolazak u Laubu';
      }
    }).join(' i ') + '.';
  }

  message += '\n' + additionalMessageInput.value;

  const emailParams = {
    message: message,
    reply_to: 'nika.adrian.vjenacnje@gmail.com',
  };

  emailjs.send(serviceID, templateID, emailParams)
    .then(() => {
      btn.value = 'Send Email';
      alert('Zahvaljujemo na potvrdi dolaska, veselimo se što će te uveličati naš dan.');
    })
    .catch((err) => {
      btn.value = 'Send Email';
      alert(JSON.stringify(err));
    });
});
