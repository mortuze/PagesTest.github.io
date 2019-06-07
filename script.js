//var show = 0;
//function showDiv() {
//    if (show%2 == 0){
//        document.getElementById('courses').style.display = "block";
//    }
//    if(show%2 == 1){
//        document.getElementById('courses').style.display = "none";
//        window.scrollTo({top:0, behavior: 'smooth'});
//    }
//    show++;
//}
//var i = 0;
//var y = 0;
//$(document).ready(function(){
//  $("#courseButton").click(function(){
////    $("#courses").slideToggle(1000);
////    $('html, body').animate({
////        scrollTop: 1000
////    }, 5);
//      
////      $("#courses").slideToggle("slow");
////      });
//      if(i%2 == 0){
//        $("#courses").show();
//      }
//      if(i%2 == 1){
//          $("#courses").hide("slow");
//      }
//      i++;
//  });
//    
//    $("#projectButton").click(function(){
////    $("#courses").slideToggle(1000);
////    $('html, body').animate({
////        scrollTop: 1000
////    }, 5);
//      
////      $("#courses").slideToggle("slow");
////      });
//      if(y%2 == 0){
//        $("#projects").show();
//      }
//      if(y%2 == 1){
//          $("#projects").hide("slow");
//      }
//      y++;
//  });
//});

//New Array of size 0
//store the active sections and is used to offset the scroll
var sectionsActive = [];
var heighTotal = 0;
function showJqurey(id,contentBlock,count){
    
    if(count%2 == 0){
        sectionsActive.push(id);
        $(id).slideDown("slow",function(){
            heighTotal = (heighTotal + ($(id).outerHeight(true) + $(contentBlock).outerHeight(true)));
            window.scrollTo({
                top: (heighTotal),
                behavior: 'smooth'
            });
            console.log("id: "+ $(id).outerHeight(true));
            console.log("content: "+ $(contentBlock).outerHeight(true));
            console.log("Add: "+ heighTotal);
        });
        
        
        
    }
    if(count%2 == 1){
        
        sectionsActive.pop();
        $(id).slideUp("slow",function(){
            heighTotal = (heighTotal - ($(id).outerHeight(true) + $(contentBlock).outerHeight(true)));
        });
       console.log("Sub: "+heighTotal);
        
    }
    console.log("End: "+ this.heighTotal);
    count++;
    console.log(count);
    return count;
}

var countJobs = 0;
function showJobs(){
    countJobs = showJqurey("#jobs","#jobsContentBlock",countJobs);
    console.log("minHeight", $('#jobsContentBlock').height());
    var minHeight = $('#jobsContentBlock').outerHeight(true);
    $('.workBlock').css("min-height",minHeight);
}

var countProjects = 0;
function showProjects(){
    countProjects = showJqurey("#projects","#projectsContentBlock",countProjects);
    console.log("minHeight", $('#projectsContentBlock').height());
    var minHeight = $('#projectsContentBlock').outerHeight(true);
    $('.projectBlock').css("min-height",minHeight);
}
var countEducation = 0;
function showEducation(){
    countEducation = showJqurey("#education","#educationContentBlock",countEducation);
    console.log("minHeight", $('#educationContentBlock').height());
    var minHeight = $('#educationContentBlock').outerHeight(true);
    $('.educationBlock').css("min-height",minHeight);
}

var countAbout = 0;
function showAbout(){
    countAbout = showJqurey("#about","#aboutContentBlock",countAbout);
    //console.log("minHeight", $('#aboutContentBlock').height());
    var minHeight = $('#aboutContentBlock').outerHeight(true);
    $('.aboutBlock').css("min-height",minHeight);
}