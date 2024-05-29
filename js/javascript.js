window.addEventListener('scroll', function () {
    var navbar = document.querySelector('.navbar');
    var navLinks = document.querySelectorAll('.navbar-nav a'); // Chọn tất cả các thẻ a trong navbar-nav

    if (window.scrollY > 50) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
});

// // nut cuon ve dau trang

// window.onscroll = function () {
//     scrollFunction();
// };

// function scrollFunction() {
//     if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
//         document.getElementById('backToTopBtn').style.display = 'block';
//     } else {
//         document.getElementById('backToTopBtn').style.display = 'none';
//     }
// }

// // Cuộn về đầu trang khi người dùng click vào nút
// function backToTop() {
//     document.body.scrollTop = 0; // Dành cho Safari
//     document.documentElement.scrollTop = 0; // Dành cho Chrome, Firefox, IE và Opera
// }
