<div align="center">
  
  <br />
  <br />

  <h2 align="center">Tavuk - Restaurant Website</h2>

  Tavuk is a fully responsive restaurant website, <br />Responsive for all devices, built using Node.js, Express, HTML, CSS, and JavaScript.

</div>

<br />

### Demo Screeshots

![Grilli Desktop Demo](./readme-images/desktop.png "Desktop Demo")

### Prerequisites

Before you begin, ensure you have met the following requirements:

* [Node.js](https://nodejs.org/) (v14 or higher) must be installed on your operating system.
* [npm](https://www.npmjs.com/) (comes with Node.js) or [yarn](https://yarnpkg.com/)

### Installation

1. Clone the repository or navigate to the project directory:

```bash
cd tavuk
```

2. Install dependencies:

```bash
npm install
```

### Run Locally

To run the server in development mode (with auto-reload):

```bash
npm run dev
```

Or to run in production mode:

```bash
npm start
```

The server will start on `http://localhost:3000` by default.

You can change the port by setting the `PORT` environment variable:

```bash
PORT=8080 npm start
```

### Features

- ✅ Fully responsive design
- ✅ Express.js server
- ✅ Form handling for reservations
- ✅ Newsletter subscription
- ✅ Static file serving
- ✅ RESTful API endpoints

### API Endpoints

- `POST /api/reservation` - Submit a reservation request
- `POST /api/subscribe` - Subscribe to newsletter

### Project Structure

```
tavuk/
├── assets/
│   ├── css/
│   │   └── style.css
│   ├── images/
│   └── js/
│       └── script.js
├── server.js          # Express server
├── package.json       # Node.js dependencies
├── index.html         # Main HTML file
└── README.md
```

### Technologies Used

- Node.js
- Express.js
- HTML5
- CSS3
- Vanilla JavaScript

### License

[MIT](https://choosealicense.com/licenses/mit/)
