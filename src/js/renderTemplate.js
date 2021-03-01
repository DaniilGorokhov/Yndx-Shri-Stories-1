// Templates TODO add new templates
import leadersTemp from '../templates/leaders.ejs';
import voteTemp from '../templates/vote.ejs';
import chartTemp from '../templates/chart.ejs';
import diagramTemp from '../templates/diagram.ejs';

export default function renderTemplate(alias, data) {
  let renderedTemplate;

  switch (alias) {
    case 'leaders':
      renderedTemplate = leadersTemp({ data });
      break;
    case 'vote':
      renderedTemplate = voteTemp({ data });
      break;
    case 'chart':
      renderedTemplate = chartTemp({ data });
      break;
    case 'diagram':
      renderedTemplate = diagramTemp({ data });
      break;
    default:
      throw new Error('Invalid template alias');
  }

  return renderedTemplate;
}

window.renderTemplate = renderTemplate;
