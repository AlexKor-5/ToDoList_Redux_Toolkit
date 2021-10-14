import { statuses } from '../data-statuses'

export let initialToDosState = {
  ids: ['345-654', '845-789', '697-001'],
  entities: {
    '345-654': { id: '345-654', text: 'buy some milk', completed: false },
    '845-789': {
      id: '845-789',
      text: 'do homework',
      completed: false,
      color: 'blue'
    },
    '697-001': {
      id: '697-001',
      text: 'do nothing',
      completed: false,
      color: 'red'
    }
  }
}

export let initialFiltersState = {
  status: statuses[0],
  colors: []
}
