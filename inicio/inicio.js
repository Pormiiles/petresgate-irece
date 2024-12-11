// Função para buscar os animais no backend
async function fetchAnimals() {
  try {
      const response = await fetch('http://localhost:8080/api/animals'); // Endereço do endpoint
      if (!response.ok) {
          throw new Error('Erro ao buscar animais');
      }
      const animals = await response.json();
      displayAnimals(animals);
  } catch (error) {
      console.error('Erro:', error);
      alert('Não foi possível carregar os animais. Tente novamente mais tarde.');
  }
}

// Função para exibir os animais na tela
function displayAnimals(animals) {
  const grid = document.getElementById('pets-grid');
  grid.innerHTML = ''; // Limpa o conteúdo antes de renderizar

  animals.forEach((animal) => {
      const card = document.createElement('div');
      card.className = 'pet-card';
      card.innerHTML = `
          <img src="https://via.placeholder.com/200x150?text=${animal.species}" alt="${animal.species}" />
          <h3>${animal.species} - ${animal.breed}</h3>
          <p>Cor: ${animal.color}</p>
          <p>${animal.description.substring(0, 50)}...</p>
      `;
      card.addEventListener('click', () => {
          window.location.href = `details.html?id=${animal.id}`;
      });
      grid.appendChild(card);
  });
}

// Chamar a função para buscar os animais ao carregar a página
document.addEventListener('DOMContentLoaded', fetchAnimals);
