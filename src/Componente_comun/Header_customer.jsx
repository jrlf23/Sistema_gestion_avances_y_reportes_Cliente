import React, { useState, useEffect } from 'react';
import { Bars3Icon, XMarkIcon, UserCircleIcon } from '@heroicons/react/24/outline';
import { NavLink, useNavigate } from 'react-router-dom';

export const Header_customer = () => {
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [menuOpen, setMenuOpen] = useState(false);
    const navigate = useNavigate();

    useEffect(() => {
        setIsLoggedIn(!!localStorage.getItem("authToken"));
    }, []);

    const handleLogout = () => {
        localStorage.removeItem("authToken");
        setIsLoggedIn(false);
        setMenuOpen(false);
        navigate("/");
    };

    return (
        <header className="flex justify-between items-center bg-white p-4 px-10 md:px-20 shadow-md relative">
            <NavLink to="/">
                <img src="/LogoInversionesMarin-1.png" alt="Logo" className="w-20 h-20 object-contain" />
            </NavLink>

            <div className="md:hidden">
                <button onClick={() => setMenuOpen(!menuOpen)}>
                    {menuOpen ? <XMarkIcon className="w-8 h-8 text-black" /> : <Bars3Icon className="w-8 h-8 text-black" />}
                </button>
            </div>

            <nav className={`absolute top-full left-0 w-full bg-white shadow-lg flex-col items-center space-y-4 p-4 md:p-0 md:relative md:top-0 md:w-auto md:flex md:flex-row md:space-x-8 md:shadow-none transition-all duration-300 ease-in-out ${menuOpen ? 'flex' : 'hidden'}`}>
                <NavLink to="/" className={({ isActive }) => isActive ? "text-primary font-bold" : "text-black"}>
                    Visualización de avance de proyectos
                </NavLink>
            </nav>

            <div className="hidden md:flex space-x-4 items-center">
                {isLoggedIn ? (
                    <div className="relative">
                        <UserCircleIcon className="w-10 h-10 text-primary cursor-pointer" onClick={() => setMenuOpen(!menuOpen)} />
                        {menuOpen && (
                            <div className="absolute right-0 mt-2 w-40 bg-white shadow-lg rounded-md p-2">
                                <NavLink to="/perfil" className="block px-4 py-2 text-black hover:bg-gray-200">Mi Perfil</NavLink>
                                <button onClick={handleLogout} className="block w-full text-left px-4 py-2 text-black hover:bg-gray-200">
                                    Cerrar Sesión
                                </button>
                            </div>
                        )}
                    </div>
                ) : (
                    <>
                        <NavLink to="/Signup_customer" className="bg-primary text-white px-4 py-2 rounded">
                            Registrarse
                        </NavLink>

                        <NavLink to="/Login_customer" className="bg-blue-500 text-white px-4 py-2 rounded">
                            Iniciar sesión
                        </NavLink>
                    </>
                )}
            </div>
        </header>
    );
};

export default Header_customer;
