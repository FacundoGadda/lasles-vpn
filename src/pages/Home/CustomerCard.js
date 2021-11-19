import React from "react";
import profile from "../../assets/Ellipse 175.png";
import { AiFillStar } from "react-icons/ai";

const CustomerCard = () => {
  return (
    <div className="container">
      <div className="bg-white border hov rounded-3 customer-card p-4 d-flex flex-column">
        <div className="d-flex align-items-center">
          <div>
            <img src={profile} alt="profile-pic" className="img-fluid" />
          </div>
          <div className="ms-3">
            <h4 className="lh-1">Viehz Robert</h4>
            <p className="fs-14 text-muted lh-1 mb-0">Warsaw, Poland</p>
          </div>
          <div className="ms-auto d-flex align-items-center">
            <p className="mb-0">4.5</p>
            <AiFillStar className="ms-2" color="orange" />
          </div>
        </div>
        <div className="mt-3">
          <p className="mb-0" style={{ lineHeight: '30px' }}>
            “Wow... I am very happy to use this VPN, it turned out to be more
            than my expectations and so far there have been no problems.
            LaslesVPN always the best”.
          </p>
        </div>
      </div>
    </div>
  );
};

export default CustomerCard;

// import React from "react";
// import profile from "../../assets/Ellipse 175.png";
// import { AiFillStar } from 'react-icons/ai';

// const CustomerCard = () => {
//   return (
//     <div className="container">
//       <div className="row bg-white border hov rounded-3 d-flex flex-column customer-card">
//         <div className="col d-flex align-items-center p-4">
//           <div>
//             <img src={profile} alt="profile pic" className="img-fluid" />
//           </div>
//           <div className="ms-3 d-flex flex-column justify-content-center align-items-start">
//             <h4 className="lh-1">Viezh Robert</h4>
//             <p className="lh-1 mb-0">Warsaw, Poland</p>
//           </div>
//           <div className="ms-auto me-4 d-flex align-items-center">
//             <p className="text-black mb-0">4.5</p>
//             <AiFillStar className="ms-2" color="orange" />
//           </div>
//         </div>
//         <div className="col ps-4">
//           <p className="text-black lh-lg">
//             “Wow... I am very happy to use this VPN, it turned out to be more
//             than my expectations and so far there have been no problems.
//             LaslesVPN always the best”.
//           </p>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default CustomerCard;
