export const settings = {
  columnCreatorText: 'Add new column',
  cardCreatorText: 'Add new card',
  creator: {
    buttonOK: 'OK',
    buttonCancel: 'Cancel',
    defaultText: 'Add new item',
  },
  search: {
    defaultText: 'Search...',
    icon: 'search',
  },
  defaultListDescription: '<p>I can do all the things!!!</p>',
  defaultColumnIcon: 'list-alt',
  navMenu: {
    logoIcon: 'cat',
    toHomeUrl: '/',
    toInfoUrl: '/Info',
    toFaqUrl: '/Faq',
    homeHeader: 'Home',
    infoHeader: 'Info',
    FaqHeader: 'FAQ',
  },
  infoContent: {
    title: 'Info',
    image: 'http://uploads.kodilla.com/bootcamp/fer/11.react/space.png',
    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur aliquet nulla vitae mi iaculis, vel tristique enim iaculis. Morbi dignissim turpis purus, sed tempor dui efficitur et. Mauris dignissim porta luctus. Praesent a mi nunc. Aenean vestibulum justo cursus, fringilla quam id, egestas nunc. Donec a risus non odio aliquam aliquam sit amet vel felis. Aliquam ultrices ultricies consequat. Praesent egestas fringilla massa, eu auctor orci imperdiet a. Sed ut blandit sem. Sed nunc quam, varius in tortor sit amet, placerat vulputate sem. Donec tortor justo, imperdiet vitae magna sed, facilisis lacinia massa. Fusce vel erat scelerisque, elementum elit nec, volutpat dolor. Curabitur finibus enim sit amet purus bibendum eleifend. Donec maximus, ipsum in facilisis posuere, metus ex dignissim urna, ac aliquam leo mi quis augue. Mauris convallis sem eu dui facilisis vehicula. Nulla non elit sed arcu aliquet vulputate. Suspendisse quis mattis metus, hendrerit tristique sapien. Quisque augue elit, auctor eget lectus eget, tristique vestibulum turpis. Curabitur fringilla in nulla quis aliquam.',
  },
  FaqContent: {
    title: 'Faq',
    image: 'http://uploads.kodilla.com/bootcamp/fer/11.react/space.png',
    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur aliquet nulla vitae mi iaculis, vel tristique enim iaculis. Morbi dignissim turpis purus, sed tempor dui efficitur et. Mauris dignissim porta luctus. Praesent a mi nunc. Aenean vestibulum justo cursus, fringilla quam id, egestas nunc. Donec a risus non odio aliquam aliquam sit amet vel felis. Aliquam ultrices ultricies consequat. Praesent egestas fringilla massa, eu auctor orci imperdiet a. Sed ut blandit sem. Sed nunc quam, varius in tortor sit amet, placerat vulputate sem. Donec tortor justo, imperdiet vitae magna sed, facilisis lacinia massa. Fusce vel erat scelerisque, elementum elit nec, volutpat dolor. Curabitur finibus enim sit amet purus bibendum eleifend. Donec maximus, ipsum in facilisis posuere, metus ex dignissim urna, ac aliquam leo mi quis augue. Mauris convallis sem eu dui facilisis vehicula. Nulla non elit sed arcu aliquet vulputate. Suspendisse quis mattis metus, hendrerit tristique sapien. Quisque augue elit, auctor eget lectus eget, tristique vestibulum turpis. Curabitur fringilla in nulla quis aliquam.',
  },
};

export const pageContents = {
  title: 'My first React app',
  subtitle: 'A simple to-do app, with lists, columns and cards',
};

export const listData = {
  title: 'Things to do <sup>soon!</sup>',
  description: 'Interesting things I want to check out!',
  image: 'http://uploads.kodilla.com/bootcamp/fer/11.react/space.png',
  columns: [
    {
      key: 0,
      title: 'Books',
      icon: 'book',
      cards: [
        {
          key: 0,
          title: 'This Is Going to Hurt',
        },
        {
          key: 1,
          title: 'Interpreter of Maladies',
        },
      ],
    },
    {
      key: 1,
      title: 'Movies',
      icon: 'film',
      cards: [
        {
          key: 0,
          title: 'Harry Potter',
        },
        {
          key: 1,
          title: 'Star Wars',
        },
      ],
    },
    {
      key: 2,
      title: 'Games',
      icon: 'gamepad',
      cards: [
        {
          key: 0,
          title: 'The Witcher',
        },
        {
          key: 1,
          title: 'Skyrim',
        },
      ],
    },
  ],
};

const lists = [
  {
    id: 'list-1',
    title: 'Things to do <sup>first</sup>',
    description: 'Interesting things I want to check out!',
    image: 'http://uploads.kodilla.com/bootcamp/fer/11.react/space.png',
  },
  {
    id: 'list-2',
    title: 'Something to do <sup>second</sup>',
    description: 'Interesting things I want to check out!',
    image: 'http://uploads.kodilla.com/bootcamp/fer/11.react/space.png',
  },
  {
    id: 'list-3',
    title: 'Extra to do <sup>third</sup>',
    description: 'Interesting things I want to check out!',
    image: 'http://uploads.kodilla.com/bootcamp/fer/11.react/space.png',
  },
];

const columns = [
  {
    id: 'column-1',
    listId: 'list-1',
    title: 'Books',
    icon: 'book',
  },
  {
    id: 'column-2',
    listId: 'list-1',
    title: 'Movies',
    icon: 'film',
  },
  {
    id: 'column-3',
    listId: 'list-1',
    title: 'Games',
    icon: 'gamepad',
  },
  {
    id: 'column-4',
    listId: 'list-2',
    title: 'Strange column',
    icon: 'question',
  },
];

const cards = [
  {
    id: 'card-1',
    columnId: 'column-1',
    title: 'This Is Going to Hurt',
  },
  {
    id: 'card-2',
    columnId: 'column-1',
    title: 'Interpreter of Maladies',
  },
  {
    id: 'card-3',
    columnId: 'column-2',
    title: 'Harry Potter',
  },
  {
    id: 'card-4',
    columnId: 'column-2',
    title: 'Star Wars',
  },
  {
    id: 'card-5',
    columnId: 'column-3',
    title: 'The Witcher',
  },
  {
    id: 'card-6',
    columnId: 'column-3',
    title: 'Skyrim',
  },
];

const initialStoreData = {
  app: {...pageContents},
  lists: [...lists],
  columns: [...columns],
  cards: [...cards],
};

export default initialStoreData;
