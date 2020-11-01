const sleep = n => new Promise(resolve => setTimeout(resolve , n));

sleep(1000).then(() => console.log('Hello World'));

const posts = [
  {
    id: 1,
    title : '리덕스',
    body: '미들웨어',
  },
  {
    id: 2,
    title : 'thunk',
    body: '비동기 thunk',
  },
  {
    id: 3,
    title : 'saga',
    body: '비동기 saga',
  },
];

export const getPosts = async () => {
  await sleep(500);
  return posts;
}

export const getPostById = async (id) => {
  await sleep(500);
  return posts.find(post => post.id === id);
}
