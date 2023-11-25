"use client";

import { useState } from "react";
import Divider from "@/components/utils/Divider";
import RegisterHeader from "@/components/utils/RegisterHeader";
import RegisterCourse from "@/components/utils/RegisterCourse";
import { Modal } from "@/components/modal";
import {
    Container,
    CourseDivider,
    List,
    Enroll,
    CourseList,
    Close,
    Save,
    CourseModalList,
    CourseModal,
} from "./styles";
import styled from "styled-components";
import { FaCartShopping } from "react-icons/fa6";

export function RegistrationPage({ remainingCourses }) {
    const [selected, setSelected] = useState([]);
    const [isOpen, setOpen] = useState(false);

    return (
        <>
            <Divider title="Eligible Courses">
                <Modal isOpen={isOpen} setOpen={setOpen}>
                    <Modal.Trigger asChild>
                        <Enroll onClick={() => setOpen(true)}>Enroll</Enroll>
                    </Modal.Trigger>
                    <Modal.Portal>
                        <Modal.Overlay />
                        <Content>
                            <Title>
                                <FaCartShopping />
                                Wishlist
                            </Title>
                            <Description>
                                You will be enrolled in the following courses:
                            </Description>
                            <CourseModalList>
                                {selected.map((course, index) => (
                                    <CourseModal
                                        key={`${index}-${course.code}`}
                                    >
                                        <p>
                                            {course.code} {course.title}
                                        </p>
                                    </CourseModal>
                                ))}
                            </CourseModalList>
                            <div
                                style={{
                                    display: "flex",
                                    flexDirection: "row",
                                    gap: "1rem",
                                    justifyContent: "end",
                                }}
                            >
                                <Modal.Close asChild>
                                    <Close onClick={() => setOpen(false)}>
                                        Close
                                    </Close>
                                </Modal.Close>
                                <Modal.Close asChild>
                                    <Save onClick={() => setOpen(false)}>
                                        Save Courses
                                    </Save>
                                </Modal.Close>
                            </div>
                        </Content>
                    </Modal.Portal>
                </Modal>
            </Divider>
            <Container>
                <RegisterHeader />
                <CourseDivider />
                <CourseList>
                    {remainingCourses.map((course, index) => (
                        <RegisterCourse
                            key={`${index}-${course.code}`}
                            course={course}
                            onSelect={() => setSelected([...selected, course])}
                            onDeselect={() =>
                                setSelected(
                                    selected.filter(
                                        (c) => c.code !== course.code
                                    )
                                )
                            }
                        />
                    ))}
                </CourseList>
            </Container>
        </>
    );
}

const Description = styled(Modal.Description)`
    font-size: 1.2rem;
`;

const Content = styled(Modal.Content)`
    display: flex;
    flex-direction: column;
    gap: 1rem;
    color: ${({ theme }) => theme.dark200};
`;

const Title = styled(Modal.Title)`
    font-size: 1.6rem;
    display: flex;
    flex-direction: row;
    align-items: center;
    gap: 1rem;
    svg {
        margin-top: 2px;
    }
`;
