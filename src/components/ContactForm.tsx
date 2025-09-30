import React, { useState } from 'react';
import { Send, CheckCircle, AlertCircle } from 'lucide-react';
import emailjs from 'emailjs-com';
import { useLanguage } from '../LanguageContext';
import { translations } from '../translations';
import { EMAILJS_CONFIG } from '../utils/constants';

interface FormData {
  name: string;
  email: string;
  company: string;
  phone: string;
  message: string;
}

interface ContactFormProps {
  onSuccess?: () => void;
}

export const ContactForm: React.FC<ContactFormProps> = ({ onSuccess }) => {
  const { language } = useLanguage();
  const t = translations[language];
  
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    company: '',
    phone: '',
    message: ''
  });
  
  const [status, setStatus] = useState<'idle' | 'sending' | 'success' | 'error'>('idle');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('sending');

    try {

      const templateParams = {
        from_name: formData.name,
        from_email: formData.email,
        company: formData.company,
        phone: formData.phone,
        message: formData.message,
        to_name: 'Bora Company',
        reply_to: formData.email
      };

      await emailjs.send(
        EMAILJS_CONFIG.serviceId, 
        EMAILJS_CONFIG.templateId, 
        templateParams, 
        EMAILJS_CONFIG.publicKey
      );
      
      setStatus('success');
      setFormData({
        name: '',
        email: '',
        company: '',
        phone: '',
        message: ''
      });
      
      if (onSuccess) {
        onSuccess();
      }
      
      // Reset success message after 5 seconds
      setTimeout(() => setStatus('idle'), 5000);
      
    } catch (error) {
      console.error('EmailJS error:', error);
      setStatus('error');
      
      // Reset error message after 5 seconds
      setTimeout(() => setStatus('idle'), 5000);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-6" noValidate>
      <div className="grid md:grid-cols-2 gap-4 sm:gap-6">
        <div>
          <label htmlFor="name" className="block text-xs sm:text-sm font-medium text-gray-300 mb-1 sm:mb-2">
            {t.contact.form.name} *
          </label>
          <input
            type="text"
            id="name"
            name="name"
            required
            autoComplete="name"
            value={formData.name}
            onChange={handleChange}
            className="w-full px-3 sm:px-4 py-2 sm:py-3 bg-gray-700 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-all duration-200 text-sm sm:text-base"
            placeholder={t.contact.form.name}
            aria-describedby="name-error"
          />
        </div>
        
        <div>
          <label htmlFor="email" className="block text-xs sm:text-sm font-medium text-gray-300 mb-1 sm:mb-2">
            {t.contact.form.email} *
          </label>
          <input
            type="email"
            id="email"
            name="email"
            required
            autoComplete="email"
            value={formData.email}
            onChange={handleChange}
            className="w-full px-3 sm:px-4 py-2 sm:py-3 bg-gray-700 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-all duration-200 text-sm sm:text-base"
            placeholder={t.contact.form.email}
            aria-describedby="email-error"
          />
        </div>
      </div>

      <div className="grid md:grid-cols-2 gap-4 sm:gap-6">
        <div>
          <label htmlFor="company" className="block text-xs sm:text-sm font-medium text-gray-300 mb-1 sm:mb-2">
            {t.contact.form.company}
          </label>
          <input
            type="text"
            id="company"
            name="company"
            autoComplete="organization"
            value={formData.company}
            onChange={handleChange}
            className="w-full px-3 sm:px-4 py-2 sm:py-3 bg-gray-700 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-all duration-200 text-sm sm:text-base"
            placeholder={t.contact.form.company}
          />
        </div>
        
        <div>
          <label htmlFor="phone" className="block text-xs sm:text-sm font-medium text-gray-300 mb-1 sm:mb-2">
            {t.contact.form.phone}
          </label>
          <input
            type="tel"
            id="phone"
            name="phone"
            autoComplete="tel"
            value={formData.phone}
            onChange={handleChange}
            className="w-full px-3 sm:px-4 py-2 sm:py-3 bg-gray-700 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-all duration-200 text-sm sm:text-base"
            placeholder={t.contact.form.phone}
          />
        </div>
      </div>

      <div>
        <label htmlFor="message" className="block text-xs sm:text-sm font-medium text-gray-300 mb-1 sm:mb-2">
          {t.contact.form.message} *
        </label>
        <textarea
          id="message"
          name="message"
          required
          rows={4}
          value={formData.message}
          onChange={handleChange}
          className="w-full px-3 sm:px-4 py-2 sm:py-3 bg-gray-700 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-all duration-200 resize-vertical text-sm sm:text-base"
          placeholder={t.contact.form.message}
          aria-describedby="message-error"
        />
      </div>

      {/* Status Messages */}
      {status === 'success' && (
        <div className="flex items-center space-x-2 text-green-400 bg-green-900/20 border border-green-400/20 rounded-lg p-3 sm:p-4" role="alert" aria-live="polite">
          <CheckCircle className="h-5 w-5 flex-shrink-0" />
          <span className="text-sm sm:text-base">{t.contact.form.success}</span>
        </div>
      )}

      {status === 'error' && (
        <div className="flex items-center space-x-2 text-red-400 bg-red-900/20 border border-red-400/20 rounded-lg p-3 sm:p-4" role="alert" aria-live="polite">
          <AlertCircle className="h-5 w-5 flex-shrink-0" />
          <span className="text-sm sm:text-base">{t.contact.form.error}</span>
        </div>
      )}

      <button
        type="submit"
        disabled={status === 'sending'}
        className="w-full bg-orange-500 hover:bg-orange-600 disabled:bg-orange-400 disabled:cursor-not-allowed text-white px-6 sm:px-8 py-3 sm:py-4 rounded-lg font-semibold transition-all duration-200 inline-flex items-center justify-center space-x-2 shadow-lg hover:shadow-xl transform hover:-translate-y-1 disabled:transform-none text-sm sm:text-base"
        aria-describedby={status === 'error' ? 'form-error' : undefined}
      >
        {status === 'sending' ? (
          <>
            <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white" aria-hidden="true"></div>
            <span className="text-sm sm:text-base">{t.contact.form.sending}</span>
          </>
        ) : (
          <>
            <Send className="h-5 w-5" aria-hidden="true" />
            <span className="text-sm sm:text-base">{t.contact.form.send}</span>
          </>
        )}
      </button>
    </form>
  );
};