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
    AccButton,
    LogoOpened,
} from "./styles";
import { usePathname } from "next/navigation";
import { IoLogOut } from "react-icons/io5";
import Image from "next/image";
import Logo from "./../../public/logoFilled.png";
import { AiOutlineLeft, AiFillSchedule } from "react-icons/ai";
import { RiFileList3Fill, RiAccountPinBoxFill } from "react-icons/ri";
import { FaBook, FaUserGraduate } from "react-icons/fa";
import { MdLibraryAddCheck } from "react-icons/md";
import { ThemeContext } from "@/theme/context";

export const Sidebar = ({ user }) => {
    const { setTheme, theme } = useContext(ThemeContext);
    const [sidebarOpen, setSidebarOpen] = useState(true);
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
                        <LogoOpened>
                            <Image
                                quality={100}
                                src={Logo}
                                height={32}
                                alt="Komar Logo"
                            />
                            <SLabel>MyKomar</SLabel>
                        </LogoOpened>
                    ) : (
                        <Image
                            quality={100}
                            src={Logo}
                            height={48}
                            alt="Komar Logo"
                        />
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

                            <AccButton>
                                <IoLogOut />
                            </AccButton>
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
        icon: <FaBook />,
        to: "/classes",
    },
    {
        label: "Student Progress",
        icon: <FaUserGraduate />,
        to: "/progress",
    },
    {
        label: "Course Registration",
        icon: <MdLibraryAddCheck />,
        to: "/registration",
    },
    {
        label: "Remaining Courses",
        icon: <RiFileList3Fill />,
        to: "/remaining",
    },
    {
        label: "Class Schedule",
        icon: <AiFillSchedule />,
        to: "/schedule",
    },
    {
        label: "Account Details",
        icon: <RiAccountPinBoxFill />,
        to: "/details",
    },
];
