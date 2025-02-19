gsap.from(".left", { x: "-100%", opacity: 0, duration: 1, ease: "power3.out" });
gsap.from(".right", { x: "100%", opacity: 0, duration: 1, ease: "power3.out", delay: 0.3 });




new fullpage('#fullpage', {
    autoScrolling: true,
    scrollHorizontally: false,
    afterLoad: function (origin, destination) {
        // Убираем класс 'active' с всех ссылок
        document.querySelectorAll('.header__menu-link').forEach(link => {
            link.classList.remove('active');
        });

        // Добавляем класс 'active' к нужной ссылке
        const activeLink = document.querySelectorAll('.header__menu-link')[destination.index];
        if (activeLink) {
            activeLink.classList.add('active');
        }
    }
});

