const imageContainer = document.getElementById('imageContainer');
imageContainer.addEventListener('click', function() {
    const destinationLink = document.getElementById('destinationLink').href;
    window.open(destinationLink, '_blank');
});