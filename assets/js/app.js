(function($, window) {
    $('[data-component="tab"]').click(function(e) {
        e.preventDefault();
        $target = $( $(this).attr('href') );
        $target.toggleClass('is-visible')
    });
})(jQuery, window);
