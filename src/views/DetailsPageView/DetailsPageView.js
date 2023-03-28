import s from './DetailsPageView.module.scss';
import { Outlet } from 'react-router';
import AppBar from '../../components/AppBar';
import Footer from 'components/Footer';

export default function DetailsPage() {
  return (
    <>
      <section className={s.detailsPage}>
        <AppBar />
        <Outlet />
      </section>
      <Footer />
    </>
  );
}
