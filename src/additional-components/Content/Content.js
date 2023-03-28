import s from './Content.module.scss';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { NavLink } from 'react-router-dom';
import * as actions from '../../redux/content/content-actions';
import io from 'tools/io';
export default function Content(props) {
  const dispatch = useDispatch();
  const { pathname } = props.state;
  const { content } = props;
  const saveCurrentPath = value => dispatch(actions.savedPrevPath(value));

  useEffect(() => {
    io('content', '0px', s.contentAnimation);
  }, []);

  return (
    <>
      <div>
        <h2 className={s.contentTitle}>{content.head}</h2>
        <h3 className={s.contentSubtitle}>{content.subhead}</h3>
        <ul className={s.content}>
          {content.Content.map(({ id, details, content }) => {
            return (
              <li key={id}>
                <NavLink
                  to={{
                    pathname: `${details}`,
                  }}
                  onClick={() => saveCurrentPath(pathname)}
                >
                  <p id="content" className={s.contentItem}>
                    {content}
                  </p>
                </NavLink>
              </li>
            );
          })}
        </ul>
      </div>
    </>
  );
}
