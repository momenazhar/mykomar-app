// import { Link } from "next/link";
import styled from "styled-components";
import { btnReset, v } from "@/theme/variables";

export const SSidebar = styled.div`
    width: ${({ isOpen }) => (!isOpen ? `auto` : v.sidebarWidth)};
    background: ${({ theme }) => theme.bg};
    height: 100vh;
    padding: ${v.lgSpacing};
    position: relative;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    flex: 0 0 auto;
`;

export const SLabel = styled.h1`
    text-align: center;
`;

export const LogoContainer = styled.div`
    height: 4rem;
    display: flex;
    align-items: center;
    justify-content: center;
    user-select: none;
`;

export const SSidebarButton = styled.button`
    ${btnReset};
    position: absolute;
    top: 42px;
    right: ${({ isOpen }) => (isOpen ? `-16px` : `-15px`)};
    width: 32px;
    height: 32px;
    border-radius: 50%;
    background: ${({ theme }) => theme.bg};
    box-shadow: 0 0 4px ${({ theme }) => theme.bg3},
        0 0 7px ${({ theme }) => theme.bg};
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;

    transform: ${({ isOpen }) => (!isOpen ? `rotate(180deg)` : `initial`)};
`;

export const SDivider = styled.div`
    height: 1px;
    width: 100%;
    background: ${({ theme }) => theme.bg3};
    margin: ${v.lgSpacing} 0;
`;

export const SLinkContainer = styled.div`
    background: ${({ theme, isActive }) =>
        !isActive ? `transparent` : theme.bg3};
    border-radius: ${v.borderRadius};
    margin: 8px 0;
    user-select: none;
    :hover {
        box-shadow: inset 0 0 0 1px ${({ theme }) => theme.bg3};
    }
`;

export const SLink = styled.a`
    display: flex;
    align-items: center;
    text-decoration: none;
    color: inherit;
    font-size: 16px;
    padding: calc(${v.smSpacing} - 2px) 0;
`;

export const SLinkIcon = styled.div`
    padding: ${v.smSpacing} ${v.mdSpacing};
    display: flex;

    svg {
        font-size: 20px;
    }
`;

export const SLinkLabel = styled.span`
    display: block;
    flex: 1;
    margin-left: ${v.smSpacing};
`;

export const STheme = styled.div`
    display: flex;
    align-items: center;
    font-size: 16px;
`;
export const SThemeLabel = styled.span`
    display: block;
    flex: 1;
`;
export const SThemeToggler = styled.button`
    ${btnReset};
    margin: 0 auto;
    cursor: pointer;
    width: 36px;
    height: 20px;
    border-radius: 10px;
    background: ${({ theme, isActive }) =>
        !isActive ? theme.bg3 : theme.primary};

    position: relative;
`;

export const SToggleThumb = styled.div`
    height: 18px;
    width: 18px;
    position: absolute;
    top: 1px;
    bottom: 1px;
    transition: 0.2s ease right;
    right: calc(100% - 18px - 1px);
    border-radius: 50%;
    background: ${({ theme }) => theme.bg};
`;

export const AccountArea = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    gap: 0.8rem;
    height: 3rem;
`;

export const AccInfo = styled.div`
    display: flex;
    flex-direction: column;
`;

export const AccTitle = styled.h3``;

export const AccSubtitleContainer = styled.div`
    display: flex;
    align-items: center;
`;

export const AccDivider = styled.div`
    height: 0.8rem;
    width: 0.1rem;
    background-color: gray;
    margin-inline: 0.5rem;
`;

export const AccAvatar = styled.div`
    width: 2.5rem;
    height: 2.5rem;
    background-color: red;
    border-radius: 50px;
`;

export const AccButton = styled.div`
    width: 1.2rem;
    height: 1.2rem;
    background-color: red;
    margin-left: auto;
`;
