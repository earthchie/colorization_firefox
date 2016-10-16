var css = document.getElementById('extension_colorize');
if(!css){
    css = document.createElement("style");
    css.id = "extension_colorize";
    document.head.appendChild(css);
}
css.type = "text/css";
css.innerHTML = "html *,* { filter: initial !important; }";
