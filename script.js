const body= document.querySelector("body");

const head= document.createElement("header");
const nav= document.createElement("nav");
const ul= document.createElement("ul");
const home= document.createElement("li");
const about= document.createElement("li");
const contacts= document.createElement("li");
const img= document.createElement("img");
const imgDiv= document.createElement("div");
const homeSection= document.createElement("div");
const aboutSection= document.createElement("div");
const contactSection= document.createElement("div");
// const linkHome= document.createElement("a");
// const linkAbout= document.createElement("a");
// const linkContact= document.createElement("a");



// structure tree
body.appendChild(head);
head.appendChild(nav);
nav.appendChild(ul);
ul.appendChild(home);
ul.appendChild(about);
ul.appendChild(contacts);

home.innerHTML="HOME";
about.innerHTML="ABOUT";
contacts.innerHTML="CONTACTS";

home.id= "home";
about.id= "about";
contacts.id= "contacts";
// home.appendChild(linkHome);
// about.appendChild(linkAbout);
// contacts.appendChild(linkContact);
// linkHome.href="#homeSection";
// linkAbout.href="#aboutSection";
// linkContact.href="#contactSection";



head.appendChild(imgDiv);
imgDiv.appendChild(img);
imgDiv.id="imgDiv";


body.appendChild(homeSection);
body.appendChild(aboutSection);
body.appendChild(contactSection);

homeSection.id="homeSection";
aboutSection.id="aboutSection";
contactSection.id="contactSection";

homeSection.textContent= "content for home section ";
aboutSection.textContent= "content for about section ";
contactSection.textContent= "content for contacts section ";

home.addEventListener("click", function(){
   homeSection.scrollIntoView({behavior: "smooth" });
});
about.addEventListener("click", function(){
   aboutSection.scrollIntoView({behavior: "smooth" });
});
contacts.addEventListener("click", function(){
   contactSection.scrollIntoView({behavior: "smooth" });
});








