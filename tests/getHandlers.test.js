// eslint-disable-next-line no-undef


const config = require('../config');


		//purpose of the test below					//standard syntyx begining to code
test('status code should be 200 in the response', async () => 

// rules underneath for test code to follow (Begins code body/meaning part of the test)
{
		// "get request is default type of method in script, others are stated in code such as delete/post/put"
		let actualResponseCode;
	try {
		const response = await fetch(`${config.API_URL}/api/v1/warehouses`);
		//Assigning the actual response status to the actualStatus variable
	actualResponseCode = response.status;
	} catch (error) {
		console.error(error);
	}
	//Checking that the actual status is 200
	expect(actualResponseCode).toBe(200);

});


// Create seperate test for this below

test('This test case should verify the body that matches with warehouse names', async () => 

{
		let actualResponseBody;
	try {
		const response = await fetch(`${config.API_URL}/api/v1/warehouses`);
		
	actualResponseBody = await response.json();
	} catch (error) {
		console.error(error);
	}
	//Checking that the actual status is 200
	expect (actualResponseBody[2].name).toContain('Food City');

});


// this is complete ready for submission