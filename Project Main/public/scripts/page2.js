// eto nalang gamiting format ng anonymous fucntion na refactor
//$("#cta-next").click( () => {alert("hey")})

// get value ng checkbox at radio #FIXME

let data = sessionStorage.getItem('data');
let form1Data = sessionStorage.getItem('form1data');
console.log(data);
console.log(form1Data);
// console.log(data);



$("#cta-next").click(function(){
  let formData = [];

     $("input[type=checkbox]:checked").each(function(index,element){
        console.log(element.value);
     });
     let checked = $('input[type="radio"]:checked').toArray();

     for(let i = 0; i < checked.length; i++) {
       let question = $(checked[i]).parent().parent().children('td').children('div').children('p')[0].innerText;
       let answer = (5 * i + 1) - $(checked[i]).attr('id').substr(9, $(checked[i]).attr('id').length) + 5;
       let qa = new Qa(question, answer);
       formData.push(qa.toString());
       console.log(question, answer);
     }

     sessionStorage.setItem('form1data', formData);



     // window.document.location = "page3.html";

});
