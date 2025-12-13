export const CONTACT_PHONE = '+1 (510)-370-1986';
export const COMPANY_NAME = 'Malwarebytes Mac Support USA';
export const BASE_URL = 'yourdomain.com'; // Placeholder, replace with actual domain

export const SOCIAL_LINKS = {
  facebook: 'https://facebook.com/malwarebytes',
  twitter: 'https://twitter.com/malwarebytes',
  linkedin: 'https://linkedin.com/company/malwarebytes',
  instagram: 'https://instagram.com/malwarebytes',
};

export const DEFAULT_SEO = {
  title: 'Malwarebytes Mac Support - USA Clients',
  description: 'Dedicated support for Malwarebytes for Mac users in the USA. Get help with installation, activation, troubleshooting, billing, and account issues quickly and professionally.',
  keywords: 'Malwarebytes for Mac support, Malwarebytes installation issues, Malwarebytes renewal issues, Malwarebytes not opening, Mac antivirus support, Malwarebytes customer service, Malwarebytes login problems, cancel Malwarebytes subscription',
};

export const SUPPORT_ISSUES = [
  'Installation issues',
  'Reactivation problems',
  'Malwarebytes not opening',
  'Customer service inquiries',
  'Credit card expiration and renewal issues',
  'Login and account-related issues',
  'Cancellation and subscription management',
];

export const SERVICE_ICONS: { [key: string]: string } = {
  'Installation issues': '📦',
  'Reactivation problems': '🔑',
  'Malwarebytes not opening': '🛠️',
  'Customer service inquiries': '💬',
  'Credit card expiration and renewal issues': '💳',
  'Login and account-related issues': '👤',
  'Cancellation and subscription management': '✍️',
};

export const DUMMY_BLOG_POSTS = [
  {
    id: '1',
    slug: 'malwarebytes-mac-installation-issues',
    title: 'Troubleshooting Malwarebytes for Mac Installation Issues',
    metaDescription: 'Step-by-step guide to resolve common Malwarebytes for Mac installation problems and get your protection running.',
    author: 'Support Team',
    date: '2023-10-26',
    imageUrl: 'https://picsum.photos/800/400?random=1',
    content: `
      <p>Having trouble installing Malwarebytes on your Mac? You're not alone! Many users encounter minor hurdles during the installation process. This comprehensive guide will walk you through the most common issues and their solutions, ensuring you can get Malwarebytes up and running smoothly to protect your macOS device.</p>
      
      <h3>1. Check System Requirements</h3>
      <p>Before beginning, ensure your Mac meets the minimum system requirements for the Malwarebytes version you're trying to install. Typically, this involves a specific macOS version and a certain amount of free disk space. Refer to the official Malwarebytes website for the latest requirements.</p>
      
      <h3>2. Download from the Official Source</h3>
      <p>Always download Malwarebytes for Mac directly from the official Malwarebytes website. Downloads from third-party sites can be outdated or even contain malicious software.</p>
      
      <h3>3. Grant Necessary Permissions</h3>
      <p>macOS security features, especially in recent versions like Catalina, Big Sur, Monterey, and Ventura, require explicit user permission for applications to install and operate correctly. During installation, you might be prompted to:</p>
      <ul>
          <li>Allow the Malwarebytes kernel extension (KEXT) in Security & Privacy settings.</li>
          <li>Grant Full Disk Access to Malwarebytes in Privacy settings.</li>
      </ul>
      <p>Make sure to follow these prompts carefully. If you miss them, you can typically go to System Settings (or System Preferences) > Privacy & Security to adjust these settings manually.</p>
      
      <h3>4. Resolve "App is Damaged" or "Cannot be Opened" Errors</h3>
      <p>If you encounter an error stating that the app is damaged or cannot be opened, try the following:</p>
      <ul>
          <li><strong>Delete and Re-download:</strong> The downloaded file might be corrupted. Delete the existing installer and download a fresh copy.</li>
          <li><strong>Check Gatekeeper Settings:</strong> Ensure your Mac is set to allow apps downloaded from "App Store and identified developers" in System Settings > Privacy & Security > Security.</li>
      </ul>
      
      <h3>5. Use the Malwarebytes Support Tool</h3>
      <p>If you're still facing issues, Malwarebytes offers a dedicated support tool that can help diagnose and resolve common installation and uninstallation problems. This tool can also gather logs for their support team if further assistance is needed.</p>
      
      <h3>Still Stuck? Contact Support!</h3>
      <p>If none of these steps resolve your installation issues, don't hesitate to contact our expert support team at <strong>${CONTACT_PHONE}</strong>. We're here to provide personalized assistance to get your Malwarebytes for Mac up and running securely.</p>
    `,
  },
  {
    id: '2',
    slug: 'malwarebytes-renewal-issues',
    title: 'Solving Malwarebytes Renewal and Credit Card Expiration Issues',
    metaDescription: 'Don\'t let an expired card stop your protection. Learn how to easily manage your Malwarebytes subscription renewal and update payment details.',
    author: 'Support Team',
    date: '2023-11-01',
    imageUrl: 'https://picsum.photos/800/400?random=2',
    content: `
      <p>Keeping your Malwarebytes subscription active is crucial for continuous protection against malware and other online threats. Sometimes, renewal issues can arise, especially due to expired credit cards or changes in payment information. This guide will help you navigate common renewal problems and ensure your Malwarebytes protection remains uninterrupted.</p>

      <h3>1. Update Your Payment Information</h3>
      <p>The most common reason for renewal failure is an outdated credit card. To update your payment details:</p>
      <ol>
          <li><strong>Log in to Your My.Malwarebytes.com Account:</strong> Go to the official Malwarebytes account portal.</li>
          <li><strong>Navigate to Billing & Subscriptions:</strong> Look for a section related to "Billing," "Subscriptions," or "Payment Methods."</li>
          <li><strong>Edit Payment Method:</strong> Here, you should find an option to add a new card or update an existing one. Ensure all details, including the card number, expiration date, and security code, are correct.</li>
      </ol>
      <p>Once updated, your subscription should automatically attempt to renew. If you prefer to manually renew, look for an option to "Renew Now" after updating your payment method.</p>

      <h3>2. Check for Transaction Declines</h3>
      <p>If your card details are up-to-date but the renewal still fails, check with your bank or credit card provider. They might have declined the transaction due to:</p>
      <ul>
          <li>Fraud prevention flags (especially for recurring international transactions).</li>
          <li>Insufficient funds.</li>
          <li>Daily transaction limits.</li>
      </ul>
      <p>Inform them that you authorize the Malwarebytes renewal transaction, and then try to renew your subscription again from your Malwarebytes account.</p>

      <h3>3. Verify Your Subscription Status</h3>
      <p>After a failed renewal, it's essential to check the status of your subscription in your My.Malwarebytes.com account. It might show as "Expired," "Pending," or "Inactive." This status will help you determine the next steps.</p>

      <h3>4. Consider Alternative Payment Methods</h3>
      <p>If you repeatedly face issues with a specific card, consider using an alternative payment method if available (e.g., PayPal, another credit/debit card).</p>

      <h3>Need Assistance? We're Here to Help!</h3>
      <p>If you're experiencing persistent difficulties with your Malwarebytes renewal or payment updates, our dedicated support team is ready to assist. Call us directly at <strong>${CONTACT_PHONE}</strong> for prompt and professional help. Don't compromise your security – let us ensure your Malwarebytes protection is always active!</p>
    `,
  },
  {
    id: '3',
    slug: 'malwarebytes-mac-not-opening',
    title: 'What to Do When Malwarebytes for Mac Won\'t Open',
    metaDescription: 'Troubleshooting steps for Malwarebytes for Mac when it fails to launch or becomes unresponsive, helping you restore your security.',
    author: 'Support Team',
    date: '2023-11-10',
    imageUrl: 'https://picsum.photos/800/400?random=3',
    content: `
      <p>It can be concerning when your antivirus software, especially Malwarebytes, fails to open or becomes unresponsive on your Mac. This usually indicates an underlying issue that can often be resolved with a few troubleshooting steps. This guide will help you get Malwarebytes for Mac back in action.</p>

      <h3>1. Restart Your Mac</h3>
      <p>The simplest solution often works wonders. A full restart can clear temporary glitches, release system resources, and resolve minor software conflicts that might be preventing Malwarebytes from opening.</p>

      <h3>2. Check Activity Monitor</h3>
      <p>Sometimes, Malwarebytes might be running in the background but not displaying its interface, or a previous instance might be stuck. Open "Activity Monitor" (Applications > Utilities > Activity Monitor), search for "Malwarebytes," and if you find any processes, select them and click the "X" button to force quit. Then, try launching Malwarebytes again.</p>

      <h3>3. Reinstall Malwarebytes</h3>
      <p>If the application files are corrupted or damaged, a clean reinstallation can often fix the problem. Follow these steps:</p>
      <ol>
          <li><strong>Uninstall Malwarebytes:</strong> Use the official Malwarebytes uninstaller (usually found within the application itself under "Help" or "Application Support" folders, or by dragging it to the Trash and using its provided uninstallation prompts). Ensure all associated files are removed.</li>
          <li><strong>Download a Fresh Copy:</strong> Go to the official Malwarebytes website and download the latest version of Malwarebytes for Mac.</li>
          <li><strong>Install:</strong> Run the installer and follow the on-screen instructions, making sure to grant all necessary macOS permissions (System Settings > Privacy & Security for Full Disk Access and potentially kernel extensions).</li>
      </ol>

      <h3>4. Verify macOS Permissions</h3>
      <p>Recent macOS versions have tightened security, requiring explicit permissions for apps. Ensure Malwarebytes has:</p>
      <ul>
          <li><strong>Full Disk Access:</strong> Go to System Settings (or System Preferences) > Privacy & Security > Privacy tab. Select "Full Disk Access" and ensure Malwarebytes is checked.</li>
          <li><strong>Security & Privacy settings:</strong> During installation, you might have been prompted to allow Malwarebytes. Check if there are any pending security alerts or blocked software under the "General" tab of Security & Privacy.</li>
      </ul>

      <h3>5. Check for Conflicts with Other Security Software</h3>
      <p>Running multiple antivirus or anti-malware programs simultaneously can cause conflicts and prevent applications from launching correctly. If you have other security software installed, try temporarily disabling it to see if Malwarebytes then opens. It's generally recommended to only run one real-time antivirus solution.</p>

      <h3>6. Contact Our Support Experts</h3>
      <p>If you've tried all the above steps and Malwarebytes for Mac still won't open, our expert support team is ready to help. There might be a more complex underlying issue that requires deeper investigation. Call us now at <strong>${CONTACT_PHONE}</strong> for immediate assistance. We're committed to ensuring your Mac remains protected!</p>
    `,
  },
];