import React from 'react';
import { motion } from 'framer-motion';
import { Share2, Download, Linkedin, Send } from 'lucide-react';

const buttonVariants = {
  hover: { scale: 1.1 },
  tap: { scale: 0.95 }
};

export default function ShareButtons() {
  const handleShare = (platform: string) => {
    const url = window.location.href;
    const title = "Shashank Chaudhary - Front End Developer Resume";
    
    switch (platform) {
      case 'linkedin':
        window.open(`https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(url)}`);
        break;
      case 'telegram':
        window.open(`https://t.me/share/url?url=${encodeURIComponent(url)}&text=${encodeURIComponent(title)}`);
        break;
      case 'whatsapp':
        window.open(`https://api.whatsapp.com/send?text=${encodeURIComponent(title + ' ' + url)}`);
        break;
    }
  };

  const handleDownload = () => {
    window.print();
  };

  return (
    <motion.div 
      className="fixed bottom-4 right-4 flex gap-2"
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.5 }}
    >
      <motion.button
        variants={buttonVariants}
        whileHover="hover"
        whileTap="tap"
        onClick={handleDownload}
        className="bg-blue-900 text-white p-2 rounded-full hover:bg-blue-800 transition-colors"
        title="Download PDF"
      >
        <Download size={20} />
      </motion.button>
      <motion.button
        variants={buttonVariants}
        whileHover="hover"
        whileTap="tap"
        onClick={() => handleShare('linkedin')}
        className="bg-blue-600 text-white p-2 rounded-full hover:bg-blue-700 transition-colors"
        title="Share on LinkedIn"
      >
        <Linkedin size={20} />
      </motion.button>
      <motion.button
        variants={buttonVariants}
        whileHover="hover"
        whileTap="tap"
        onClick={() => handleShare('telegram')}
        className="bg-blue-500 text-white p-2 rounded-full hover:bg-blue-600 transition-colors"
        title="Share on Telegram"
      >
        <Send size={20} />
      </motion.button>
      <motion.button
        variants={buttonVariants}
        whileHover="hover"
        whileTap="tap"
        onClick={() => handleShare('whatsapp')}
        className="bg-green-600 text-white p-2 rounded-full hover:bg-green-700 transition-colors"
        title="Share on WhatsApp"
      >
        <Share2 size={20} />
      </motion.button>
    </motion.div>
  );
}