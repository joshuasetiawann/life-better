document.addEventListener('DOMContentLoaded', () => {
    const elements = {
        rleaf: document.getElementById('rleaf'),
        lleaf: document.getElementById('lleaf'),
        lcloud: document.getElementById('lcloud'),
        rcloud: document.getElementById('rcloud'),
        lbush1: document.getElementById('lbush1'),
        lbush2: document.getElementById('lbush2'),
        lbush3: document.getElementById('lbush3'),
        lbush4: document.getElementById('lbush4'),
        forest: document.getElementById('forest'),
        rbush1: document.getElementById('rbush1'),
        rbush2: document.getElementById('rbush2'),
        rbush3: document.getElementById('rbush3'),
        rbush4: document.getElementById('rbush4'),
    };

    let lastScrollY = 0;
    let currentScrollY = 0;
    const ease = 0.1; // Lower value = smoother animations

    function lerp(start, end, t) {
        return start + (end - start) * t;
    }

    function animateParallax() {
        currentScrollY = lerp(currentScrollY, lastScrollY, ease);

        if (elements.forest) elements.forest.style.transform = translateY(${currentScrollY * 0.5}px);

        if (elements.lcloud) elements.lcloud.style.transform = translateX(${-currentScrollY * 0.5}px);
        if (elements.rcloud) elements.rcloud.style.transform = translateX(${currentScrollY * 0.5}px);

        if (elements.lleaf) elements.lleaf.style.transform = translateY(${currentScrollY * 1.5}px);
        if (elements.rleaf) elements.rleaf.style.transform = translateY(${-currentScrollY * 1.5}px);

        if (elements.lbush1) elements.lbush1.style.transform = translateX(${-currentScrollY * 0.7}px);
        if (elements.lbush2) elements.lbush2.style.transform = translateX(${currentScrollY * 0.7}px);
        if (elements.lbush3) elements.lbush3.style.transform = translateX(${-currentScrollY * 0.5}px);
        if (elements.lbush4) elements.lbush4.style.transform = translateX(${currentScrollY * 0.5}px);

        if (elements.rbush1) elements.rbush1.style.transform = translateX(${currentScrollY * 0.7}px);
        if (elements.rbush2) elements.rbush2.style.transform = translateX(${-currentScrollY * 0.7}px);
        if (elements.rbush3) elements.rbush3.style.transform = translateX(${currentScrollY * 0.5}px);
        if (elements.rbush4) elements.rbush4.style.transform = translateX(${-currentScrollY * 0.5}px);

        requestAnimationFrame(animateParallax);
    }

    window.addEventListener('scroll', () => {
        lastScrollY = window.scrollY;
    });

    animateParallax();
});

// $('.portfolio-item').isotope({
        //  	itemSelector: '.item',
        //  	layoutMode: 'fitRows'
        //  });
        $('.portfolio-menu ul li').click(function(){
            $('.portfolio-menu ul li').removeClass('active');
            $(this).addClass('active');
            
            var selector = $(this).attr('data-filter');
            $('.portfolio-item').isotope({
                filter:selector
            });
            return  false;
        });
        $(document).ready(function() {
        var popup_btn = $('.popup-btn');
        popup_btn.magnificPopup({
        type : 'image',
        gallery : {
            enabled : true
        }
        });
        });