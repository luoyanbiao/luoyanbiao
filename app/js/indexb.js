var xiaomi =(function(){
    return{
        init(){
            this.event()
        },
        event(){
            var _this = this;
            $(document).ready(function(){
                $(".img02").mouseenter(function(e){
                    e.preventDefault();
                  $(".tip1").show();
                });
                $(".img02").mouseleave(function(e){
                    e.preventDefault();
                  $(".tip1").hide();
                });
                $(".img03").mouseenter(function(e){
                    e.preventDefault();
                  $(".tip2").show();
                });
                $(".img03").mouseleave(function(e){
                    e.preventDefault();
                  $(".tip2").hide();
                });
                $(".img04").mouseenter(function(e){
                    e.preventDefault();
                  $(".tip3").show();
                });
                $(".img04").mouseleave(function(e){
                    e.preventDefault();
                  $(".tip3").hide();
                });
                $(".img05").mouseenter(function(e){
                    e.preventDefault();
                  $(".tip4").show();
                });
                $(".img05").mouseleave(function(e){
                    e.preventDefault();
                  $(".tip4").hide();
                });
                $(".img07").mouseenter(function(e){
                    e.preventDefault();
                  $(".tip5").show();
                });
                $(".img07").mouseleave(function(e){
                    e.preventDefault();
                  $(".tip5").hide();
                });
                $(".img08").mouseenter(function(e){
                    e.preventDefault();
                  $(".tip6").show();
                });
                $(".img08").mouseleave(function(e){
                    e.preventDefault();
                  $(".tip6").hide();
                });
                $(".img09").mouseenter(function(e){
                    e.preventDefault();
                  $(".tip7").show();
                });
                $(".img09").mouseleave(function(e){
                    e.preventDefault();
                  $(".tip7").hide();

                });
                $('li').mouseenter(function(e){
                    e.preventDefault();
                    $(this).css('top','-2px')
                    $(this).css('box-shadow',"3px 3px 3px #392f2d")
                });
                $('li').mouseleave(function(e){
                    e.preventDefault();
                    $(this).css('top','2px')
                    $(this).css('box-shadow',"0px 0px 0px #fefefe")
                });
                

              });
        }
    }
}())
xiaomi.init();