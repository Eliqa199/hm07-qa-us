// eslint-disable-next-line no-undef
const config = require('../config');

const requestBody = 

{
	"price": 15
  }


test('status code should receive 200 in the response code when the product is updated', async () => {

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
