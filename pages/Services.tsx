import React from 'react';
import Seo from '../components/Seo';
import Button from '../components/Button';
import { useAppContext } from '../App';
import EditableText from '../components/Admin/EditableText';
import { CONTACT_PHONE, SUPPORT_ISSUES, SERVICE_ICONS } from '../constants';

const Services: React.FC = () => {
  const { content, updateContent, theme } = useAppContext();

  const handleSaveTitle = (newValue: string) => {
    updateContent({ servicesPageTitle: newValue });
  };

  const handleSaveDescription = (newValue: string) => {
    updateContent({ servicesPageDescription: newValue });
  };

  return (
    <div className="container mx-auto px-4 py-8 md:py-12 max-w-5xl">
      <Seo
        title="Our Services"
        description={content.servicesPageDescription}
        url="/services"
      />

      <div className="bg-white rounded-lg shadow-md p-6 md:p-8 border border-gray-200">
        <div className="text-center mb-10">
          <EditableText
            tag="h1"
            value={content.servicesPageTitle}
            onSave={handleSaveTitle}
            className={`${theme.textColorClass} text-3xl md:text-4xl font-bold mb-4`}
          />
          <EditableText
            tag="p"
            value={content.servicesPageDescription}
            onSave={handleSaveDescription}
            className="text-lg md:text-xl text-gray-700 leading-relaxed max-w-3xl mx-auto"
          />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {SUPPORT_ISSUES.map((issue, index) => (
            <div key={index} className="bg-mb-light-bg rounded-lg shadow-sm p-6 transform hover:scale-105 transition-transform duration-300 border border-gray-100">
              <div className={`${theme.accentColorClass} text-white text-4xl p-4 rounded-full inline-block mb-4`}>
                {SERVICE_ICONS[issue] || '✨'}
              </div>
              <h3 className="text-xl font-semibold mb-3 text-mb-text">{issue}</h3>
              <p className="text-gray-700 text-sm leading-relaxed">
                {issue === 'Installation issues' && 'Having trouble installing Malwarebytes on your Mac? We provide step-by-step guidance and troubleshooting to ensure a smooth setup.'}
                {issue === 'Reactivation problems' && 'Issues with reactivating your Malwarebytes license? We assist with license key verification and account synchronization.'}
                {issue === 'Malwarebytes not opening' && 'When your Malwarebytes software won\'t launch or is unresponsive, our experts diagnose and resolve the underlying issues.'}
                {issue === 'Customer service inquiries' && 'General questions, technical queries, or need help understanding features? Our friendly team is here to assist.'}
                {issue === 'Credit card expiration and renewal issues' && 'Ensure continuous protection by resolving payment failures, updating card details, and managing auto-renewals.'}
                {issue === 'Login and account-related issues' && 'Forgot your password, locked out of your account, or facing login problems? We help you regain access and manage your profile.'}
                {issue === 'Cancellation and subscription management' && 'Need to modify or cancel your subscription? We guide you through the process and explain your options.'}
                {!SERVICE_ICONS[issue] && 'Get expert assistance for this specific Malwarebytes for Mac issue.'}
              </p>
              <div className="mt-6 text-center">
                <Button asLink href={`tel:${CONTACT_PHONE}`} variant="cta" size="sm">
                  Get Help Now
                </Button>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center bg-mb-primary text-white p-8 rounded-lg shadow-md">
          <h2 className="text-2xl md:text-3xl font-bold mb-4">
            Don't Let Malwarebytes Issues Slow You Down!
          </h2>
          <p className="text-lg mb-6 opacity-90">
            Our expert team is ready to provide immediate, professional support.
          </p>
          <Button asLink href={`tel:${CONTACT_PHONE}`} variant="cta" size="lg">
            Call Our Support Line: {CONTACT_PHONE}
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Services;