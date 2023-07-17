const characters = document.querySelectorAll('.character');

characters.forEach((character) => {

    character.addEventListener('mouseenter', () => {

        if (window.innerWidth < 450) {
            window.scrollTo({ top: 0, behavior: 'smooth' });
        }

        removingSelectedCharacter();

        character.classList.add('selected');

        changingSelectedCharacterImage(character);


        changingCharacterInformation(character);

    })
})

function changingCharacterInformation(character) {
    const charactersName = document.getElementById('character-name');
    charactersName.innerText = character.getAttribute('data-name');

    const charactersDescription = document.getElementById('character-description');
    charactersDescription.innerText = character.getAttribute('data-description');
}

function changingSelectedCharacterImage(character) {
    const bigCharacterImage = document.querySelector('.big-character');

    const characterId = character.attributes.id.value;

    bigCharacterImage.src = `./src/image/card-${characterId}.png`;
}

function removingSelectedCharacter() {
    const selectedCharacter = document.querySelector('.selected');
    selectedCharacter.classList.remove('selected');
}
