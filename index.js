const loadCountry = () => {
    const URL = "https://openapi.programming-hero.com/api/ai/tools";
    fetch(URL)
    .then((res) => res.json())
    .then((data) => showCards(data.data.tools.slice(0, 6)
        ));
}

const showCards = (cards) => {
    const cardContainer = document.getElementById("card");
    cardContainer.innerHTML="";
        
    cards.forEach((card) => {
        // console.log(card);

        const newDiv = document.createElement("div")
        newDiv.innerHTML=`
        <div class="col">
            <div class="card h-100">

                <img src="${card.image}" class="card-img-top " alt="...">

                <div class="card-body ">
                  <h4 class="card-title py-3 ">Features</h4>

                  <p class="card-text ">1. ${card.features[0] || " there is no data"}</p>
                  <p class="card-text ">2. ${card.features[1]}</p>
                  <p  class="card-text ">3. ${card.features[2] || "There is no data" }</p>

                  <div class="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-1 border-bottom"></div>
                  

                  <div>
                  <h3 class="card-title ps-2 py-3 ">${card.name}</h3>

                  <p class="card-text ps-2"><span class="pe-2"><i class="fa-sharp fa-regular fa-calendar-days"></i></span>${card.published_in}</p>

                  </div>

            
                  <div class="btn-arrow">
                  <button data-bs-toggle="modal" data-bs-target="#staticBackdrop" onclick="fetchCardDetails('${card.id}')" type="button" class="btn btn-primary btn-floating btn-circle mb-2 me-2 ">
                  <i class="fa-solid fa-arrow-right"></i></i>
                  </button>
                  </div>
                  

                </div>
            </div>
        </div>
        `
        cardContainer.appendChild(newDiv);
    }) 
}
loadCountry();



const showAllDataTogether = () => {
    document.getElementById("spinner").classList.remove("d-none");
    const URL = "https://openapi.programming-hero.com/api/ai/tools";
    fetch(URL)
    .then((res) => res.json())
    .then((data) => {
    document.getElementById("spinner").classList.add("d-none");
    showCards(data.data.tools);
   });
}




const fetchCardDetails = (id) => {
    const URL = `https://openapi.programming-hero.com/api/ai/tool/${id}`;
    fetch(URL)
    .then((res) => res.json())
    .then((data) => showCardDetails(data.data));
}

const showCardDetails = (cardDetails) => {
 
}