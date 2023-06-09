const config = require('../config');

const requestBody = 

{
	"price": 15
  }
    // put your body here ^^ Body copied from /docs

test('status code should be 200 in the response code', async () => {

	let actualResponseCode;
    try {
		const response = await fetch(`${config.API_URL}/api/v1/products/3`, {
			method: 'PUT',
			headers: {
			'Content-Type': 'application/json'
			},
			body: JSON.stringify(requestBody)
		}); 
	actualResponseCode = await response.status;
	} catch (error) {
		console.error(error);
	}
	expect(actualResponseCode).toBe(200);

});

// Checking response to be ok true on a Put request
test('status code should be true in the response body', async () => {

	let actualResponseCode;
    try {
		const response = await fetch(`${config.API_URL}/api/v1/products/3`, {
			method: 'PUT',
			headers: {
			'Content-Type': 'application/json'
			},
			body: JSON.stringify(requestBody)
		}); 
	actualResponseCode = await response.json();
	} catch (error) {
		console.error(error);
	}

expect(actualResponseCode).toEqual({"ok": true});

})
// script is ready for submission