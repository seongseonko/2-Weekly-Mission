const inputEmail = document.querySelector('#useremail');
const inputPassword = document.querySelector('#password');
const btn = document.querySelector('.login-button');
const eyeBtn = document.querySelector('.eye-button');
let emailValid, passwordValid, checkValid = false;

function enterEmailMessage(e) {
  const emailFormat = /^([0-9a-zA-Z_\.-]+)@([0-9a-zA-Z_-]+)(\.[0-9a-zA-Z_-]+){1,2}$/;

  if (inputEmail.nextSibling.className == 'message') {
    inputEmail.nextSibling.remove();
  }

  if (!inputEmail.value) {
    inputEmail.classList.add('redBox');

    const message = document.createElement('div');
    message.textContent = '이메일을 입력해주세요.'
    message.classList.add('message');
    inputEmail.after(message);
  } else if (inputEmail.value === 'test@codeit.com'){
    emailValid = true;
    inputEmail.classList.remove('redBox');
  } else {
    inputEmail.classList.remove('redBox');
  }
}

function enterPasswordMessage(e) {
  const passwordFormat = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/

  if (inputPassword.nextSibling.className == 'message') {
    inputPassword.nextSibling.remove();
  }

  if (!inputPassword.value) {
    inputPassword.classList.add('redBox');

    const message = document.createElement('div');
    message.textContent = '비밀번호를 입력해주세요.'
    message.classList.add('message');
    inputPassword.after(message);
  } else if (inputPassword.value === 'codeit101'){
    passwordValid = true;
    inputPassword.classList.remove('redBox');
  } else {
    inputPassword.classList.remove('redBox');
  }
}

function enterEmailMessageForBtn(e) {
  const emailFormat = /^([0-9a-zA-Z_\.-]+)@([0-9a-zA-Z_-]+)(\.[0-9a-zA-Z_-]+){1,2}$/;

  if (inputEmail.nextSibling.className == 'message') {
    inputEmail.nextSibling.remove();
  }

  if (!inputEmail.value) {
    inputEmail.classList.add('redBox');

    const message = document.createElement('div');
    message.textContent = '이메일을 입력해주세요.'
    message.classList.add('message');
    inputEmail.after(message);
  } else if (inputPassword.value === 'codeit101' && inputEmail.value === 'test@codeit.com'){
    emailValid = true;
    inputEmail.classList.remove('redBox');
  } else {
    inputEmail.classList.add('redBox');
    inputPassword.classList.add('redBox');

    const message = document.createElement('div');
    message.textContent = '이메일을 확인해주세요.'
    message.classList.add('message');
    inputEmail.after(message);
  }
  
}

function enterPasswordMessageForBtn(e) {
  const passwordFormat = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/

  if (inputPassword.nextSibling.className == 'message') {
    inputPassword.nextSibling.remove();
  }

  if (!inputPassword.value) {
    inputPassword.classList.add('redBox');

    const message = document.createElement('div');
    message.textContent = '비밀번호를 입력해주세요.'
    message.classList.add('message');
    inputPassword.after(message);
  } else if (inputPassword.value === 'codeit101' && inputEmail.value === 'test@codeit.com'){
    passwordValid = true;
    inputPassword.classList.remove('redBox');
  } else {
    inputEmail.classList.add('redBox');
    inputPassword.classList.add('redBox');

    const message = document.createElement('div');
    message.textContent = '비밀번호를 확인해주세요.';
    message.classList.add('message');
    inputPassword.after(message);
  }
}

inputEmail.addEventListener('focusout', enterEmailMessage);
inputPassword.addEventListener('focusout', enterPasswordMessage);
btn.addEventListener('click', function(e) {
  e.preventDefault();
  enterEmailMessageForBtn();
  enterPasswordMessageForBtn();

  if (emailValid && passwordValid) {
    window.open("/folder", "_self");
  }
  emailValid, passwordValid = false;
  
});

function changePasswordVision (e) {
  e.target.classList.toggle('active');
  if (e.target.className.includes('active')) {
    e.target.parentElement.children[1].type = 'text';
  } else {
    e.target.parentElement.children[1].type = 'password';
  }
}

eyeBtn.addEventListener('click', changePasswordVision);