// Selecionar os campos de input das telas
const formFields = {
    fullname: document.getElementById('name'),
    phoneNumber: document.getElementById('phone'),
    email: document.getElementById('email'),
    breed: document.getElementById('breed'),
    species: document.getElementById('species'),
    color: document.getElementById('color'),
    description: document.getElementById('description'),
    street: document.getElementById('street'),
    neighborhood: document.getElementById('neighborhood'),
    referencePoint: document.getElementById('reference'),
};

// Função para coletar os dados do formulário conforme DTO RegisterFormDTO
function collectRegisterFormData() {
    return {
        userInfo: {
            fullName: formFields.fullname.value.trim(),
            phoneNumber: formFields.phoneNumber.value.trim(),
            email: formFields.email.value.trim(),
        },
        animalInfo: {
            breed: formFields.breed.value.trim(),
            species: formFields.species.value.trim(),
            color: formFields.color.value.trim(),
            description: formFields.description.value.trim(),
        },
        addressInfo: {
            street: formFields.street.value.trim(),
            neighborhood: formFields.neighborhood.value.trim(),
            referencePoint: formFields.referencePoint.value.trim(),
        },
    };
}

// Função para enviar os dados do registro ao servidor
function sendRegisterFormData() {
    const registerData = collectRegisterFormData();

    fetch('https://petresgate-backend-3203edadfa82.herokuapp.com/api/animals', {
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
        .catch((error) => {
            console.error('Erro:', error);
        });
}

// Adicionar evento ao botão de envio
document.addEventListener('DOMContentLoaded', () => {
    document.querySelector('.sent-button button').addEventListener('click', sendRegisterFormData);
});
