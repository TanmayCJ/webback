# WebBack - Express Backend Server

A simple Express.js backend server that provides Star Wars character data through a RESTful API.

## Overview

WebBack is a lightweight Node.js server application built with Express.js that serves JSON data about Anakin Skywalker. This project demonstrates the basics of creating a RESTful API endpoint that can be consumed by frontend applications.

## Features

- Simple Express.js backend server
- RESTful API endpoint
- JSON response with character information
- Configurable port through environment variables

## Technologies Used

- Node.js
- Express.js
- JavaScript

## Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/yourusername/webback.git
   cd webback
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

## Usage

1. Start the server:
   ```bash
   node server.js
   ```

2. The server will start on port 5000 by default (or the port specified in your environment variables).
   ```
   Server is running on port 5000
   Visit http://localhost:5000 to access the server
   ```

3. Access the API endpoint:
   - Open `http://localhost:5000/` in your browser or use tools like Postman to see the JSON response.

## API Endpoints

### GET /

Returns information about Anakin Skywalker in JSON format:

```json
{
  "name": "Anakin Skywalker",
  "age": 22,
  "course": "Jedi Training",
  "skills": ["Lightsaber Combat", "Force Powers", "Piloting"],
  "trainer": "Jedi Master",
  "mentor": "Obi-Wan Kenobi",
  "lore": "Anakin Skywalker, once a promising Jedi Knight, fell to the dark side and became Darth Vader...",
  "achievements": "eradicated the Sith, restored balance to the Force, and redeemed himself...",
  "story": "Anakin Skywalker was discovered as a slave on the desert planet of Tatooine...",
  "image": "https://example.com/anakin-skywalker.jpg"
}
```

## Configuration

You can configure the port by setting the `PORT` environment variable:

```bash
PORT=3000 node server.js
```

## Contributing

1. Fork the repository
2. Create your feature branch: `git checkout -b feature/amazing-feature`
3. Commit your changes: `git commit -m 'Add some amazing feature'`
4. Push to the branch: `git push origin feature/amazing-feature`
5. Open a pull request

## License

This project is licensed under the ISC License - see the package.json file for details.

## Future Enhancements

- Add more Star Wars character endpoints
- Implement authentication
- Add database integration
- Create documentation with Swagger