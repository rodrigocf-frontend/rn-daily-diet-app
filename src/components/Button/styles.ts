import styled from "styled-components/native";

export type VariantProps = {
  variant: "outlined" | "contained";
};

export const Container = styled.TouchableOpacity.attrs<VariantProps>({
  activeOpacity: 1,
})`
  ${({ theme, variant }) => `
   background-color:  ${variant === "contained" && theme.color.GRAY_200};
 `}

  ${({ theme, variant }) => `
    border-width: 1px;
    border-color: ${variant === "outlined" && theme.color.GRAY_100};
 `}
  padding: 16px 24px;
  border-radius: 6px;
  justify-content: center;
  align-items: center;
  flex-direction: row;
  gap: 12px;
`;

export const Title = styled.Text<VariantProps>`
  ${({ theme, variant }) => `
    color: ${
      variant === "contained" ? theme.color.WHITE : theme.color.GRAY_100
    };
 `}
  font-family: ${({ theme }) => theme.font.NUNITO_BOLD};
  font-size: ${({ theme }) => theme.size.SM}px;
`;
