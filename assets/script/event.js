async function viewMore() {
    servicesList.replaceChildren();
    const dataServices = await fetchData("./assets/DB/services.json");
    dataServices.map(item => {
        const tag = createStructureServicesListTag(item.name);
        servicesList.appendChild(tag);
    })
    viewMoreButton.style.display = "none";
    viewLessButton.style.display = "block";
}

const servicesList = document.getElementById("services-list");
const viewMoreButton = document.getElementById("view-more");
const viewLessButton = document.getElementById("view-less");
viewMoreButton.addEventListener("click", viewMore);
viewLessButton.addEventListener("click", () => viewServices(servicesList));