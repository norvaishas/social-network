import { rerenderEntireTree } from '../render';

const state = {
  posts: [
    {text: 'Post 1'},
    {text: 'Post 2'},
    {text: 'Post 3'},
    {text: 'Post 4'},
    {text: 'Post 5'},
    {text: 'Post 6'},
    {text: 'Post 7'}
  ],
  dialogs: [
    {name: 'Sergio', message: 'Vamos!', time: '19:39'},
    {name: 'Universe', message: 'All be ok :)', time:'Always'},
    {name: 'Ilon', message: 'See u on Mars', time: '11:39'},
    {name: 'HR-Google', message: 'Offer for Sergei...', time: 'Yesterday'},
    {name: 'User', message: 'Some text', time: '29 May 23:07'},
  ],
};

export const postsUpdate = (newPost) => {
  state.posts.push({ text: newPost});
  console.log(state.posts);
  rerenderEntireTree(state);
}

export default state;
