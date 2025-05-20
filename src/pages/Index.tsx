import React, { useState } from "react";
import { SettingsSidebar } from "@/components/settings/SettingsSidebar";
import { ProfileSettings } from "@/components/settings/ProfileSettings";
import { SecuritySettings } from "../components/settings/SecuritySettings";
import { NotificationSettings } from "../components/settings/NotificationSettings";
import { SecurityQuestionSettings } from "../components/settings/SecurityQuestionSettings";
import { TwoFactorSettings } from "../components/settings/TwoFactorSettings";
import { DeactivateModal } from "../components/settings/DeactivateModal";

const Index: React.FC = () => {
  const [activeSection, setActiveSection] = useState("profile");
  const [isDeactivateModalOpen, setIsDeactivateModalOpen] = useState(false);

  let content;
  if (activeSection === "profile") {
    content = <ProfileSettings />;
  } else if (activeSection === "security") {
    content = <SecuritySettings />;
  } else if (activeSection === "notification") {
    content = <NotificationSettings />;
  } else if (activeSection === "security-question") {
    content = <SecurityQuestionSettings />;
  } else if (activeSection === "two-factor") {
    content = <TwoFactorSettings />;
  } else {
    content = <div className="p-8">Coming soon...</div>;
  }

  return (
    <main className="bg-white flex flex-col overflow-hidden pt-[122px] pb-[241px] px-[70px] max-md:px-5 max-md:py-[100px]">
      <div className="w-[885px] max-w-full">
        <div className="gap-5 flex max-md:flex-col max-md:items-stretch">
          <div className="w-[23%] max-md:w-full max-md:ml-0">
            <SettingsSidebar activeId={activeSection} onChange={(id) => {
              if (id === "deactivate") {
                setIsDeactivateModalOpen(true);
              } else {
                setActiveSection(id);
              }
            }} />
          </div>
          <div className="w-[77%] ml-5 max-md:w-full max-md:ml-0">
            {content}
          </div>
        </div>
      </div>
      <DeactivateModal
        isOpen={isDeactivateModalOpen}
        onClose={() => setIsDeactivateModalOpen(false)}
        onConfirm={() => {
          // Handle account deactivation logic here
          alert("Account deactivated!");
          setIsDeactivateModalOpen(false);
        }}
      />
    </main>
  );
};

export default Index;
