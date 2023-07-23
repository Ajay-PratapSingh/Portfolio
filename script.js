var timeout;
  document.addEventListener("mousemove", function(e) {
    clearTimeout(timeout);
    timeout = setTimeout(function() {
      var follower = document.querySelector("#follower");
      follower.style.left = e.pageX + "px";
    }, 1000);
  });