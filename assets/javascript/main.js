$(document).ready(function() {
  if (window.location.search.slice(1).indexOf('hideHeader=true') > -1) {
    $('#nav-main').hide()
  }
});