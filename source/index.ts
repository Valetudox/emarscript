const { twig } = require('twig');

export function compile(template: string, data: Object): string {
  return twig({ data: template }).render(data);
}
