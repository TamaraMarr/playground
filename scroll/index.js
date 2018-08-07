(function () {
    var scrollContainer = document.querySelector('.scrollable');
    var scrollContent = document.querySelector('.scroll-content');
    var scrollBar = document.querySelector('.scroll');

    scrollBar.style.height = calculateScrollerHeight() + 'px';

    function moveScroller(event) {
        var maxScrollPosition = scrollContainer.scrollHeight - scrollBar.offsetHeight - 10;

        if (event.target.scrollTop <= maxScrollPosition) {
            var hi = event.target.scrollTop + event.target.scrollTop + 10 + 'px';
            scrollBar.style.top = hi;
            // console.log('hi', hi);
        } else {
            var hello = scrollContent - event.target.scrollTop + 'px';
            scrollBar.style.top = hello;
            // console.log('hello', hello);
        }
    }

    function calculateScrollerHeight() {
        var visibleRatio = scrollContainer.offsetHeight / scrollContent.scrollHeight;
        return visibleRatio * scrollContainer.offsetHeight;
    }

    scrollContainer.addEventListener('scroll', moveScroller);
})();