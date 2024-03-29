import {Question} from '../types/Question';

export const getQuestionsMock: () => Question[] = () => {
  return [
    {
      id: 1,
      title: 'How to identify plants?',
      subtitle: 'Life Style',
      image_uri:
        'https://firebasestorage.googleapis.com/v0/b/flora---plant-identifier.appspot.com/o/public%2FCard.png?alt=media',
      uri: 'https://plantapp.app/blog/identifying-plant-in-10-steps/',
      order: 1,
    },
    {
      id: 2,
      title: 'Differences Between Species and Varieties?',
      subtitle: 'Plant Identify',
      image_uri:
        'https://firebasestorage.googleapis.com/v0/b/flora---plant-identifier.appspot.com/o/public%2Fcard2.png?alt=media',
      uri: 'https://plantapp.app/blog/differences-between-species-and-varieties/',
      order: 2,
    },
    {
      id: 3,
      title: 'The reasons why the same plant can look different?',
      subtitle: 'Life Style',
      image_uri:
        'https://firebasestorage.googleapis.com/v0/b/flora---plant-identifier.appspot.com/o/public%2FCard3.png?alt=media',
      uri: 'https://plantapp.app/blog/same-seeds-but-different-looking-plants/',
      order: 3,
    },
  ];
};
