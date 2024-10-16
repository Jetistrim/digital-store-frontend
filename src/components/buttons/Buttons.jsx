import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"
import { PlusIcon } from "lucide-react"

export default function CustomButton({
  buttonType,
  label,
  className = "",
  iconPosition = "left",
  children,
  ...props
}) {
  const addPrefixToClassName = (className) => {
    if (!className) return "";
    const elements = className.split(' ');
    const prefixedElements = elements.map(element => `[&&]:!${element}`);
    return prefixedElements.join(' ');
  };

  const baseStyles = "h-10 w-[158px] rounded-[10px] border-transparent";

  const buttonStyles = {
    primary: "bg-primary-1 text-light-gray-3 hover:bg-tertiary disabled:bg-light-gray-2",
    secondary: "bg-light-gray-3 text-primary-1 hover:bg-secondary hover:text-[#f7f7fc] disabled:border disabled:border-primary-1 disabled:opacity-50",
    icon: "bg-primary-1 text-light-gray-3 hover:bg-tertiary disabled:bg-light-gray-2",
    shop: "bg-[#ffb31f] text-light-gray-3 hover:bg-[#cf8900] disabled:bg-light-gray-2",
  };

  const iconElement = buttonType === "icon" ? <PlusIcon className="h-4 w-4" /> : null;

  const content = (
    <>
      {iconPosition === "left" && iconElement}
      {label ? label : children}
      {iconPosition === "right" && iconElement}
    </>
  );

  const getVariant = () => {
    switch (buttonType) {
      case 'secondary':
        return 'outline';
      case 'icon':
        return 'default';
      default:
        return buttonType;
    }
  };

  return (
    <Button
      variant={getVariant()}
      className={cn(baseStyles, buttonStyles[buttonType], addPrefixToClassName(className))}
      disabled={props.disabled}
      {...props}
    >
      {content}
    </Button>
  );
}