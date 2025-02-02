
# Mini Whatsapp App

This is a simple **Mini Whatsapp** application built using **Node.js**, **Express**, and **MongoDB**. The app allows users to send and manage messages in a chat-like interface, with functionality to create, edit, and delete chats.

## Features

- **Create** a new chat with a sender, receiver, and message.
- **View** a list of all chats with timestamps.
- **Edit** a chat message.
- **Delete** a chat message.
- **SweetAlert** for confirmation before deleting a chat.

## Installation

### 1. Clone the repository:

```bash
git clone https://github.com/yourusername/mini-whatsapp.git
cd mini-whatsapp
```

### 2. Install the dependencies:

Make sure you have **Node.js** and **npm** installed. Run:

```bash
npm install
```

### 3. Set up MongoDB:

Ensure that you have **MongoDB** running on your local machine. You can download MongoDB from the [official website](https://www.mongodb.com/try/download/community) and run it locally. The app is configured to connect to the local MongoDB instance at `mongodb://127.0.0.1:27017/whatsapp`.

### 4. Run the app:

Start the application using:

```bash
node index.js
```

This will start the app on [http://localhost:8080](http://localhost:8080).

## Files and Directories

- `models/chat.js`: Defines the schema and model for a chat message.
- `views/`: Contains all the EJS templates for rendering the frontend (e.g., `index.ejs`, `edit.ejs`, `new.ejs`).
- `public/`: Directory for static files such as styles (`style.css`) and scripts (`app.js`).
- `index.js`: Main application file that handles routes and database connections.
- `init.js`: Initializes the database with a few sample chats.

## Routes

- **GET `/chats`**: Displays all chats.
- **GET `/chats/new`**: Displays the form to create a new chat.
- **POST `/chats`**: Creates a new chat message.
- **GET `/chats/:id/edit`**: Displays the form to edit a chat message.
- **PUT `/chats/:id`**: Updates the chat message.
- **DELETE `/chats/:id`**: Deletes the chat message.

## Technologies Used

- **Node.js**: JavaScript runtime for server-side scripting.
- **Express**: Web framework for building the REST API.
- **MongoDB**: NoSQL database for storing chat data.
- **EJS**: Templating engine for rendering dynamic HTML views.
- **SweetAlert**: Popup library for delete confirmation.
- **Method-Override**: Middleware for supporting HTTP methods like PUT and DELETE in forms.
