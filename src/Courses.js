import React from 'react';
import directory from './directory';

class Courses extends React.Component {
  state = {
    courses: directory,
  };

  ObjList = (lst) => {
    if (typeof lst[1] === 'string') {
      return (
        <div key={lst[0]} className="">
          {lst[0]}:{' '}
          <span className="text-danger font-weight-bold">{lst[1]}</span>
        </div>
      );
    } else if (typeof lst[1] === 'object') {
      return (
        <div key={lst[1]}>
          <div>{lst[0]}:</div>
          {lst[1].map((val) => (
            <div key={val[1]} className="ml-2">
              <span className="text-danger font-weight-bold">{val}</span>
            </div>
          ))}
        </div>
      );
    }
  };

  render() {
    return (
      <div className="container ">
        {this.state.courses.map((course) => (
          <div key={course.title} className="card m-2 border-0">
            <div className="p-2 bg-info text-white h4">{course.title}</div>
            <div className="p-2 group-list-item">
              {Object.entries(course.list).map((lst) => this.ObjList(lst))}
            </div>
          </div>
        ))}
      </div>
    );
  }
}
export default Courses;
