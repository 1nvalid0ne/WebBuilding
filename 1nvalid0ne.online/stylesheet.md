/*
html5doctor.com Reset Stylesheet
v1.6.1
Last Updated: 2010-09-17
Author: Richard Clark - http://richclarkdesign.com
Twitter: @rich_clark
*/

html, body, div, span, object, iframe,
h1, h2, h3, h4, h5, h6, p, blockquote, pre,
abbr, address, cite, code,
del, dfn, em, img, ins, kbd, q, samp,
small, strong, sub, sup, var,
b, i,
dl, dt, dd, ol, ul, li,
fieldset, form, label, legend,
table, caption, tbody, tfoot, thead, tr, th, td,
article, aside, canvas, details, figcaption, figure,
footer, header, hgroup, menu, nav, section, summary,
time, mark, audio, video {
    margin:0;
    padding:0;
    border:0;
    outline:0;
    font-size:100%;
    vertical-align:baseline;
    background:transparent;
}

body {
    line-height:1;
    color: black;
}

article,aside,details,figcaption,figure,
footer,header,hgroup,menu,nav,section {
    display:block;
}

nav ul {
    list-style:none;
}

blockquote, q {
    quotes:none;
}

blockquote:before, blockquote:after,
q:before, q:after {
    content:'';
    content:none;
}

a {
    margin:0;
    padding:0;
    font-size:100%;
    vertical-align:baseline;
    background:transparent;
}

/* change colours to suit your needs */
ins {
    background-color:#ff9;
    color:#000;
    text-decoration:none;
}

/* change colours to suit your needs */
mark {
    background-color:#ff9;
    color:#000;
    font-style:italic;
    font-weight:bold;
}

del {
    text-decoration: line-through;
}

abbr[title], dfn[title] {
    border-bottom:1px dotted;
    cursor:help;
}

table {
    border-collapse:collapse;
    border-spacing:0;
}

/* change border colour to suit your needs */
hr {
    display:block;
    height:1px;
    border:0;
    border-top:1px solid #cccccc;
    margin:1em 0;
    padding:0;
}

input, select {
    vertical-align:middle;
}

/*--------------------------MY CODE-------------------------------*/
*{
  text-decoration: none;
  padding: 0;
}
* a:hover{
  text-decoration: underline;
  color: #EFEA60;
}
/* wrapper config */
.wrapper {
  margin: 80%;
}
/* making the default color of the webpages black */
.page{
  margin: auto 10px;
  width: 1000px;
  height: 2000px;
  background-color: black;
}
/* defining font families for use in the website */
@font-face{
  src: url(../fonts/d3dig.ttf);
  font-family: d3dig;
}
@font-face {
  src: url(../fonts/digfireb.ttf);
  font-family: digfireb;
}
@font-face {
  src: url(../fonts/wwDigital.ttf);
  font-family: wwdig;
}
@font-face {
  src: url(../fonts/MHbody.ttf);
  font-family: MHbody;
}
@font-face {
  src: url(../fonts/digcoll.ttf);
  font-family: digcoll;
}
/* editing main and general things within the site pages */
header{
  width: 110%;
  height: 150px;
  background-color: #111;
  /*padding-left: 700px; implement in desktop site*/
}
/* desktop site */
@media only screen and (min-width: 1000px){
  header{
    padding-left: 700px;
  }
  header .menu-title {
    /* ^ the menu title text */
    font-family: wwdig;
    font-size: 45px;
    color: #61F08E;
    display: block;
    padding: 12px 60px;
    display: inline-block;
    margin: 0 auto;
}
header .menu-link{
  padding-top: 15px;
  color: #61F08E;
  font-family: wwdig;
  font-size: 25px;
  display: block;
  text-decoration: none;
  border: 2px solid #61F08E;
  float: right;
}
header nav{
  width: 100%;
  height: 75px;

}
header nav ul{
  margin: 0 ;
}
header nav ul li{
  list-style: none;
  display: inline-block;
  float: left;
  line-height: 60px;
  padding: 0 7px;
}
header nav ul li a{
  text-decoration: none;
  color: #61F08E;
  font-family: wwdig;
  display: block;
  padding: 0 25px;
}
.footer-m2{
  display: block;
  color: white;
}
}
/* end of desktop site */
main {
  width: 100%;
}
header .menu-title {
  /* ^ the menu title text */
  font-family: wwdig;
  font-size: 45px;
  color: #61F08E;
  display: block;
  padding: 12px 60px;
  display: inline-block;
  margin: 0 auto;
}
.menu-title:hover{
  color: red;
  display: block;
}
header .menu-link{
  display: none;
  /*padding-top: 15px;
  text-indent: 1225px;
  color: #61F08E;
  font-family: wwdig;
  font-size: 25px;
  display: block;
  text-decoration: none;
  display: inline-block;
  !add these to the desktop site!*/
}
.menu-link:hover {
  color: #EFEA60;
  text-decoration: underline;
}
p {
  font-family: MHbody;
  color: #F0C992;
  font-size: 18px;
  width: 75%;
  padding-left: 250px;
}
/* adding specs for the menu design */
header nav{
  width: 100%;
  height: 75px;

}
header nav ul{
  display:block;
  margin: 0 auto;
  width: fit-content;
}
header nav ul li{
  list-style: none;
  display: inline-block;
  float: left;
  line-height: 60px;
  padding: 0 7px;
}
header nav ul li a{
  text-decoration: none;
  color: #61F08E;
  font-family: wwdig;
  display: block;
  padding: 0 25px;
}
ul li a:hover{
  color: #EFEA60;
  display:block;
}
/* index */
.index-banner {
  width:100vw;
  height: calc(100vh - 150px);
  background-image: url('../images/site-banner.jpeg');
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
  display: table;
}
.vert-cent {
  display: table-cell;
  vertical-align: middle;
}
.index-banner h2{
  font-family: digcoll;
  color: #fff;
  font-size: 60px;
  text-align: center;
  text-shadow: 2px 2px 8px #61F08E;
  line-height: 100px;
  text-transform: uppercase;
}
.index-banner h1{
  font-family: wwdig;
  color: #fff;
  font-size: 28px;
  text-align: center;
  text-shadow: 2px 2px 8px #61F08E;
  margin: 20px auto;
  font-style: italic;
  line-height: 75px;
  text-transform: uppercase;
}
/* designing and formatting the box links (bl) */

.index-boxlinks div{
  margin: 16px 16px 0;
  width: calc(100vw - 32px);
  height: 100px;
  background-color: #111;

}
.index-boxlinks div h3{
  color: #61F08E;
  font-family: d3dig;
  font-style: italic;
  font-size: 28px;
  text-align: center;
  line-height: 100px;
  text-transform: uppercase;

}
/* styling and creating the footer */
footer{
  width: calc(100% - 80px);
  padding: 40px 40px
  margin-top: 20px;
  background-color: #111;

}
footer ul {
  width: fit-content;
  float: left;
  padding-left: 20px;
}
footer ul li{
  display: block;
  list-style: none
  line-height: 60px
}
footer ul li a{
  text-decoration: none;
  color: #61F08E;
  font-family: wwdig;
  display: block;
  padding: 0 25px;
  font-size: 20px;
  line-height: 35px;

}
.footer-m2{
  display: none;
}
/* img formatting */
.footer-sm{
  width: 60px;
  float: right;
/* overflow: hidden;*/
}
.footer-sm img {
  width: 60px;
margin-bottom: 10px;
}
