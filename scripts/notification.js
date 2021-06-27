function showRedNotification() {
    $('.notification-red').toggleClass('show');
    setTimeout(function () {
        $('.notification-red').removeClass('show');
    }, 10000);
}