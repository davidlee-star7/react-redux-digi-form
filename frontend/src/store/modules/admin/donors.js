import Immutable from 'immutable'
import { createAction, handleActions } from 'redux-actions'

import { requestSuccess, requestFail } from 'store/api/request'
import {
  ADMIN_GET_DONOR_LIST,
  ADMIN_CREATE_DONOR,
  ADMIN_GET_DONOR_DETAIL,
  ADMIN_UPDATE_DONOR_DETAIL,
  ADMIN_UPLOAD_DONOR_LOGO,
  ADMIN_UPLOAD_DONOR_VIDEO,
  ADMIN_DELETE_DONOR,
  ADMIN_GET_DONOR_PRODUCT_LIST,
} from 'store/constants'


/* Initial state */

const initialState = Immutable.fromJS({
  /* Donor */
  donorList: [],
  donorListLoaded: false,
  donorDetail: null,
  donorProductList: [],
  donorProductListLoaded: false,
})

/* Action creators */

export const getDonorList = createAction(ADMIN_GET_DONOR_LIST)
export const createDonor = createAction(ADMIN_CREATE_DONOR)
export const getDonorDetail = createAction(ADMIN_GET_DONOR_DETAIL)
export const updateDonorDetail = createAction(ADMIN_UPDATE_DONOR_DETAIL)
export const uploadDonorLogo = createAction(ADMIN_UPLOAD_DONOR_LOGO)
export const uploadDonorVideo = createAction(ADMIN_UPLOAD_DONOR_VIDEO)
export const deleteDonor = createAction(ADMIN_DELETE_DONOR)
export const getDonorProductList = createAction(ADMIN_GET_DONOR_PRODUCT_LIST)

/* Reducer */

export default handleActions({

  /* Get donor list actions */

  [requestSuccess(ADMIN_GET_DONOR_LIST)]: (state, { payload }) => state.withMutations(map => {
    map.set('donorList', Immutable.fromJS(payload))
    map.set('donorListLoaded', true)
  }),

  [requestFail(ADMIN_GET_DONOR_LIST)]: (state, { payload }) => state.withMutations(map => {
    map.set('donorList', Immutable.List())
    map.set('donorListLoaded', false)
  }),

  /* Get donor detail actions */

  [ADMIN_GET_DONOR_DETAIL]: (state, { payload }) => state.withMutations(map => {
    map.set('donorDetail', null)
  }),

  [requestSuccess(ADMIN_GET_DONOR_DETAIL)]: (state, { payload }) => state.withMutations(map => {
    map.set('donorDetail', Immutable.fromJS(payload))
  }),

  /* Update donor detail actions */

  [requestSuccess(ADMIN_UPDATE_DONOR_DETAIL)]: (state, { payload }) => state.withMutations(map => {
    map.set('donorDetail', Immutable.fromJS(payload))
  }),

  /* Get donor product list actions */

  [ADMIN_GET_DONOR_PRODUCT_LIST]: (state, { payload }) => state.withMutations(map => {
    map.set('donorProductList', Immutable.List())
  }),

  [requestSuccess(ADMIN_GET_DONOR_PRODUCT_LIST)]: (state, { payload }) => state.withMutations(map => {
    map.set('donorProductList', Immutable.fromJS(payload))
  }),

}, initialState)
