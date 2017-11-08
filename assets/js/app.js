(function($, window) {
    $('[data-component="tab"]').click(function(e) {
        e.preventDefault();
        $target = $( $(this).attr('href') );
        $target.toggleClass('is-visible')
    });

    $('.lazyload').each(function() {

        var $lazy = $(this);

        var $img = $(new Image())
            .attr('src', $lazy.attr('data-src'))
            .attr('alt', $lazy.attr('title'))
            .on('load', function() {
                $(this).appendTo($lazy).delay(100).queue(function() {
                    $(this).addClass('loaded');
                    $lazy.find('.spinner').remove();
                });
            });
    });

})(jQuery, window);
