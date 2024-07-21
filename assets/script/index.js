async function fetchData(url) {
    try {
        const response = await fetch(url)
        const data = await response.json();
        return data
    } catch (error) {
        console.error('Error:', error);
        throw error;
    }
}

function createStructureServicesListTag(data) {
    const tag = document.createElement("p");
    const text = document.createTextNode(data);
    tag.appendChild(text);
    return tag;
}

function createStructureTestimonialsListTag(quotesText, clientName) {
    const clientDiv = document.createElement('div');
    clientDiv.className = 'client';

    // Buat elemen <p> untuk quotes dengan class "quotes" dan tambahkan teks
    const quotesP = document.createElement('p');
    quotesP.className = 'quotes';
    const quotesTextNode = document.createTextNode(quotesText);
    quotesP.appendChild(quotesTextNode);

    // Buat elemen <p> untuk client name dengan class "client-name" dan tambahkan teks
    const clientNameP = document.createElement('p');
    clientNameP.className = 'client-name';
    const clientNameTextNode = document.createTextNode(clientName);
    clientNameP.appendChild(clientNameTextNode);

    // Tambahkan elemen <p> ke dalam <div class="client">
    clientDiv.appendChild(quotesP);
    clientDiv.appendChild(clientNameP);


    return clientDiv;
}

// show first 6 data services
async function viewServices(container) {
    container.replaceChildren();
    const dataServices = await fetchData("./assets/DB/services.json");
    const firstDataServices = dataServices.filter((item, index) => index < 6);
    firstDataServices.map(item => {
        const tag = createStructureServicesListTag(item.name);
        container.appendChild(tag);
    });
    viewLessButton.style.display = "none";
    viewMoreButton.style.display = "block";
}

async function main() {
    const servicesList = document.getElementById("services-list");
    const testimonialsList = document.getElementById("testimonials-list")
    try {
        const dataTestimonials = await fetchData("./assets/DB/testimonials.json");
        viewServices(servicesList)
        // show data testimonials
        dataTestimonials.map(item => {
            const tag = createStructureTestimonialsListTag(item.quotes, item.name);
            testimonialsList.appendChild(tag);
        })
    } catch (error) {
        console.error('Failed to create HTML structure:', error);
    }
}

main();