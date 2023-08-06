import React from "react";
import individual from "../asset/2344579.png";
import ONon from "../asset/3395949.png";
import facalties from "../asset/5351063.png";
import timing from "../asset/61227.png";
import video from "../asset/img_520336.png";
import book from "../asset/read-book-icon.png";

import "../components/Icons.css";

const Icons = () => {
  const icons = [
    { id: 1, logo: individual, desc: "Individual Attention" },
    { id: 2, logo: facalties, desc: "Top Faculties from IIM" },
    { id: 3, logo: ONon, desc: "5 One-on-One Session with Authosh Sir" },
    { id: 4, logo: timing, desc: "Flexible Timings" },
  ];
  return (
    <>
      <div className="container my-5">
        <div className="box align-items-center">
          <div className="row text-center ">
            <div className="col-sm ">
              <div
                className="card bg-warning text-center  p-3 "
                style={{
                  width: "130px",
                  height: "130px",
                  borderRadius: "65px",
                }}
              >
                <div>
                  <img className="img-fluid" src={video} alt="" />
                </div>
              </div>
              <p style={{ fontFamily: "sans-serif", fontSize: "15px" }}>
                Live On to One interactive Classes
              </p>
            </div>
            <div className="col-sm">
              <div
                className="card bg-warning text-center  p-3 "
                style={{
                  width: "130px",
                  height: "130px",
                  borderRadius: "65px",
                }}
              >
                <div>
                  <img className="img-fluid" src={timing} alt="" />
                </div>
              </div>
              <p
                className=""
                style={{ fontFamily: "sans-serif", fontSize: "15px" }}
              >
                {" "}
                Flexible Timings
              </p>
            </div>
            <div className="col-sm">
              <div
                className="card bg-warning text-center  p-3 "
                style={{
                  width: "130px",
                  height: "130px",
                  borderRadius: "65px",
                }}
              >
                <div>
                  <img className="img-fluid" src={book} alt="" />
                </div>
              </div>
              <p style={{ fontFamily: "sans-serif", fontSize: "15px" }}>
                Personalized Study Material
              </p>
            </div>
            <div className="col-sm">
              <div
                className="card bg-warning text-center  p-3 "
                style={{
                  width: "130px",
                  height: "130px",
                  borderRadius: "65px",
                }}
              >
                <div>
                  <img className="img-fluid" src={facalties} alt="" width={100} />
                </div>
              </div>
              <p style={{ fontFamily: "sans-serif", fontSize: "15px" }}>
                To Faculties From IIM
              </p>
            </div>
            <div className="col-sm">
              <div
                className="card bg-warning text-center  p-3 "
                style={{
                  width: "130px",
                  height: "130px",
                  borderRadius: "65px",
                }}
              >
                <div>
                  <img className="img-fluid" src={ONon} alt="" />
                </div>
              </div>
              <p style={{ fontFamily: "sans-serif", fontSize: "15px" }}>
                5 One on One Sessions with Ashutosh Sir
              </p>
            </div>
            <div className="col-sm">
              <div
                className="card bg-warning text-center   p-3 "
                style={{
                  width: "130px",
                  height: "130px",
                  borderRadius: "65px",
                  marginLeft: "42%",
                }}
              >
                <div>
                  <img
                    className="img-fluid text-center"
                    src={individual}
                    alt=""
                  />
                </div>
              </div>
              <p style={{ fontFamily: "sans-serif", fontSize: "15px", marginLeft:80 }}>
                Individual Attention
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Icons;
