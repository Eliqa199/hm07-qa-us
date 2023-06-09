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
    // put your body here ^^ Body copied from /docs

test('status code should be 200 in the response code', async () => {

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


test('status code should be 200 in the response body', async () => {



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



//this is complete ready for submission