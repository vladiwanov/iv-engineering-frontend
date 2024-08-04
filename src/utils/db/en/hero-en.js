const hero = {
  title: 'Engineering systems for construction and reparing',
  menu: [
    {
      id: 'hero1',
      title: 'Information Systems',
      pathname: '/systems/information-systems',
      className: 'informationSystems',
      direction: 'information-systems',
      content: ['data transfer', 'information security'],
    },
    {
      id: 'hero2',
      title: 'Security Systems',
      pathname: '/systems/securitysystems',
      className: 'securitysystems',
      direction: 'securitysystems',
      content: [
        'video surveillance',
        'security alarm system',
        'access control',
        'fire protection',
        'lightning protection',
      ],
    },
    {
      id: 'hero3',
      title: 'Energy direction',
      pathname: '/systems/alternative-energy',
      className: 'alternativeEnergy',
      direction: 'alternative-energy',
      content: [
        'traditional electricity',
        'wind generators',
        'autonomous street lighting',
        'solar power plants',
        'solid fuel heating systems',
      ],
    },
    // {
    //   "id": "hero4",
    //   "title": "glas structures",
    //   "pathname": "/systems/metal-glas",
    //   "className": "metalglas",
    //   "direction": "metal-glas",
    //   "content": [
    //     "windows",
    //     "doors",
    //     "transparent structures"
    //   ]
    // }
  ],
  about: {
    id: 'hero10',
    title: 'about us',
    pathname: '/about',
    className: 'about',
    direction: 'about',
  },
};
export default hero;
