describe('GET /discover/movies successful response',function() {
    
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
         
         it('returns JSON', function(){
            cy.request('GET', 'https://api.themoviedb.org/3/discover/movie?api_key=606aaffd7ca10f0b80804a1f0674e4e1')
            .its('headers')
            .its('content-type')
            .should('include', 'application/json')
            })
         
         it('Verify json response body with no filters', function(){
            cy.request('GET', 'https://api.themoviedb.org/3/discover/movie?api_key=606aaffd7ca10f0b80804a1f0674e4e1')
            .then((response) => {
                  expect(response.body.page).to.eq(1)
                  expect(response.body.total_pages).to.eq(18439)
                  expect(response.body.total_results).to.eq(368779)
                  })
                
            })
})
