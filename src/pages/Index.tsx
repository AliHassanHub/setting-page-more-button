import React from "react";
import { SettingsSidebar } from "@/components/settings/SettingsSidebar";
import { ProfileSettings } from "@/components/settings/ProfileSettings";

const Index: React.FC = () => {
  return (
    <main className="bg-white flex flex-col overflow-hidden pt-[122px] pb-[241px] px-[70px] max-md:px-5 max-md:py-[100px]">
      <div className="w-[885px] max-w-full">
        <div className="gap-5 flex max-md:flex-col max-md:items-stretch">
          <div className="w-[23%] max-md:w-full max-md:ml-0">
            <SettingsSidebar />
          </div>
          <div className="w-[77%] ml-5 max-md:w-full max-md:ml-0">
            <ProfileSettings />
          </div>
        </div>
      </div>
    </main>
  );
};

export default Index;
