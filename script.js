(function(){
  var root = document.documentElement;
  var typed = document.getElementById('typed');
  var query = typed.textContent;
  var reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  // One orchestrated moment: type the search, then reveal the results.
  if (!reduce) {
    root.classList.add('js-typing');
    typed.textContent = '';
    var i = 0;
    (function tick(){
      if (i <= query.length) {
        typed.textContent = query.slice(0, i++);
        setTimeout(tick, 42);
      } else {
        setTimeout(function(){ root.classList.add('js-ready'); }, 250);
      }
    })();
    // Safety net: never leave results hidden.
    setTimeout(function(){ root.classList.add('js-ready'); }, 3500);
  }

  // Contact form: compose an email in the visitor's mail app.
  document.getElementById('mailer').addEventListener('submit', function(e){
    e.preventDefault();
    var name = document.getElementById('f-name').value.trim();
    var email = document.getElementById('f-email').value.trim();
    var msg = document.getElementById('f-msg').value.trim();
    var subject = 'Enquiry from ' + name + ' (via your portfolio)';
    var body = msg + '\n\nName: ' + name + '\nEmail: ' + email;
    window.location.href = 'mailto:coolrahulpratap1985@gmail.com?subject=' + encodeURIComponent(subject) + '&body=' + encodeURIComponent(body);
  });
})();
