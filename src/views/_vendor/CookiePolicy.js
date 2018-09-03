export default `
<link rel="stylesheet" type="text/css" href="//cdnjs.cloudflare.com/ajax/libs/cookieconsent2/3.1.0/cookieconsent.min.css" />
<script src="//cdnjs.cloudflare.com/ajax/libs/cookieconsent2/3.1.0/cookieconsent.min.js" async defer></script>
<script>
window.addEventListener("load", function(){
window.cookieconsent.initialise({
  "palette": {
    "popup": {
      "background": "#f5ed32",
      "text": "#044169"
    },
    "button": {
      "background": "#044169"
    }
  },
  "theme": "classic",
  "content": {
    "message": "Ce site Web utilise des cookies afin de vous offrir la meilleure experience possible sur notre site.",
    "dismiss": "Je comprends",
    "link": "En savoir plus"
  },
  "law": {
    "countryCode": "BE"
  }
})});
</script>`;
