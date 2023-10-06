//! innerHTML vs innerText
// const ex = document.createElement("div")
// ex.innerText = "<span>this is span</span>"
// document.body.append(ex)
// const ex1 = document.createElement("div")
// ex1.innerHTML = "<span>this is span</span>"
// document.body.append(ex1)

// *************************************************************************************************************************

//! Element ஐ create செய்து output காண:

// //Step1:
// const a = document.createElement("div")
// //Step2:
// a.innerHTML = "I'm Prabhakaran"
// //Step3:
// document.body.append(variablename)


//! Session Practice Task 1:Create Single Element:

// //Step1:
// const element = document.createElement("div")
// //Step2:
// a.innerHTML = "<span>This is a dynamic span tag</span>"
// //Step3:
// document.body.append(element)

// *************************************************************************************************************************

//! Create and append two or more elements:

// //Step1:
// const element1 = document.createElement("div") ===> element1 = 1st div
// const element2 = document.createElement("div") ===> element2 = 2nd div
// const element3 = document.createElement("span") ===> element3 = 2nd div inside span tag

// //Step2:
// element3.innerHTML = "This is a dynamic span tag"

// //Step3:
// element2.append(element3);          ===> element2 க்குள் element3 இருப்பதால் element3 ஐ append செய்கிறோம்.
// element1.append(element2);          ===> element1 க்குள் element2 இருப்பதால் element2 ஐ append செய்கிறோம்.
// document.body.append(element1);     ===> body க்குள் element1 இருப்பதால் element1 ஐ append செய்கிறோம்.



//! Session Practice Task 2:Create and append two or more elements:

// //Step1:
// const element1 = document.createElement("header") ===> element1 = header
// const element2 = document.createElement("section") ===> element2 = section
// const element3 = document.createElement("span") ===> element3 = span (inside section)
// const element4 = document.createElement("article") ===> element4 = article
// const element5 = document.createElement("paragraph") ===> element5 = paragraph (inside article)

// //Step2:
// element3.innerHTML = "This is a span";
// element5.innerHTML = "This is a paragraph";

// //Step3:
// element4.append(element5);          ===> element4 க்குள் element5 இருப்பதால் element4 ஐ append செய்கிறோம்.
// element2.append(element3);          ===> element2 க்குள் element3 இருப்பதால் element2 ஐ append செய்கிறோம்.
// element1.append(element2, element4); ===> element1 க்குள் element2, element4 இருப்பதால் element1 ஐ append செய்கிறோம்.
// document.body.append(element1);     ===> body க்குள் element1 இருப்பதால் element1 ஐ append செய்கிறோம்.

// *************************************************************************************************************************

//! Setattributes:

// //Step1:
// const element = document.createElement("div")
// //Step2:
// element.setAttribute("class", "container")
// //Step3: 
// a.innerHTML = "This is a setAttribute methods"
// //Step4: 
// document.body.append(element)



// Session Practice Task 3:create an id for setAttribute methods

// //Step1:
//     const att = document.createElement("div")
// //Step2:
// att.setAttribute("class", "container")
// att.setAttribute("id", "container")
// // tep3:
// att.innerHTML = "This is a setAttribute methods"
// //Step4:
// document.body.append(att);

// *************************************************************************************************************************

//! Session Practice Task 4:create element, append, setAttribute and css

//Step1:
const div = document.createElement("div")            //===> div     = div
const header = document.createElement("header")      //===> header  = header
const section = document.createElement("section")   //===> section = section
const span = document.createElement("span")         //===> span    = span (inside section)
const article = document.createElement("article")   //===> article = article
const para = document.createElement("paragraph")    //===> para    = paragraph (inside article)

const div1 = document.createElement("div")
const header1 = document.createElement("header")
const section1 = document.createElement("section")
const span1 = document.createElement("span")
const article1 = document.createElement("article")
const para1 = document.createElement("paragraph")

//Step2:
div.setAttribute("class", "divtask")
header.setAttribute("class", "headertask")
section.setAttribute("class", "sectiontask")
span.setAttribute("class", "spantask")
article.setAttribute("class", "articletask")
para.setAttribute("class", "paratask")

header1.setAttribute("class", "headertask1")
section1.setAttribute("class", "sectiontask1")
span1.setAttribute("class", "spantask1")
article1.setAttribute("class", "articletask1")
para1.setAttribute("class", "paratask1")

//Step3:
span.innerHTML = "This is a span";
para.innerHTML = "This is a paragraph";
span1.innerHTML = "This is a span";
para1.innerHTML = "This is a paragraph";

//Step4:
article.append(para);            //===> article க்குள் para இருப்பதால் article ஐ append செய்கிறோம்.
section.append(span);            //===> section க்குள் span இருப்பதால் section ஐ append செய்கிறோம்.
header.append(section, article); //===> header க்குள் section, article இருப்பதால் header ஐ append செய்கிறோம்.


article1.append(para1);
section1.append(span1);
header1.append(section1, article1);
div.append(header, header1)      //===> header, header1 div க்குள் இருப்பதால் append செய்கிறோம்.
document.body.append(div);

// *************************************************************************************************************************