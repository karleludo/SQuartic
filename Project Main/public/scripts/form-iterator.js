/**
* Iterates over radio data
* @param form array that contains radio data.
* @return array that contains question and answer from the form.
**/
function radioIterate(form) {
  let formData = [];
  for(let i = 0; i < form.length; i++) {
    let question = $(form[i]).parent().parent().children('td').children('div').children('p')[0].innerText;
    let answer = (5 * i + 1) - $(form[i]).attr('id').substr(9, $(form[i]).attr('id').length) + 5;
    let qa = new Qa(question, answer);
    formData.push(qa);
  }
  return formData;
}
