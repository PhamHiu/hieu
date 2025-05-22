document.addEventListener('DOMContentLoaded', function() {
    console.log("Học Liệu Rồng - Trang web đã tải xong!");

    // Ví dụ: Thêm hiệu ứng đơn giản cho thẻ khóa học khi hover (nếu không dùng CSS :hover)
    const courseCards = document.querySelectorAll('.course-card');
    courseCards.forEach(card => {
        card.addEventListener('mouseenter', function() {
            // this.style.transform = 'scale(1.03)'; // CSS đã xử lý tốt hơn
        });
        card.addEventListener('mouseleave', function() {
            // this.style.transform = 'scale(1)';
        });
    });

    // Ví dụ: Xử lý click nút "Xem ngay" trên banner khuyến mãi
    const promoButton = document.querySelector('.top-promo-banner button');
    if (promoButton) {
        promoButton.addEventListener('click', function() {
            alert('Bạn đã nhấp vào nút "Xem ngay"! Chuyển đến trang ưu đãi...');
            // window.location.href = '/trang-uu-dai'; // Chuyển hướng thực tế
        });
    }

    // Thêm các chức năng JavaScript khác tại đây
    // Ví dụ:
    // - Tải động danh sách khóa học
    // - Xử lý form đăng nhập/đăng ký
    // - Slider cho banner quảng cáo
    // - Tương tác với menu
});