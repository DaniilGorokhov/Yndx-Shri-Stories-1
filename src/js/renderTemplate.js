import leadersTemp from '../templates/leaders.ejs';
import voteTemp from '../templates/vote.ejs';
import chartTemp from '../templates/chart.ejs';
import diagramTemp from '../templates/diagram.ejs';
import activityTemp from '../templates/activity.ejs';

import prepareVoteData from './vote/prepareVoteData';
import prepareActivityData from './activity/prepareActivityData';

export default function renderTemplate(alias, data) {
  let renderedTemplate;
  let preparedData;

  switch (alias) {
    case 'leaders':
      renderedTemplate = leadersTemp({ data });
      break;
    case 'vote':
      preparedData = prepareVoteData(data);
      renderedTemplate = voteTemp(preparedData);
      break;
    case 'chart':
      renderedTemplate = chartTemp({ data });
      break;
    case 'diagram':
      renderedTemplate = diagramTemp({ data });
      break;
    case 'activity':
      preparedData = prepareActivityData(data);
      renderedTemplate = activityTemp(preparedData);
      break;
    default:
      throw new Error('Invalid template alias');
  }

  return renderedTemplate;
}

window.renderTemplate = renderTemplate;
