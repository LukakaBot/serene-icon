import fetcher from "./fetcher";

const request = fetcher.create({
  baseURL: 'https://api.example.com',
  next: {
    revalidate: 0,
  }
});

export default request;