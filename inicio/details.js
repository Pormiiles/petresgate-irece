// Função para obter os parâmetros da URL
function getUrlParam(param) {
    const urlParams = new URLSearchParams(window.location.search);
    return urlParams.get(param);
}

// Função para buscar os detalhes do animal no backend
async function fetchAnimalDetails(id) {
    try {
        const response = await fetch(`http://localhost:8080/api/animals/${id}`);
        if (!response.ok) {
            throw new Error('Erro ao buscar detalhes do animal');
        }
        const animal = await response.json();
        displayAnimalDetails(animal);
    } catch (error) {
        console.error('Erro:', error);
        alert('Não foi possível carregar os detalhes do animal. Tente novamente mais tarde.');
    }
}

// Função para exibir os detalhes do animal na tela
function displayAnimalDetails(animal) {
    document.getElementById('pet-image').src = `https://via.placeholder.com/400x300?text=${animal.species}`;
    document.getElementById('pet-title').textContent = `${animal.species} - ${animal.breed}`;
    document.getElementById('pet-color').textContent = `Cor: ${animal.color}`;
    document.getElementById('pet-description').textContent = `Descrição: ${animal.description}`;
    document.getElementById('pet-owner').textContent = `Registrado por: ${animal.registeredBy.fullname} (${animal.registeredBy.email})`;
}

// Obtém o ID do animal da URL e carrega os detalhes
const animalId = getUrlParam('id');
if (animalId) {
    fetchAnimalDetails(animalId);
} else {
    alert('ID do animal não especificado.');
}