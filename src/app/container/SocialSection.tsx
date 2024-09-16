import React from "react";

import Icon from "@component/svg/Icon";

interface Social {
  Icon  : React.ComponentType<any>;
  label : string;
  color : string;
  link  : string;
}

interface SocialSectionProps {
  title     : string;
  skills    : Social[];
  iconSize? : string;
}

const SocialSection: React.FC<SocialSectionProps> = ({
  title,
  skills,
  iconSize = "w-8 sm:w-9 h-8 sm:h-9",
}) => {
  return (
    <>
      <h2 className="text-subtext1 text-xl font-semibold mb-4">
        {title}
      </h2>
      <div className="flex flex-col items-center space-y-6 mb-6">
        {skills.map((social, index) => (
          <Icon
            key={index}
            Icon={social.Icon}
            label={social.label}
            color={social.color}
            link={social.link}
            iconSize={iconSize}
          />
        ))}
      </div>
    </>
  );
};

export default SocialSection;

// path: src/app/container/SocialSection.tsx
