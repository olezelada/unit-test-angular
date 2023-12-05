import {GithubBaseUser} from "../interfaces/github-base-user.interface";
import {GithubUser} from "../interfaces/github-user.interface";

export const EXPECT_RESULT: GithubBaseUser = {
  name: 'Kevin Davila Benavides',
  photo: 'https://avatars.githubusercontent.com/u/56242609?v=4',
  location: 'Perú',
  followers: 85
};

export  const RESPONSE_OBJECT: GithubUser = {
  login: 'kevindaviladev',
  id: 56242609,
  node_id: 'MDQ6VXNlcjU2MjQyNjA5',
  avatar_url: 'https://avatars.githubusercontent.com/u/56242609?v=4',
  gravatar_id: "",
  url: 'https://api.github.com/users/kevindaviladev',
  html_url: 'https://github.com/kevindaviladev',
  followers_url: 'https://api.github.com/users/kevindaviladev/followers',
  following_url: 'https://api.github.com/users/kevindaviladev/following{/other_user}',
  gists_url: 'https://api.github.com/users/kevindaviladev/gists{/gist_id}',
  starred_url: 'https://api.github.com/users/kevindaviladev/starred{/owner}{/repo}',
  subscriptions_url: 'https://api.github.com/users/kevindaviladev/subscriptions',
  organizations_url: 'https://api.github.com/users/kevindaviladev/orgs',
  repos_url: 'https://api.github.com/users/kevindaviladev/repos',
  events_url: 'https://api.github.com/users/kevindaviladev/events{/privacy}',
  received_events_url: 'https://api.github.com/users/kevindaviladev/received_events',
  type: 'User',
  site_admin: false,
  name: 'Kevin Davila Benavides',
  company: null,
  blog: "",
  location: 'Perú',
  email: null,
  hireable: true,
  bio: 'Google Developer Expert (GDE) - Angular.\r\nFrontend Developer\r\nAmante de Angular, Postgresql y las ranas.',
  twitter_username: 'kevindaviladev',
  public_repos: 54,
  public_gists: 0,
  followers: 85,
  following: 3,
  created_at: '2019-10-07T03:17:31Z',
  updated_at: '2023-11-16T03:20:26Z'
};
