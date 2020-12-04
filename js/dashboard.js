$(document).ready(function () {
    $.getJSON("../json/dash.json",
        function (data) {
            let user = '';
            $.each(data, function (key, value) {
                user += '<tr>';
                user += '<td>' +
                    value.name + '</td>';

                user += '<td>' +
                    value.email + '</td>';

                user += '<td>' +
                    value.phone + '</td>';

            user += "<td><button>edit</button></td>";

                    user += "<td><button>Delete</button></td>";


                user += '</tr>';
            });
            $('#showEmp').append(user);
        });
});