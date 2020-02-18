//New Array of size 0
//store the active sections and is used to offset the scroll
var sectionsActive = [];
var heighTotal = 0;

function showJqurey(id, contentBlock, count) {

    if (count % 2 == 0) {
        sectionsActive.push(id);
        $(id).slideDown("slow", function () {
            contentHeight = contentHeightCompare(contentBlock);

            heighTotal = (heighTotal + ($(id).outerHeight(true) + contentHeight));
            window.scrollTo({
                top: (heighTotal),
                behavior: 'smooth'
            });
            console.log("id: " + $(id).outerHeight(true));
            console.log("Add: " + heighTotal);
        });



    }
    if (count % 2 == 1) {

        sectionsActive.pop();
        $(id).slideUp("slow", function () {
            contentHeight = contentHeightCompare(contentBlock);
            heighTotal = (heighTotal - ($(id).outerHeight(true) + contentHeight));
        });
        console.log("Sub: " + heighTotal);

    }
    console.log("End: " + this.heighTotal);
    count++;
    console.log(count);
    return count;
}

var countJobs = 0;

function showJobs() {
    var contents = ["#jobsContentBlock1", "#jobsContentBlock2"];
    countJobs = showJqurey("#jobs", contents, countJobs);
    calculateJobHeight();
}

function calculateJobHeight() {
    var contents = ["#jobsContentBlock1", "#jobsContentBlock2"];
    var minHeight = contentHeightCompare(contents);
    $('.workBlock').css("min-height", minHeight);
}

var countProjects = 0;

function showProjects() {
    var contents = ["#projectsContentBlock1", "#projectsContentBlock2"];
    countProjects = showJqurey("#projects", contents, countProjects);
    calculateProjectHeight();
}

function calculateProjectHeight() {
    var contents = ["#projectsContentBlock1", "#projectsContentBlock2"];
    var minHeight = contentHeightCompare(contents);
    $('.workBlock').css("min-height", minHeight);
}
var countEducation = 0;

function showEducation() {
    var contents = ["#educationContentBlock1", "#educationContentBlock2", "#educationContentBlock3"];
    countEducation = showJqurey("#education", contents, countEducation);
    var minHeight = contentHeightCompare(contents);
    console.log("minHeight", minHeight);
    $('.educationBlock').css("min-height", minHeight);
}

var countAbout = 0;

function showAbout() {
    var contents = ["#aboutContentBlock"]
    countAbout = showJqurey("#about", contents, countAbout);
    var minHeight = contentHeightCompare(contents);
    console.log("minHeight", minHeight);
    $('.aboutBlock').css("min-height", minHeight);
}

function contentHeightCompare(contentBlock) {
    var contentHeight = 1000000;
    for (var i = 0; i < contentBlock.length; i++) {
        // this is done as before doing just the height of the content block would result in the UI not scaling down properly with the text 
        // as a result of adding scaling down feature trueblockheight has to be set for each section
        if (contentBlock[i].toString().includes("job")) {
            var trueblockHeight = $(contentBlock[i] + " h2").outerHeight(true) + $(contentBlock[i] + " h3").outerHeight(true) + $(contentBlock[i] + " ul").outerHeight(true) + $(contentBlock[i] + " h5").outerHeight(true);
        } else if (contentBlock[i].toString().includes("projects")) {
            var trueblockHeight = $(contentBlock[i] + " h2").outerHeight(true) + $(contentBlock[i] + " ul").outerHeight(true);
        } else if (contentBlock[i].toString().includes("education")) {
            var trueblockHeight = $(contentBlock[i] + " h2").outerHeight(true) + $(contentBlock[i] + " ul").outerHeight(true);
        } else {
            var trueblockHeight = $(contentBlock[i] + " h2").outerHeight(true) + $(contentBlock[i] + " h3").outerHeight(true);
        }
        console.log("heigh", contentHeight);
        if (contentHeight > trueblockHeight) {
            contentHeight = trueblockHeight;
        }
    }
    return contentHeight;
}


window.addEventListener("resize", calculateJobHeight);
