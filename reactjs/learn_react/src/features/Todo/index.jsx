import React from 'react';
import { Link, Route, Routes } from 'react-router-dom';
import DetailPage from '../Todo/pages/DetailPage';
import ListPage from '../Todo/pages/ListPage';
function TodoFeature(props) {
  return (
    <div>
      <nav>
        <ul>
          <li>
            <Link to="todolist">Đến trang List Page</Link>
          </li>
          <li>
            <Link to=":id">Đến trang detail Page</Link>
          </li>
        </ul>
      </nav>

      <Routes>
        <Route path="todolist/*" element={<ListPage />} />
        <Route path=":id" element={<DetailPage />} />
      </Routes>
    </div>
  );
}

export default TodoFeature;
