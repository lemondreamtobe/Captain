import reduce from 'lodash/reduce';

export function generateActions<K extends keyof any>(firstArg: readonly K[] | string, actions?: readonly K[]) {
  const hasModuleName = typeof firstArg === 'string';
  const module = hasModuleName ? firstArg : '';
  const actionsArr = ((hasModuleName ? actions : firstArg) || []) as readonly K[];
  
  return reduce(actionsArr, (map, key) => {
    return { 
      ...map,
      [key]: `${module ? `${module}/`: ''}${key}`
    };
  }, {}) as { [P in K]: P };
}