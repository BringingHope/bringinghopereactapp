import { combineReducers } from "redux";
import authReducers from './authentication/authReducers'
import messageReducer from './message/messageReducers'
import sidebarReducers from './dashboardSidebar/sidebarReducers'
import profileReducers from './dashboardProfile/profileReducers'
import dashboardDonorTableReducers from './dashboardDonorTable/dashboardDonorTableReducers'
import dashboardVolunteerTableReducers from './dashboardVolunteerTable/dashboardVolunteerTableReducers'
import dashboardChangePasswordReducers from './dashboardChangePassword/dashboardChangePasswordReducers'
import forgotPasswordReducers from './forgotPassword/forgotPasswordReducers'

const rootReducer = combineReducers({
  auth: authReducers,
  message: messageReducer,
  organisationdetails : sidebarReducers,
  orgProfileDetails: profileReducers,
  donorList: dashboardDonorTableReducers,
  volunteerList: dashboardVolunteerTableReducers,
  forgotPassword: forgotPasswordReducers,
  changePassword: dashboardChangePasswordReducers
})

export default rootReducer