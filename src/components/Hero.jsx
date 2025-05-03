import { motion } from "framer-motion";
import { FaGithub, FaLinkedin } from "react-icons/fa"; 
import { styles } from "../styles";
import { ComputersCanvas } from "./canvas";

const Hero = () => {
  return (
    <section className={`relative w-full h-screen mx-auto`}>
      <div
        className={`absolute inset-0 top-[120px] max-w-7xl mx-auto ${styles.paddingX} flex flex-row items-start gap-5`}
      >
        <div className='flex flex-col justify-center items-center mt-5'>
          <div className='w-5 h-5 rounded-full bg-[#915EFF]' />
          <div className='w-1 sm:h-80 h-40 violet-gradient' />
        </div>

        <div>
          <h1 className={`${styles.heroHeadText} text-white`}>
            Hi, I'm <span className='text-[#915EFF]'>SOUMEN</span>
          </h1>
          <p className={`${styles.heroSubText} mt-2 text-white-100`}>
            Full Stack Web Developer <br className='sm:block hidden' />
            Cloud Enthusiast || AWS <br className='sm:block hidden' />
          </p>
          {/* Social icons */}
          <div className="mt-4 flex gap-4 relative z-50">
            <a
              href="https://www.linkedin.com/in/soumen-das-76b867218/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white text-2xl hover:text-[#915EFF]"
            >
              <FaLinkedin />
            </a>
            <a
              href="https://github.com/soumen0818"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white text-2xl hover:text-[#915EFF]"
            >
              <FaGithub />
            </a>
          </div>
        </div>
      </div>

      <ComputersCanvas />

      <div className='absolute xs:bottom-10 bottom-32 w-full flex justify-center items-center'>
        <a href='#about'>
          <div className='w-[35px] h-[64px] rounded-3xl border-4 border-secondary flex justify-center items-start p-2'>
            <motion.div
              animate={{
                y: [0, 24, 0],
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                repeatType: "loop",
              }}
              className='w-3 h-3 rounded-full bg-secondary mb-1'
            />
          </div>
        </a>
      </div>
    </section>
  );
};

export default Hero;