 function GoCountry(obj) {

if (obj[obj.selectedIndex].value!="")
self.location=obj[obj.selectedIndex].value;

 }

//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

 function GoMain() {
if (document.mainmenu.menu.options[document.mainmenu.menu.options.selectedIndex].value != "") 
   self.location=document.mainmenu.menu.options[document.mainmenu.menu.options.selectedIndex].value;
  }

//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

function  PrintDate() {

today  = new Date();

WeekDays =new Array ('�����������','�����������','�������','�����','�������','�������','�������')
Months =new Array ('������','�������','�����','������','���','����','����','�������','��������','�������','������','�������')

if (navigator.userAgent.indexOf("MSIE")!='-1' && navigator.userAgent.indexOf("Opera")==-1)
 document .write ( WeekDays[today.getDay()]+', '+today.getDate()+' '+Months[today.getMonth()]+', '+today.getYear())
else
 document .write ( WeekDays[today.getDay()]+', '+today.getDate()+' '+Months[today.getMonth()])

}

//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

  function GoMain() {
if (document.mainmenu.menu.options[document.mainmenu.menu.options.selectedIndex].value != "") 
   self.location=document.mainmenu.menu.options[document.mainmenu.menu.options.selectedIndex].value;
  }
