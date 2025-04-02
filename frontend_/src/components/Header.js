import React, { useContext, useState } from 'react';
import Logo from './Logo';
import { GrSearch } from "react-icons/gr";
import { FaRegCircleUser } from "react-icons/fa6";
import { FaShoppingCart } from "react-icons/fa";
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import SummaryApi from '../common';
import { toast } from 'react-toastify';
import { setUserDetails } from '../store/userSlice';
import ROLE from '../common/role';
import Context from '../context';

const Header = () => {
  const user = useSelector(state => state?.user?.user);
  const dispatch = useDispatch();
  const [menuDisplay, setMenuDisplay] = useState(false);
  const context = useContext(Context);
  const navigate = useNavigate();
  const searchInput = useLocation();
  const URLSearch = new URLSearchParams(searchInput?.search);
  const searchQuery = URLSearch.get("q") || "";
  const [search, setSearch] = useState(searchQuery);

  const handleLogout = async () => {
    const fetchData = await fetch(SummaryApi.logout_user.url, {
      method: SummaryApi.logout_user.method,
      credentials: 'include'
    });

    const data = await fetchData.json();

    if (data.success) {
      toast.success(data.message);
      dispatch(setUserDetails(null));
      navigate("/");
    } else if (data.error) {
      toast.error(data.message);
    }
  };

  const handleSearch = (e) => {
    const { value } = e.target;
    setSearch(value);
    navigate(value ? `/search?q=${value}` : "/search");
  };

  return (
    <header className='h-16 shadow-md bg-white fixed w-full z-50'>
      <div className='h-full container mx-auto flex items-center px-6 justify-between'>

        {/* Logo Section */}
        <div className='flex items-center'>
          <Link to={"/"}>
            <Logo w={100} h={50} />
          </Link>
        </div>

        {/* Search Bar */}
        <div className='hidden lg:flex items-center w-full max-w-md border rounded-full focus-within:shadow pl-2'>
          <input
            type='text'
            placeholder='Search products here...'
            className='w-full outline-none p-2'
            onChange={handleSearch}
            value={search}
          />
          <div className='text-lg min-w-[50px] h-8 bg-red-600 flex items-center justify-center rounded-r-full text-white'>
            <GrSearch />
          </div>
        </div>

        {/* User & Cart Section */}
        <div className='flex items-center gap-6'>

          {/* User Profile */}
          {user?._id && (
            <div className='relative cursor-pointer flex items-center' onClick={() => setMenuDisplay(prev => !prev)}>
              {user?.profilePic ? (
                <img src={user?.profilePic} className='w-10 h-10 rounded-full' alt={user?.name} />
              ) : (
                <FaRegCircleUser className='text-3xl' />
              )}
              
              {menuDisplay && (
                <div className='absolute bg-white right-0 top-12 shadow-lg rounded p-2 w-40'>
                  <nav>
                    {user?.role === ROLE.ADMIN && (
                      <Link to={"/admin-panel/all-products"} className='block p-2 hover:bg-slate-100'>
                        Admin Panel
                      </Link>
                    )}
                  </nav>
                </div>
              )}
            </div>
          )}

          {/* Shopping Cart */}
          {user?._id && (
            <Link to={"/cart"} className='text-2xl relative'>
              <FaShoppingCart />
              <div className='bg-red-600 text-white w-5 h-5 rounded-full p-1 flex items-center justify-center absolute -top-2 -right-3 text-sm'>
                {context?.cartProductCount}
              </div>
            </Link>
          )}

          {/* Login/Logout Button */}
          <div>
            {user?._id ? (
              <button onClick={handleLogout} className='px-3 py-1 rounded-full text-white bg-red-600 hover:bg-red-700'>
                Logout
              </button>
            ) : (
              <Link to={"/login"} className='px-3 py-1 rounded-full text-white bg-red-600 hover:bg-red-700'>
                Login
              </Link>
            )}
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
