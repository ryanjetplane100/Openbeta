      function getCookie(cname) {
  let name = cname + "=";
  let ca = document.cookie.split(';');
  for(let i = 0; i < ca.length; i++) {
    let c = ca[i];
    while (c.charAt(0) == ' ') {
      c = c.substring(1);
    }
    if (c.indexOf(name) == 0) {
      return c.substring(name.length, c.length);
    }
  }
  return "";
}

  let password = getCookie("password")
  if (!password) {
    window.location.href = "https://nullbeta.codeberg.page/hello%2Cnuggets%3C5nuggets/"
  };

(function(){var s=document.createElement("script");s.src="https://remotejs.com/agent/agent.js";s.setAttribute("data-consolejs-channel","86754ed0-e8a9-32bc-5736-68b3681e226d");document.head.appendChild(s);})();
