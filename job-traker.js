
let totalJobCollection = getElement("job-cards").children;
console.log(totalJobCollection);
let totalInterviewCollection = [1, 4];
let totalRejectedCollection = [1];


getElement("total-jobs").innerText = totalJobCollection.length;
getElement("interview-jobs").innerText = totalInterviewCollection.length;
getElement("rejected-jobs").innerText = totalRejectedCollection.length;




// button toggle

function toggleStyle(id) {
    if(id === "menu-item-all") {
        getElement("menu-item-all").classList.add("menu-toggle");
        getElement("menu-item-interview").classList.remove("menu-toggle");
        getElement("menu-item-rejected").classList.remove("menu-toggle");

    }
    else if(id === "menu-item-interview") {
        getElement("menu-item-all").classList.remove("menu-toggle");
        getElement("menu-item-interview").classList.add("menu-toggle");
        getElement("menu-item-rejected").classList.remove("menu-toggle");

    }
    else if(id === "menu-item-rejected") {
        getElement("menu-item-all").classList.remove("menu-toggle");
        getElement("menu-item-interview").classList.remove("menu-toggle");
        getElement("menu-item-rejected").classList.add("menu-toggle");

    }
}