import { useState, useEffect } from "react";
import { invitation } from "../../fakeData";
import { NavLink, Outlet, useLocation } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { addUserDetail } from "../../features/userSlice";
import { LuGanttChart } from "react-icons/lu";
import { IoSearchOutline } from "react-icons/io5";
import { IoMdClose } from "react-icons/io";
import toast, { Toaster } from "react-hot-toast";
import Select from "react-select";

const Invitation = () => {
  const [search, setSearch] = useState("");
  const [searchInvitation, setSearchInvitation] = useState([]);
  const [removeInvitation, setRemoveInvitation] = useState(false);
  const [openInvite, setOpenInvite] = useState(false);
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [limitCall, setLimitCall] = useState("");
  const [openStatus, setOpenStatus] = useState(false);

  const options = [
    { value: "chocolate", label: "Chocolate" },
    { value: "strawberry", label: "Strawberry" },
    { value: "vanilla", label: "Vanilla" },
  ];

  const dispatch = useDispatch();
  const location = useLocation();

  useEffect(() => {
    setRemoveInvitation(false);

    let newResult = invitation?.filter((val) => {
      let name = val.name.trim().replace(" ", "").toLowerCase();
      let searchValue = search.trim().replace(" ", "").toLowerCase();

      if (name.indexOf(searchValue) >= 0) {
        return val;
      }
    });

    if (search) {
      setSearchInvitation(newResult);
    }

    return () => {
      setSearchInvitation(invitation);
    };
  }, [search]);

  return (
    <div className="mb-5 relative   "  >
      {location.pathname == "/invitations" ? (
        <div>
          <div className="flex justify-between ">
            <div>
              <p className="text-primary-900 text-3xl font-bold tracking-wide ">
                Invitations
              </p>
              <p className="text-gray-500 mt-2 mb-7">
                Invite a new user to access the platform
              </p>
            </div>

            <div>
              <button
                className="bg-green-500 text-white px-5 py-3 rounded-md active:scale-105 transition-all ease-in-out duration-300 delay-75"
                onClick={() => setOpenInvite(true)}
              >
                Invite User
              </button>
            </div>
          </div>

          <div className="py-5 flex gap-10">
            <div className="relative">
            <button
              onClick={() => setOpenStatus(!openStatus)}
              className="flex gap-2 border bg-gray-50 rounded-sm items-center p-2 px-4 "
            >
              <LuGanttChart className="text-2xl" />
              <span>Filters</span>
              
            </button>
            <div className={`${openStatus ? "visible": "invisible" } bg-white  transition-all duration-200 delay-50 ease-in-out rounded-md  z-10 w-[18rem] h-[11rem] drop-shadow-md shadow-md p-4 absolute top-10 left-0`}>
                <p className="grid  ">
                  <p className="mb-3">Status</p>
                  <Select
                    options={options}
                    theme={(theme) => ({
                      ...theme,
                      borderRadius: 2,
                      colors: {
                        ...theme.colors,
                        primary25: "#f9fafb",
                        primary: "#4ade80",
                        primary50: "#d1fae5",
                      },
                    })}
                  />
                </p>

                <p className="flex gap-5 justify-between mt-5">
                  <button
                    className="px-4 py-2 text-green-500 bg-gray-50 rounded-md active:scale-105 transition-all ease-in-out duration-300 delay-75"
                    onClick={() => setOpenInvite(false)}
                  >
                    Reset
                  </button>
                  <button
                    className="px-4 py-2 text-white bg-green-600 rounded-md active:scale-105 transition-all ease-in-out duration-300 delay-75"
                    onClick={() =>
                      toast.success("Invitation sent successfully")
                    }
                  >
                    Filter
                  </button>
                </p>
              </div>
            </div>
           


            <div className="w-[19rem] relative border">
              <input
                type="search"
                value={search}
                placeholder="Search..."
                onChange={(e) => setSearch(e.target.value)}
                className="cursor-pointer h-full  shadow-md border focus:outline-none py-1 px-2 w-full   focus:border-primary-900 focus:ring-primary-900 focus:ring-1  "
              />
              <IoSearchOutline className="absolute right-5 top-[30%] " />
            </div>
          </div>

          <div className=" flex justify-center">
            <table className=" border shadow-sm drop-shadow-md w-[80rem]">
              <thead className="text-left text-primary-900  text-xl font-bold tracking-wide">
                <tr>
                  <th className="p-5">Name</th>
                  <th className="p-5">Email</th>
                  <th className="p-5">Invite Status</th>
                  <th className="p-5">Expires at</th>
                </tr>
              </thead>
              <tbody className="text-left text-gray-500 tracking-wide">
                {searchInvitation.map((inviate, index) => (
                  <tr key={index}>
                    <td className="p-5">{inviate.name}</td>
                    <td className="p-5">{inviate.email}</td>
                    <td>
                      <span
                        className={`${
                          inviate?.inviteStatus == "PENDING"
                            ? "text-red-400 rounded-xl bg-red-100 "
                            : "text-gray-400"
                        } px-3 py-1`}
                      >
                        {" "}
                        {inviate.inviteStatus}
                      </span>
                    </td>
                    <td className="p-5">{inviate.Expires_at}</td>

                    <td className="p-5 text-3xl  ">
                      <button className="group">
                        ...
                        <div className="text-[17px] invisible drop-shadow-lg group-hover:visible bg-white  w-[12rem] p-1 px-2 absolute right-5 rounded-md transition-all ease-in-out duration-200 ">
                          <NavLink
                            to={"userDetail"}
                            onClick={() => dispatch(addUserDetail(inviate))}
                            className="text-primary-900 font-semibold w-full block text-left"
                          >
                            Resend Invitation
                          </NavLink>
                          <NavLink
                            to={"remove_access"}
                            className="text-red-400 block font-semibold w-full  text-left "
                          >
                            Delete
                          </NavLink>
                        </div>
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          {openInvite && (
            <div
              className="absolute top-10 h-[31rem] w-[35rem] bottom-[5rem]  right-[30rem]
           bg-white p-9  shadow-2xl rounded-md transition-all ease-in-out duration-500 delay-200"
            >
              <p className="mb-5 flex relative">
                <span className="text-primary-900 text-2xl font-bold ">
                  Invite User
                  <span className="block text-gray-500 font-normal text-[1rem]">
                    An invitation will be sent to this email address with a link
                    to create an account
                  </span>
                </span>

                <IoMdClose
                  className="absolute right-0 text-2xl font-extrabold cursor-pointer"
                  onClick={() => setOpenInvite(false)}
                />
              </p>

              <p className="flex justify-between mb-5">
                <lable className=" text-gray-500">
                  First name <br />
                  <input
                    type="text"
                    className="border bg-gray-50 mt-1 px-3 py-3 text-md rounded-sm "
                    value={firstName}
                    onChange={(e) => setFirstName(e.target.value)}
                  />
                </lable>
                <lable className=" text-gray-500">
                  Last name <br />
                  <input
                    value={lastName}
                    onChange={(e) => setLastName(e.target.value)}
                    type="text"
                    className="border mt-1 px-3 py-3 bg-gray-50 text-md rounded-sm "
                  />
                </lable>
              </p>
              <p>
                <lable>
                  Email Address <br />
                  <input
                    type="email"
                    className="border w-full py-2 px-1 mb-5 bg-gray-100 rounded-sm"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </lable>
              </p>
              <p>
                <lable>
                  Limit calls/ month <br />
                  <input
                    type="number"
                    className="border w-full py-2 px-1 bg-gray-100 rounded-sm"
                    value={limitCall}
                    onChange={(e) => setLimitCall(e.target.value)}
                  />
                </lable>
              </p>

              <p className="flex gap-5 justify-end mt-5">
                <button
                  className="px-4 py-2 text-green-500 bg-gray-50 rounded-md active:scale-105 transition-all ease-in-out duration-300 delay-75"
                  onClick={() => setOpenInvite(false)}
                >
                  cancel
                </button>
                <button
                  className="px-4 py-2 text-white bg-green-600 rounded-md active:scale-105 transition-all ease-in-out duration-300 delay-75"
                  onClick={() => toast.success("Invitation sent successfully")}
                >
                  Send Invite
                </button>
              </p>
            </div>
          )}
        </div>
      ) : (
        <Outlet />
      )}
    </div>
  );
};

export default Invitation;
