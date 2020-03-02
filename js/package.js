fetch("https://goonvpnapi.herokuapp.com/package").then(
  res => {
    res.json().then(
      data => {
        console.log(data);
        if (data.length > 0) {
          var temp = "";
          data.forEach(element => {
            temp += "<tr>";
            temp += "<td>" + element.price + "</td>";
            temp += "<td>" + element.gp + "</td>";
            temp += "</tr>"
          });
          document.getElementById("data").innerHTML = temp;
        }
      }
    )
  }
)