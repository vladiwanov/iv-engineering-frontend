import { ColorRing, ThreeDots, ProgressBar } from 'react-loader-spinner';
import s from './LoaderModule.module.scss';
export default function LoaderModule() {
  const styles = {
    display: 'block',
    textAlign: 'center',
    margin: 'auto',
  };
  return (
    <>
      {/* <ColorRing type="ColorRing" /> */}
      {/* <ThreeDots type="ThreeDots" color="#00BFFF" wrapperClass={s.ThreeDots} /> */}
      <ThreeDots type="ThreeDots" color="#00BFFF" wrapperStyle={styles} />
      {/* <ProgressBar  type="ProgressBar" /> */}
    </>
  );
}
