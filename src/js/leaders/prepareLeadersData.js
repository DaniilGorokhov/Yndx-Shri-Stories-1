export default function prepareLeadersData(data) {
  const preparedData = {
    data: {
      title: data.title,
      subtitle: data.subtitle,
      emoji: data.emoji,
    },
  };

  let { users } = data;
  users = users.slice();

  const { selectedUserId } = data;
  let selectedUser;
  let selectedUserIx;

  for (let userIx = 0; userIx < users.length; userIx += 1) {
    if (selectedUserId && users[userIx].id === selectedUserId) {
      selectedUser = users[userIx];
      selectedUser.selected = true;

      selectedUserIx = userIx;
    } else {
      users[userIx].selected = false;
    }

    // Additional properties for convenient class management
    users[userIx].place = userIx + 1;

    users[userIx].primary = userIx === 0;
  }

  if (selectedUserId && selectedUserIx > 4) {
    users[4] = selectedUser;
  }

  if (selectedUserId && selectedUserIx > 2) {
    preparedData.data.relativePlace = true;
    preparedData.data.relativePlaceUser = selectedUser;
  }

  const preparedUsers = users.slice(0, 5);

  const BARS_CONFIG = [
    // First - bar order; second - bar height
    [3, 5],
    [4, 4],
    [2, 3],
    [5, 2],
    [1, 1],
  ];

  for (let ix = 0; ix < preparedUsers.length; ix += 1) {
    [preparedUsers[ix].barOrder, preparedUsers[ix].barHeight] = BARS_CONFIG[ix];

    users[ix].additional = ix > 2;

    if (ix === 0) {
      users[ix].alignment = 'center';
    } else if (ix % 2 === 0) {
      users[ix].alignment = 'start';
    } else {
      users[ix].alignment = 'end';
    }

    if (ix === 0) {
      users[ix].zIndex = 2;
    } else if (ix < 3) {
      users[ix].zIndex = 1;
    }
  }

  preparedData.data.users = preparedUsers;

  return preparedData;
}
