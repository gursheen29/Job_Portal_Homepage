let jobForm = document.getElementById("jobForm");
let jobsContainer = document.getElementById("jobsContainer");
let searchInput = document.getElementById("searchInput");


jobForm.addEventListener("submit", function (e) {
    e.preventDefault();

    let title = document.getElementById("title").value;
    let company = document.getElementById("company").value;
    let location = document.getElementById("location").value;
    let description = document.getElementById("description").value;

 
    let jobCard = document.createElement("div");
    jobCard.classList.add("job-card");

    jobCard.innerHTML = `
        <h3>${title}</h3>
        <p><b>Company:</b> ${company}</p>
        <p><b>Location:</b> ${location}</p>
        <p>${description}</p>
        <button class="updateBtn">Update</button>
        <button class="deleteBtn">Delete</button>
    `;

    jobsContainer.appendChild(jobCard);

    jobForm.reset();
});

jobsContainer.addEventListener("click", function (e) {

 
    if (e.target.classList.contains("deleteBtn")) {
        e.target.parentElement.remove();
    }

   
    if (e.target.classList.contains("updateBtn")) {
        let card = e.target.parentElement;

        let newTitle = prompt("Enter new job title:");
        if (newTitle) {
            card.querySelector("h3").innerText = newTitle;
        }

        let newCompany = prompt("Enter new company name:");
        if (newCompany) {
            card.querySelector("p:nth-child(2)").innerHTML = "<b>Company:</b> " + newCompany;
        }

        let newLocation = prompt("Enter new location:");
        if (newLocation) {
            card.querySelector("p:nth-child(3)").innerHTML = "<b>Location:</b> " + newLocation;
        }
    }
});



searchInput.addEventListener("keyup", function () {

    let searchValue = searchInput.value.toLowerCase();
    let jobCards = document.querySelectorAll(".job-card");

    jobCards.forEach(function (card) {
        let text = card.innerText.toLowerCase();

        if (text.includes(searchValue)) {
            card.style.display = "block";
        } else {
            card.style.display = "none";
        }
    });

});
