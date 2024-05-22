document.addEventListener('DOMContentLoaded', function () {
    var ourQuality = document.getElementById('resize');

    function toggleContainerClass() {
        if (window.innerWidth <= 370) {
            // hoặc bất kỳ kích thước breakpoint sm nào khác
            ourQuality.classList.remove('container');
            ourQuality.classList.add('container-fluid');
        } else {
            ourQuality.classList.remove('container-fluid');
            ourQuality.classList.add('container');
        }
    }

    // Gọi hàm toggleContainerClass khi trang được tải lần đầu
    toggleContainerClass();

    // Gọi hàm toggleContainerClass khi cửa sổ trình duyệt được resize
    window.addEventListener('resize', toggleContainerClass);
});

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
