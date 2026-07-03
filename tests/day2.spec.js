const{test,expect}=require(`@playwright/test`)

test("Today's 1st Test",async function({page}) {

    expect("For String").toContain("For String")  //for sring use > .toContain
    
})

test.only("2nd Test",async function ({page}) {
    
    expect(101).toBe(101)  //For integer use > .toBe
    expect(true).toBeTruthy()
})

test.skip("3rd Test",async function({page}) {

    expect("Manish").toContain("Anish")
    //expect(false).toBeFalsy()
    
})

