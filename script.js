document.addEventListener('DOMContentLoaded', () => {
    const modal = document.getElementById('modal');
    const image = document.querySelector('.displayimg')
    const openModalButton = document.querySelectorAll('.item');
    const thumbnail = document.querySelectorAll('.thumbnail');

    openModalButton.forEach((item) => {
        item.addEventListener('click', () => {
            modal.style.display = 'block';
        });
    })

    thumbnail.forEach((thumbnail) => {
        thumbnail.addEventListener('click', () => {
            image.src = thumbnail.src;
        })
    })

    modal.addEventListener('click', () => {
        modal.style.display = 'none';
    })

    function floatCircle(circle) {
        // get the dimensions of the window
        var windowHeight = window.innerHeight;
        var windowWidth = window.innerWidth;

        // set the maximum x and y positions for the circle
        var maxX = windowWidth - circle.offsetWidth;
        var maxY = windowHeight - circle.offsetHeight;

        // generate random x and y positions for the circle
        var x = Math.floor(Math.random() * maxX);
        var y = Math.floor(Math.random() * maxY);

        // update the position of the circle
        circle.style.left = x + 'px';
        circle.style.top = y + 'px';
    }

    // get the circle element
    var circle = document.querySelector('.circle');

    // call the floatCircle function every second
    setInterval(function () {
        floatCircle(circle);
    }, 1000);


});
