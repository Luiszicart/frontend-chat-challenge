import React from "react";
import { Text } from "./Typography.styles";
import type { TypographyProps } from "./Typography.types";

export const Typography: React.FC<TypographyProps> = ({
  as,
  variant = "body",
  weight = "regular",
  truncate = false,
  children,
  ...rest
}) => {
  return (
    <Text
      as={as}
      variant={variant}
      weight={weight}
      truncate={truncate}
      data-testid="typography"
      {...rest}
    >
      {children}
    </Text>
  );
};
