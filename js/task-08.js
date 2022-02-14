const form = document.querySelector('.login-form');

form.addEventListener('submit', handleSubmit);

function handleSubmit(event) {
  event.preventDefault();

  const {
    elements: { email, password },
  } = event.currentTarget;

  if (email.value === '' || password.value === '') {
    alert('Please fill the requried fields');
  } else {
    const formData = { Email: email.value, Password: password.value };
    console.log(formData);
  }
  event.currentTarget.reset();
}
