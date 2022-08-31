import app from "./app.js"
import { subscribe_to_hellfire_club } from "./hellfire-club.js"

const txt_name = document.getElementById('txtName')
const txt_email = document.getElementById('txtEmail')
const txt_level = document.getElementById('txtLevel')
const txt_character = document.getElementById('txtCharacter')
const btnSubscribe = document.getElementById('btnSubscribe')
const msg_sucess = document.getElementById('msg_sucess')

btnSubscribe.addEventListener('click', () => {
    const subscription = {
        name: txt_name.value,
        email: txt_email.value,
        level: txt_level.value,
        character: txt_character.value
    }
    //salvar no banco de dados

    const subscription_id = subscribe_to_hellfire_club(subscription)
    console.log(`inscrito com sucesso: ${subscription_id}`)

    txt_name.value = ''
    txt_email.value = ''
    txt_level.value = ''
    txt_character.value = ''
    msg_sucess.innerHTML = '<p>inscrito com sucesso!</p>'
    console.log(msg_sucess)
})

