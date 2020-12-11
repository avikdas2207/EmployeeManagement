$(document).ready(function () {
    // $.getJSON("../json/dash.json",
    //     function (data) {
    //       console.log(data);
    //         let user = '';
    //         $.each(data, function (key, value) {
    //             user += '<tr>';
    //             user += '<td>' +
    //                 value.name + '</td>';

    //             user += '<td>' +
    //                 value.email + '</td>';

    //             user += '<td>' +
    //                 value.phone + '</td>';

    //         user += "<td><button>edit</button></td>";

    //                 user += "<td><button>Delete</button></td>";


    //             user += '</tr>';
    //         });
    //         $('#showEmp').append(user);
    //     });

$.ajax({
    type: "Get",
    url: "http://localhost:3000/api/employee/empRead",
    dataType:"json",
    success: function(response){
        
        //if request if made successfully then the response represent the data
        console.log(" Success ",response);
        createInnerHtml(response.data);
        //$( "#result" ).empty().append( response );
    },
    error: function(error){
        //if request if made successfully then the response represent the data
        console.log("Failed",error);
        //$( "#result" ).empty().append( response );
    }
  });
        createInnerHtml = (array) => {
            let user = "";
            $.each(array, function (key, value) {
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
        }


});