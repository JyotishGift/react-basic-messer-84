import React from 'react';
import Avatar from './Avatar';

const UserItem = props => {
  return (
    <div className="panel panel-info">
      <div className="panel-heading">
        <h3 className="panel-title">
          {props.fullName}
        </h3>
      </div>
      <div className="panel-body">
        <div className="row">
          <div>
            <Avatar avatarUrl={props.avatarUrl} />
            <div className=" col-md-9 col-lg-9">
              <table className="table table-user-information">
                <tbody>
                  <tr>
                    <td>Дата рождения</td>
                    <td>
                      {props.birthdate}
                    </td>
                  </tr>
                  <tr>
                    <td>Пол</td>
                    <td>
                      {props.gender}
                    </td>
                  </tr>
                  <tr>
                    <td>Адрес</td>
                    <td>
                      {props.address}
                    </td>
                  </tr>
                  <tr>
                    <td>Email</td>
                    <td>
                      <a href="#">
                        {props.email}
                      </a>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserItem;
