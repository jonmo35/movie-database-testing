describe('GET /discover/movies http status code 200',function() {
    
         it('Visits Movie Database Website', function() {
                cy.visit('https://www.themoviedb.org/')
                })
         
         it('Verify GET /discover/movies 200 response', function(){
                cy.request('GET', 'https://api.themoviedb.org/3/discover/movie?api_key=606aaffd7ca10f0b80804a1f0674e4e1')
                    .then((response) => {
                            expect(response.status).to.eq(200)
                            expect(response).to.have.property('headers')
                            expect(response).to.have.property('duration')
                            })
         })
         
         it('Verify GET /discover/movies headers', function(){
            cy.request('GET', 'https://api.themoviedb.org/3/discover/movie?api_key=606aaffd7ca10f0b80804a1f0674e4e1')
            .its('headers')
            .its('content-type')
            .should('include', 'application/json')
            })
         
})
