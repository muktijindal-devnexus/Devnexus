"use client";
import Image from "next/image";
import { motion } from "framer-motion";

const platforms = [
  { name: "Etherium", src: "/cdn/images/Blockchain/Etherium.svg" },
  { name: "Solana", src: "/cdn/images/solana.svg" },
  { name: "Stellar", src: "/cdn/images/stellar.svg" },
  { name: "Hyperledger", src: "/cdn/images/Blockchain/Hyperledger.svg" },
  { name: "Credits", src: "/cdn/images/Blockchain/Credits.svg" },
  { name: "Bigchaindb", src: "/cdn/images/Blockchain/Bigchaindb.svg" },
  { name: "Hashgraph", src: "/cdn/images/Blockchain/Hashgraph.svg" },
  { name: "Ripple", src: "/cdn/images/Blockchain/Ripple.svg" },
  { name: "Corda", src: "/cdn/images/Blockchain/Corda.svg" },
  { name: "Multichain", src: "/cdn/images/Blockchain/Multichain.svg" },
  { name: "Tron", src: "/cdn/images/Blockchain/Tron.svg" },
  { name: "EOS", src: "/cdn/images/Blockchain/EOS.svg" },
];

const containerVariants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, scale: 0.8, y: 20 },
  show: { opacity: 1, scale: 1, y: 0 },
};

const BlockchainPlatforms = () => {
  return (
    <section className="py-12 px-4 md:px-16 lg:px-24 bg-white">
      <motion.h2
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-2xl md:text-3xl font-normal text-center text-[#00357A] mb-10"
      >
        <span className="text-[#00357A] font-bold">Blockchain</span> Platforms We Work On
      </motion.h2>

      <motion.div
        className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6 justify-items-center"
        variants={containerVariants}
        initial="hidden"
        animate="show"
      >
        {platforms.map((platform, index) => (
          <motion.div
            key={index}
            variants={itemVariants}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="flex flex-col items-center border rounded-lg shadow-sm p-4 w-full max-w-[120px] hover:shadow-md transition-all duration-300"
          >
            <Image
              src={platform.src}
              alt={platform.name}
              width={50}
              height={50}
              className="mb-3 object-contain"
            />
            <p className="text-sm font-medium text-gray-700 text-center">{platform.name}</p>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
};

export default BlockchainPlatforms;
