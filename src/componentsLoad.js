import { lazy } from 'react';

const componentsLoad = {
  HomePageView: lazy(
    () =>
      import(
        './views/HomePageView/HomePageView'
      ) /* webpackChunkName:"HomePageView" */,
  ),

  DetailsPage: lazy(
    () =>
      import(
        './views/DetailsPageView/DetailsPageView'
      ) /* webpackChunkName:"DatailsPage" */,
  ),

  NotFoundPage: lazy(
    () =>
      import(
        './views/NotFoundPage/NotFoundPage'
      ) /* webpackChunkName:"NotFoundPage" */,
  ),

  AboutPageView: lazy(() =>
    import(
      './views/AboutPageView/AboutPageView' /* webpackChunkName:"AboutPageView" */
    ),
  ),
  SuccessSubmitPage: lazy(() =>
    import(
      './views/SuccessSubmitPage/SuccessSubmitPage' /* webpackChunkName:"SuccessSubmitPage" */
    ),
  ),

  // ======================================================
  InformationSystems: lazy(
    () =>
      import(
        'global-components/InformationSystams'
      ) /* webpackChunkName:"InformationSystems" */,
  ),
  SecuritySystems: lazy(
    () =>
      import(
        'global-components/SecuritySystems'
      ) /* webpackChunkName:"SecuritySystems" */,
  ),
  AlternativeEnergy: lazy(
    () =>
      import(
        'global-components/AlternativeEnergy'
      ) /* webpackChunkName:"AlternativeEnergy" */,
  ),
  // ======================================================
  LANContent: lazy(
    () =>
      import(
        'content-components/LANContent'
      ) /* webpackChunkName:"LANContent" */,
  ),
  Itsecurity: lazy(
    () =>
      import(
        'content-components/Itsecurity'
      ) /* webpackChunkName:"ItSecurity" */,
  ),
  // ======================================================
  VideoSurvilance: lazy(
    () =>
      import(
        'content-components/VideoSurvilance'
      ) /* webpackChunkName:"VideoSurvilance" */,
  ),
  AlarmSystems: lazy(
    () =>
      import(
        'content-components/AlarmSystems'
      ) /* webpackChunkName:"AlarmSystems" */,
  ),
  AccessSystems: lazy(
    () =>
      import(
        'content-components/AccessSystems'
      ) /* webpackChunkName:"SAccessSystems" */,
  ),
  FireSystems: lazy(
    () =>
      import(
        'content-components/FireSystems'
      ) /* webpackChunkName:"FireSystems" */,
  ),
  ThunderStormSystem: lazy(
    () =>
      import(
        'content-components/ThunderStormSystem'
      ) /* webpackChunkName:"ThunderStormSystem" */,
  ),
  // ======================================================
  WindTurbines: lazy(
    () =>
      import(
        'content-components/WindTurbines'
      ) /* webpackChunkName:"WindTurbines"*/,
  ),
  ElectricDirection: lazy(
    () =>
      import(
        'content-components/ElectricDirection'
      ) /* webpackChunkName:"ElectricDirection"*/,
  ),
  Lighting: lazy(
    () =>
      import('content-components/Lighting') /* webpackChunkName:"Lighting" */,
  ),

  SolarEnergy: lazy(
    () =>
      import(
        'content-components/SolarEnergy'
      ) /* webpackChunkName:"SolarEnergy" */,
  ),

  SolidFuelHeating: lazy(
    () =>
      import(
        'content-components/SolidFuelHeating'
      ) /* webpackChunkName:"SolidFuelHeating" */,
  ),
  SelectContent: lazy(
    () =>
      import(
        'additional-components/SelectContent'
      ) /* webpackChunkName:"SelectContent" */,
  ),
  Content: lazy(
    () =>
      import('additional-components/Content') /* webpackChunkName:"Content" */,
  ),
};

export default componentsLoad;
