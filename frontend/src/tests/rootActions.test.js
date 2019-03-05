import * as rootActions from "../actions/rootActions";
import * as actionTypes from "../actions/actionTypes";


describe('root actions', () => {
  it('should create postingForm action', () => {
    const expected = {
      type: actionTypes.POSTING_FORM
    };
    expect(rootActions.postingForm()).toEqual(expected);
  })

  it('should create postingFailed action', () => {
    const expected = {
      type: actionTypes.POSTING_SUCCESS
    };
    expect(rootActions.postingSuccess()).toEqual(expected);
  })

  it('should create postingSuccess action', () => {
    const expected = {
      type: actionTypes.POSTING_FAILED,
      payload: 'Something went wrong'
    };
    expect(rootActions.postingFailed("Something went wrong")).toEqual(expected);
  })
})
