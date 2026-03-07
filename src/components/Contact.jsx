import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { HiMail, HiLocationMarker } from 'react-icons/hi';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import emailjs from 'emailjs-com';

const contactInfo = [
  {
    icon: <HiMail size={22} />,
    label: 'Email',
    value: 'prasaddesai2141@gmail.com',
    href: 'mailto:prasaddesai2141@gmail.com',
  },
  {
    icon: <FaGithub size={22} />,
    label: 'GitHub',
    value: 'https://github.com/prasaddesai2141',
    href: 'https://github.com/prasaddesai2141',
  },
  {
    icon: <FaLinkedin size={22} />,
    label: 'LinkedIn',
    value: 'linkedin.com/in/prasad-desai-2797m',
    href: 'https://linkedin.com/in/prasad-desai-2797m',
  },
  {
    icon: <HiLocationMarker size={22} />,
    label: 'Location',
    value: 'Pune, Maharashtra, India',
    href: null,
  },
];

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', message: '' });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  // Initialize EmailJS
  useEffect(() => {
    emailjs.init('LTae9zVaK3lF4P0nq');
  }, []);

  const handleChange = (e) =>
    setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError('');

    try {
      // Send email to admin
      await emailjs.send(
        'service_96d50kn',
        'template_genjoxu',
        {
          to_email: 'prasadsocial27@gmail.com',
          from_name: form.name,
          from_email: form.email,
          message: form.message,
        },
        'LTae9zVaK3lF4P0nq'
      );

      // Send auto-reply to user
      await emailjs.send(
        'service_96d50kn',
        'template_dbuv5cu',
        {
          to_email: form.email,
          user_name: form.name,
        },
        'LTae9zVaK3lF4P0nq'
      );

      setSubmitted(true);
      setForm({ name: '', email: '', message: '' });
      setTimeout(() => setSubmitted(false), 3000);
    } catch (err) {
      setError('Failed to send message. Please try again.');
      console.error('EmailJS error:', err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="contact" className="py-20 md:py-28 bg-white dark:bg-dark-bg">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-accent dark:text-accent-light text-sm font-semibold tracking-widest uppercase">
            Contact
          </span>
          <h2 className="text-3xl md:text-4xl font-bold font-[family-name:var(--font-poppins)] text-light-text dark:text-dark-text mt-3">
            Get in touch
          </h2>
          <p className="text-gray-medium mt-4 max-w-xl mx-auto">
            Have a project in mind or want to collaborate? Feel free to reach out!
          </p>
        </motion.div>

        <div className="grid md:grid-cols-5 gap-10 lg:gap-16">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.6 }}
            className="md:col-span-2 space-y-4"
          >
            {contactInfo.map((item, i) => (
              <motion.div
                key={item.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="group flex items-center gap-4 p-4 rounded-xl bg-light-card dark:bg-dark-card border border-gray-light/50 dark:border-dark-card hover:border-accent/30 dark:hover:border-accent-light/30 transition-all duration-300"
              >
                <div className="p-3 rounded-xl bg-accent/10 dark:bg-accent-light/10 text-accent dark:text-accent-light group-hover:scale-110 transition-transform">
                  {item.icon}
                </div>
                <div>
                  <p className="text-xs text-gray-medium uppercase tracking-wider">
                    {item.label}
                  </p>
                  {item.href ? (
                    <a
                      href={item.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-sm font-medium text-light-text dark:text-dark-text hover:text-accent dark:hover:text-accent-light transition-colors"
                    >
                      {item.value}
                    </a>
                  ) : (
                    <p className="text-sm font-medium text-light-text dark:text-dark-text">
                      {item.value}
                    </p>
                  )}
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="md:col-span-3"
          >
            <form
              onSubmit={handleSubmit}
              className="bg-light-card dark:bg-dark-card rounded-2xl p-6 md:p-8 border border-gray-light/50 dark:border-dark-card"
            >
              <div className="grid sm:grid-cols-2 gap-4 mb-4">
                <div>
                  <label
                    htmlFor="name"
                    className="block text-xs font-medium text-gray-medium uppercase tracking-wider mb-2"
                  >
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={form.name}
                    onChange={handleChange}
                    required
                    placeholder="Your name"
                    className="w-full px-4 py-3 rounded-xl bg-white dark:bg-dark-bg border border-gray-light/50 dark:border-dark-bg text-light-text dark:text-dark-text placeholder:text-gray-medium/50 focus:outline-none focus:ring-2 focus:ring-accent/30 dark:focus:ring-accent-light/30 focus:border-accent dark:focus:border-accent-light transition-all text-sm"
                  />
                </div>
                <div>
                  <label
                    htmlFor="email"
                    className="block text-xs font-medium text-gray-medium uppercase tracking-wider mb-2"
                  >
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={form.email}
                    onChange={handleChange}
                    required
                    placeholder="your@email.com"
                    className="w-full px-4 py-3 rounded-xl bg-white dark:bg-dark-bg border border-gray-light/50 dark:border-dark-bg text-light-text dark:text-dark-text placeholder:text-gray-medium/50 focus:outline-none focus:ring-2 focus:ring-accent/30 dark:focus:ring-accent-light/30 focus:border-accent dark:focus:border-accent-light transition-all text-sm"
                  />
                </div>
              </div>
              <div className="mb-6">
                <label
                  htmlFor="message"
                  className="block text-xs font-medium text-gray-medium uppercase tracking-wider mb-2"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={form.message}
                  onChange={handleChange}
                  required
                  rows={5}
                  placeholder="Tell me about your project..."
                  className="w-full px-4 py-3 rounded-xl bg-white dark:bg-dark-bg border border-gray-light/50 dark:border-dark-bg text-light-text dark:text-dark-text placeholder:text-gray-medium/50 focus:outline-none focus:ring-2 focus:ring-accent/30 dark:focus:ring-accent-light/30 focus:border-accent dark:focus:border-accent-light transition-all text-sm resize-none"
                />
              </div>
              {error && (
                <div className="mb-4 p-3 bg-red-100 dark:bg-red-900/20 border border-red-300 dark:border-red-700 rounded-lg text-red-700 dark:text-red-400 text-sm">
                  {error}
                </div>
              )}
              <button
                type="submit"
                disabled={loading}
                className="w-full py-3.5 bg-accent hover:bg-blue-600 disabled:bg-gray-400 text-white rounded-xl font-semibold text-sm transition-all duration-300 shadow-lg shadow-accent/25 hover:shadow-accent/40 hover:-translate-y-0.5 disabled:cursor-not-allowed"
              >
                {loading ? 'Sending...' : submitted ? '✓ Message Sent!' : 'Send Message'}
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
