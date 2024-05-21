document.addEventListener('DOMContentLoaded', function () {
    var ourQuality = document.getElementById('resize');

    function toggleContainerClass() {
        if (window.innerWidth <= 800) {
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
