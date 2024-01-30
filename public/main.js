
document.addEventListener('DOMContentLoaded', (event) => {
    const form = document.getElementById('serviceForm');
    const formContainer = document.getElementById('formContainer');
    const recapContainer = document.getElementById('recapContainer');
    
    form.addEventListener('submit', (event) => {
        event.preventDefault(); 

        const companyName = document.getElementById('companyName').value;
        const date = document.getElementById('date').value;
        const observations = document.getElementById('observations').value;

        
        document.getElementById('recapCompanyName').textContent = companyName;
        document.getElementById('recapDate').textContent = date;
        document.getElementById('recapObservations').textContent = observations;

        
        formContainer.style.display = 'none';
        recapContainer.style.display = 'block';
    });
});

function printRecap() {
    window.print();
}

