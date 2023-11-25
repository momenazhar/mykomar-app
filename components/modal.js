import * as Dialog from "@radix-ui/react-dialog";
import styled, { keyframes } from "styled-components";

export function Modal({ open, setOpen, children }) {
    return (
        <Dialog.Root open={open} onOpenChange={setOpen}>
            {children}
        </Dialog.Root>
    );
}

const overlayShow = keyframes`
  from {
    opacity: 0;
  } 
  to {
    opacity: 1;
  }
`;

const contentShow = keyframes`
  from {
    opacity: 0;
    transform: translate(-50%, -48%) scale(0.96);
  }
  to {
    opacity: 1;
    transform: translate(-50%, -50%) scale(1);
  }
`;

Modal.Overlay = styled(Dialog.Overlay)`
    background-color: rgba(0, 0, 0, 0.55);
    z-index: 3;
    position: fixed;
    inset: 0;
    animation: ${overlayShow} 150ms cubic-bezier(0.16, 1, 0.3, 1);
    backdrop-filter: blur(2px);
`;

Modal.Trigger = styled(Dialog.Trigger)`
    @media only screen and (width < 768px) {
        span {
            display: none;
        }
        svg {
            display: block;
        }
    }
`;

Modal.Content = styled(Dialog.Content)`
    z-index: 5;

    background-color: white;
    border-radius: 6px;
    box-shadow: hsl(206 22% 7% / 35%) 0px 10px 38px -10px,
        hsl(206 22% 7% / 20%) 0px 10px 20px -15px;
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 90vw;
    max-width: 450px;
    max-height: 85vh;
    padding: 25px;
    animation: ${contentShow} 150ms cubic-bezier(0.16, 1, 0.3, 1);

    &:focus {
        outline: none;
    }
`;

Modal.Portal = Dialog.Portal;
Modal.Close = Dialog.Close;
Modal.Title = Dialog.Title;
Modal.Description = Dialog.Description;
