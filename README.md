MERN Gmail Clone
-

The MERN Gmail Clone is a full-stack web application that replicates the core functionality of Gmail. It allows users to send, receive, and manage emails in an intuitive and user-friendly interface. The project is built using the MERN stack (MongoDB, Express, React, Node.js), which provides a robust and scalable foundation for developing modern web applications.

Features
-
Compose and send emails with attachments.
Receive and view incoming emails in real-time.
Organize emails using labels and stars.




Technologies Used
MongoDB: A NoSQL database used to store email data.
Express: A flexible and minimalistic web application framework for Node.js.
React: A popular JavaScript library for building user interfaces.
Node.js: A server-side JavaScript runtime environment.
Redux: A predictable state container for JavaScript apps.

Installation and Setup
-

git clone https://github.com/MicoDan/gmail-clone.git

Install the required dependencies for both the server and client:

cd server
npm install
cd client
npm install

Create a .env file in the root of the project and provide the necessary environment variables:

env
-
Copy code
DB_URI=your_mongodb_connection_string

Run the development server and client concurrently:

npm start
Open your browser and access the application at http://localhost:3000.
Folder Structure
client: Contains the frontend code (React).
server: Contains the backend code (Node.js and Express).
public: Static assets and the HTML template for the React app.
Contributing
Contributions are always welcome! If you find any bugs or want to add new features to enhance the Gmail Clone, feel free to open an issue or submit a pull request.

License
This project is licensed under the MIT License.





