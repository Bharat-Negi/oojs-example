let url = "./data.json";

fetch(url)
  .then((response) => response.json())
  .then((data) => {
    console.log(data);
    ihtml = "";
    for (item in data) {
      console.log(data[item]);
      ihtml += `
      <div class="col-md-3" style="margin-bottom:15px">
                <div class="card block-img">
                                <img src="${data[item].image}" class="card-img-top" alt="...">
                                <div class="card-body">
                                        <h5 class="card-title">${data[item].fullName}</h5>
                                        <p class="card-text">Nick Name: ${data[item].nickname}</p>
                                        <p class="card-text">Birth Date: ${data[item].birthdate} </p>
                                        <p class="card-text">Interpreted By: ${data[item].interpretedBy} </p>
                                        <ul>
                                         ${
                                            Object.entries(data[item].children)
                                            .map(([key, value]) => `<li key="${key}">${value}</li>`)
                                            .join('')
                                         }
                                        </ul>
                                </div>
                        </div>
                </div>
                `;
    }
    cardContainer.innerHTML = ihtml;
  })
  .catch((error) => {
    console.error("Error fetching data:", error);
  });

/* ******************* NOTES APP (REMAINING QUESTIONS OF PRACTICE SET) *********** */
// let n = localStorage.getItem("note")
// alert("Your note is " + n)

// let a = prompt("Enter your note")
// if (a) {
//         localStorage.setItem("note", a)
// }

// let c = confirm("Do you want to delete your note?")
// if (c) {
//         localStorage.removeItem("note")
//         alert("Note deleted successfully!")
// }
