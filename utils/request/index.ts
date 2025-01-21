import fetcher from "./fetcher";

const request = fetcher.create({
  baseURL: 'https://api.example.com',
  next: {
    revalidate: 0,
  }
});
console.log(fetcher);
console.log(request);

export default request;