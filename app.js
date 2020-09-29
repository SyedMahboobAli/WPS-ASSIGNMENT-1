var finalArr = new Array();
var patient_cnt = 0;
function store_reset()
{
    patient_cnt++;
    var obj = new Object();
    obj.name = document.getElementById("name").value;
    obj.r_no = document.getElementById("r_no").value;
    obj.mob_no = document.getElementById("mob_no").value;
    obj.email_add = document.getElementById("email_add").value;
    obj.app_dt = document.getElementById("app_dt").value;
    obj.time = document.getElementById("time").value;
    finalArr.push(obj);
    document.forms[0].reset();
}

function disp_data()
{
    var i = 0;
    var text = "";
    for(i=0;i<patient_cnt;i++)
    {
        text += "<tr> <td>" + finalArr[i].name + "</td><td> " + finalArr[i].r_no + "</td><td>"  +
finalArr[i].mob_no + "</td> <td> "+ finalArr[i].email_add + "</td><td>" + finalArr[i].app_dt + "</td><td>" + finalArr[i].time + "</td></tr>";          
    }
    document.write(`
            <html>
        <head>
        <title>Doctor Appointment</title>
        <link rel='Stylesheet' href='Appointment.css'>  
        </head>
        <body>
        <nav>
            <label class='logo'>VCE HOSPITAL</label>
            <ul>
            <li><a href='#'>HOME</a></li>
            <li><a href='#'>BOOK APPOINTMENT</a></li>
            <li><a class='active' href='#'>VIEW APPOINTMENTS</a></li>
            <li><a href='#'>ABOUT US</a></li>
            <li><a href='#'>CONTACT US</a></li> 
            <li><a href="#">ABOUT ME</a></li> 
            </ul>
        </nav>
        <table style="width:100%" border = '1px'>
            <tr>
                <th>NAME</th>
                <th>ROLL NUMBER</th>
                <th>MOBILE NUMBER</th>
                <th>E-MAIL</th>
                <th>APPLICATION DATE</th>
                <th>TIME</th>
            </tr> 
            ${text}
        </table>

        
         <a href = "Appointment.html"><button id = "final_btn">Go Back</button></a>
            <script src= "app.js"></script>
        </body>
        </html>

    `);
}