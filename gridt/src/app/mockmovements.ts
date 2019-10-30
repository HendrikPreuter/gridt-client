import { Movements } from '../../src/api/model/movements';
import { leaders } from './mockleaders';

export const movements: Movements = [
    { 
      id: 'm1',
      name: 'Flossing',
      subscribed: true,
      leaders: leaders.filter(user => [0,1,2,3].includes(user.id)),
      shortDescription: 'We floss daily to keep our gums happy.',
      description: '',
      interval: {hours: 0, days: 1, weeks: 0, months: 0}
    },
    {
      id: 'm2',
      name: 'Running: 3k/3d',
      subscribed: true,
      leaders: leaders.filter(user => [4,5,6,7].includes(user.id)),
      shortDescription: 'Get into those running shoes! The world is your treadmill. Run 3k every 3 days.',
      description: '',
      interval: {hours: 0, days: 3, weeks: 0, months: 0}
    },
    {
      id: 'm3',
      name: 'Guitar Heroes',
      subscribed: true,
      leaders: leaders.filter(user => [0,8,9,10].includes(user.id)),
      shortDescription: 'Take out your guitar and start strumming/picking/whatever takes your fancy. Let\'s become guitar heroes by playing daily!',
      description: '',
      interval: {hours: 0, days: 1, weeks: 0, months: 0}
    },
    {
      id: 'm4',
      name: 'Meatless Mondays',
      subscribed: false,
      leaders: leaders,
      shortDescription: 'Go meatless one day a week for your health and the health of our planet!',
      description: '',
      interval: {hours: 0, days: 0, weeks: 1, months: 0}
    },
    {
      id: 'm5',
      name: 'Calisthenics Workout',
      subscribed: false,
      leaders: leaders,
      shortDescription: 'Not feeling like hitting the gym, but still want a workout? Hit the calisthenics park and get fit!',
      description: '',
      interval: {hours: 0, days: 3, weeks: 0, months: 0}
    },
    {
      id: 'm6',
      name: 'Study Buddies',
      subscribed: false,
      leaders: leaders,
      shortDescription: 'Need some extra support getting your work done? We study 1h-2h outside of school every day.',
      description: '',
      interval: {hours: 0, days: 1, weeks: 0, months: 0}
    },
    {
      id: 'm7',
      name: 'Bike/Public Transport Day',
      subscribed: false,
      leaders: leaders,
      shortDescription: 'Take your bike or public transport instead of your car one day a week, to reduce traffic jams and GHG emissions.',
      description: '',
      interval: {hours: 0, days: 1, weeks: 0, months: 0}
    },
  ];