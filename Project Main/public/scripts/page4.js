let data = sessionStorage.getItem('form3data');
console.log(data);

$("#cta-finish").click(function(event) {
  event.preventDefault();
  let checked = $('input[type="radio"]:checked').toArray();
  let formData = radioIterate(checked);
  sessionStorage.setItem('form4data', formData);

  window.document.location="finish";
});
