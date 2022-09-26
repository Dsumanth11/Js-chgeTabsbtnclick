document.getElementById("aboutTab").classList.remove("d-none");
document.getElementById("timeToVisitTab").classList.add("d-none");
document.getElementById("attractionsTab").classList.add("d-none");
document.getElementById("aboutTab").classList.add("col-12");
document.getElementById("aboutButton").style.backgroundColor="white";
document.getElementById("timeToVisitButton").style.backgroundColor="#dae2ec";
document.getElementById("attractionsButton").style.backgroundColor="#dae2ec";
function about()
{
    document.getElementById("aboutButton").style.backgroundColor="white";
    document.getElementById("timeToVisitButton").style.backgroundColor="#dae2ec";
    document.getElementById("attractionsButton").style.backgroundColor="#dae2ec";
    document.getElementById("aboutTab").classList.remove("d-none");
    document.getElementById("timeToVisitTab").classList.add("d-none");
    document.getElementById("attractionsTab").classList.add("d-none");
    document.getElementById("aboutTab").classList.add("col-12");
}
function timeToVisitTab()
{
    document.getElementById("aboutButton").style.backgroundColor="#dae2ec";
    document.getElementById("timeToVisitButton").style.backgroundColor="white";
    document.getElementById("attractionsButton").style.backgroundColor="#dae2ec";
    document.getElementById("timeToVisitTab").classList.remove("d-none");
    document.getElementById("aboutTab").classList.add("d-none");
    document.getElementById("attractionsTab").classList.add("d-none");
    document.getElementById("timeToVisitTab").classList.add("col-12");
}
function attractionsTab()
{
    document.getElementById("aboutButton").style.backgroundColor="#dae2ec";
    document.getElementById("timeToVisitButton").style.backgroundColor="#dae2ec";
    document.getElementById("attractionsButton").style.backgroundColor="white";
    document.getElementById("attractionsTab").classList.remove("d-none");
    document.getElementById("timeToVisitTab").classList.add("d-none");
    document.getElementById("aboutTab").classList.add("d-none");
    document.getElementById("attractionsTab").classList.add("col-12");
}
