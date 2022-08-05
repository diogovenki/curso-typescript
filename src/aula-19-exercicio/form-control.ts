import isEmail from 'validator/lib/isEmail';

const SHOW_ERROR_MESSAGE_CLASSNAME = 'show-error-message';
const ERROR_MESSAGE_CLASSNAME = 'error-message';

const $form = document.querySelector('#form') as HTMLFormElement;
const $username = document.querySelector('#username') as HTMLInputElement;
const $email = document.querySelector('#email') as HTMLInputElement;
const $password = document.querySelector('#password') as HTMLInputElement;
const $password2 = document.querySelector('#password2') as HTMLInputElement;

$form.addEventListener('submit', (e) => {
    e.preventDefault();
    hideErrorMessages($form);
    checkForEmptyFields($username, $email, $password, $password2);
    checkEmail($email);
    checkEqualsPassword($password, $password2);
    if (shouldSendForm($form)) console.log('Enviado!');
});

function checkForEmptyFields(...inputs: HTMLInputElement[]): void {
    inputs.forEach((input) => {
        if (input.value === '')
            showErrorMessage(input, 'Campo não pode ficar vazio.');
    });
}

function checkEmail(input: HTMLInputElement): void {
    if (!isEmail(input.value)) showErrorMessage(input, 'Email inválido');
}

function hideErrorMessages(form: HTMLFormElement): void {
    form.querySelectorAll('.' + SHOW_ERROR_MESSAGE_CLASSNAME).forEach((item) =>
        item.classList.remove(SHOW_ERROR_MESSAGE_CLASSNAME),
    );
}

function showErrorMessage(input: HTMLInputElement, message: string): void {
    const $form_fields = input.parentElement as HTMLDivElement;
    const $error_message = $form_fields.querySelector(
        '.' + ERROR_MESSAGE_CLASSNAME,
    ) as HTMLSpanElement;

    $error_message.innerText = message;
    $form_fields.classList.add(SHOW_ERROR_MESSAGE_CLASSNAME);
}

function checkEqualsPassword(
    $password: HTMLInputElement,
    $password2: HTMLInputElement,
): void {
    if ($password.value === $password2.value) return;

    console.log($password, $password2);
    showErrorMessage($password, 'Senhas não batem');
    showErrorMessage($password2, 'Senhas não batem');
}

function shouldSendForm(form: HTMLFormElement): boolean {
    if (form.querySelector('.' + SHOW_ERROR_MESSAGE_CLASSNAME)) return false;
    return true;
}
