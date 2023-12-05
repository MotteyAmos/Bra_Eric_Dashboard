import { NavLink } from "react-router-dom";
import { LiaLongArrowAltLeftSolid } from "react-icons/lia";
import { useDispatch, useSelector } from "react-redux";
import { IoMdClose } from "react-icons/io";
import { useState } from "react";
import { editUserDetail } from "../../features/userSlice";

const UserDetials = () => {
  const [openEditUser, setOpenEditUser] = useState(false);
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [limitCall, setLimitCall] = useState("");


  const user = useSelector((state) => state?.user?.user);
  const inital = user?.name[0]?.toUpperCase();

  const name = lastName + " " + firstName;

  const dispatch = useDispatch();


const edit =()=>{
    dispatch(  editUserDetail({
        name: name.length() > 2 ? name : user.name,
        email: email ? email : user.email,
        limitCall: limitCall? limitCall : user.limitCallsMonth  
       }))
}

  return (
    <div className="relative -mt-10 w-[70vw]">
      <div className="  ">
        <NavLink to={".."} className="flex gap-5 items-center ">
          <LiaLongArrowAltLeftSolid className="text-2xl" />
          <span className="text-xl font-bold text-primary-900 ">
            User Details
          </span>
        </NavLink>
      </div>

      <div className="flex justify-between my-5">
        <p className="flex gap-3">
          <span className=" bg-green-200 w-[3rem] h-[3rem] flex justify-center items-center font-bold text-2xl rounded-full">
            {inital}
          </span>
          <div className="">
            <span className="block text-primary-900 font-bold text-2xl">
              {user?.name}
            </span>
            <span className="text-gray-500">{user?.email}</span>
          </div>
        </p>
        <button
          className="bg-green-500 text-white px-5 rounded-md active:scale-105 transition-all ease-in-out duration-300 delay-75"
          onClick={() => setOpenEditUser(true)}
        >
          Edit user details
        </button>
      </div>

      <div className="border p-5 flex gap-[15rem]">
        <ul className="grid gap-5 text-xl text-primary-900 tracking-wide font-semibold ">
          <li>Full Name</li>
          <li>Email</li>
          <li>Joined at</li>
          <li>Last logged in</li>
          <li>Limit calls/ month</li>
        </ul>
        <ul className="grid gap-5 text-gray-500">
          <li>{user?.name}</li>
          <li>{user?.email}</li>
          <li>{user?.joinAt}</li>
          <li>{user?.lastLoggedIn}</li>
          <li>{user?.limitCallsMonth}</li>
        </ul>
      </div>

      <div className="border mt-[3rem] rounded-sm p-5 flex justify-between items-center">
        <p>
          <p className="text-primary-900 font-semibold text-xl">Delete User</p>
          <p className="text-gray-500">
            Deleting this user is permanent and cannot be undone
          </p>
        </p>
        <button className="border px-3 py-2 rounded-md bg-gray-100 text-red-500">
          Delete User
        </button>
      </div>

      {openEditUser && (
        <div
          className="absolute top-70 w-[35rem] bottom-[5rem]  right-52
           bg-white p-9  shadow-2xl rounded-md transition-all ease-in-out duration-500 delay-200"
        >
          <p className="mb-5 flex relative">
            <span className="text-primary-900 text-2xl font-bold ">
              Edit user details
            </span>
            <IoMdClose
              className="absolute right-0 text-2xl font-extrabold cursor-pointer "
              onClick={() => setOpenEditUser(false)}
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
            <button className="px-4 py-2 text-green-500 bg-gray-50 rounded-md active:scale-105 transition-all ease-in-out duration-300 delay-75" >cancel</button>
            <button className="px-4 py-2 text-white bg-green-600 rounded-md active:scale-105 transition-all ease-in-out duration-300 delay-75" onClick={()=>edit()}>Save Changes</button>
          </p>
        </div>
      )}
    </div>
  );
};

export default UserDetials;
