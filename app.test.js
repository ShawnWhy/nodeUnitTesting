import app from './app.js'
import request from 'supertest'


describe("POST / users", () =>{

    describe("given a username and password", () =>{

        //should save the username and password to the database
        // should respond with a json object containing the user id
        // should respond with a 200 status code
        // should specify the json in the content type header

        test( " should respond with 200 status", async()=>{

                const response =await request(app).post('/users').send({

                    username:"username",
                    password:"password"
                })

                expect(response.statusCode).toBe(200)
        })

    })

    describe ( "when the username and password is missing", ()=>{

        //should respond with a status code 400;



    })

})