fetch("https://goonvpnapi.herokuapp.com/zone").then(
    res => {
        res.json().then(
            data => {
                var temp = "";
                for (const key in data) {
                    temp += "<tr>";
                    temp += "<td>" + key + "</td>";
                    temp += "<td>" + data[key].flag + "</td>";
                    temp += "<td>" + data[key].id + "</td>";
                    temp += "<td>" + data[key].zone + "</td>";
                    temp += "</tr>"
                    console.log(data);
                }
                document.getElementById("data").innerHTML = temp;
            }
        )
    }
)