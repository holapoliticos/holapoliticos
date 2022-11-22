import React, { useEffect } from "react";
import styled from "styled-components";
import { Link, useLoad } from "react-router-dom-animation";
import { motion } from "framer-motion";

const Body = styled(motion.div)`
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  color: #fff;
  font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
`;

const Page = (routerLocation, isAnimation) => {
  const [isLoad, setLoad] = useLoad();

  useEffect(() => {
    setLoad(true);
  }, []);

  const handleScroll = () => {};

  return (<>
      <div
        initial={{ scale: isLoad ? 1 : 0.9 }}
        animate={{ scale: isAnimation ? 0.9 : isLoad ? 1 : 0.9 }}
        exit={{ scale: 0.9 }}
        transition={{ duration: 0.3 }}
      >
        <Link style={{textDecoration: 'none'}} to="/2" animate="next">
          <div>
            <Body style={{ background: "#1bbc9b", zIndex: 111 }}>
              <div style={{ fontSize: 14, paddingLeft: '2em', paddingRight: '2em', textAlign: 'center'  }}>
                <h1>Hola Políticos</h1>
                <p>Queremos construir una sociedad mejor.</p>
                <p>Necesitamos tener esperanza en el futuro.</p>
                <p>Pero ustedes no están a la altura.</p>
                <p style={{ lineHeight: 2}}>Con ánimo constructivo este proyecto pretende interpelarles.</p>
              </div>
            </Body>
          </div>
        </Link>
      </div>
    </>
  )
}

export default Page;
