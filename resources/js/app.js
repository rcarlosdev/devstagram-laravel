import Dropzone from 'dropzone';

Dropzone.autoDiscover = false;

const dropzone = new Dropzone("#dropzone", {
    dictDefaultMessage: 'Sube aqui tu imagen',
    acceptedFiles: 'image/jpg, image/jpeg, image/png, image/gif',
    addRemoveLinks: true,
    dictRemoveFile: 'Borrar archivo',
    maxFiles: 1,
    uploadMultiple: false,
    init: function () {
        if (!!document.querySelector('[name=imagen]').value.trim()) {
            const imagen_publicada = {};
            imagen_publicada.size = 1024;
            imagen_publicada.name = document.querySelector('[name=imagen]').value;

            this.options.addedfile.call(this, imagen_publicada);
            this.options.thumbnail.call(this, imagen_publicada, `/uploads/${imagen_publicada.name}`);

            imagen_publicada.previewElement.classList.add('dz-success', 'dz-complete');
        }
    }
});

dropzone.on('success', (file, response) => {
    document.querySelector('[name=imagen]').value = response.imagen;
});

dropzone.on('removedfile', () => {
    document.querySelector('[name=imagen]').value = '';
});
