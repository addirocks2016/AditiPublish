jQuery(function () {
  jQuery('.collapsible .collapse').hide();

  jQuery('.collapsible .trigger').click(function (e) {
    e.preventDefault();
    // find only .collapsible > .collapse direct descendents
    // so that nested accordions still behave correctly
    $(this).closest('.collapsible').children().filter('.collapse').toggle(600);

    if (!jQuery(this).hasClass('hint-suppress')) {
      var hint = $('.hint', this);
      if (hint.hasClass('hint-show')) {
        hint.text('[-] ');
      }
      else {
        hint.text('[+] ');
      }
      hint.toggleClass('hint-show');
    }
  }).filter(':not(.hint-suppress)').prepend(' <span class="hint hint-show">[+] </span');

  // grab hash from url, open matching accordion and scroll to
  var trigger = window.location.hash;
  if ($(trigger).length && $(trigger).hasClass('trigger')) {
    // need a quick delay before getting distance to element or its not always correct
    setTimeout (function(){
      var dist = $(trigger).offset().top;
      $(trigger).click();
      $('html, body').animate({
        scrollTop: dist
      }, 500);
    }, 100);
  }
});
