import logo from "../assets/Dn.png";
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { motion } from "framer-motion";

const dropDownVariants = {
  hidden: { y: -20, opacity: 0 },
  visible: { y: 0, opacity: 1, transition: { duration: 0.5 } },
};

const Navbar = () => {
  return (
    <nav className="mb-20 flex items-center justify-between py-6">
      <div className="flex flex-shrink-0 items-center">
        <motion.img
          initial="hidden"
          animate="visible"
          variants={dropDownVariants}
          className="mx-2 w-10"
          src={logo}
          alt="logo"
        />
      </div>
      <div className="m-8 flex items-center justify-center gap-4 text-2xl">
        <motion.a
          href="https://www.linkedin.com/in/dannyswe/"
          target="blank"
          rel="noopener noreferrer"
          initial="hidden"
          animate="visible"
          variants={dropDownVariants}
        >
          <FaLinkedin />
        </motion.a>
        <motion.a
          href="https://github.com/DaNnY-0324"
          target="blank"
          rel="noopener noreferrer"
          initial="hidden"
          animate="visible"
          variants={dropDownVariants}
        >
          <FaGithub />
        </motion.a>
      </div>
    </nav>
  );
};

export default Navbar;
