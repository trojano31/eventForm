import rootReducer, { initialState } from '../reducers/rootReducer';
import * as actionTypes from '../actions/actionTypes';

describe('root reducer', () => {
  it('should return default state', () => {
    expect(rootReducer(undefined, {})).toEqual(initialState)
  })

  it('should handle POSTING_FORM action', () => {
    expect(rootReducer({}, {
      type: actionTypes.POSTING_FORM
    }))
      .toEqual({posting: true})
  });

  it('should handle POSTING_FAILED action', () => {
    expect(rootReducer({}, {
      type: actionTypes.POSTING_FAILED,
      payload: "Something went wrong"
    }))
      .toEqual({
        posting: false,
        error: {
          isError: true,
          message: "Something went wrong"
        }
      })
  });

  it('should handle POSTING_SUCCESS action', () => {
    expect(rootReducer({}, {
      type: actionTypes.POSTING_SUCCESS
    }))
      .toEqual({posting: false, success: true})
  });
});
