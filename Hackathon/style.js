document.addEventListener('DOMContentLoaded', function() {
  var elems = document.querySelectorAll('.parallax');
  var instances = M.Parallax.init(elems, responsiveThreshold=0);
});

document.addEventListener('DOMContentLoaded', function() {
  var elems = document.querySelectorAll('.sidenav');
  var instances = M.Sidenav.init(elems, edge='left');
});
document.addEventListener('DOMContentLoaded', function() {
  var elems = document.querySelectorAll('.dropdown-trigger');
  var instances = M.Dropdown.init(elems, hover=true);
});