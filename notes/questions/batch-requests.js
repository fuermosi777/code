// Given a client-side JS API with a makeRequest(request: object, callbackFn: (object) => ()), provide some glue code to drive that via a makeBatchRequest API, which takes in an array of requests and a (same-sized) array of callbackFns, so that we can handle 10,000 requests desired a second coming from the client.