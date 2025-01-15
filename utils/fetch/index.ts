import request from "./fetch";

const http = request.create({
  baseURL: 'https://api.example.com',
  next: {
    revalidate: 0,
    tags: [],
  }
});

export default http;