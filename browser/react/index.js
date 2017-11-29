import Tone from 'tone'

const synth = new Tone.Synth().toMaster()

const keyboard = document.getElementById('keyboard-container')

keyboard.addEventListener("click", (event) => {
    synth.triggerAttackRelease(event.target.id, '8n')
})

const looper = () => {
    let children = [].slice.call(keyboard.childNodes).filter((child) => {
        return child.id
    })
    let counter = 0
    children.forEach((element) => {
        synth.triggerAttackRelease(element.id, '8n', counter)
        counter++
    })
}

looper()