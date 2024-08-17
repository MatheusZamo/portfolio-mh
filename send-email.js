const form = document.querySelector('form')
const p = document.createElement('p')

const showMessage = message => {
    form.insertAdjacentElement('afterend',p)
    p.classList.add('text-primary','text-center','fs-3','mt-3')
    p.textContent = message
    return p
}

const init = () => emailjs.init({publicKey: "6Wj3ENNlb9q4GlB06"})

const sendEmail = e => {
    e.preventDefault()

    const name = DOMPurify.sanitize(e.target.name.value)
    const whatsapp = DOMPurify.sanitize(e.target.whatsapp.value)
    const email = DOMPurify.sanitize(e.target.email.value)
    const message = DOMPurify.sanitize(e.target.message.value)
    const params = {name, whatsapp, email, message}
    
    emailjs.send('service_mo1av64', 'template_vziojmd', params)
        .then(() => showMessage('Mensagem enviada !'))
        .catch(()  => showMessage('Problemas ao enviar mensagem !'))
    
    e.target.reset()
}

init()

form.addEventListener('submit',sendEmail)
