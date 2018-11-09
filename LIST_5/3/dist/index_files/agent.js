var agt=navigator.userAgent.toLowerCase();

var is_major = parseInt(navigator.appVersion);
var is_minor = parseFloat(navigator.appVersion);

var is_nav  = ((agt.indexOf('mozilla')!=-1) && (agt.indexOf('spoofer')==-1)
            && (agt.indexOf('compatible') == -1) && (agt.indexOf('opera')==-1)
            && (agt.indexOf('webtv')==-1) && (agt.indexOf('hotjava')==-1));

var is_nav4   = (is_nav && (is_major == 4));
var is_gecko  = (agt.indexOf('gecko') != -1);
var is_ie     = ((agt.indexOf("msie") != -1) && (agt.indexOf("opera") == -1));
var is_ie3    = (is_ie && (is_major < 4));
var is_ie4    = (is_ie && (is_major == 4) && (agt.indexOf("msie 4")!=-1) );
var is_ie5up  = (is_ie && !is_ie3 && !is_ie4);

//"Operowe" Kocie Sprawki :-)
if (agt.indexOf('opera')==!-1)
 is_gecko=true;


// platfoma
var is_win = ( (agt.indexOf("win")!=-1) || (agt.indexOf("16bit")!=-1) );
var is_mac = (agt.indexOf("mac")!=-1);
var is_sun = (agt.indexOf("sunos")!=-1);

var href, path, style, s;
var mhref;

function agent_info(){
    document.writeln("<h1 class='j_h1'>"+agt+"</h1>");
    document.writeln("<h3 class='j_h3'>"+path + "/" + href+"</h3>"); 
    document.writeln("<h3 class='j_h3'>"+path + "/" + mhref+"</h3>"); 
}


path = window.location.search;  /* relative path for file under locale dir */


if (path && (s=path.indexOf('path'))!=-1) {
  path = path.substring(s+5);
  if ((s=path.indexOf('&'))!=-1)
    path = path.substring(0, s);
} else
  path = '.';

if (is_ie5up){ // IE5
  href="./webmail/master-style_ie5up.css";
  mhref="./webmail/mail_css_ie5win.css";
}

 else if (is_gecko) {// Netscape 6/7 or Mozilla
  href="./webmail/master-style_ns6up.css";
  mhref="./webmail/mail_css_ns6up.css";
}

 else if (is_nav4 && is_win) // Netscape 4 Windows
  href="./webmail/master-style_ns4win.css";
 
 else if (is_nav4 && is_sun) // Netscape 4 Solaris
  href="./webmail/master-style_ns4sol.css";
 
 else  // All others
  href="./webmail/master-style_ns4sol.css";

style = "<link href=" + path + "/" + href + " type=text/css rel=stylesheet>";
if (mhref) style += "<link href=" + path + "/" + mhref + " type=text/css rel=stylesheet>"
document.write(style);
