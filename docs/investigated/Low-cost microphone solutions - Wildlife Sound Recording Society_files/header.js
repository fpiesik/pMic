today=new Date();
month=today.getMonth()+13;
document.write('<style type="text/css">');
document.write("body #logo { background-image: url(" + mypfx + "images/hdr" + month + ".jpg); background-color: #d6def1}");
document.write("</style>");