"use client";

import Link from "next/link";
import styled from "styled-components";
import { v } from "@/theme/variables";
import { useContext, useState } from "react";
import {
    SDivider,
    LogoContainer,
    SLinkContainer,
    SLinkIcon,
    SLabel,
    SLinkLabel,
    SSidebar,
    SSidebarButton,
    STheme,
    SThemeLabel,
    SThemeToggler,
    SToggleThumb,
    AccountArea,
    AccInfo,
    AccTitle,
    AccSubtitleContainer,
    AccDivider,
    AccAvatar,
    AccButton,
} from "./styles";
import { usePathname } from "next/navigation";

import Image from "next/image";
import Logo from "./../../public/logoFilled.png";

import {
    AiOutlineApartment,
    AiOutlineHome,
    AiOutlineLeft,
} from "react-icons/ai";
import { MdOutlineAnalytics } from "react-icons/md";
import { BsPeople } from "react-icons/bs";
import { ThemeContext } from "@/theme/context";

export const Sidebar = ({ user }) => {
    const { setTheme, theme } = useContext(ThemeContext);
    const [sidebarOpen, setSidebarOpen] = useState(false);
    const { pathname } = usePathname();

    return (
        <SSidebar isOpen={sidebarOpen}>
            <SSidebarButton
                isOpen={sidebarOpen}
                onClick={() => setSidebarOpen((p) => !p)}
            >
                <AiOutlineLeft />
            </SSidebarButton>
            <div>
                <LogoContainer>
                    {sidebarOpen ? (
                        <SLabel>MyKomar</SLabel>
                    ) : (
                        <Image src={Logo} height={48} alt="Komar Logo" />
                    )}
                </LogoContainer>
                <SDivider />
                {linksArray.map(({ icon, label, to }) => (
                    <SLinkContainer key={label} isActive={pathname === to}>
                        <Link
                            prefetch
                            href={to}
                            style={{
                                width: sidebarOpen ? "auto" : "fit-content",
                                textDecoration: "none",
                            }}
                        >
                            <StyledLink>
                                <SLinkIcon>{icon}</SLinkIcon>
                                {sidebarOpen && (
                                    <SLinkLabel>{label}</SLinkLabel>
                                )}
                            </StyledLink>
                        </Link>
                    </SLinkContainer>
                ))}
            </div>
            <div>
                <STheme>
                    {sidebarOpen && <SThemeLabel>Dark Mode</SThemeLabel>}
                    <SThemeToggler
                        isActive={theme === "dark"}
                        onClick={() =>
                            setTheme((p) => (p === "light" ? "dark" : "light"))
                        }
                    >
                        <SToggleThumb
                            style={theme === "dark" ? { right: "1px" } : {}}
                        />
                    </SThemeToggler>
                </STheme>
                <SDivider />
                <AccountArea>
                    {sidebarOpen ? (
                        <>
                            <Image
                                src={user.avatar}
                                width={40}
                                height={40}
                                quality={100}
                                alt="Avatar"
                                style={{ borderRadius: "50%" }}
                            />
                            <AccInfo>
                                <AccTitle>{user.halfName}</AccTitle>
                                <AccSubtitleContainer>
                                    <p>{user.code}</p>
                                    <AccDivider />
                                    <p>{user.department}</p>
                                </AccSubtitleContainer>
                            </AccInfo>
                            <AccButton />
                        </>
                    ) : (
                        <Image
                            src={user.avatar}
                            width={40}
                            height={40}
                            quality={100}
                            alt="Avatar"
                            style={{ borderRadius: "50%" }}
                        />
                    )}
                </AccountArea>
            </div>
        </SSidebar>
    );
};

const StyledLink = styled.span`
    display: flex;
    align-items: center;
    text-decoration: none;
    font-size: 16px;
    padding: calc(${v.smSpacing} - 2px) 0;
`;

const linksArray = [
    {
        label: "My Classes",
        icon: <AiOutlineHome />,
        to: "/classes",
    },
    {
        label: "Student Progress",
        icon: <MdOutlineAnalytics />,
        to: "/progress",
    },
    {
        label: "Course Registration",
        icon: <BsPeople />,
        to: "/registration",
    },
    {
        label: "Remaining Courses",
        icon: <AiOutlineApartment />,
        to: "/remaining",
    },
    {
        label: "Class Schedule",
        icon: <AiOutlineApartment />,
        to: "/schedule",
    },
    {
        label: "Account Details",
        icon: <AiOutlineApartment />,
        to: "/details",
    },
];
