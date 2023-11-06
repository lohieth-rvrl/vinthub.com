class buttton{
    $(document).ready(function(){
        $(".btn").click(function(){
            $(this).button('loading');
        });   
    });
}