describe('Cadastramento e login do usuario', ()=>{
    it('Cadastra um usuario', ()=>{
        cy.fixture('dataUser').then((payload)=>{
            cy.createUser(payload)
            .then((res)=>{
                expect(res.status).to.eq(200);
                expect(res.body).has.property('code', 200);
                expect(res.body).has.property('type', payload.type);
                expect(res.body).has.property('message', String(payload.id));
            });
        });
    });

    it('Login do usuario', ()=>{
        cy.fixture('dataUser').then((payload)=>{
        cy.userNameLogin(payload)
        .then((res)=>{
            expect(res.status).to.eq(200);
            expect(res.body).has.property('code', res.body.code);
            expect(res.body).has.property('type', res.body.type);
            expect(res.body).has.property('message', res.body.message);
            });
        });
    });

    it('Logout do usuario', ()=>{
        cy.fixture('dataUser').then(()=>{
            cy.userLogout()
            .then((res)=>{
                expect(res.status).to.eq(200);
                expect(res.body).has.property('code', res.body.code);
                expect(res.body).has.property('type', res.body.type);
                expect(res.body).has.property('message', res.body.message);
            });
        });
    });

    it('Cadastrar um usuario com array', ()=>{ //Faz a criação do usuario dentro da lista de um array
            cy.fixture('arrayUser').then(testdata =>{
                testdata.forEach(data => {
                    cy.createUserWhithArray(data).then((res)=>{
                        expect(res.status).to.eq(200);
                        expect(res.body).has.property('code', 200);
                        expect(res.body).has.property('type', 'unknown');
                        expect(res.body).has.property('message', 'ok');
                    });
                });
            });  
         });
    });
