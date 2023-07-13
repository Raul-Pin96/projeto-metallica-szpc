const discografia = document.querySelectorAll('.album');

discografia.forEach((disco) => {

    disco.addEventListener('mouseenter', () => {

        if (window.innerWidth < 450) {
            window.scrollTo({ top: 0, behavior: 'smooth' });
        }

        const discoSelecionado = document.querySelector('.selecionado');
        discoSelecionado.classList.remove('selecionado');

        disco.classList.add('selecionado');


        const albumGrande = document.getElementById('album-grande');
        const idAlbum = disco.attributes.id.value;
        albumGrande.src = `./src/imagens/capa-${idAlbum}-media.jpg`;


        const tituloAlbumGrande = document.getElementById('nome-album');
        tituloAlbumGrande.innerText = disco.getAttribute('data-name');


        const descricaoAlbumGrande = document.getElementById('descricao-album');
        descricaoAlbumGrande.innerText = disco.getAttribute('data-description');
    });
});