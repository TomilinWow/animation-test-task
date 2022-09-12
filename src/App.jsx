import './App.scss';
import {Button, Layout, Row} from "antd";
import {PoweroffOutlined} from '@ant-design/icons';
import {useState} from "react";
import animationLoading from "../src/lotties/INITIALIZE_1_HQ.json";
import Lottie from "react-lottie";
import {Widget} from "./components/Widget/Widget";
import {CSSTransition} from "react-transition-group";

function App() {

  const [isLoading, setIsLoading] = useState(false);
  const [isOpen, setIsOpen] = useState(false)

  const options = {
    loop: true,
    autoplay: true,
    animationData: animationLoading,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice"
    }
  };

  const enterLoading = () => {
    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false)
      setIsOpen(true)
    }, 3000);
  };

  return (
      <Layout>
        <Row justify="center" align="middle" className="main">
          {
            isLoading
                ? <Lottie
                    options={options}
                    height={150}
                    width={150}
                />
                : !isOpen && <Button
                type="primary"
                icon={<PoweroffOutlined/>}
                onClick={() => enterLoading()}
            >
              Click me!
            </Button>
          }
          <CSSTransition in={isOpen}
                         classNames="widget"
                         timeout={500}
                         unmountOnExit>
            <Widget/>
          </CSSTransition>
        </Row>
      </Layout>
  );
}

export default App;
