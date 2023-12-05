import { FaUsers } from "react-icons/fa";
import { MdOutlineMailOutline } from "react-icons/md";
import { CiSettings } from "react-icons/ci";
import { FaUser } from "react-icons/fa";
import { NavLink, Outlet } from "react-router-dom";



const Dashbard = () => {

  return (
    <div className="relative ">
      
      <section
        className={`  w-[15rem]  
         h-[100vh] p-5 py-10 bg-primary-900 z-10  fixed text-white`}
      >
        <span className="text-xl font-bold tracking-wide ">Freemind</span>


        <ul className=" text-lg mt-7">
            <li className="mb-7">
            <NavLink
                    to={'users'}
                    className={`relative items-center flex gap-3`}
                  >
                    <span className="text-xl">{<FaUsers/>}</span>
                    <span>
                      Users
                    </span>
                  </NavLink>
            </li>

            <li className="mb-7">
            <NavLink
                    to={'invitations'}
                    className={`relative items-center flex gap-3`}
                  >
                    <span className="text-xl">{<MdOutlineMailOutline/>}</span>
                    <span>
                      Invitation
                    </span>
                  </NavLink>
            </li>

            <span >Settings</span>

            <li className="mb-7 mt-3">
            <NavLink
                    to={'invite_mail_settings'}
                    className={`relative items-center flex gap-3 `}
                  >
                    <span className="text-xl">{<CiSettings/>}</span>
                    <span>
                      Invite Mail Settings
                    </span>
                  </NavLink>
            </li>

            <li >
            <NavLink
                    to={'profile_settings'}
                    className={`relative items-center flex gap-3`}
                  >
                    <span className="text-xl">{<FaUser/>}</span>
                    <span>
                      Profile Settings
                    </span>
                  </NavLink>
            </li>
          
        </ul>
      </section>
      <main className={` px-[5rem] pl-[17rem] md:justify-center pt-[2.5rem] `}>
        <Outlet />
      </main>
    </div>
  );
};

export default Dashbard;
