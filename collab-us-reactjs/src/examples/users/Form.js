import React, {useState} from 'react';
import { useSave, useSet, useQuery, useDetail } from 'seed/gql'
import * as queries from 'seed/gql/queries'
import { Formik, Field } from 'formik';

import MultiField from 'seed/components/helpers/MultiField'
import FileField from 'seed/components/helpers/FileField'
import Loading from 'seed/components/helpers/Loading';

import cx from 'classnames';
import styles from 'resources/css/examples/users/Form.module.css';

const USER_TYPES  = `
{
  userTypes { }
}
`

function UserForm(props)
{
  const [state, setState] = useState({});

  const { url } = props.match;
  const { user_id }  = props.match.params;
  const editMode = user_id != null;

  const saveOptions = {
    onCompleted: data =>
    {
      const backUrl = url.substring(0, url.lastIndexOf('/'));
      props.history.push(backUrl);
    },
    onError: error => setState({ error: 'An error has occurred, try again' })
  };

  const [callSave, qSave] = useSave(queries.SAVE_USER, saveOptions);
  const [callSet, qSet] = useSet(queries.SET_USER, saveOptions);

  const qUser = useDetail(queries.USER, user_id);
  const qUserTypes = useQuery(USER_TYPES);

  if (editMode && qUser.loading) return <Loading />;
  if (editMode && qUser.error) return "Error";

  const onSubmit = values =>
  {
    values.id = user_id;
    if (editMode) callSet(values);
    else callSave(values);
  }

  const { user = {} } = qUser.data;
  const { userTypes = [] } = qUserTypes.data;

  return (
    <div className={styles.module}>
      <div className={styles.header}>User</div>
      <div className={styles.form}>
        <Formik
           initialValues={user}
           onSubmit={onSubmit}
           render={f => (

        <form onSubmit={f.handleSubmit}>
          
          <div>
          <label className={styles.lbl}>User type</label>
          <Field component="select" name="userType.id"
            className={styles.ops} >
            <option value="">Select an option</option>
            { userTypes.map((e, idx) => <option value={e.id}>{e.id}</option>) }
          </Field>
          <br/>
          </div>
          
          {state.error ?
            <div className={styles.error}>{state.error}</div> : null}
          <button type="submit" className={styles.submit}>Send</button>
        </form>
        )}
        />
      </div>
    </div>
  );
}

export default UserForm;
