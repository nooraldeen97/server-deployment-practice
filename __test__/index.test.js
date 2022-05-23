'use strict';

const server=require("../server");

const supertest=require("supertest");

const request= supertest(server.app);

describe("test my express API",()=>{
    it("testing the home route", async()=>{
        const response= await request.get('/');
        expect(response.text).toEqual("hello from home route");
    })

    it("test the /profile route",async()=>{
        const response = await request.get("/profile");
        console.log(response.body)
        expect(typeof response.body).toEqual("object");
    })
})