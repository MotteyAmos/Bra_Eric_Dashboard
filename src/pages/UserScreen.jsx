import { useState, useEffect } from "react";
import { users } from "../../fakeData";
import { NavLink, Outlet, useLocation } from "react-router-dom";
import { useSelector, useDispatch } from 'react-redux'
import { addUserDetail } from "../../features/userSlice";

const userScreen = () => {
  const [search, setSearch] = useState("");
  const [searchUser, setSearchUser] = useState([]);
  const [removeUsers, setRemoveUsers] = useState(false);

  const dispatch = useDispatch()
  const location = useLocation();

  useEffect(() => {
    setRemoveUsers(false);

    let newResult = users?.filter((val) => {
      let name = val.name.trim().replace(" ", "").toLowerCase();
      let searchValue = search.trim().replace(" ", "").toLowerCase();

      if (name.indexOf(searchValue) >= 0) {
        return val;
      }
    });

    if (search) {
      setSearchUser(newResult);
    }

    return () => {
      setSearchUser(users);
    };
  }, [search]);

  return (
    <div className="mb-5">
      {
        (location.pathname ==  '/users') ? 
        (
          <div>
               <div>
        <p className="text-primary-900 text-3xl font-bold tracking-wide ">
          Users
        </p>
        <p className="text-gray-500 mt-2 mb-7">
          Manage all users you have invited to the platform.
        </p>
      </div>

      <div className="py-5">
        <input
          type="search"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="cursor-pointer shadow-md border focus:outline-none py-1 px-2 w-[19rem] focus:border-primary-900 focus:ring-primary-900 focus:ring-1"
        />
      </div>

      <div className=" flex justify-center">
        <table className=" border shadow-sm drop-shadow-md w-[80rem]">
          <thead className="text-left text-primary-900  text-xl font-bold tracking-wide">
            <tr>
              <th className="p-5">Name</th>
              <th className="p-5">Email</th>
              <th className="p-5">Joined at</th>
              <th className="p-5">Last logged in</th>
              <th className="p-5">Limit calls/ month</th>
            </tr>
          </thead>
          <tbody className="text-left text-gray-500 tracking-wide">
            {searchUser.map((user, index) => (
              <tr>
                <td className="p-5">{user.name}</td>
                <td className="p-5">{user.email}</td>
                <td className="p-5">{user.joinAt}</td>
                <td className="p-5">{user.lastLoggedIn}</td>
                <td className="p-5">{user.limitCallsMonth}</td>
                <td className="p-5 text-3xl  ">
                  <button className="group">
                    ...
                    <div className="text-[17px] invisible drop-shadow-lg group-hover:visible bg-white  w-[12rem] p-1 px-2 absolute right-5 rounded-md transition-all ease-in-out duration-200 ">
                      <NavLink
                        to={"userDetail"}
                        onClick={()=>dispatch(addUserDetail(user))}
                        className="text-primary-900 font-semibold w-full block text-left"
                      >
                        Edit user
                      </NavLink>
                      <NavLink
                        to={"remove_access"}
                        className="text-red-400 block font-semibold w-full  text-left"
                      >
                        Remove access
                      </NavLink>
                    </div>
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>

        
      </div>
          </div>
        )
        : 
        <Outlet/>
      }
   
     

    </div>
  );
};

export default userScreen;
