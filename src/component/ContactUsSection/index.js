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
const ContactUsSection = ({mobile}) => {
  return (
    <>
      <Container style={{}}>
        <ContentDiv
          style={{
            minWidth: "100%",
            height: `${mobile? '100%':'100%'}`,
            margin: "auto",
            justifyContent: "flex-end",
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
                width: "100vw",
                height: "100vh",
                diplay: "flex",
                justifyContent: "flex-start",
              }}
            >
              <img
                style={{
                  position: "absolute",
                  zIndex: -1,
                  height: `${mobile? '115vh': '100%'}`,
                  width:'100vw',
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
                marginTop:'60px'
              }}
            >
              <H1 style={{marginBottom:'10px'}}>Contact Us</H1>
            <div style={{margin:'auto', height:'2px', width:'200px', background:'white',}}/>
              <div
                style={{
                  width: "100%",
                  display: "flex",
                  flexDirection: "row",
                  justifyContent: "center",
                  paddingTop:'0px',
                }}
              >
                <Grid
                  container
                  spacing={2}
                  style={{width: "100%"}}
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
                        marginLeft:'10%',
                        marginRight:'10%'
                      }}
                    >
                      <div
                        style={{
                          display: "flex",
                          flexDirection: "row",
                          width: "100%",
                          justifyContent: `${mobile?'center':'flex-start'}`,
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
                          rows="6"
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
                      maxWidth:'90vw',
                      display: "flex",
                      flexDirection: "row",
                      justifyContent: "center",
                    }}
                  >
                    <div
                      style={{
                        display: "flex",
                        flexDirection: "column",
                        width: '100%',
                        minWidth: "400px",
                        paddingLeft:`${mobile?'':'20%'}`,
                        justifyContent:'center',
                        textAlign:'center',
                      }}
                    >
                      <h2>Address</h2>
                      <P style={{textAlign:'center', marginTop:'0px'}}>RPX Building 7th floor,<br/>
                      Jl. Ciputat Raya no.99 <br/>
                      12310 DKI Jakarta, Indonesia<br/>
                      (021) 75918007<br/>
                      info@aero.com</P>
                    </div>
                  </Grid>
                </Grid>
              </div>
              <div style={{height:'100%', flex:'1', margin:'0px', marginTop:'60px'}}>
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
