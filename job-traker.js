let totalJobCollection = getElement("job-cards").children;
let totalInterviewCollection = [];
let totalRejectedCollection = [];

getElement("total-jobs").innerText = totalJobCollection.length;
getElement("interview-jobs").innerText = totalInterviewCollection.length;
getElement("rejected-jobs").innerText = totalRejectedCollection.length;

// button toggle

function toggleStyle(id) {
  if (id === "menu-item-all") {
    getElement("menu-item-all").classList.add("menu-toggle");
    getElement("menu-item-interview").classList.remove("menu-toggle");
    getElement("menu-item-rejected").classList.remove("menu-toggle");
    getElement("toggling-container").classList.add("hidden")

    function addAllJobs() {
      for (let i = 0; i < totalJobCollection.length; i++) {
        totalJobCollection[i].classList.remove("hidden");
      }
    }
    addAllJobs();
  } else if (id === "menu-item-interview") {
    getElement("menu-item-all").classList.remove("menu-toggle");
    getElement("menu-item-interview").classList.add("menu-toggle");
    getElement("menu-item-rejected").classList.remove("menu-toggle");

    function removeAllJobs() {
      for (let i = 0; i < totalJobCollection.length; i++) {
        totalJobCollection[i].classList.add("hidden");
      }

      if (totalInterviewCollection.length == 0) {
        let emtyJob = getElement("emty-job");
        let interviewContainer = getElement("job-cards");
        interviewContainer.append(emtyJob);
        emtyJob.style.display = "block";
        getElement("emty-job-rejected").classList.add("hidden")
      } else {
        getElement("emty-job").style.display = "none";
        getElement("emty-job-interview").classList.remove("hidden");
        getElement("toggling-container").classList.remove("hidden")
        for (const item of totalInterviewCollection) {
        }

      }
    }

    removeAllJobs();

    function interviewCount() {}
    interviewCount();
  } else if (id === "menu-item-rejected") {
    getElement("menu-item-all").classList.remove("menu-toggle");
    getElement("menu-item-interview").classList.remove("menu-toggle");
    getElement("menu-item-rejected").classList.add("menu-toggle");

    function removeAllJobs() {
      for (let i = 0; i < totalJobCollection.length; i++) {
        totalJobCollection[i].classList.add("hidden");
      }

      if (totalRejectedCollection.length == 0) {
        let emtyJob = getElement("emty-job");
        let rejectedContainer = getElement("job-cards");
        rejectedContainer.append(emtyJob);
        emtyJob.style.display = "block";
        getElement("emty-job-interview").classList.add("hidden")
      } else {
        getElement("emty-job").style.display = "none";
        getElement("emty-job-rejected").classList.remove("hidden");
        getElement("toggling-container").classList.remove("hidden")
        for (const item of totalRejectedCollection) {

        }
        
      }
    }

    removeAllJobs();
  }
}
