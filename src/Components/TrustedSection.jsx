import { motion } from "framer-motion";
import Walmart from "../assets/Walmart.png";
import Volvo from "../assets/Volvo.png";
import Okta from "../assets/Okta.png";
import Deloitte from "../assets/Deloitte.png";
import Cisco from "../assets/Cisco.png";

const TrustedSection = () => {
  const items = [Walmart, Cisco, Volvo, Deloitte, Okta];

  return (
    <div>
      <div className="text-center">
        <p className="text-gray-500 text-s mt-2">Trusted by 45M+ users</p>
      </div>
      <div className="w-full overflow-hidden py-4 ">
        <motion.div
          className="flex space-x-8 w-max"
          animate={{ x: ["0%", "100%","0%"] }} 
          transition={{ ease: "linear", duration: 10, repeat: Infinity }}
        >
          {[...items].map((item, index) => ( 
            <div key={index} className="flex items-center">
              <img src={item} alt={`Company ${index}`} className="h-12 w-auto" />
            </div>
          ))}
        </motion.div>
      </div>
    </div>
  );
};

export default TrustedSection;
