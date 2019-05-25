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

function showJqurey(id,contentBlock,count){
    
    if(count%2 == 0){
        sectionsActive.push(id);
        $(id).slideDown("slow",function(){
            window.scrollTo({
                top: (sectionsActive.length*($(id).outerHeight() + $(contentBlock).outerHeight())),
                behavior: 'smooth'
            });
        });
        
    }
    if(count%2 == 1){
        $(id).slideUp("slow");
        sectionsActive.pop();
    }
    console.log(sectionsActive.length);
    count++;
    return count;
}

var countJobs = 0;
function showJobs(){
    countJobs = showJqurey("#jobs","#jobsContentBlock",countJobs);
}

var countProjects = 0;
function showProjects(){
    countProjects = showJqurey("#projects","#projectsContentBlock",countProjects);
}
var countCourses = 0;
function showCourses(){
    countCourses = showJqurey("#courses","#courseContentBlock",countCourses);
}

var countAbout = 0;
function showAbout(){
    countAbout = showJqurey("#about","#aboutContentBlock",countAbout);
}