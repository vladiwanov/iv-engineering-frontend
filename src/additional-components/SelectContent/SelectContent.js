import s from './SelectContent.module.scss';
import React, { Suspense } from 'react';
import routes from 'routes';
import componentsLoad from '../../componentsLoad';
import CloseButton from 'tools/CloseButton';
import WindowsSystems from 'content-components/Windows/Windows';
// import ElectricDirection from '../../content-components/ElectricDirection';

export default function SelectContent(props) {
  const {
    NotFoundPage,
    LANContent,
    Itsecurity,
    VideoSurvilance,
    AlarmSystems,
    AccessSystems,
    FireSystems,
    ThunderStormSystem,
    WindTurbines,
    Lighting,
    SolidFuelHeating,
    SolarEnergy,
    ElectricDirection,
    Windows,
  } = componentsLoad;
  const { state: pathname } = props;
  const path = pathname.pathname;

  const hashes = Object.values(routes);
  hashes.splice(0, 7);

  return (
    <>
      <section className={s.contentSelection}>
        <Suspense fallback={<h2>Loading...</h2>}>
          {path.hash === hashes[0] && <LANContent />}
          {path.hash === hashes[1] && <Itsecurity />}
          {path.hash === hashes[2] && <NotFoundPage />}
          {path.hash === hashes[3] && <NotFoundPage />}
          {path.hash === hashes[4] && <VideoSurvilance />}
          {path.hash === hashes[5] && <AlarmSystems />}
          {path.hash === hashes[6] && <AccessSystems />}
          {path.hash === hashes[7] && <FireSystems />}
          {path.hash === hashes[8] && <ThunderStormSystem />}
          {path.hash === hashes[9] && <ElectricDirection />}
          {path.hash === hashes[10] && <WindTurbines />}
          {path.hash === hashes[11] && <Lighting />}
          {path.hash === hashes[12] && <SolarEnergy />}
          {path.hash === hashes[13] && <SolidFuelHeating />}
          {path.hash === hashes[14] && <NotFoundPage />}
          {path.hash === hashes[15] && <NotFoundPage />}
          {path.hash === hashes[16] && <Windows />}
        </Suspense>
      </section>
      <CloseButton />
    </>
  );
}
