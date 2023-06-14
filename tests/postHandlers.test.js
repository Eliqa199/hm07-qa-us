// eslint-disable-next-line no-undef
const config = require('../config');

const requestBody = 

{
	"products": [
	  {
		"id": 1,
		"quantity": 1
	  }
	]
  }
  

test('status code should receive 200 in the response code when the warehouses is checked', async () => {

	let actualResponseCode;
    try {
		const response = await fetch(`${config.API_URL}/api/v1/warehouses/check`, {
			method: 'POST',
			headers: {
			'Content-Type': 'application/json'
			},
			body: JSON.stringify(requestBody)
		}); 
	actualResponseCode = response.status;
	} catch (error) {
		console.error(error);
	}
	expect(actualResponseCode).toBe(200);

});


test('Response body for "Everything You Need" warehouse contains the products Orange Juice etc', async () => {



	let actualResponseBody;
    try {
		const response = await fetch(`${config.API_URL}/api/v1/warehouses/check`, {
			method: 'POST',
			headers: {
			'Content-Type': 'application/json'
			},
			body: JSON.stringify(requestBody)
		}); 
	actualResponseBody = await response.json() ;
	} catch (error) {
		console.error(error);
	}
	expect(actualResponseBody["Everything You Need"]).toEqual({"Orange Juice - Cold-Pressed, No Added Sugar, Preservative Free": false});

});



