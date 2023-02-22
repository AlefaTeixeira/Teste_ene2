
Cypress.Commands.add('petStatus', (payload) => {
    cy.request({
        method : 'GET',
        url : 'https://petstore.swagger.io/v2/pet/findByStatus?status=' + payload.status,
        headers : {
            'accept' : "application/json"
        }
    });
  });

  Cypress.Commands.add('petCreate', (payload) => {
    cy.request({
        method : 'POST',
        url : 'https://petstore.swagger.io/v2/pet',
        headers : {
            'accept' : "application/json",
            'Content-Type' : "application/json"
        },
        body : {
            "id": payload.petId,
            "category": {
                "id": payload.categoryId,
                "name": payload.categoryName
            },
            "name": payload.petName,
            "photoUrls": payload.photoUrls,
            "tags": [
                {
                "id": payload.tagsId,
                "name": payload.tagsName
                }
            ],
            "status": payload.statusPet
        }
    });
  });

  Cypress.Commands.add('petGetId', (ID) => {
    cy.request({
        method : 'GET',
        url : 'https://petstore.swagger.io/v2/pet/' + ID,
        headers : {
            'accept' : "application/json"
        }
    });
  });

  
  Cypress.Commands.add('petUpdatePUT', (ID, payload) => {
    cy.request({
        method : 'PUT',
        url : 'https://petstore.swagger.io/v2/pet',
        headers : {
            'accept' : "application/json",
            'Content-Type' : "application/json"
        },
        body : {
            "id": ID ,
            "category": {
                "id": payload.categoryId,
                "name": payload.categoryName
            },
            "name": payload.petName,
            "photoUrls": payload.photoUrls,
            "tags": [
                {
                "id": payload.tagsId,
                "name": payload.tagsName
                }
            ],
            "status": payload.statusPet
        }
    });

    Cypress.Commands.add('petDelete', (ID) => {
        cy.request({
            method : 'DELETE',
            url : 'https://petstore.swagger.io/v2/pet/' + ID,
            headers : {
                'accept' : "application/json",
                'api_key' : "123asd"
            }
        });
      });    
  });

  Cypress.Commands.add('userNameLogin', (payload) => {
    cy.request({
        method : 'GET',
        url : 'https://petstore.swagger.io/v2/user/login?username=' + payload.user + '&password=' + payload.password ,
        headers : {
            "accept" : "application/json"
        }
  }); 
}); 
  Cypress.Commands.add('createUser', (payload) => {
    cy.request({
        method : 'POST',
        url : 'https://petstore.swagger.io/v2/user',
        headers : {
            'accept' : "application/json",
            'Content-Type' : "application/json"
        },
        body: {
            "id": payload.id,
            "username": payload.username,
            "firstName": payload.firstName,
            "lastName": payload.lastName,
            "email": payload.email,
            "password": payload.password,
            "phone": payload.phone,
            "userStatus": payload.userStatus
        }
  }); 
});

Cypress.Commands.add('userLogout', () => {
    cy.request({
        method : 'GET',
        url : 'https://petstore.swagger.io/v2/user/logout' ,
        headers : {
            "accept" : "application/json"
        }
  }); 
}); 

Cypress.Commands.add('createUserWhithArray', (data) => {
    cy.request({
        method : 'POST',
        url : 'https://petstore.swagger.io/v2/user/createWithArray' ,
        headers : {
            'accept' : "application/json",
            'Content-Type' : "application/json"
        },
        body : [{
            "id": data.id,
            "username": data.username,
            "firstName": data.firstName,
            "lastName": data.lastName,
            "email": data.email,
            "password": data.password,
            "phone": data.phone,
            "userStatus": data.userStatus
            
        }]
  }); 
}); 

Cypress.Commands.add('createPetStore', (payload) => {
        cy.request({
            method : 'POST',
            url : 'https://petstore.swagger.io/v2/store/order',
            headers : {
                'accept' : "application/json",
                'Content-Type' : "application/json"
            },
            body: {
                "id": payload.orderId,
                "petId": payload.petId,
                "quantity": payload.quantity,
                "shipDate": new Date().toISOString(),
                "status": payload.status,
                "complete": payload.complete
            }
  }); 
}); 