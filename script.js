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
    var minHeight = contentHeightCompare(contents);
    console.log("minHeight", minHeight);
    $('.workBlock').css("min-height", minHeight);
}

var countProjects = 0;

function showProjects() {
    var contents = ["#projectsContentBlock1", "#projectsContentBlock2"];
    countProjects = showJqurey("#projects", contents, countProjects);
    var minHeight = contentHeightCompare(contents);
    console.log("minHeight", minHeight);
    $('.projectBlock').css("min-height", minHeight);
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
    var contentHeight = 0;
    for (var i = 0; i < contentBlock.length; i++) {
        console.log("block: " + i);
        console.log("blockHeight: ", $(contentBlock[i]).outerHeight(true));
        if (contentHeight < $(contentBlock[i]).outerHeight(true)) {
            contentHeight = $(contentBlock[i]).outerHeight(true);
        }
    }

    return contentHeight;
}
