export default function prepareVoteData(data) {
  const preparedData = {
    data: {
      title: data.title,
      subtitle: data.subtitle,
      columns: [],
    },
  };

  const { selectedUserId, offset } = data;
  const users = data.users.slice();

  let offsetNum = data.users.findIndex((user) => user.id === offset);
  if (offsetNum === -1) {
    offsetNum = 0;
  }

  users.forEach((user, index) => {
    users[index].type = 'user';
    users[index].selected = user.id === selectedUserId;
  });

  // Data for sliderUp
  const sliderUpActive = offset && users[0] && offset !== users[0].id;

  let sliderUpOffsetVert = null;
  let sliderUpOffsetHoriz = null;
  if (sliderUpActive) {
    let userId = offsetNum - 6 >= 0 ? offsetNum - 6 : 0;
    sliderUpOffsetVert = users[userId].id;

    userId = offsetNum - 8 >= 0 ? offsetNum - 8 : 0;
    sliderUpOffsetHoriz = users[userId].id;
  }

  // Data for sliderDown
  // Compare last user index to display and last possible user index
  const sliderDownActiveVert = offsetNum + 7 < users.length - 1;
  let sliderDownOffsetVert = null;
  if (sliderDownActiveVert) {
    sliderDownOffsetVert = users[offsetNum + 8].id;
  }

  const sliderDownActiveHoriz = offsetNum + 5 < users.length - 1;
  let sliderDownOffsetHoriz = null;
  if (sliderDownActiveHoriz) {
    sliderDownOffsetHoriz = users[offsetNum + 6].id;
  }

  preparedData.data.columns = [
    [
      {
        data: users[offsetNum] || false,
        visibility: 'both',
      },
      {
        data: users[offsetNum + 3] || false,
        visibility: 'vertical',
      },
      {
        data: users[offsetNum + 6] || false,
        visibility: 'vertical',
      },
    ],
    [
      // slider-up
      {
        data: {
          type: 'slider-up',
          active: Boolean(sliderUpActive),
          params: {
            offset: sliderUpOffsetVert,
          },
        },
        visibility: 'vertical',
      },
      {
        data: users[offsetNum + 1] || false,
        visibility: 'both',
      },
      {
        data: users[offsetNum + 4] || false,
        visibility: 'both',
      },
      // slider-down
      {
        data: {
          type: 'slider-down',
          active: sliderDownActiveVert,
          params: {
            offset: sliderDownOffsetVert,
          },
        },
        visibility: 'vertical',
      },
    ],
    [
      // slider-up
      {
        data: {
          type: 'slider-up',
          active: Boolean(sliderUpActive),
          params: {
            offset: sliderUpOffsetHoriz,
          },
        },
        visibility: 'horizontal',
      },
      // slider-down
      {
        data: {
          type: 'slider-down',
          active: sliderDownActiveHoriz,
          params: {
            offset: sliderDownOffsetHoriz,
          },
        },
        visibility: 'horizontal',
      },
    ],
    [
      {
        data: users[offsetNum + 2] || false,
        visibility: 'both',
      },
      {
        data: users[offsetNum + 5] || false,
        visibility: 'both',
      },
      {
        data: users[offsetNum + 7] || false,
        visibility: 'vertical',
      },
    ],
    [
      {
        data: users[offsetNum + 3] || false,
        visibility: 'horizontal',
      },
    ],
  ];

  return preparedData;
}
