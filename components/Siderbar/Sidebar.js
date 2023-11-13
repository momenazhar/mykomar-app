"use client";

import { useContext, useState } from "react";
import {
    SDivider,
    SLogo,
    LogoContainer,
    SLink,
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

// import Logo from "./../../assets/logo.png";

import {
    AiOutlineApartment,
    AiOutlineHome,
    AiOutlineLeft,
} from "react-icons/ai";
import { MdOutlineAnalytics } from "react-icons/md";
import { BsPeople } from "react-icons/bs";
import { ThemeContext } from "@/theme/context";

export const Sidebar = ({ loggedUser }) => {
    const { setTheme, theme } = useContext(ThemeContext);
    const [sidebarOpen, setSidebarOpen] = useState(false);
    const { pathname } = usePathname();

    return (
        <SSidebar isOpen={sidebarOpen}>
            <>
                <SSidebarButton
                    isOpen={sidebarOpen}
                    onClick={() => setSidebarOpen((p) => !p)}
                >
                    <AiOutlineLeft />
                </SSidebarButton>
            </>
            <div>
                <LogoContainer>
                    {sidebarOpen ? (
                        <SLabel>MyKomar</SLabel>
                    ) : (
                        // <SLogo src={Logo} />
                        <></>
                    )}
                </LogoContainer>
                <SDivider />
                {linksArray.map(({ icon, label, to }) => (
                    <SLinkContainer key={label} isActive={pathname === to}>
                        <SLink
                            to={to}
                            style={!sidebarOpen ? { width: `fit-content` } : {}}
                        >
                            <SLinkIcon>{icon}</SLinkIcon>
                            {sidebarOpen && (
                                <>
                                    <SLinkLabel>{label}</SLinkLabel>
                                </>
                            )}
                        </SLink>
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
                            <AccAvatar />
                            <AccInfo>
                                <AccTitle>
                                    {loggedUser.fullName
                                        .split(" ")
                                        .slice(0, 2)
                                        .join(" ")}
                                </AccTitle>

                                <AccSubtitleContainer>
                                    <p>{loggedUser.code}</p>
                                    <AccDivider />
                                    {(() => {
                                        if (
                                            loggedUser.department ===
                                            "Computer Science"
                                        ) {
                                            return <p>CPS</p>;
                                        } else if (
                                            loggedUser.department ===
                                            "Computer Engineering"
                                        ) {
                                            return <p>CPE</p>;
                                        } else {
                                            return <p>N/A</p>;
                                        }
                                    })()}
                                </AccSubtitleContainer>
                            </AccInfo>
                            <AccButton />
                        </>
                    ) : (
                        <>
                            <AccAvatar />
                        </>
                    )}
                </AccountArea>
            </div>
        </SSidebar>
    );
};

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
