// Templates TODO add new templates
import leadersTemp from '../templates/leaders.ejs';

// Data
import allData from '../assets/data/data.json';

// const requiredImages = new Map();

// for (let dataIx = 0; dataIx < allData.length; dataIx += 1) {
//   const { users } = allData[dataIx].data;

//   for (let userIx = 0; userIx < users.length; userIx += 1) {
//     const { avatar } = users[userIx];

//     if (!requiredImages.has(requiredImages)) {
//       /* eslint-disable-next-line */
//       requiredImages.set(avatar, require('../assets/images/' + avatar));
//     }

//     allData[dataIx].users[userIx].avatar = requiredImages.get(avatar);
//   }
// }

export default function renderTemplate(alias = 'leaders', data = allData[0]) {
  let renderedTemplate;

  switch (alias) {
    case 'leaders':
      renderedTemplate = leadersTemp(data);
      break;
    default:
      throw new Error('Invalid template alias');
  }

  return renderedTemplate;
}

window.onload = () => {
  document.body.innerHTML = renderTemplate();
};

window.renderTemplate = renderTemplate;
