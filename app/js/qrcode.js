(function(){
    $(document).ready(function(){
        $('.btn-close').on('click', function(){
            $(this).parent().addClass('hide');
        })
        $('.link-terms').on('click', function(){
            $('.details-pop').removeClass('hide');
        })
    });
})();