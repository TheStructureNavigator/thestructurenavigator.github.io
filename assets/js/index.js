(function () {
  function setCurrentYear() {
    var year = document.getElementById("current-year");
    if (!year) {
      return;
    }

    year.textContent = new Date().getFullYear();
  }

  function bindContactCopy() {
    var copyBtn = document.querySelector(".contact-copy-btn");
    if (!copyBtn) {
      return;
    }

    copyBtn.addEventListener("click", function () {
      var email = copyBtn.getAttribute("data-copy-email") || "";
      if (!email) {
        return;
      }

      function onSuccess() {
        var original = copyBtn.innerHTML;
        copyBtn.innerHTML = '<i class="icon solid fa-check" aria-hidden="true"></i>';
        setTimeout(function () {
          copyBtn.innerHTML = original;
        }, 1200);
      }

      if (navigator.clipboard && navigator.clipboard.writeText) {
        navigator.clipboard.writeText(email).then(onSuccess).catch(function () {});
        return;
      }

      var tmp = document.createElement("input");
      tmp.value = email;
      document.body.appendChild(tmp);
      tmp.select();
      document.execCommand("copy");
      document.body.removeChild(tmp);
      onSuccess();
    });
  }

  setCurrentYear();
  bindContactCopy();
})();
