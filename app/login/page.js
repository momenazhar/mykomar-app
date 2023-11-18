import {
    Background,
    Container,
    LoginContainer,
    Header,
    Subtitle,
    LogoStyle,
} from "./styles";
import Logo from "@/public/logoFilled.png";
import Image from "next/image";
import { SignIn } from "./sign-in";

export default function Login() {
    return (
        <>
            <Background />
            <Container>
                <LoginContainer>
                    <Image
                        src={Logo}
                        height={200}
                        style={LogoStyle}
                        quality={100}
                    />
                    <Header>MyKomar</Header>
                    <Subtitle>Student Dashboard</Subtitle>
                    <SignIn />
                </LoginContainer>
            </Container>
        </>
    );
}
