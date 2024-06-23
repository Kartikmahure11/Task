//loader
$(document).ready(function() {
    // Show loader when the page starts loading
    $('#loader').show();

    // Simulate data loading (replace this with your actual data loading logic)
    setTimeout(function() {
        $('#loader').hide();
        // Example: Populate table rows with data
        var tbody = $('#MyTBody');
        var rowData = [
            { srNo: '1', wa: '...', studentName: '...', mobile: '...', admissionDate: '...', totalFeesPaid: '...', remainingFees: '...', 
              januaryDate: '...', januaryAmount: '...', januaryMode: '...',
              februaryDate: '...', februaryAmount: '...', februaryMode: '...',
              marchDate: '...', marchAmount: '...', marchMode: '...',
              aprilDate: '...', aprilAmount: '...', aprilMode: '...',
              mayDate: '...', mayAmount: '...', mayMode: '...',
              juneDate: '...', juneAmount: '...', juneMode: '...',
              julyDate: '...', julyAmount: '...', julyMode: '...',
              augustDate: '...', augustAmount: '...', augustMode: '...',
              septemberDate: '...', septemberAmount: '...', septemberMode: '...',
              octoberDate: '...', octoberAmount: '...', octoberMode: '...',
              novemberDate: '...', novemberAmount: '...', novemberMode: '...',
              decemberDate: '...', decemberAmount: '...', decemberMode: '...',
              fineCharges: '...', installment: '...', totalFees: '...', admissionFees: '...', monthlyFees: '...', branch: '...', course: '...', trainerMailId: '...', mailSent: '...', mailId: '...', branch: '...'
            }
            // Add more rows as needed
        ];

        // Populate table rows
        rowData.forEach(function(data) {
            var row = '<tr>' +
                '<td>' + data.srNo + '</td>' +
                '<td>' + data.wa + '</td>' +
                '<td>' + data.studentName + '</td>' +
                '<td>' + data.mobile + '</td>' +
                '<td>' + data.admissionDate + '</td>' +
                '<td>' + data.totalFeesPaid + '</td>' +
                '<td>' + data.remainingFees + '</td>' +
                '<td>' + data.januaryDate + '</td>' +
                '<td>' + data.januaryAmount + '</td>' +
                '<td>' + data.januaryMode + '</td>' +
                '<td>' + data.februaryDate + '</td>' +
                '<td>' + data.februaryAmount + '</td>' +
                '<td>' + data.februaryMode + '</td>' +
                '<td>' + data.marchDate + '</td>' +
                '<td>' + data.marchAmount + '</td>' +
                '<td>' + data.marchMode + '</td>' +
                '<td>' + data.aprilDate + '</td>' +
                '<td>' + data.aprilAmount + '</td>' +
                '<td>' + data.aprilMode + '</td>' +
                '<td>' + data.mayDate + '</td>' +
                '<td>' + data.mayAmount + '</td>' +
                '<td>' + data.mayMode + '</td>' +
                '<td>' + data.juneDate + '</td>' +
                '<td>' + data.juneAmount + '</td>' +
                '<td>' + data.juneMode + '</td>' +
                '<td>' + data.julyDate + '</td>' +
                '<td>' + data.julyAmount + '</td>' +
                '<td>' + data.julyMode + '</td>' +
                '<td>' + data.augustDate + '</td>' +
                '<td>' + data.augustAmount + '</td>' +
                '<td>' + data.augustMode + '</td>' +
                '<td>' + data.septemberDate + '</td>' +
                '<td>' + data.septemberAmount + '</td>' +
                '<td>' + data.septemberMode + '</td>' +
                '<td>' + data.octoberDate + '</td>' +
                '<td>' + data.octoberAmount + '</td>' +
                '<td>' + data.octoberMode + '</td>' +
                '<td>' + data.novemberDate + '</td>' +
                '<td>' + data.novemberAmount + '</td>' +
                '<td>' + data.novemberMode + '</td>' +
                '<td>' + data.decemberDate + '</td>' +
                '<td>' + data.decemberAmount + '</td>' +
                '<td>' + data.decemberMode + '</td>' +
                '<td>' + data.fineCharges + '</td>' +
                '<td>' + data.installment + '</td>' +
                '<td>' + data.totalFees + '</td>' +
                '<td>' + data.admissionFees + '</td>' +
                '<td>' + data.monthlyFees + '</td>' +
                '<td>' + data.branch + '</td>' +
                '<td>' + data.course + '</td>' +
                '<td>' + data.trainerMailId + '</td>' +
                '<td>' + data.mailSent + '</td>' +
                '<td>' + data.mailId + '</td>' +
                '<td>' + data.branch + '</td>' +
                '</tr>';
            tbody.append(row);
        });
    }, 3000); // Replace 2000 with the actual time your data takes to load
});







$(document).ready(function () {
    var emailId = getQueryVariable('email');


    if (emailId) {
        // Fetch data based on emailId
        $.getJSON("https://script.google.com/macros/s/AKfycby6jAs_4VTt5vzfZZSWQjDkL29qOw8OdhiG-lHCrDBpJS4Z_XLxRV-FWVvC2gSDyh4/exec?emailId=" + encodeURIComponent(emailId), function (data) {
            var Rows = "";
            var modeColumnIndexes = [9, 12, 15, 18, 21, 24, 27, 30, 33, 36, 39, 42]; // Add the known index(es) of 'MODE' columns here

            // Build table headers
            var headers = '<thead>' +
                '<tr>' +
                '<th colspan="10"><h1>ASTERISC COMPUTER INSTITUTE FEES 2024 - 25</h1></th>' +
                '<th></th><th></th><th></th><th></th><th></th><th></th><th></th><th></th><th></th><th></th>' +
                '<th></th><th></th><th></th><th></th><th></th><th></th><th>107,000.00</th><th></th><th></th><th>96,000.00</th><th></th><th></th>' +
                '<th></th><th></th><th></th><th></th><th></th><th></th><th></th><th></th><th></th><th></th><th></th><th></th><th></th><th></th>' +
                '</tr>' +
                '<tr>' +
                '<th>Sr. No.</th>' +
                '<th>WA</th>' +
                '<th>STUDENT NAME</th>' +
                '<th>MOBILE STUDENT</th>' +
                '<th>Admission DATE</th>' +
                '<th>TOTAL FEES PAID</th>' +
                '<th>REMAINING FEES</th>' +
                '<th>JANUARY</th>' +
                '<th></th><th></th>' +
                '<th>FEBRUARY</th>' +
                '<th></th><th></th>' +
                '<th>MARCH</th>' +
                '<th></th><th></th>' +
                '<th>APRIL</th>' +
                '<th></th><th></th>' +
                '<th>MAY</th>' +
                '<th></th><th></th>' +
                '<th>JUNE</th>' +
                '<th></th><th></th>' +
                '<th>JULY</th>' +
                '<th></th><th></th>' +
                '<th>AUGUST</th>' +
                '<th></th><th></th>' +
                '<th>SEPTEMBER</th>' +
                '<th></th><th></th>' +
                '<th>OCTOBER</th>' +
                '<th></th><th></th>' +
                '<th>NOVEMBER</th>' +
                '<th></th><th></th>' +
                '<th>DECEMBER</th>' +
                '<th></th><th></th>' +
                '<th>FINE CHARGES</th>' +
                '<th>Installment</th>' +
                '<th>TOTAL FEES</th>' +
                '<th>ADMISSION FEES</th>' +
                '<th>MONTHLY FEES</th>' +
                '<th>BRANCH</th>' +
                '<th>COURSE</th>' +
                '<th>TRAINER Mail ID</th>' +
                '<th>Mail Sent</th>' +
                '<th>MAIL ID</th>' +
                '<th>Branch</th>' +
                '<th></th>' +
                '</tr>' +
                '<tr>' +
                '<th></th>' +
                '<th></th>' +
                '<th></th>' +
                '<th></th>' +
                '<th></th>' +
                '<th></th>' +
                '<th></th>' +
                '<th>DATE</th>' +
                '<th>AMOUNT</th>' +
                '<th>MODE</th>' +
                '<th>DATE</th>' +
                '<th>AMOUNT</th>' +
                '<th>MODE</th>' +
                '<th>DATE</th>' +
                '<th>AMOUNT</th>' +
                '<th>MODE</th>' +
                '<th>DATE</th>' +
                '<th>AMOUNT</th>' +
                '<th>MODE</th>' +
                '<th>DATE</th>' +
                '<th>AMOUNT</th>' +
                '<th>MODE</th>' +
                '<th>DATE</th>' +
                '<th>AMOUNT</th>' +
                '<th>MODE</th>' +
                '<th>DATE</th>' +
                '<th>AMOUNT</th>' +
                '<th>MODE</th>' +
                '<th>DATE</th>' +
                '<th>AMOUNT</th>' +
                '<th>MODE</th>' +
                '<th>DATE</th>' +
                '<th>AMOUNT</th>' +
                '<th>MODE</th>' +
                '<th>DATE</th>' +
                '<th>AMOUNT</th>' +
                '<th>MODE</th>' +
                '<th>DATE</th>' +
                '<th>AMOUNT</th>' +
                '<th>MODE</th>' +
                '<th></th>' +
                '<th></th>' +
                '<th></th>' +
                '<th></th>' +
                '<th></th>' +
                '<th></th>' +
                '<th></th>' +
                '<th></th>' +
                '<th></th>' +
                '<th></th>' +
                '<th></th>' +
                '</tr>' +
                '</thead>';

            // Build table rows
            $.each(data, function (key, value) {
                var Columns = "";
                var rowHasData = false; // Flag to check if the row has data

                $.each(value, function (index, value1) {
                    if (value1) {
                        rowHasData = true;
                    }
                    if (typeof value1 === 'boolean') {
                        Columns += '<td><input type="checkbox" enabled ' + (value1 ? 'checked' : '') + ' onclick="updateDate(this)"></td>';
                    } else if (isValidDate(value1)) {
                        var formattedDate = formatDate(value1);
                        Columns += '<td>' + formattedDate + '</td>';
                    } else if (modeColumnIndexes.includes(index)) {
                        // Create dropdown options for MODE
                        var options = '<option value="">Select</option>' +
                            '<option value="Cash">Cash</option>' +
                            '<option value="Online">Online</option>';
                        Columns += '<td>' + (rowHasData ? '<select>' + options + '</select>' : '') + '</td>';
                    }
                    else if (index === 1) { // Assuming 'WA' is the second column (index 1)
                Columns += '<td><a href="https://example.com/' + value1 + '">' + value1 + '</a></td>';
            } else {
                        Columns += (value1 ? '<td>' + value1 + '</td>' : '<td></td>');
                    }
                });

                // Only append the row if it has data
                if (rowHasData) {
                    Rows += '<tr>' + Columns + '</tr>';
                }
            });

            // Combine headers and rows
            var tableHtml = headers + '<tbody id="MyTBody">' + Rows + '</tbody>';

            // Replace entire table content
            $("table").html(tableHtml);
        });
    } else {
        console.log('No email ID provided.');
    }
});

function getQueryVariable(variable) {
    var query = window.location.search.substring(1); // Excludes the '?' character
    var vars = query.split('&');

    for (var i = 0; i < vars.length; i++) {
        var pair = vars[i].split('=');
        if (decodeURIComponent(pair[0]) === variable) {
            return decodeURIComponent(pair[1]);
        }
    }
    console.log('Query parameter %s not found', variable);
    return null;
}

function isValidDate(dateString) {
    var isoDateRegex = /^\d{4}-\d{2}-\d{2}T\d{2}:\d{2}:\d{2}.\d{3}Z$/;
    return isoDateRegex.test(dateString);
}

function formatDate(dateString) {
    var dateObj = new Date(dateString);
    var day = dateObj.getUTCDate();
    var month = dateObj.getUTCMonth() + 1;
    var year = dateObj.getUTCFullYear();

    if (day < 10) {
        day = '0' + day;
    }
    if (month < 10) {
        month = '0' + month;
    }

    return day + '-' + month + '-' + year;
}

function updateDate(checkbox) {
    if (checkbox.checked) {
        var today = new Date();
        var formattedDate = ('0' + today.getDate()).slice(-2) + '-' + ('0' + (today.getMonth() + 1)).slice(-2) + '-' + today.getFullYear();
        var cell = checkbox.parentNode;
        cell.innerHTML = formattedDate;
    } else {
        // Handle unchecking if needed
    }
}





