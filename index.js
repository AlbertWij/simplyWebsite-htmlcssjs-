function toggleDrop() {
    var dropContent = document.getElementById('drop1');
    if (dropContent.style.display === 'block') {
      dropContent.style.display = 'none';
    } else {
      dropContent.style.display = 'block';
    }
  }

  window.onclick = function(event) {
    if (!event.target.matches('#about')) {
      var dropdowns = document.getElementsByClassName('dropContent');
      for (var i = 0; i < dropdowns.length; i++) {
        var openDropdown = dropdowns[i];
        if (openDropdown.style.display === 'block') {
          openDropdown.style.display = 'none';
        }
      }
    }
  }