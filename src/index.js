import React from 'react';
import ReactDOM from 'react-dom';
import UserListComponent from './user-list.component';

const el = (
  <div>
    <UserListComponent />
  </div>
)

ReactDOM.render(el, document.getElementById('root'))