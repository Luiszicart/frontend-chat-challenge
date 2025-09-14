import React from "react";
import { StyledButton, IconSlot, Label } from "./Button.styles";
import type { ButtonProps } from "./Button.types";

export const Button: React.FC<ButtonProps> = ({
  iconOnly = false,
  ariaLabel,
  icon,
  variant = "primary",
  size = "md",
  block = false,
  loading = false,
  disabled = false,
  children,
  ...rest
}) => {
  return (
    <StyledButton
      type="button"
      {...rest}
      aria-label={ariaLabel}
      aria-disabled={disabled || loading ? true : undefined}
      disabled={disabled || loading}
      variant={variant}
      size={size}
      iconOnly={iconOnly}
      block={block}
      loading={loading}
      data-testid="button"
    >
      {icon ? (
        <IconSlot className="btn__icon" aria-hidden>
          {icon}
        </IconSlot>
      ) : null}
      {!iconOnly && <Label>{children}</Label>}
    </StyledButton>
  );
};
