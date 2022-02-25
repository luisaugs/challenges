const input = document.querySelector('#email')
const check = document.querySelector('#check')

//reg exp check email
const reg = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/

input.addEventListener('keyup', (e) => {

    const textInput = input.value.trim()
    const isEmail = checkEmail(textInput)
    console.log(textInput, isEmail, "😎😎😎😎😎😎")
    if (isEmail) {
        input.classList.add('green')
        check.classList.add('green')
    } else {
        input.classList.remove('green')
        check.classList.remove('green')
    }
})

const checkEmail = (text) => {
    if (reg.test(text)) {
        return true
    } else {
        return false
    }
}
