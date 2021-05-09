document.addEventListener('DOMContentLoaded', function() {
    var elems = document.querySelectorAll('.sidenav');
    var instances = M.Sidenav.init(elems, {
        edge:'left',
        draggable: false,
        inDuration: 200,
        outDuration: 150,
        onOpenStart: null,
        onOpenEnd: null,
        onCloseStart: null,
        onCloseEnd: null,
        preventScrolling: true
    });
  });
  
  document.addEventListener('DOMContentLoaded', function() {
    var elems = document.querySelectorAll('.modal');
    var instances = M.Modal.init(elems, {
        opacity: 0.5,
        inDuraction: 200,
        outDuration: 150,
        inDuration: 200,
        outDuration: 150,
        onOpenStart: null,
        onOpenEnd: null,
        onCloseStart: null,
        onCloseEnd: null,
        preventScrolling: true,
        dismissible: true,
        startingTop: '4%',
        endingTop: '10%'
    });
  });