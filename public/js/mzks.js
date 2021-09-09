(function ($) {
    //   Hide all textareas
    $('.reject_reason_textbox').hide();
    // add events on each select
    $('.reject_reason').each(function () {
        $(this).on('change', (e) => {
            // textarea are one of the siblings for select
            const current_textarea = $(e.currentTarget).siblings().filter('textarea');
            $(e.currentTarget).val() !== '5' ? $(current_textarea).hide() : $(current_textarea).show();
        });
    });

})(jQuery);