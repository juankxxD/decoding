$cifrar = document.getElementById('cifrar');
$decifrar = document.getElementById('decifrar');
$textInput = document.getElementById('text');
$result = document.getElementById('response');
$copiar = document.getElementById('copiar');
$getInput = document.querySelector('.msg-get-input')

$cifrar.onclick = (() => {
    let cifrado;
    const regex = /[A-Z]|[-ÿ\u00f1\u00d1]|[!"#$%&'()*+,\-./:;<=>?@[\\\]^_`{|}~]/g;
    let workCorrect = $textInput.value.match(regex) ? false : true;
    if(!workCorrect) alert('no se puede tener mayusculas o caracteres especiales');
    else {
        hidenGetInput();
        cifrado = $textInput.value.replaceAll('e', 'enter');
        cifrado = cifrado.replaceAll('i', 'imes');
        cifrado = cifrado.replaceAll('a', 'ai');
        cifrado = cifrado.replaceAll('o', 'ober');
        cifrado = cifrado.replaceAll('u', 'ufat');
        $result.value = cifrado;
    }
});

$decifrar.onclick = (() => {
    let decifrado;
    const regex = /[A-Z]|[-ÿ\u00f1\u00d1]|[!"#$%&'()*+,\-./:;<=>?@[\\\]^_`{|}~]/g;
    let workCorrect = $textInput.value.match(regex) ? false : true;
    if(!workCorrect) alert('no se puede tener mayusculas o caracteres especiales');
    else {
        decifrado = $textInput.value.replaceAll('enter', 'e');
        decifrado = decifrado.replaceAll('imes', 'i');
        decifrado = decifrado.replaceAll('ai', 'a');
        decifrado = decifrado.replaceAll('ober', 'o');
        decifrado = decifrado.replaceAll('ufat', 'u');
        $result.value = decifrado;
    }
})

$copiar.onclick = (() => {
    $result.select();
    document.execCommand("copy");
})

function hidenGetInput() {
    $getInput.className = 'hiddenDiv';
    const $showResponse = document.querySelectorAll('.hidden');
    $showResponse.forEach((element) => element.classList.remove('hidden'))
}