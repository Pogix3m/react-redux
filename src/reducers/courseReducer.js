import * as types from '../actions/actionTypes';

export default function courseReducer(state = [], action) {
  // console.log('action: ', action.type);
  switch(action.type) {
    // case types.CREATE_COURSE:
    //   return [...state, Object.assign({}, action.course)];

    case types.LOAD_COURSES_SUCCESS:
      return action.courses;

    case types.CREATE_COURSE_SUCCESS:
      // debugger;
      return [
        ...state,
        Object.assign({}, action.course)
      ];

    case types.UPDATE_COURSE_SUCCESS:
      return [
        ...state.filter(course => course.id !== action.course.id),
        Object.assign({}, action.course)
      ];

    default:
      return state;
  }
}
