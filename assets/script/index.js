async function fetchDataServices() {
    try {
        const response = await fetch("./assets/DB/services.json")
        const data = await response.json();
        return data
    } catch (error) {
        console.error('Error:', error);
        throw error;
    }
}

async function main() {
    const servicesList = document.getElementById("services-list");
    try {
        const dataServices = await fetchDataServices();
        let HTMLStructure = dataServices.reduce((accumulator, item) => {
            const tag = `<p>${item.name}</p>`;
            return accumulator + tag;
        }, '');
        servicesList.innerHTML += HTMLStructure;
    } catch (error) {
        console.error('Failed to create HTML structure:', error);
    }
}

main();