let savedPassword = 'test';

function checkPassword() {
  const password = document.getElementById('password').value;
  const error = document.getElementById('error-message');
  const success = document.getElementById('success-message');

  if (password === savedPassword) {
    error.style.display = 'none';
    success.style.display = 'block';
  } else {
    success.style.display = 'none';
    error.style.display = 'block';
  }
}

function updatePassword() {
  const newPassword = document.getElementById('newPassword').value;
  if (newPassword.length > 0) {
    savedPassword = newPassword;
    document.getElementById('password-updated').style.display = 'block';
  }
}

function toggleMenu() {
  document.getElementById('menu').classList.toggle('show');
}
