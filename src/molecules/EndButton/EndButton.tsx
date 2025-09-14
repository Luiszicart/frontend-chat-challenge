import React from "react";
import type { EndButtonProps } from "./EndButton.types";
import { Wrap } from "./EndButton.styles";
import { Button } from "../../atoms";

export const EndButton: React.FC<EndButtonProps> = ({
  label = "End",
  icon = <span aria-hidden>■</span>,
  loading,
  disabled,
  ...rest
}) => {
  return (
    <Wrap data-testid="end-button">
      <Button
        variant="danger"
        size="lg"
        icon={icon}
        loading={loading}
        disabled={disabled}
        {...rest}
      >
        {label}
      </Button>
    </Wrap>
  );
};
