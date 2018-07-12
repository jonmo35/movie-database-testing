describe('GET /discover/movies various error responses',function() {
    
    it('Visits Movie Database Website', function() {
        cy.visit('https://www.themoviedb.org/')
    })
    
    it('Verify 401 error code json body response', function(){
       cy.request({
                  method: 'GET',
                  url:'https://api.themoviedb.org/3/discover/movie?api_key=INVALID',
                  failOnStatusCode: false})
       .then((response) =>{
                    expect(response.body.status_code).to.eq(7)
                    expect(response.body.status_message).to.eq("Invalid API key: You must be granted a valid key.")
                    expect(response.body.success).to.eq(false)
             })
       
    })
         

    it('Verify 401 error status code WITH INVALID Key',function(){
       cy.request({
            method: 'GET',
            url:'https://api.themoviedb.org/3/discover/movie?api_key=INVALID',
            failOnStatusCode: false})
        .then((response)=>{
            expect(response.status).to.eq(401)
            expect(response).to.have.property('headers')
            expect(response).to.have.property('duration')
        })

    })
         
    it('Verify 401 error status code WITHOUT authorization Key',function(){
        cy.request({
            method: 'GET',
            url:'https://api.themoviedb.org/3/discover/movie?api_key',
            failOnStatusCode: false})
        .then((response)=>{
            expect(response.status).to.eq(401)
            expect(response).to.have.property('headers')
            expect(response).to.have.property('duration')
        })
            
    })
    
    it('Verify 401 error code json body response WITHOU authorization key', function(){
        cy.request({
            method: 'GET',
            url:'https://api.themoviedb.org/3/discover/movie?api_key=',
            failOnStatusCode: false})
        .then((response) =>{
            expect(response.body.status_code).to.eq(7)
            expect(response.body.status_message).to.eq("Invalid API key: You must be granted a valid key.")
            expect(response.body.success).to.eq(false)
        })
            
    })
         
    it('Verify 404 error status code WITHOUT authorization key',function(){
        cy.request({
            method: 'GET',
            url:'https://api.themoviedb.org/3/discover/movies?api_keys=606aaffd7ca10f0b80804a1f0674e4e1',
            failOnStatusCode: false})
         .then((response)=>{
                  expect(response.status).to.eq(404)
                  expect(response).to.have.property('headers')
                  expect(response).to.have.property('duration')
                  })
       })
       
    it('Verify 404 json body response', function(){
        cy.request({
            method: 'GET',
            url:'https://api.themoviedb.org/3/discover/movies?api_keys=606aaffd7ca10f0b80804a1f0674e4e1',
            failOnStatusCode: false})
       .then((response)=>{
             expect(response.body.status_code).to.eq(34)
             expect(response.body.status_message).to.eq("The resource you requested could not be found.")
             expect(response.body.success).to.eq(false)
        })
    })
    
    it('Verify 502 json body response', function(){
        cy.request({
            method: 'GET',
            url:'https://api.themoviedb.org/3/discover/movie?api_key=606aaffd7ca10f0b80804a1f0674e4e1&release_date.gte=invalid&release_date.lte=invalid',
            failOnStatusCode: false})
        .then((response)=>{
            expect(response.body.status_code).to.eq(43)
            expect(response.body.status_message).to.eq("Couldn't connect to the backend server.")
            expect(response.body.success).to.eq(false)
        })
    })
         
    it('Verify 502 error status response', function(){
        cy.request({
            method: 'GET',
            url:'https://api.themoviedb.org/3/discover/movie?api_key=606aaffd7ca10f0b80804a1f0674e4e1&release_date.gte=invalid&release_date.lte=invalid',
            failOnStatusCode: false})
       .then((response)=>{
             expect(response.status).to.eq(502)
             expect(response).to.have.property('headers')
             expect(response).to.have.property('duration')
        })
    })
       
})
