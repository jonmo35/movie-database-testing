describe('GET /discover/movies edge cases',function() {
         
         it('Visits Movie Database Website', function() {
            cy.visit('https://www.themoviedb.org/')
            })
         
         it('Verify 422 error code json body response when page is 1001', function(){
            cy.request({
                       method: 'GET',
                       url:'https://api.themoviedb.org/3/discover/movie?api_key=606aaffd7ca10f0b80804a1f0674e4e1&page=1001',
                       failOnStatusCode: false})
            .then((response) =>{
                  expect(response.body.errors["0"]).to.contain("page must be less than or equal to 1000")
                  expect(response.status).to.eq(422)
                  })
            
            })
         
         it('Verify 200 status response when page equals 1000', function(){
            cy.request({
                       method: 'GET',
                       url:'https://api.themoviedb.org/3/discover/movie?api_key=606aaffd7ca10f0b80804a1f0674e4e1&page=1000',
                       failOnStatusCode: false})
            .then((response) =>{
                  expect(response.status).to.eq(200)
                  })
            
            })
         
         it('Verify 422 error code json body response when page equals 0', function(){
            cy.request({
                       method: 'GET',
                       url:'https://api.themoviedb.org/3/discover/movie?api_key=606aaffd7ca10f0b80804a1f0674e4e1&page=0',
                       failOnStatusCode: false})
            .then((response) =>{
                  expect(response.body.errors["0"]).to.contain("page must be greater than 0")
                  expect(response.status).to.eq(422)
                  })
            
            })
         
         it('Verify 502 response - month can not be greater than 12', function(){
            cy.request({
                       method: 'GET',
                       url:'https://api.themoviedb.org/3/discover/movie?api_key=606aaffd7ca10f0b80804a1f0674e4e1&primary_release_date.gte=2014-13-15',
                       failOnStatusCode: false})
            .then((response) =>{
                  expect(response.status).to.eq(502)
                  })
            
            })
         
         it('Verify 502 response - month can not be set to 00', function(){
            cy.request({
                       method: 'GET',
                       url:'https://api.themoviedb.org/3/discover/movie?api_key=606aaffd7ca10f0b80804a1f0674e4e1&primary_release_date.gte=2014-00-15',
                       failOnStatusCode: false})
            .then((response) =>{
                  expect(response.status).to.eq(502)
                  })
            
            })
       
            
})
