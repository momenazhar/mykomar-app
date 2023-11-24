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
} from "./styles";
import { BsListNested } from "react-icons/bs";

export function RegistrationPage({ remainingCourses }) {
    const [selected, setSelected] = useState([]);
    const [isOpen, setOpen] = useState(false);

    return (
        <>
            <Divider title="Eligible Courses">
                <Modal isOpen={isOpen} setOpen={setOpen}>
                    <Modal.Trigger asChild>
                        <List onClick={() => setOpen(true)}>
                            <BsListNested />
                        </List>
                    </Modal.Trigger>
                    <Modal.Portal>
                        <Modal.Overlay />
                        <Modal.Content>
                            <Modal.Title>Wishlist</Modal.Title>
                            <Modal.Description>
                                Your selected courses are:
                            </Modal.Description>
                            <div>
                                {selected.map((course, index) => (
                                    <div key={`${index}-${course.code}`}>
                                        <p>
                                            {course.code} {course.title}
                                        </p>
                                    </div>
                                ))}
                            </div>
                            <div
                                style={{
                                    display: "flex",
                                    flexDirection: "row",
                                }}
                            >
                                <Modal.Close asChild>
                                    <Close onClick={() => setOpen(false)}>
                                        Close
                                    </Close>
                                </Modal.Close>
                            </div>
                        </Modal.Content>
                    </Modal.Portal>
                </Modal>
                <Modal isOpen={isOpen} setOpen={setOpen}>
                    <Modal.Trigger asChild>
                        <Enroll onClick={() => setOpen(true)}>Enroll</Enroll>
                    </Modal.Trigger>
                    <Modal.Portal>
                        <Modal.Overlay />
                        <Modal.Content>
                            <Modal.Title>Wishlist</Modal.Title>
                            <Modal.Description>
                                You will be enrolled in the following courses:
                            </Modal.Description>
                            <div>
                                {selected.map((course, index) => (
                                    <div key={`${index}-${course.code}`}>
                                        <p>
                                            {course.code} {course.title}
                                        </p>
                                    </div>
                                ))}
                            </div>
                            <div
                                style={{
                                    display: "flex",
                                    flexDirection: "row",
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
                        </Modal.Content>
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
