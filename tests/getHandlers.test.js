// eslint-disable-next-line no-undef


const config = require('../config');


test('status code should receive 200 in the response code when a list of warehouses is retrieved', async () => 

{
		let actualResponseCode;
	try {
		const response = await fetch(`${config.API_URL}/api/v1/warehouses`);
	actualResponseCode = response.status;
	} catch (error) {
		console.error(error);
	}

	expect(actualResponseCode).toBe(200);

});



test('This test case should verify the body that matches with warehouse names', async () => 

{
		let actualResponseBody;
	try {
		const response = await fetch(`${config.API_URL}/api/v1/warehouses`);
		
	actualResponseBody = await response.json();
	} catch (error) {
		console.error(error);
	}
	expect (actualResponseBody[2].name).toContain('Food City');

});


