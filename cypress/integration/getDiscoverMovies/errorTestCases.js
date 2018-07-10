describe('GET /discover/movies error response',function() {
    
    it('Visits Movie Database Website', function() {
        cy.visit('https://www.themoviedb.org/')
    })
    
    it('Verify GET /discover/movies error json response', function(){
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
         
    it('Verify 401 error status code',function(){
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
    
})
