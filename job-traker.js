let totalInterviewCollection = [];
let totalRejectedCollection = [];
let currentStatus = "";

let totalJobCollection = getElement("job-cards");
let totalJobs =  document.getElementById("total-jobs");
let totalInterview = document.getElementById("interview-jobs");
let totalRejected = document.getElementById("rejected-jobs");

const menuItemAll = document.getElementById("menu-item-all");
const menuItemInterview = document.getElementById("menu-item-interview");
const menuItemRejected = document.getElementById("menu-item-rejected"); 

const filterContainer = document.getElementById("filter-container");
const jobsCards = document.getElementById("job-cards");
const mainContainer = document.querySelector("main");


function countJobs() {
    totalJobs.innerText = totalJobCollection.classList.length;
    totalInterview.innerText = totalInterviewCollection.length;
    totalRejected.innerText = totalRejectedCollection.length;

}
countJobs()

function toggleStyle(id) {
    menuItemAll.classList.remove("menu-toggle");
    menuItemInterview.classList.remove("menu-toggle");
    menuItemRejected.classList.remove("menu-toggle");

    const selected = document.getElementById(id);


    currentStatus = id

    selected.classList.add("menu-toggle");


    if(id == "menu-item-interview") {
        jobsCards.classList.add("hidden");
        filterContainer.classList.remove("hidden");
        renderInterview()
    }  else if(id == "menu-item-all") {
        jobsCards.classList.remove("hidden");
        filterContainer.classList.add("hidden");

    }  else if(id == "menu-item-rejected") {
        jobsCards.classList.add("hidden");
        filterContainer.classList.remove("hidden");
        renderRejected()
        
    }



}





































