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
            heighTotal = (heighTotal + ($(id).outerHeight() + $(contentBlock).outerHeight(true)));
            window.scrollTo({
                top: (heighTotal),
                behavior: 'smooth'
            });
//            console.log("Add: "+ heighTotal);
        });
    }
    if(count%2 == 1){
        heighTotal = (heighTotal + ($(id).outerHeight() + $(contentBlock).outerHeight(true)));
        sectionsActive.pop();
        $(id).slideUp("slow");
//       console.log("Sub: "+heighTotal);
        
    }
//    console.log("End: "+heighTotal);
    count++;
    console.log(count);
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
var countEducation = 0;
function showEducation(){
    countEducation = showJqurey("#education","#educationContentBlock",countEducation);
}

var countAbout = 0;
function showAbout(){
    countAbout = showJqurey("#about","#aboutContentBlock",countAbout);
}