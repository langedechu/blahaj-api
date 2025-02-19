# 🦈 Blahaj API

An API for getting and posting random Blahaj images.

## 🛣️ Available endpoints

- `/`: API's root.
- `/get`: Get a random blahaj image.
- `/post`: Posting a random blahaj image.
- `/raw`: Get a random blahaj image (Raw data).

### 🤔 How to post via the `/post` route ?

You can post a random image of blahaj by sending a POST request to the `/post` route with the following query parameters:

- `url`: The URL of the image you want to post.
- `name`: A quick label for the image.

Here is an example of how you can post an image using the `/post` route:

```
curl -X POST https://127.0.0.1:3000/post?url=https://example.com/image.jpg&name=This%20is%20a%20cool%20image
```

## 👇 Prerequisites

Before starting working on this project, please make sure you have already installed the following tools:

- [Git](https://git-scm.com/downloads)
- [NodeJS](https://nodejs.org/en/download/)
- [MySQL](https://www.mysql.com/downloads/)

## 🛠️ Installation Steps

1. Fork the project and clone it locally.
2. Install dependencies with `npm install`.
3. Use the SQL template file to create the database and tables.
4. Run `npm start` to start the server.

## 👨‍💻 Contributing

All kinds of contributions are always welcomed. It is recommended to either tell the maintainers that you are working on a previously made issue or make a new issue and let the maintainers now that you are working on it.

## 🤔 What's next for Blahaj API ?

- I'll be adding a route where you could get the raw random images of blahaj
- Make a cool looking homepage
