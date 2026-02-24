let totalInterviewCollection = [];
let totalRejectedCollection = [];
let currentStatus = "all";

const filterContainer = document.getElementById("filter-container");
const jobsCards = document.getElementById("job-cards");
const mainContainer = document.querySelector("main");

let totalJobs = document.getElementById("total-jobs");
let totalInterview = document.getElementById("interview-jobs");
let totalRejected = document.getElementById("rejected-jobs");

const menuItemAll = document.getElementById("menu-item-all");
const menuItemInterview = document.getElementById("menu-item-interview");
const menuItemRejected = document.getElementById("menu-item-rejected");


let jobs = document.getElementById("jobs");


function countJobs() {
  totalJobs.innerText = jobsCards.children.length;
  totalInterview.innerText = totalInterviewCollection.length;
  totalRejected.innerText = totalRejectedCollection.length;
}
countJobs();


// toggling tab
function toggleStyle(id) {

  menuItemAll.classList.remove("menu-toggle");
  menuItemInterview.classList.remove("menu-toggle");
  menuItemRejected.classList.remove("menu-toggle");

  const selected = document.getElementById(id);
  selected.classList.add("menu-toggle");

  currentStatus = id;

  countJobs();
  
  if (id === "menu-item-all") {

      jobsCards.classList.remove("hidden");
      filterContainer.classList.add("hidden");
      jobs.innerText = jobsCards.children.length + " jobs";
      renderAll()

    } else if (id === "menu-item-interview") {

        jobsCards.classList.add("hidden");
        filterContainer.classList.remove("hidden");
        jobs.innerText = totalInterviewCollection.length + " jobs";
        renderInterview();

    } else if (id === "menu-item-rejected") {

        jobsCards.classList.add("hidden");
        filterContainer.classList.remove("hidden");
        jobs.innerText = totalRejectedCollection.length + " jobs";
        renderRejected();
    }
}



// bubling delegation
document.querySelector("main").addEventListener("click", function (event) {

    let selectedCard = event.target.closest(".job-card");
    if (!selectedCard) return;
    

    if (event.target.classList.contains("interview-btn")) {

    let jobName = selectedCard.querySelector(".job-name").innerText;
    let title = selectedCard.querySelector(".title").innerText;
    let salary = selectedCard.querySelector(".salary").innerText;
    let jobDetails = selectedCard.querySelector(".job-details").innerText;
    selectedCard.querySelector(".not-applied").innerText = "INTERVIEW";
    selectedCard.querySelector(".not-applied").classList.add("interview-status");
    selectedCard.querySelector(".not-applied").classList.remove("rejected-status");
    
    const cardDetails = {
        jobName,
        status: "INTERVIEW",
        title,
        salary,
        jobDetails
    };

    updateAllTabStatus(jobName, "INTERVIEW");

    totalRejectedCollection = totalRejectedCollection.filter(
        (item) => item.jobName !== cardDetails.jobName,
    );
    let jobExist = totalInterviewCollection.find(
        (item) => item.jobName == cardDetails.jobName,
    );
    
    if (!jobExist) {
        totalInterviewCollection.push(cardDetails);
    }
    
    if (currentStatus == 'menu-item-rejected') {
        renderRejected()
    }
    
    countJobs();

    if(currentStatus == "menu-item-rejected") {
            jobs.innerText =  totalRejectedCollection.length + " jobs"
        }



  } else if (event.target.classList.contains("rejected-btn")) {

    
    let jobName = selectedCard.querySelector(".job-name").innerText;
    let title = selectedCard.querySelector(".title").innerText;
    let salary = selectedCard.querySelector(".salary").innerText;
    let jobDetails = selectedCard.querySelector(".job-details").innerText;
    selectedCard.querySelector(".not-applied").innerText = "REJECTED";
    selectedCard.querySelector(".not-applied").classList.add("rejected-status");
    selectedCard.querySelector(".not-applied").classList.remove("interview-status");
    
    const cardDetails = {
        jobName,
        status: "REJECTED",
        title,
        salary,
        jobDetails
    };


    updateAllTabStatus(jobName, "REJECTED");


    totalInterviewCollection = totalInterviewCollection.filter(
        (item) => item.jobName !== cardDetails.jobName,
    );
    let jobExist = totalRejectedCollection.find(
        (item) => item.jobName == cardDetails.jobName,
    );
    if (!jobExist) {
        totalRejectedCollection.push(cardDetails);
    }
    
    if (currentStatus == 'menu-item-interview') {
        renderInterview()
    }
    
}
countJobs();

if (currentStatus == "menu-item-interview") {
    renderInterview();
    jobs.innerText = totalInterviewCollection.length + " jobs";
} 
else if (currentStatus == "menu-item-rejected") {
    renderRejected();
    jobs.innerText = totalRejectedCollection.length + " jobs";
}



// removing card on clicking on delete button
if (event.target.classList.contains("delete-btn")) {

    let selectedCard = event.target.closest(".job-card");
    if (!selectedCard) return;

    let jobName = selectedCard.querySelector(".job-name").innerText;

    totalInterviewCollection = totalInterviewCollection.filter(
        (item) => item.jobName !== jobName
    );

    totalRejectedCollection = totalRejectedCollection.filter(
        (item) => item.jobName !== jobName
    );

    let allCards = jobsCards.querySelectorAll(".job-card");

    // backward loop are driven, beacause we are removing items from the dom, if we loop forward, 
    // the index will get messed up after removing an item
    for (let i = allCards.length - 1; i >= 0; i--) {
    let name = allCards[i].querySelector(".job-name").innerText;

    if (name === jobName) {
        allCards[i].remove();
    }
    }


    if (currentStatus === "menu-item-interview") {
        renderInterview();
        jobs.innerText = totalInterviewCollection.length + " jobs";
    }

    else if (currentStatus === "menu-item-rejected") {
        renderRejected();
        jobs.innerText = totalRejectedCollection.length + " jobs";
    }

    countJobs();
}

});


// interview section cards rendering
function renderInterview() {
  filterContainer.innerHTML = "";

  if (totalInterviewCollection.length == 0) {

    filterContainer.innerHTML = `<section id="emty-job" class="emty-job py-27.5 m-auto max-w-277.5 w-111/160 flex-col gap-5">
                 <img class="w-25 block h-auto m-auto" src="./Asset/emty-file.png" alt="">
                 <div class="emty-content text-center">
                     <h3 class="font-semibold text-2xl">No Jobs Available</h3>
                     <p class="text-[#64748B]">Check back soon for new job opportunities</p>
                 </div>
             </section>`;

  } else {
    for (const item of totalInterviewCollection) {

        if (item.status === "INTERVIEW") {
          statusClass = "interview-status";
        } else {
          statusClass = "";
        }
        
        if (item.status === "REJECTED") {
          statusClass = "rejected-status";
        } else {
          statusClass = statusClass; 
        }


      let div = document.createElement("div");
      div.className = "job-card p-6";
      div.innerHTML = `
            <div class="card-title flex justify-between">
                    <div class="card-title-left">
                        <h3 class="job-name font-semibold text-[18px]">${item.jobName}</h3>
                        <p class="title text-[#64748B]">${item.title}</p>
                    </div>
                    <div class="card-title-right">
                        <i class="delete-btn fa-regular fa-trash-can text-[#64748B]"></i>
                    </div>
                </div>

                <p class="salary py-5 text-[#64748B]">${item.salary}</p>
                <!-- application status -->
                <div class="application-status">
                    <button class="btn not-applied interview-status px-3 py-2">${item.status}</button>
                    <p class="job-details text-[14px] mb-5">${item.jobDetails}</p>
                </div>
                <!-- interview and reject buttons -->
                <div class="buttons flex gap-2">
                    <button
                        class="interview-btn px-3 py-2 text-[#10B981] border border-[#10B981] rounded-lg">INTERVIEW</button>
                    <button
                        class="rejected-btn px-3 py-2 text-[#EF4444] border border-[#EF4444] rounded-lg">REJECTED</button>
                </div>
            `;
      filterContainer.append(div);
    }
  }
}


// rejected section cards rendering
function renderRejected() {
  filterContainer.innerHTML = "";

  if (totalRejectedCollection.length == 0) {

    filterContainer.innerHTML = `<section id="emty-job" class="emty-job py-27.5 m-auto max-w-277.5 w-111/160 flex-col gap-5">
                 <img class="w-25 block h-auto m-auto" src="./Asset/emty-file.png" alt="">
                 <div class="emty-content text-center">
                     <h3 class="font-semibold text-2xl">No Jobs Available</h3>
                     <p class="text-[#64748B]">Check back soon for new job opportunities</p>
                 </div>
             </section>`;

  } else {
    for (const item of totalRejectedCollection) {


      let div = document.createElement("div");
      div.className = "job-card p-6";
      div.innerHTML = `
            <div class="card-title flex justify-between">
                    <div class="card-title-left">
                        <h3 class="job-name font-semibold text-[18px]">${item.jobName}</h3>
                        <p class="title text-[#64748B]">${item.title}</p>
                    </div>
                    <div class="card-title-right">
                        <i class="delete-btn fa-regular fa-trash-can text-[#64748B]"></i>
                    </div>
                </div>

                <p class="salary py-5 text-[#64748B]">${item.salary}</p>
                <!-- application status -->
                <div class="application-status">
                    <button class="btn not-applied rejected-status px-3 py-2">${item.status}</button>
                    <p class="job-details text-[14px] mb-5">${item.jobDetails}</p>
                </div>
                <!-- interview and reject buttons -->
                <div class="buttons flex gap-2">
                    <button
                        class="interview-btn px-3 py-2 text-[#10B981] border border-[#10B981] rounded-lg">INTERVIEW</button>
                    <button
                        class="rejected-btn px-3 py-2 text-[#EF4444] border border-[#EF4444] rounded-lg">REJECTED</button>
                </div>
            `;
      filterContainer.append(div);
    }
  }
}


// Rendering all tab cards after clicking on all tab
function updateAllTabStatus(jobName, newStatus) {

    let allCards = jobsCards.querySelectorAll(".job-card");

    for (let i = 0; i < allCards.length; i++) {

        let card = allCards[i];
        let name = card.querySelector(".job-name").innerText;

        if (name === jobName) {

            let statusBtn = card.querySelector(".not-applied");

            statusBtn.innerText = newStatus;

            statusBtn.classList.remove("interview-status");
            statusBtn.classList.remove("rejected-status");

            if (newStatus === "INTERVIEW") {
                statusBtn.classList.add("interview-status");
            }

            if (newStatus === "REJECTED") {
                statusBtn.classList.add("rejected-status");
            }

            break; 
        }
    }
}