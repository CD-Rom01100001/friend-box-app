import { FC } from 'react';
import css from './Sidebar.module.scss'

const Sidebar: FC = () => {

  return (
    <aside className={css.sidebar}>
      <div className={css.blockWrapper}>
        {Array.from({ length: 10 }).map((_, i) => {
          return (
            
            <div key={i} className={css.block}>
                <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolorem, exercitationem! Quos nostrum nulla unde necessitatibus ex dignissimos id quidem rem temporibus esse enim, sapiente rerum. Dolorum cumque assumenda quae porro.</p>
            </div>
          )
        })}
      </div>
    </aside>
  );
}

export default Sidebar;