// eto nalang gamiting format ng anonymous fucntion na refactor
//$("#cta-next").click( () => {alert("hey")})

// get value ng checkbox at radio #FIXME

let data = sessionStorage.getItem('form1data');
console.log(data);

$("#cta-next").click(function(event) {
  event.preventDefault();
  // $("input[type=checkbox]:checked").each(function(index, element) {
  //   console.log(element.value);
  // });
  let checked = $('input[type="radio"]:checked').toArray();

  // for(let i = 0; i < checked.length; i++) {
  //   let question = $(checked[i]).parent().parent().children('td').children('div').children('p')[0].innerText;
  //   let answer = (5 * i + 1) - $(checked[i]).attr('id').substr(9, $(checked[i]).attr('id').length) + 5;
  //   let qa = new Qa(question, answer);
  //   formData.push(qa.toString());
  //   console.log(question, answer);
  // }
  let formData = radioIterate(checked);
  sessionStorage.setItem('form2data', formData);

  window.document.location = "page3";

});
