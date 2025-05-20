import React from 'react';
import { motion } from 'framer-motion';

const ApplyNow = () => {
  return (
    <section className="py-20 bg-gradient-to-r from-purple-600 to-blue-600">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="max-w-4xl mx-auto text-center"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Ready to Join Our Team?
          </h2>
          <p className="text-xl text-white/90 mb-8">
            We're always looking for talented individuals to join our growing team.
            Take the next step in your career journey with us.
          </p>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-white text-purple-600 px-8 py-4 rounded-full text-lg font-semibold 
                     shadow-lg hover:shadow-xl transition-all duration-300"
          >
            Apply Now
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
};

export default ApplyNow; 