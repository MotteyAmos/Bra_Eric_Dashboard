import { IoMdExit } from "react-icons/io";
import { useState } from "react";
import { IoMdClose } from "react-icons/io";

const ProfileSettings = () => {
  const [openEditUser, setOpenEditUser] = useState(false);
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");

  return (
    <div>
      <div>
        <p className="text-primary-900 text-3xl font-bold tracking-wide">
          Profile Settings
        </p>
        <p className="text-gray-500 mt-2 mb-7">Manage your personal profile</p>
      </div>
      <hr />

      <div className="flex mt-5 justify-between">
        <p>
          <p className="text-primary-900 text-xl font-semibold">
            Edit personal details
          </p>
          <p className="text-gray-500 mt-2 mb-7">
            To change, click 'edit details' and save when done.
          </p>
        </p>
        <p>
          <button
            className="px-3 py-2 text-white bg-green-600 rounded-md active:scale-105 transition-all ease-in-out duration-300 delay-75"
            onClick={() => setOpenEditUser(true)}
          >
            Edit details
          </button>
        </p>
      </div>

      <div className="flex gap-[9rem] border  p-5 rounded-md shadow-md">
        <div className="grid gap-7 font-semibold">
          <p>Full Name</p>
          <p>Email</p>
          <p>Role</p>
        </div>
        <div className="grid gap-7 text-gray-400">
          <p>John Doe</p>
          <p>alex.johnson@gmail.com</p>
          <p>Admin</p>
        </div>
      </div>

      <div className="border p-5 flex justify-between mt-7 rounded-md items-center">
        <p className="text-primary-900 font-semibold">Logout</p>
        <button className="flex justify-center items-center gap-2 border p-2 rounded-md bg-gray-50 text-red-400 active:scale-105 transition-all ease-in-out duration-300 delay-75">
          <IoMdExit />
          Logout
        </button>
      </div>
      {openEditUser && (
        <div
          className="absolute  w-[35rem] bottom-[15rem]  right-72
           bg-white p-9  shadow-2xl rounded-md transition-all ease-in-out duration-500 delay-200"
        >
          <p className="mb-5 flex relative">
            <span className="text-primary-900 text-2xl font-bold ">
              Edit details
            </span>
            <IoMdClose
              className="absolute right-0 text-2xl font-extrabold cursor-pointer"
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

          <p className="flex gap-5 justify-end mt-5">
            <button className="px-4 py-2 text-green-500 bg-gray-50 rounded-md active:scale-105 transition-all ease-in-out duration-300 delay-75">
              cancel
            </button>
            <button
              className="px-4 py-2 text-white bg-green-600 rounded-md active:scale-105 transition-all ease-in-out duration-300 delay-75"
              onClick={() => edit()}
            >
              Save Changes
            </button>
          </p>
        </div>
      )}
    </div>
  );
};

export default ProfileSettings;
