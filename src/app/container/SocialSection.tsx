import React     from "react";

import Icon from "@component/svg/Icon";

interface Skill {
  Icon  : React.ComponentType<any>;
  label : string;
  color : string;
}

interface SocialSectionProps {
  title     : string;
  skills    : Skill[];
  iconSize? : string;
}

const SkillsSection: React.FC<SocialSectionProps> = ({
  title,
  skills,
  iconSize = "w-8 sm:w-9 h-8 sm:h-9",
}) => {
  return (
    <>
      <h2 className="text-subtext1 text-xl font-semibold mb-4">
        {title}
      </h2>
      <div className="flex justify-center space-x-6 mb-6">
        {skills.map((skill, index) => (
          <Icon
            key={index}
            Icon={skill.Icon}
            label={skill.label}
            color={skill.color}
            iconSize={iconSize}
          />
        ))}
      </div>
    </>
  );
};

export default SkillsSection;

// path: src/app/container/SkillsSection.tsx
