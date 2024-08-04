const hero = {
  title: 'Інженерні системи для будівництва та реконструкції',
  subtitle: 'Робимо життя більш комфортним та безпечним',
  menu: [
    {
      id: 'hero1',
      title: 'Інформаційні системи',
      pathname: '/systems/information-systems',
      className: 'informationSystems',
      direction: 'information-systems',
      content: ['передавання даних', 'інформаційна безпека'],
    },
    {
      id: 'hero2',
      title: 'Системи безпеки',
      pathname: '/systems/securitysystems',
      className: 'securitysystems',
      direction: 'securitysystems',
      content: [
        'відеоспостереження',
        'охоронна сигналізція',
        'контроль доступу',
        'протипожежний захист',
        'блискавкозахист',
      ],
    },
    {
      id: 'hero3',
      title: 'Напрямок енергетики',
      pathname: '/systems/alternative-energy',
      className: 'alternativeEnergy',
      direction: 'alternative-energy',
      content: [
        'традиційна електрика',
        'вітрогенератори',
        'автономне вуличне освітлення',
        'сонячні електростанції',
        'твердопаливні системи опалювання',
      ],
    },
    // {
    //   id: 'hero4',
    //   title: 'Прозорі конструкції',
    //   pathname: '/systems/metal-glas',
    //   className: 'metalglas',
    //   direction: 'metal-glas',
    //   content: ['вікна', 'двері', 'прозорі конструкції, зовнішні стіни'],
    // },
  ],
  about: {
    id: 'hero10',
    title: 'про компанію',
    pathname: '/about',
    className: 'about',
    direction: 'about',
  },
};
export default hero;
