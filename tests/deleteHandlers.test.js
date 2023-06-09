
const config = require('../config');

const requestBody = 
{
	"name": "Eli",
	"cardId": 1
  }

test('status code should be 200 in the response', async () => {

	let actualStatusCode;
	let verif;
	let actualResponseBody;
	let kitID;
    try {
		const response = await fetch(`${config.API_URL}/api/v1/kits`, {
			method: 'POST',
			headers: {
			'Content-Type': 'application/json'
			},
			body: JSON.stringify(requestBody)
		}); 
	actualStatusCode = await response.status;
	actualResponseBody = await response.json();
	kitID = await actualResponseBody["id"];

	} catch (error) {
		console.error(error);
	}

	await expect(actualStatusCode).toBe(201);

	
	let actualResponseBody2;
	try {
		const response = await fetch(`${config.API_URL}/api/v1/kits/${kitID}`, {
			method: 'DELETE',
			
		});
		actualResponseBody2 = await response.json();

	} catch (error) { 
		console.error(error);
	}
		await expect(actualResponseBody2["ok"]).toBe(true);
		//test
});










	// constant = static 
	//let = dynamic

	// TO DO - Need to finish Deletehandlers 