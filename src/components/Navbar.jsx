import { useState, useEffect } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Menu, X, Sun, Moon } from 'lucide-react';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);
    const [isDark, setIsDark] = useState(true);

    // Handle Scroll Effect
    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    // Handle Dark Mode
    useEffect(() => {
        if (isDark) {
            document.documentElement.classList.add('dark');
        } else {
            document.documentElement.classList.remove('dark');
        }
    }, [isDark]);

    const navLinks = [
        { name: 'About', href: '#about' },
        { name: 'Skills', href: '#skills' },
        { name: 'Experience', href: '#experience' },
        { name: 'Education', href: '#education' },
        { name: 'Projects', href: '#projects' },
        { name: 'Contact', href: '#contact' },
    ];

    return (
        <motion.nav
            initial={{ y: -100 }}
            animate={{ y: 0 }}
            transition={{ duration: 0.5 }}
            className={`fixed top-0 w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-gray-950/80 backdrop-blur-md py-4 shadow-lg border-b border-white/5' : 'bg-transparent py-6'}`}
        >
            <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
                <a href="#" className="text-2xl font-bold text-cyan-400 font-mono tracking-tighter">
                    N<span className="text-white">.</span>
                </a>

                {/* Desktop Nav */}
                <div className="hidden md:flex items-center gap-8">
                    {navLinks.map((link, index) => (
                        <a
                            key={index}
                            href={link.href}
                            className="text-sm font-medium text-gray-300 hover:text-cyan-400 transition-colors"
                        >
                            {link.name}
                        </a>
                    ))}

                    <button
                        onClick={() => setIsDark(!isDark)}
                        className="p-2 rounded-full hover:bg-white/10 text-gray-300 hover:text-cyan-400 transition-colors"
                        aria-label="Toggle Theme"
                    >
                        {isDark ? <Sun size={20} /> : <Moon size={20} />}
                    </button>
                </div>

                {/* Mobile Toggle */}
                <div className="md:hidden flex items-center gap-4">
                    <button
                        onClick={() => setIsDark(!isDark)}
                        className="p-2 rounded-full hover:bg-white/10 text-gray-300 hover:text-cyan-400 transition-colors"
                    >
                        {isDark ? <Sun size={20} /> : <Moon size={20} />}
                    </button>
                    <button
                        onClick={() => setIsOpen(!isOpen)}
                        className="text-gray-300 hover:text-white"
                    >
                        {isOpen ? <X size={24} /> : <Menu size={24} />}
                    </button>
                </div>
            </div>

            {/* Mobile Menu */}
            {isOpen && (
                <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: 'auto' }}
                    className="md:hidden bg-gray-950 border-b border-white/10"
                >
                    <div className="px-6 py-8 flex flex-col gap-6">
                        {navLinks.map((link, index) => (
                            <a
                                key={index}
                                href={link.href}
                                onClick={() => setIsOpen(false)}
                                className="text-lg font-medium text-gray-300 hover:text-cyan-400"
                            >
                                {link.name}
                            </a>
                        ))}
                    </div>
                </motion.div>
            )}
        </motion.nav>
    );
};

export default Navbar;
