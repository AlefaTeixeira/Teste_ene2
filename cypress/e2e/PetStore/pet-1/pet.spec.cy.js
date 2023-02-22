describe('Cadastramento de animal, teste de métodos GET, POST, PUT e DELETE', ()=>{
    it('Checa o status do PET', ()=>{
        cy.fixture('pet').then((payload)=>{
        cy.petStatus(payload)
        .then((res)=>{
                expect(res.status).to.eq(200);
                expect(res.body).to.not.be.null;
            });
        });
    });
    
    it('Adiciona um novo PET na loja, checa se o mesmo foi cadastrado, atualiza seus dados e por fim o deleta', ()=>{
        cy.fixture('pet').then((payload)=>{
            cy.petCreate(payload)
            .then((res)=>{
                expect(res.status).to.eq(200);
                    expect(res.body).has.property('id', payload.petId);
                    expect(res.body.category).has.property('id', payload.categoryId);
                    expect(res.body.category).has.property('name', payload.categoryName);
                    expect(res.body).has.property('name', payload.petName);
                    expect(res.body.photoUrls).to.deep.eq((payload.photoUrls));
                }).then((res)=>{
                    const ID = res.body.id;
                    cy.log("Pet Id : " + ID)
                    cy.petGetId(ID)
                    .then((res)=>{
                            expect(res.status).to.eq(200);
                            expect(res.body).has.property('id', ID);
                    });
                }).then((res)=>{
                    const ID = res.body.id
                    cy.fixture('updateDataPet.json').then(payload=>{
                        cy.petUpdatePUT(ID, payload)
                        .then((res)=>{
                            expect(res.status).to.eq(200);
                            expect(res.body).has.property('id', ID);
                            expect(res.body.category).has.property('id', payload.categoryId);
                            expect(res.body.category).has.property('name', payload.categoryName);
                            expect(res.body).has.property('name', payload.petName);
                            expect(res.body.photoUrls).to.deep.eq((payload.photoUrls));
                        })
                        }).then((res)=>{
                            const ID = res.body.id;
                            cy.petDelete(ID)
                            .then((res)=>{
                                expect(res.status).to.eq(200);
                                expect(res.body).has.property('code', 200);
                                expect(res.body).has.property('type', 'unknown');
                                expect(res.body).has.property(('message'), String(ID));
                            });
                        });
                     });
                });
             });
          });
