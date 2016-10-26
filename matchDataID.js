<!-- /////     MATCH DATA-ID's     ///// -->

$('.class').on('click', function () {
    var $this = $(this);
    var id = $this.data('id');
    var $matchedClass = $('.matchedClass[data-id=' + id + ']');

    // do something
    $matchedClass.fadeIn();
});