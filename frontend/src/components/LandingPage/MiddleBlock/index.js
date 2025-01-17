import React from "react";
import { lazy } from "react";
import { Row, Col } from "antd";
import { withTranslation } from "react-i18next";
import Fade from "react-reveal";
import Button from "../../../common/Button";

import * as S from "./styles";

// const Button = lazy(() => import("../../common/Button"));

const MiddleBlock = ({ title, content, button, t }) => {
  const linkedinLogin = () => {
    const url = 'https://www.linkedin.com/oauth/v2/authorization?response_type=code&state=987654321&scope=r_liteprofile&client_id=78ioflr7umfzey&redirect_uri=https://lookup-demo.herokuapp.com/discover';
    window.open(url, '_blank');
  };

  return (
    <S.MiddleBlock>
      <Row type="flex" justify="center" align="middle">
        <Fade bottom>
          <S.ContentWrapper>
            <Col lg={24} md={24} sm={24} xs={24}>
              <h6>{t(title)}</h6>
              <S.Content>{t(content)}</S.Content>
              {button ? (
                <Button
                  name="submit"
                  type="submit"
                  onClick={() => linkedinLogin()}
                >
                  {t(button)}
                </Button>
              ) : (
                ""
              )}
            </Col>
          </S.ContentWrapper>
        </Fade>
      </Row>
    </S.MiddleBlock>
  );
};

export default withTranslation()(MiddleBlock);