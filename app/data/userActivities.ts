import { user } from './users';

const UserActivities = [
  { name: 'Listened time', value: user.listenedTime.join(':') },
  { name: 'Playlists', value: user.playlists },
  { name: 'Following', value: user.following },
];

export { UserActivities };
