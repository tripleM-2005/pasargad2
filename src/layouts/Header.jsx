import {
    faArrowRightLong,
    faGear,
    faSliders,
    faToggleOff,
} from "@fortawesome/free-solid-svg-icons";
import Logo from "./../assets/images/Logo.jpg";
import { Container, Row} from "react-bootstrap";

const Header = () => {
    const icons = [faSliders, faToggleOff, faGear, faArrowRightLong];

    return (
        <>
            <Container>
                <Row className={"items mt-5 gap-5 flex-row flex-nowrap items-container"} xs={-1} md={-2}>
                    <Row className={"box image-container  p-lg-5 p-4"}>
                        <img src={Logo} alt="logo"/>
                    </Row>
                    <Row className={"box  p-4 flex-shrink-1 "}>
                        <div className={"justify-content-center text-nowrap flex d-flex pt-1 title"}>
                            <h1>{"به پنل پاسارگاد خوش آمدید"}</h1>
                        </div>
                    </Row>
                </Row>
            </Container>
        </>
    );
};
export default Header;
