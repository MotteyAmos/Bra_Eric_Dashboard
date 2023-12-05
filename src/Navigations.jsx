
import {
  Routes,
  Route,
  createBrowserRouter,
  createRoutesFromChildren,
  createRoutesFromElements,
  Outlet,
  RouterProvider,
} from "react-router-dom";

import userScreen from "./pages/userScreen";
import { Dashboard, UserScreen, UserDetail, Invitation, InviteMailSetting, ProfileSettings } from "./pages";


// const Root = ({ children }) => {
//   return (
//     <div>
//       <Outlet />
//     </div>
//   );
// };

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Dashboard />}>
      <Route path="users" element={<UserScreen />} >
        <Route path="userDetail" element={<UserDetail />}/>
      </Route>
      <Route path="invitations" element={<Invitation/>} />
      <Route path="invite_mail_settings" element={<InviteMailSetting/>}/>
      <Route path="profile_settings" element={<ProfileSettings/>}/>
    </Route>
  )
);


function Navigations() {
  return (
    <>

      <RouterProvider router={router} />
    </>
  );
}

export default Navigations;