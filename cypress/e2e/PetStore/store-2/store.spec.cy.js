
describe('Cadastramento de animal na loja e busca pelo mesmo no inventario', ()=>{
    it.only('Cadastra um animal na loja', ()=>{
        cy.fixture('dataStore').then((payload)=>{
            cy.createPetStore(payload).then((res)=>{
                expect(res.status).to.eq(200)
                expect(res.body).has.property('id', payload.orderId)
                expect(res.body).has.property('petId', payload.petId)
                expect(res.body).has.property('quantity', payload.quantity)
                expect(res.body).has.property('status', payload.status)
                expect(res.body).has.property('complete', payload.complete); 
         });
      });
    });

    it.only('Busca o animal no inventario', ()=>{
        cy.fixture('dataStore').then((payload)=>{
        const id = payload.orderId;
        cy.request({
            method : 'DELETE',
            url : `https://petstore.swagger.io/v2/store/order/${id}`,
            headers : {
                'accept' : "application/json"
            }
        }).then((res)=>{
            expect(res.status).to.eq(200)
            expect(res.body).has.property('code', payload.code)
            expect(res.body).has.property('type', payload.type)
            
             });
        });
    });
});