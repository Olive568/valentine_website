function showRadioButtons() {
    document.getElementById("mainContent").style.display = "none"; // Hide main content
    document.getElementById("radioButtons").style.display = "block"; // Show radio buttons
}

function submitReasons() {
    var reasons = document.querySelectorAll('input[name="reason"]:checked');
    var selectedReasons = [];
    reasons.forEach(function(checkbox) {
        selectedReasons.push(checkbox.value);
    });
    
    var emailBody = "Selected reasons:\n" + selectedReasons.join("\n");

    var mailtoLink = "mailto:luislabapis@gmail.com?subject=Valentine's Day Reasons&body=" + encodeURIComponent(emailBody);

    window.location.href = mailtoLink;
}