const validatePassword = require('./validatePassword')


test("return false given an empty string",()=>{

  expect(validatePassword("")).toBe(false)  
})

test("return true given a password 8 characters or longer, a letter and a number", ()=>{
expect(validatePassword("1234567")).toBe(false)

})

test("return true given a password 8 characters or longer, a letter and a number", ()=>{
    expect(validatePassword("1234567a")).toBe(true)
    expect(validatePassword("1234567A")).toBe(true)
    
})

test("return true given a password 8 characters or longer, a letter and a number", ()=>{
    expect(validatePassword("dfkfdsid")).toBe(false)
    
})

test("return true given a password 8 characters or longer, a letter and a number", ()=>{
    expect(validatePassword("DFFRETRF")).toBe(false)
    
})

test("return true given a password 8 characters or longer, a letter and a number", ()=>{
    expect(validatePassword("a2")).toBe(false)
    
})