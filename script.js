(function () {
  var PHONE = '+14796012786';

  // Year in footer
  var y = document.getElementById('year');
  if (y) y.textContent = new Date().getFullYear();

  // Quote builder: turn the choices into a ready-to-send text message
  var form = document.getElementById('quote-form');
  var link = document.getElementById('sms-link');
  var preview = document.getElementById('preview-text');
  function buildMessage() {
    var job = form.querySelector('input[name="job"]:checked');
    var note = form.querySelector('textarea[name="note"]').value.trim();
    var msg = 'Hi Red Welds, I need help with ' + (job ? job.value : 'a welding job') + '.';
    if (note) msg += ' ' + note.replace(/\s+/g, ' ');
    msg += " I'll attach a photo.";
    return msg;
  }
  function update() {
    var msg = buildMessage();
    preview.textContent = msg;
    // "?&body=" works on both iOS and Android
    link.href = 'sms:' + PHONE + '?&body=' + encodeURIComponent(msg);
  }
  if (form && link && preview) {
    form.addEventListener('input', update);
    form.addEventListener('change', update);
    form.addEventListener('submit', function (e) { e.preventDefault(); window.location.href = link.href; });
    update();
  }

  // Entrance reveals, staggered within each section
  var items = document.querySelectorAll('[data-reveal]');
  var reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  if ('IntersectionObserver' in window && !reduce) {
    document.querySelectorAll('section, footer').forEach(function (sec) {
      sec.querySelectorAll('[data-reveal]').forEach(function (el, i) {
        el.style.setProperty('--d', (i * 80) + 'ms');
      });
    });
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (en) {
        if (en.isIntersecting) { en.target.classList.add('in'); io.unobserve(en.target); }
      });
    }, { rootMargin: '0px 0px -8% 0px', threshold: 0.08 });
    items.forEach(function (el) { io.observe(el); });
  } else {
    items.forEach(function (el) { el.classList.add('in'); });
  }

  // Mobile action bar: shown between the hero and the contact section,
  // hidden where the page already shows the phone number
  var bar = document.getElementById('mobile-bar');
  var watched = ['hero', 'contact'].map(function (id) { return document.getElementById(id); }).filter(Boolean);
  if (bar && watched.length && 'IntersectionObserver' in window) {
    var visible = {};
    new IntersectionObserver(function (entries) {
      entries.forEach(function (en) { visible[en.target.id] = en.isIntersecting; });
      bar.classList.toggle('show', !visible.hero && !visible.contact);
    }, { threshold: 0.05 }).observe(watched[0]);
    var io2 = new IntersectionObserver(function (entries) {
      entries.forEach(function (en) { visible[en.target.id] = en.isIntersecting; });
      bar.classList.toggle('show', !visible.hero && !visible.contact);
    }, { threshold: 0 });
    watched.slice(1).forEach(function (el) { io2.observe(el); });
  } else if (bar) {
    bar.classList.add('show');
  }
})();
