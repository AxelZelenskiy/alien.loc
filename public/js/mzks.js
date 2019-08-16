console.log('jQuery ', jQuery.fn.jquery);
(function ($) {
    const our_selectors = $('.reject_reason');
//   Hide all textarea
    $('.reject_reason_textbox').hide();

    our_selectors.each(function () {
        $(this).change((e) => {
            const current_textarea = $(e.currentTarget).siblings().filter('textarea');
            $(e.currentTarget).val() !== '5' ? $(current_textarea).hide() : $(current_textarea).show();
        });

    });

})(jQuery);