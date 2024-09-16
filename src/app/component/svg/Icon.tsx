import React from "react";

interface IconProps {
  Icon      : React.ComponentType<any>;
  label     : string;
  color     : string;
  iconSize? : string;
}

const Icon: React.FC<IconProps> = ({
  Icon,
  label,
  color,
  iconSize = "w-10 h-10",
}) => {
  return (
    <div className="group relative">
      <Icon
        className={`${color} ${iconSize} hover:scale-110 transition-transform duration-300`}
      />
      <span className="absolute bottom-10 left-1/2 transform -translate-x-1/2 text-xs text-overlay1 bg-surface0 border border-overlay0 rounded-lg p-1 opacity-0 group-hover:opacity-100 transition-opacity duration-300 shadow-lg">
        {label}
      </span>
    </div>
  );
};

export default Icon;

// path: src/app/component/svg/Icon.tsx
