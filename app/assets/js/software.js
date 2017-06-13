$('.viewMoreBonuses').click(function() {
    $('.hide-bonuses').slideToggle('slow');
    $(this).text( $(this).text() == 'show less' ? "show more" : "show less");

});