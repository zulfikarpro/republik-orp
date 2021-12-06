import React from "react";
import { Container, ContentDiv } from "../Home/HomeElements";
import { ContactUsDiv } from "./ContactUsElement";
import Footer from "../Footer";
import bg from "../../images/bg/contactusbg.png";
import { Grid } from "@material-ui/core";
import {
  FaEnvelope,
  FaMailchimp,
  FaMapMarkerAlt,
  FaPhone,
} from "react-icons/fa";
import { H1,P } from "../AboutUs/AboutUsElement";
import { textAlign } from "@mui/system";
const ContactUsSection = () => {
  return (
    <>
      <Container style={{}}>
        <ContentDiv
          style={{
            minWidth: "100%",
            height: "100%",
            margin: "auto",
            justifyContent: "flex-start",
          }}
          id="contactus"
        >
          <ContactUsDiv
            style={{
              width: "100%",
              minHeight: "100vh",
              display: "flex",
              flexDirection: "row",
              justifyContent: "center",
              color: "#fff",
            }}
          >
            <div
              style={{
                position: "absolute",
                right: "",
                width: "100%",
                height: "100vh",
                diplay: "flex",
                justifyContent: "flex-start",
              }}
            >
              <img
                style={{
                  position: "absolute",
                  zIndex: -1,
                  width: "100%",
                  height: "100vh",
                  objectFit: "cover",
                }}
                src={bg}
              />
            </div>

            <div
              style={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "flex-end",
                textAlign: "center",
                minWidth: "90%",
                marginTop:'80px'
              }}
            >
              <H1>Contact Us</H1>
              <div
                style={{
                  width: "100%",
                  display: "flex",
                  flexDirection: "row",
                  justifyContent: "center",
                }}
              >
                <Grid
                  container
                  spacing={2}
                  style={{ margin: "auto", width: "100%"}}
                >
                  <Grid
                    item
                    xs={12}
                    md={6}
                    style={{
                      display: "flex",
                      flexDirection: "row",
                      justifyContent: "center",
                    }}
                  >
                    <div
                      style={{
                        display: "flex",
                        flexDirection: "column",
                        width: "100%",
                      }}
                    >
                      <div
                        style={{
                          display: "flex",
                          flexDirection: "row",
                          width: "100%",
                          justifyContent: "flex-start",
                        }}
                      >
                        <h2>Drop us a Line</h2>
                      </div>
                      <div
                        style={{
                          display: "flex",
                          flexDirection: "row",
                          width: "100%",
                          justifyContent: "center",
                        }}
                      >
                        <input
                          placeholder="name"
                          style={{
                            padding: "10px",
                            borderRadius: "30px",
                            marginBottom: "10px",
                            width: "100%",
                          }}
                        />
                      </div>

                      <div
                        style={{
                          display: "flex",
                          flexDirection: "row",
                          width: "100%",
                          justifyContent: "center",
                        }}
                      >
                        <input
                          placeholder="email"
                          style={{
                            padding: "10px",
                            borderRadius: "30px",
                            marginBottom: "10px",
                            width: "100%",
                          }}
                        />
                      </div>

                      <div
                        style={{
                          display: "flex",
                          flexDirection: "row",
                          width: "100%",
                          justifyContent: "center",
                        }}
                      >
                        <input
                          placeholder="phone"
                          style={{
                            padding: "10px",
                            borderRadius: "30px",
                            marginBottom: "10px",
                            width: "100%",
                          }}
                        />
                        <input
                          placeholder="subject"
                          style={{
                            padding: "10px",
                            borderRadius: "30px",
                            marginBottom: "10px",
                            width: "100%",
                          }}
                        />
                      </div>
                      <div
                        style={{
                          display: "flex",
                          flexDirection: "row",
                          width: "100%",
                          justifyContent: "center",
                        }}
                      >
                        <textarea
                          rows="10"
                          placeholder=""
                          style={{
                            padding: "10px",
                            borderRadius: "10px",
                            marginBottom: "10px",
                            width: "100%",
                          }}
                        />
                      </div>
                    </div>
                  </Grid>
                  <Grid
                    item
                    xs={12}
                    md={6}
                    style={{
                      display: "flex",
                      flexDirection: "row",
                      justifyContent: "center",
                    }}
                  >
                    <div
                      style={{
                        display: "flex",
                        flexDirection: "column",
                        minWidth: "400px",
                        textAlign:'center'
                      }}
                    >
                      <h2>Address</h2>
                      <P style={{textAlign:'center'}}>OFFICE 8 BUILDING 18th FLOOR<br/>
                      UNIT A, JL. JENDERAL SUDIRMAN<br/>
                      KAV.<br/>
                      52-53, DKI JAKARTA 12190<br/>
                      021-xxxxxxx<br/>
                      info@aero.com</P>
                    </div>
                  </Grid>
                </Grid>
              </div>
              <div style={{height:'100%', flex:'1'}}>
                <Footer />
              </div>
            </div>
          </ContactUsDiv>
        </ContentDiv>
      </Container>
    </>
  );
};

export default ContactUsSection;
