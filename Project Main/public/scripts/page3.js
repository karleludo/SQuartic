let data = sessionStorage.getItem('form2data');
console.log(data);

$("#cta-next").click(function(event) {
  event.preventDefault();
  let checked = $('input[type="radio"]:checked').toArray();
  let formData = radioIterate(checked);
  sessionStorage.setItem('form3data', formData);

  window.document.location = "page4";
});
