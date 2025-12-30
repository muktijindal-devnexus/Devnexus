import { PrivacyPolicyComponent } from '@/components/PrivacyPolicy'
import React from 'react'

export const metadata = {
  title: "Privacy Policy | DevNexus Solutions",
  description:
    "Read DevNexus Solutions’ Privacy Policy to learn how we collect, use, store, and protect your personal information when you use our website and services.",
  alternates: {
    canonical: "https://devnexussolutions.com/privacy-policy",
  },
};

const PrivacyPolicy = () => {
  return (
    <div>
      <PrivacyPolicyComponent />
    </div>
  )
}

export default PrivacyPolicy
