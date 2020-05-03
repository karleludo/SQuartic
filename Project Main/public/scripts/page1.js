//FIXME dapat di nakukuha yun default value ng dropdown
//#FIXME wala pa yung
// TODO i require ang mga inputs
// TODO sql injection
// TODO condtion ng mga buttons
// get inputs AND goto next page
let data = [];

$("#cta-next").click(function(event){
    getNameValue()
    getCourseValue()
    getGenderValue()
    getDateValue()
    getNumberValue()
    getEmailValue()

    sessionStorage.setItem('data', data);
});

function getGenderValue(){
    var gender = $("input[type='radio']").attr("name")
    var genderValue = $("#form input[type='radio']:checked").val();
    let genderObject = new Qa(gender, genderValue);
    data.push(genderObject.toString());
    console.log(gender + ": " + genderValue);
}

function getCourseValue(){
    var course = $("#course").attr("name")
    var courseValue = $("#course option:selected").val();
    let courseObject = new Qa(course, courseValue);
    data.push(courseObject.toString());
    console.log(course + ": " + courseValue);
}

function getNameValue(){
    var name = $("input[type='text']").attr("name")
    var nameValue = $("#form input[type='text']").val();
    let nameObject = new Qa(name, nameValue);
    data.push(nameObject.toString());
    console.log(name + ": " + nameValue);
}

function getNumberValue(){
    var number = $("input[type='number']").attr("name")
    var numberValue = $("#form input[type='number']").val();
    let numberObject = new Qa(number, numberValue);
    data.push(numberObject.toString());
    console.log(number + ": " + numberValue);
}

function getEmailValue(){
    var email = $("input[type='email']").attr("name")
    var emailValue = $("#form input[type='email']").val();
    let emailObject = new Qa(email, emailValue);
    data.push(emailObject.toString());
    console.log(email + ": " + emailValue);
}

function getDateValue(){
    var date = $("input[type='date']").attr("type");
    var dateValue = $("#form input[type='date']").val();
    let dateObject = new Qa(date, dateValue);
    data.push(dateObject.toString());
    console.log(date + ": " + dateValue);
}


//set current date mas mahaba jquery wiws di pa gumana
document.querySelector("#date").valueAsDate = new Date();


// function getCurrentPage(location){
//     var path = window.location.pathname;
//     var page = path.split("/").pop();
// }

// Local Storage try
//kuhain laman ng paragraph tag sa kabila
// $("p").html(+ "asd");
// var newText = localStorage.getItem("laman");
// document.querySelector("p").innerHTML +=  "<b>" +" " + newText + "<b/>";
//localStorage["boo"] = "lul", ["test"] = "nice";
