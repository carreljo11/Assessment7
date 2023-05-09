### Conceptual Exercise

Answer the following questions below:

- What is a JWT?
JWT is JSON Web Token. They are usually used for authentication and authorization in webapps, APIs, and mobile apps
- What is the signature portion of the JWT?  What does it do?
The signature portion of JWT is combining header, payload, and secret key only known to the server
- If a JWT is intercepted, can the attacker see what's inside the payload?
Yes the attacker would be able to
- How can you implement authentication with a JWT?  Describe how it works at a high level.
User logs in: The user provides their credentials (e.g., username and password) to the server. The server validates the credentials and generates a JWT token.

Server sends JWT to client: The server sends the JWT back to the client as a response to the login request. The client stores the JWT in local storage or a cookie.

Client sends JWT with subsequent requests: The client sends the JWT as an Authorization header with subsequent requests to the server. The Authorization header typically looks like "Authorization: Bearer <JWT>".

Server verifies JWT: The server verifies the signature and expiration of the JWT with each request. If the JWT is valid, the server grants access to the requested resource.
- Compare and contrast unit, integration and end-to-end tests.

- What is a mock? What are some things you would mock?
A mock is a fake object or function that imitates the behavior of a real object or function.
- What is continuous integration?

- What is an environment variable and what are they used for?

- What is TDD? What are some benefits and drawbacks?

- What is the value of using JSONSchema for validation?

- What are some ways to decide which code to test?

- What does `RETURNING` do in SQL? When would you use it?

- What are some differences between Web Sockets and HTTP?

- Did you prefer using Flask over Express? Why or why not (there is no right
  answer here --- we want to see how you think about technology)?
