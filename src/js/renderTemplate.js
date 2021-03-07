import leadersTemp from '../templates/leaders.ejs';
import voteTemp from '../templates/vote.ejs';
import chartTemp from '../templates/chart.ejs';
import diagramTemp from '../templates/diagram.ejs';
import activityTemp from '../templates/activity.ejs';

// Prepare functions don't change input data
import prepareLeadersData from './leaders/prepareLeadersData';
import prepareVoteData from './vote/prepareVoteData';
import prepareChartData from './chart/prepareChartData';
import prepareDiagramData from './diagram/prepareDiagramData';
import prepareActivityData from './activity/prepareActivityData';

export default function renderTemplate(alias, data) {
  let renderedTemplate;
  let preparedData;

  switch (alias) {
    case 'leaders':
      preparedData = prepareLeadersData(data);
      renderedTemplate = leadersTemp(preparedData);
      break;
    case 'vote':
      preparedData = prepareVoteData(data);
      renderedTemplate = voteTemp(preparedData);
      break;
    case 'chart':
      preparedData = prepareChartData(data);
      renderedTemplate = chartTemp(preparedData);
      break;
    case 'diagram':
      preparedData = prepareDiagramData(data);
      renderedTemplate = diagramTemp(preparedData);
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
