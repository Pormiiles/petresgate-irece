// Selecionar os campos de input das telas
const formFields = {
    // Campos de dados pessoais
    fullname: document.getElementById('name'),
    phoneNumber: document.getElementById('phone'),
    email: document.getElementById('email'),

    // Campos de dados do animal
    breed: document.getElementById('breed'),
    species: document.getElementById('species'),
    color: document.getElementById('color'),
    description: document.getElementById('description'),

    // Campos de localização do animal
    street: document.getElementById('street'),
    neighborhood: document.getElementById('neighborhood'),
    referencePoint: document.getElementById('reference'),
};

// Função para coletar os dados do formulário de acordo com o DTO RegisterFormDTO
function collectRegisterFormData() {
    return {
        fullname: formFields.fullname ? formFields.fullname.value.trim() : '',
        phoneNumber: formFields.phoneNumber ? formFields.phoneNumber.value.trim() : '',
        email: formFields.email ? formFields.email.value.trim() : '',
        species: formFields.species ? formFields.species.value.trim() : '',
        color: formFields.color ? formFields.color.value.trim() : '',
        description: formFields.description ? formFields.description.value.trim() : '',
        breed: formFields.breed ? formFields.breed.value.trim() : '',
        street: formFields.street ? formFields.street.value.trim() : '',
        neighborhood: formFields.neighborhood ? formFields.neighborhood.value.trim() : '',
        referencePoint: formFields.referencePoint ? formFields.referencePoint.value.trim() : '',
    };
}

// Função para coletar os dados de atualização (UpdateFormDTO)
function collectUpdateFormData() {
    return {
        street: formFields.street.value.trim(),
        neighborhood: formFields.neighborhood.value.trim(),
        referencePoint: formFields.referencePoint.value.trim(),
    };
}

// Função para enviar os dados do registro ao servidor
function sendRegisterFormData() {
    const registerData = collectRegisterFormData();

    // Envio dos dados usando fetch
    fetch('http://localhost:8080/api/animals', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(registerData),
    })
    .then((response) => {
        if (response.ok) {
            alert('Animal registrado com sucesso!');
        } else {
            throw new Error('Erro ao registrar o animal');
        }
    })
    .then((data) => {
        console.log('Resposta do servidor:', data);
    })
    .catch((error) => {
        console.error('Erro:', error);
    });
}

// Adicionar evento ao botão de envio para registro
document.addEventListener('DOMContentLoaded', () => {
    document.querySelector('.sent-button button').addEventListener('click', sendRegisterFormData);
});