window.addEventListener('scroll', function () {
    var navbar = document.querySelector('.navbar');
    var navLinks = document.querySelectorAll('.navbar-nav a'); // Chọn tất cả các thẻ a trong navbar-nav

    if (window.scrollY > 50) {
        // Đặt ngưỡng để thay đổi màu nền
        navbar.style.backgroundColor = 'rgba(51, 51, 51, 0.7)'; // Màu nền mờ mờ
        navLinks.forEach(function (link) {
            link.style.color = '#fff'; // Màu chữ trắng cho tất cả các liên kết
        });
    } else {
        navbar.style.backgroundColor = 'transparent'; // Màu nền ban đầu
        navLinks.forEach(function (link) {
            link.style.color = '#000'; // Màu chữ ban đầu cho tất cả các liên kết
        });
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
