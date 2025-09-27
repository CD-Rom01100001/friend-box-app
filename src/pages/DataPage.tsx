import { FC } from 'react';
import css from './DataPage.module.scss'

const DataPage: FC = () => {

  return (
    <div className={css.dataPage}>
      <button className={css.btnAddFriend}>Add a Friend</button>
    </div>
  );
}

export default DataPage;