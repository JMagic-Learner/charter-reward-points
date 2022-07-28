export async function mockData() {
    // Data is generated through MockAPi.com//

   const mockRequest = await fetch('https://62e2c909b54fc209b8807084.mockapi.io/api/v1/Sales')
    .then((response) => response.json())
    return mockRequest
    }
