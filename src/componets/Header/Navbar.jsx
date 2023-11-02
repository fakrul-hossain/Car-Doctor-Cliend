import React from "react";
import CarLogo from '../../assets/logo.svg'
import {
  Navbar,
  MobileNav,
  Typography,
  Button,
  Menu,
  MenuHandler,
  MenuList,
  Avatar,
} from "@material-tailwind/react";
import { ChevronDownIcon } from "@heroicons/react/24/solid";
import { NavLink } from "react-router-dom";

function ProfileMenu() {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  const closeMenu = () => setIsMenuOpen(false);

  return (
    <Menu open={isMenuOpen} handler={setIsMenuOpen} placement="bottom-end">
      <MenuHandler>
        <Button
          variant="text"
          color="blue-gray"
          className="flex items-center gap-1 rounded-full py-0.5 pr-2 pl-0.5 lg:ml-auto"
        >
          <Avatar
            variant="circular"
            size="sm"
            alt="tania andrew"
            className="border border-gray-900 p-0.5"
            src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1480&q=80"
          />
          <ChevronDownIcon
            strokeWidth={2.5}
            className={`h-3 w-3 transition-transform ${
              isMenuOpen ? "rotate-180" : ""
            }`}
          />
        </Button>
      </MenuHandler>
      <MenuList className="p-1">
        <ul>
          <li>fakrul</li>
        </ul>
      </MenuList>
    </Menu>
  );
}

// nav list menu

// nav list component

function NavList() {
  return (
    <ul className="mt-2 mb-4 flex flex-col gap-2 lg:mb-0 lg:mt-0 lg:flex-row lg:items-center">
      {/* <li>Fkaul</li> */}
    </ul>
  );
}

const MegaNavbar = () => {
  const [isNavOpen, setIsNavOpen] = React.useState(false);

  const toggleIsNavOpen = () => setIsNavOpen((cur) => !cur);

  React.useEffect(() => {
    window.addEventListener(
      "resize",
      () => window.innerWidth >= 960 && setIsNavOpen(false)
    );
  }, []);

  return (
    <Navbar className="mx-auto max-w-[1440px] p-2 lg:rounded-full lg:pl-6">
      <div className="relative mx-auto flex items-center justify-between text-blue-gray-900">
        <Typography
          as="a"
          href="#"
          className="mr-4 ml-2 cursor-pointer py-1.5 font-bold text-xl"
        >
          <NavLink to='/'>

          <img src={CarLogo} className="w-3/5" />
          </NavLink>
        </Typography>
        <div className="hidden lg:block">
          {/* <NavList /> */}
        </div>
       <div className="">
        <ul className="flex justify-center gap-4 items-center">
        <li><NavLink
            to="/"
            className={({ isActive, isPending }) =>
              isPending ? "pending" : isActive ? "text-red-500 " : ""
            }
          >
            Home
          </NavLink></li>

       <li> <NavLink
            to="/logIn"
            className={({ isActive, isPending }) =>
              isPending ? "pending" : isActive ? "text-red-500 " : ""
            }
          >
            LogIn
          </NavLink></li>
       <li> <NavLink
            to="/signUp"
            className={({ isActive, isPending }) =>
              isPending ? "pending" : isActive ? "text-red-500 " : ""
            }
          >
            SingUp
          </NavLink></li>
        </ul>
       </div>

        <ProfileMenu />
      </div>
      <MobileNav open={isNavOpen} className="overflow-scroll">
        <NavList />
      </MobileNav>
    </Navbar>
  );
};
export default MegaNavbar;
