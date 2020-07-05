let data1 = sessionStorage.getItem('form1data');
let data2 = sessionStorage.getItem('form2data');
let data3 = sessionStorage.getItem('form3data');
let data4 = sessionStorage.getItem('form4data');

let data = data2.concat(data3);
data = data.concat(data4);

let request = new XMLHttpRequest();
let path = "http://localhost:3000/finish";

request.open("POST", path, true);
request.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');
let params = 'student=' + data1 + '&data=' + data;

request.send(params);
