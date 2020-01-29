(() => {

    const siema = new Siema({
        selector: '.carousel',
        duration: 2000,
        easing: 'ease-in',
        perPage: 1,
        startIndex: 0,
        draggable: true,
        multipleDrag: false,
        threshold: 20,
        loop: true,
        rtl: false,
        onInit: () => console.log('OnInit!'),
        onChange: () => console.log('OnChange'),
    });

    const forward = document.getElementById('next');
    forward.addEventListener('click', () => siema.next());

    const backward = document.getElementById('prev');
    backward.addEventListener('click', () => siema.prev())

})()