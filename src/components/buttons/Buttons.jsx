import { Button as ShadcnButton } from "@/components/ui/button"
import { cn } from "@/lib/utils"
import { PlusIcon } from "lucide-react"

export default function CustomButton({
  buttonType,
  label,
  className,
  iconPosition = "left",
  children,
  ...props
}) {
  const baseStyles = "h-10 w-[158px] rounded-[10px] text-light-gray-3 border-transparent"

  const buttonStyles = {
    primary: "bg-primary-1 hover:bg-tertiary disabled:bg-light-gray-2",
    secondary: "bg-light-gray-3 text-primary-1 hover:bg-secondary-1 hover:text-[#f7f7fc] disabled:border disabled:border-primary-1 disabled:opacity-50",
    icon: "bg-primary-1 hover:bg-tertiary disabled:bg-light-gray-2",
    shop: "bg-warning hover:bg-warning-hover disabled:bg-light-gray-2"
  }

  const iconElement = buttonType === "icon" ? <PlusIcon className="h-4 w-4" /> : null

  const content = (
    <>
      {iconPosition === "left" && iconElement}
      {label || children}
      {iconPosition === "right" && iconElement}
    </>
  )

  return (
    (<ShadcnButton
      className={cn(
        baseStyles,
        buttonStyles[buttonType],
        "inline-flex items-center justify-center",
        className
      )}
      disabled={props.disabled}
      {...props}>
      {content}
    </ShadcnButton>)
  );
}