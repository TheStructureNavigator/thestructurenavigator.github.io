(function () {
  var ROOT_ID = "app";
  var CURRENT_YEAR = new Date().getFullYear();

  function renderHeader() {
    return [
      '<header id="header">',
      '  <div class="logo">',
      '    <img src="images/icon_white.webp" alt="TheStructureNavigator logo" style="width: 82%; height: 82%; margin: 9%; border-radius: 50%; object-fit: contain;" />',
      "  </div>",
      '  <div class="content">',
      '    <div class="inner">',
      "      <h1>The Structure Navigator</h1>",
      "      <p>A gateway to my personal information and project links, offering a glimpse into my digital journey and creative endeavors</p>",
      "    </div>",
      "  </div>",
      "  <nav>",
      "    <ul>",
      '      <li><a href="#about">About</a></li>',
      '      <li><a href="portfolio/index.html">Portfolio</a></li>',
      '      <li><a href="#contact">Contact</a></li>',
      "    </ul>",
      "  </nav>",
      '  <ul class="icons">',
      '    <li><a href="https://github.com/TheStructureNavigator" class="icon brands fa-github"><span class="label">GitHub</span></a></li>',
      '    <li><a href="https://useme.com/pl/roles/contractor/przemyslaw-szymoniak,423676/" class="icon brands fa-first-order-alt"><span class="label">Useme</span></a></li>',
      '    <li><a href="https://www.linkedin.com/in/przemys%C5%82aw-szymoniak-006495303/" class="icon brands fa-linkedin"><span class="label">LinkedIn</span></a></li>',
      "  </ul>",
      "</header>",
    ].join("\n");
  }

  function renderAboutArticle() {
    return [
      '<article id="about">',
      '  <h2 class="major">ABOUT</h2>',
      '  <div class="about-layout">',

      '    <div class="about-left">',

      '      <p class="about-line">Przemysław Szymoniak</p>',

      '      <p class="about-line about-line-soft">M.Sc. Engineer</p>',

      '      <p class="about-line about-line-soft">',
      '        Computer Modelling of Systems and Processes',
      '      </p>',

      '      <p class="about-line about-line-soft about-line-divider-top">',
      '        Digital Architect • Systems Engineering • Automation',
      '      </p>',

      '      <p class="about-summary">',
      '        self-taught code assembler & problem solver',
      '      </p>',

      '      <p class="about-summary about-summary-secondary">',
      '        designing industrial systems, business automation platforms,',
      '        data-driven applications and mathematical frameworks',
      '      </p>',

      '    </div>',

      '    <div class="about-right" style="display: flex; align-items: stretch;">',
      '      <div style="position: relative; width: 100%; height: 100%;">',
      '        <span class="image main" style="margin-bottom: 0;">',
      '          <img src="images/background-photo.webp" alt="" style="display: block; width: 100%; height: 100%; min-height: 100%; object-fit: cover;" />',
      '        </span>',
      '        <a href="#contact" class="button small" style="position: absolute; top: 0.75rem; right: 0.75rem;">CONTACT</a>',
      '        <a href="portfolio/index.html" class="button small" style="position: absolute; right: 0.75rem; bottom: 0.75rem;">Dive deeper</a>',
      '      </div>',
      '    </div>',

      '  </div>',
      '</article>',
    ].join("\n");
  }

  function renderContactArticle() {
    return [
      '<article id="contact">',
      '  <h2 class="major">CONTACT</h2>',
      '  <div class="about-layout contact-layout">',
      '    <div class="about-left">',
      '      <div class="about-line-divider-top contact-mail-card">',
      '        <a href="mailto:szymoniak.przemyslaw96@gmail.com" class="contact-mail-link contact-email-link">szymoniak.przemyslaw96@gmail.com</a>',
      '        <button type="button" class="contact-copy-btn" data-copy-email="szymoniak.przemyslaw96@gmail.com" aria-label="Copy email address">',
      '          <i class="icon solid fa-copy" aria-hidden="true"></i>',
      '          <span>COPY MAIL</span>',
      '        </button>',
      '      </div>',
      '      <div class="about-line-divider-top contact-platform-row">',
      '        <span class="about-line about-line-soft">Find me at</span>',
      '        <a href="https://www.linkedin.com/in/przemys%C5%82aw-szymoniak-006495303/" class="contact-mail-link contact-platform-link" target="_blank" rel="noopener noreferrer">',
      '          <i class="icon brands fa-linkedin" aria-hidden="true"></i>',
      '          <span>LinkedIn</span>',
      "        </a>",
      "      </div>",
      '      <div class="about-line-divider-top contact-platform-row">',
      '        <span class="about-line about-line-soft">Find me at</span>',
      '        <a href="https://useme.com/pl/roles/contractor/przemyslaw-szymoniak,423676/" class="contact-mail-link contact-platform-link" target="_blank" rel="noopener noreferrer">',
      '          <i class="icon brands fa-first-order-alt" aria-hidden="true"></i>',
      '          <span>Useme</span>',
      "        </a>",
      "      </div>",
      '      <p class="about-line about-line-soft about-line-divider-top contact-form-hint">Or fill the form and send me a message <span class="contact-form-arrow" aria-hidden="true">→</span></p>',
      '    </div>',
      '    <div class="about-right contact-right">',
      '      <form method="POST" action="https://formsubmit.co/szymoniak.przemyslaw96@gmail.com">',
      '        <div class="fields">',
      '          <div class="field half">',
      '            <input type="text" name="name" id="name" placeholder="Enter your name" required />',
      "          </div>",
      '          <div class="field half">',
      '            <input type="text" name="email" id="email" placeholder="Enter your Email" required />',
      "          </div>",
      '          <div class="field">',
      '            <textarea name="message" id="message" rows="4" placeholder="Enter your message" required></textarea>',
      "          </div>",
      "        </div>",
      '        <ul class="actions">',
      '          <li><input type="submit" value="Send Message" class="primary" /></li>',
      '          <li><input type="reset" value="Reset" /></li>',
      "        </ul>",
      "      </form>",
      "    </div>",
      "  </div>",
      "</article>",
    ].join("\n");
  }

  function renderMain() {
    return [
      '<div id="main">',
      renderAboutArticle(),
      renderContactArticle(),
      "</div>",
    ].join("\n");
  }

  function renderFooter() {
    return [
      '<footer id="footer">',
      '  <p class="copyright">&copy; TSN | <span class="brand-case">TheStructureNavigator</span> | 2023 - ' + CURRENT_YEAR + "</p>",
      "</footer>",
    ].join("\n");
  }

  function renderApp() {
    return [
      '<div id="wrapper">',
      renderHeader(),
      renderMain(),
      renderFooter(),
      "</div>",
      '<div id="bg"></div>',
    ].join("\n");
  }

  function loadScript(src) {
    return new Promise(function (resolve, reject) {
      var script = document.createElement("script");
      script.src = src;
      script.onload = resolve;
      script.onerror = reject;
      document.body.appendChild(script);
    });
  }

  function loadTemplateScripts() {
    return loadScript("assets/js/jquery.min.js")
      .then(function () {
        return loadScript("assets/js/browser.min.js");
      })
      .then(function () {
        return loadScript("assets/js/breakpoints.min.js");
      })
      .then(function () {
        return loadScript("assets/js/util.js");
      })
      .then(function () {
        return loadScript("assets/js/main.js");
      });
  }

  function init() {
    var app = document.getElementById(ROOT_ID);

    if (!app) {
      console.error("Missing root element: #" + ROOT_ID);
      return;
    }

    app.innerHTML = renderApp();
    bindContactCopy();

    loadTemplateScripts().catch(function (error) {
      console.error("Failed to load required scripts:", error);
    });
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

  init();
})();
