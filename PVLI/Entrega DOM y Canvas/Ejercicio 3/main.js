var party = [
    {name: 'Rayvana', id: 'rayvana'},
    {name: 'Anquises', id: 'anquises'},
    {name: 'Kidas', id: 'kidas'},
    {name: 'Finnhofalho', id: 'finn'},
    {name: 'Kilrogg', id: 'kiko'},
    {name: 'Kime', id: 'kime'}
];

window.onload = function () {
    var list = document.getElementById('party-members');
    party.forEach(function (character) {
        var li = document.createElement('li');
        li.innerHTML = character.name + ' (<code>' + character.id + '</code>)';
        li.dataset.charaid = character.id;
        list.appendChild(li);
    });

        var select = document.querySelector('select[name=admuf]');
    party.forEach(function (character) {
        var option = document.createElement('option');
        option.innerHTML = character.name;
        option.value = character.id;
        select.appendChild(option);
    });

    var form = document.querySelector('form[name=bardoma-machine]');
    form.addEventListener('submit', function (event) {
        event.preventDefault();
        var charaID = form.querySelector('[name=admuf]').value;
        var li = list.querySelector('[data-charaid=' + charaID + ']');
        li.classList.add('enbardomado');
    });
};





