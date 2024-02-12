function showRadioButtons() {
    document.getElementById("mainContent").style.display = "none"; // Hide main content
    document.getElementById("radioButtons").style.display = "block"; // Show radio buttons
    document.getElementById("obey").style.display = "none"
}

function submitReasons() {
    /*var reasons = document.querySelectorAll('input[name="reason"]:checked');
    var selectedReasons = [];
    reasons.forEach(function(checkbox) {
        selectedReasons.push(checkbox.value);
    });
    
    var emailBody = "Selected reasons:\n" + selectedReasons.join("\n");

    var mailtoLink = "mailto:luislabapis@gmail.com?subject=Valentine's Day Reasons&body=" + encodeURIComponent(emailBody);

    window.location.href = mailtoLink;*/
    document.getElementById("radioButtons").style.display = "none";
    document.getElementById("dates").style.display = "block";
}
function showNoPopup() {
    document.getElementById("mainContent").style.display = "none";
    document.getElementById("sorry").style.display = "block";
}
function showNoPopup2()
{
    document.getElementById("sorry").style.display = "none";
    document.getElementById("obey").style.display = "block"
}
function showYesPopup()
{
    document.getElementById("sorry").style.display = "none";
    document.getElementById("please").style.display = "block"
}
function submitDate()
{
    document.getElementById("dates").style.display = "none";
}