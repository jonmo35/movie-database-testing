describe('GET /discover/movies verify json response data examples',function() {

    it('Visits Movie Database Website', function() {
        cy.visit('https://www.themoviedb.org/')
    })
    
    it('Validate Fight Club json response', function(){
        cy.request({
        method: 'GET',
        url:'https://api.themoviedb.org/3/discover/movie?api_key=606aaffd7ca10f0b80804a1f0674e4e1&with_people=287,819&sort_by=vote_average.desc'})
        .then((response) =>{
              
              expect(response.status).to.eq(200)
              expect(response.body.results["0"].adult).to.eq(false)
              expect(response.body.results["0"].id).to.eq(550)
              expect(response.body.results["0"].original_language).to.eq("en")
              expect(response.body.results["0"].original_title).to.eq("Fight Club")
              expect(response.body.results["0"].popularity).to.be.above(24.5)
              expect(response.body.results["0"].poster_path).to.eq("/adw6Lq9FiC9zjYEpOqfq03ituwp.jpg")
              expect(response.body.results["0"].release_date).to.eq("1999-10-15")
              expect(response.body.results["0"].title).to.eq("Fight Club")
              expect(response.body.results["0"].video).to.eq(false)
              expect(response.body.results["0"].vote_average).to.eq(8.4)
              expect(response.body.results["0"].vote_count).to.be.above(12890)
              expect(response.body.total_results).to.eq(1)
              expect(response.body.total_pages).to.eq(1)
              })
       })
      
      it('Validate Fight Club json response types', function(){
         
            cy.request({
                method: 'GET',
                url:'https://api.themoviedb.org/3/discover/movie?api_key=606aaffd7ca10f0b80804a1f0674e4e1&with_people=287,819&sort_by=vote_average.desc'})
            .then((response) =>{
                  
                  expect(response.body.results["0"].original_language).to.be.a('string')
                  expect(response.body.results["0"].original_title).to.be.a('string')
                  expect(response.body.results["0"].overview).to.a('string')
                  expect(response.body.results["0"].poster_path).to.be.a('string')
                  expect(response.body.results["0"].release_date).to.be.a('string')
                  expect(response.body.results["0"].title).to.be.a('string')
                  
                  expect(response.body.results["0"].video).to.be.a('boolean')
                  expect(response.body.results["0"].adult).to.be.a('boolean')
                  
                  // defect -- api is returning a number not integer
                  expect(response.body.results["0"].id).to.be.a('number')
                  expect(response.body.results["0"].vote_count).to.be.a('number')

                  expect(response.body.results["0"].popularity).to.be.a('number')
                  expect(response.body.results["0"].vote_average).to.be.a('number')
            })
            
      })
})
                    
