const{test, expect}=require(`@playwright/test`)

test("My First Test",async function ({page}) {
  
    expect(5).toBe(5)

})

test("MY 2nd Test",async function ({page}) {

    expect(5).toBe(5)
    
})

test("My 3rd Test",async function({page}) {

    expect(101).toBe(101)
    
})