import React, {Component, EventHandler, MouseEvent, RefObject} from "react";
import "./modal.scss";

interface ModalProps {
    show: boolean;
    className?: string;
    handleClose: VoidFunction;
}

export class Modal extends Component<ModalProps>{
    bodyRef: RefObject<HTMLElement> = React.createRef();
    
    componentWillMount(): void {
        document.addEventListener("mousedown", this.handleClickOutsideBodyModal);
    }
    
    componentWillUnmount(): void {
        document.removeEventListener("mousedown", this.handleClickOutsideBodyModal);
    }

    private handleClickOutsideBodyModal = (event: any) => {
        if(!this.bodyRef.current || this.bodyRef.current.contains(event.target) || !this.props.show)
            return;
        
        this.props.handleClose();
    };
    
    render = () => {
        const {show, children} = this.props;
        
        return (
            <div className={`modal ${show ? "show" : ""}`}>
                <section className={`modalMain ${this.props.className}`} ref={this.bodyRef}>
                    {children}
                </section>
            </div>
        );
    }
}