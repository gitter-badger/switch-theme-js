/**
 * Copyright (c) 2021 Puneet Gopinath
 */
function switchTheme(theme, ...rmThemes) {
  document.body.classList.add(theme);
  for (var i = 0; i < rmThemes.length; i++) {
    document.body.classList.remove(rmThemes[i]);
  }
  setCookie("theme", theme, 10);
}

function getTheme() {
  var theme = getCookie("theme");
  if (theme != "") {
    switchTheme(theme);
  }
  return theme;
}

function setCookie(name, value, exdays) {
  var d = new Date();
  d.setTime(d.getTime() + (exdays*24*60*60*1000));
  var expires = "expires="+ d.toUTCString();
  document.cookie = name + "=" + value + ";" + expires + ";path=/";
}

function getCookie(name) {
  var name = name + "=";
  var decodedCookie = decodeURIComponent(document.cookie);
  var ca = decodedCookie.split(';');
  for(var i = 0; i <ca.length; i++) {
    var c = ca[i];
    while (c.charAt(0) == ' ') {
      c = c.substring(1);
    }
    if (c.indexOf(name) == 0) {
      return c.substring(name.length, c.length);
    }
  }
  return "";
}
