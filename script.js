$(".txtb").on("keyup", function(e){
    if(e.keyCode == 13 && $(".txtb").val() != ""){
        let task = $("<div class='task'></div>").text($(".txtb").val());
        // delet list
        let del = $('<i class="icon-trash"></i>').click(function(){
            let  p = $(this).parent();
            p.fadeOut(function(){
                p.remove();
            })
        }) ;
        // check list and into completed section
        let chk = $('<i class="icon-check-sign"></i>').click(function(){
            let p = $(this).parent();
            p.fadeOut(function(){
                $(".comp").append(p);
                p.fadeIn();
            });
            $(this).remove();
        });
        task.append(del,chk);
        $(".notcomp").append(task);
        $(".txtb").val("");
        $('.empt').hide();

    }else{
    //   alert('Please enter list')
    }
});