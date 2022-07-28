export async function mockData() {
    // Data is generated through MockAPi.com//
    // Interesting thing to note, MockAPI uses Faker.js to generate unique values for each key.

   const mockRequest = await fetch('https://62e2c909b54fc209b8807084.mockapi.io/api/v1/Sales')
    .then((response) => response.json())
    return mockRequest
    }

