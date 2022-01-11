import React from "react";
import { Container, ContentDiv } from "../Home/HomeElements";
import { ContactUsDiv } from "./ContactUsElement";
import Footer from "../Footer";
import bg from "../../images/bg/bg5.png";
import { Grid } from "@material-ui/core";
const ContactUsSection = ({mobile}) => {
  return (
    //  <div style={{height:'100vh', display:'flex', flexDirection:'column', justifyContent:'flex-end' ,minWidth:'100%',maxHeight:'200vh', background:'linear-gradient(270deg, #596B80 27.08%, #0C1A2B 112.98%)'}}>
    <ContentDiv
      double={true}
      style={{
        // width: `${mobile? '100vw': '98.6vw'}`,
        width:'100vw',
        height:`${mobile? '100vh': '100vh'}`,
        maxWidth:'100vw',
        margin: 'auto',
        background: "linear-gradient(270deg, #596B80 27.08%, #0C1A2B 112.98%)",
        paddingBottom:'0px',
        justifyContent:'flex-start'
      }}

    >
      <ContactUsDiv style={{color: "white", maxHeight:'100%', marginBottom:'0px' }}>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "flex-start",
            textAlign: "center",
            minWidth: "90%",
            height: '90%',
            paddingTop:'60px',
            
          }}
          id="contactus"
        >
          <h1 >
            Contact Us
          </h1>
          <div
            style={{
              width: `${mobile? '96vw':'100vw' }`,
              display: "flex",
              flexDirection: "row",
              justifyContent: "center",
              // margin:'auto',
              marginBottom:'0px',
              marginTop:'0px',
            }}
          >
            <Grid
              container
              spacing={2}
              style={{ margin: "auto"}}
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
                    <h3 style={{margin:'auto', marginBottom:'20px'}}>Drop us a Line</h3>
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
                      rows="8"
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
                  }}
                >
                  <div>
                    <h3 style={{textAlign:`${mobile? 'center': 'right'}`, 
                      width: "100%", marginBottom:`${mobile? '0px':''}`, marginTop:`${mobile? '0px':''}`}}>Contact Address</h3>
                  </div>
                  <div
                    style={{
                      marginTop:'0px',
                      display: "flex",
                      flexDirection: "row",
                      justifyContent: `${mobile? 'center':'flex-end'}`,
                    }}
                  >
                    <p style={{ textAlign: `${mobile? 'center': 'right'}`, fontSize:`${mobile?'.8rem':'1.2rem'}` }}>
                    RPX Building 7th floor,<br/>
                    Jl. Ciputat Raya no.99<br/>
                    12310 DKI Jakarta, Indonesia<br/>
                    (021) 75918007<br/>
                    info@trimatraindustries.com
                    </p>
                  </div>
                </div>
              </Grid>
            </Grid>
          </div>
          <div style={{marginBottom:'0px', display:'flex', justifySelf:'flex-end'}}>
            <Footer/>
          </div>
        </div>
      </ContactUsDiv>
    </ContentDiv>
  );
};

export default ContactUsSection;
