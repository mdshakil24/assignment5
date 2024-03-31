// Scroll to section
function scrollToSection(id){
    const element = document.getElementById(id);
    element.scrollIntoView({behavior: "smooth"});
    console.log(id);
}