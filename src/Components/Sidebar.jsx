import React from 'react';
import framewhite from "../assets/Frame 811779 (1).png";
import hamburgerClose from "../assets/Hamburguer menu.png";
import hamburgerOpen from "../assets/Hamburguer menu (1).png";

const Sidebar = ({ isCollapsed, toggleSidebar }) => {
  const navItemStyle = {
    width: '100%',
    padding: '8px 12px',
    display: 'flex',
    flexDirection: 'row',
    gap: '8px',
    borderRadius: '6px',
    cursor: 'pointer',
    transition: 'background-color 0.2s',
  };

  const navTextStyle = {
    fontFamily: 'Inter',
    fontWeight: 500,
    fontSize: '16px',
    lineHeight: '24px',
    color: '#d0d5dd',
    display: isCollapsed ? 'none' : 'block',
  };

  const logoTextStyle = {
    fontFamily: 'Inter',
    fontWeight: 600,
    fontSize: '24px',
    lineHeight: '24px',
    color: '#f2f4f7',
    display: isCollapsed ? 'none' : 'block',
  };

  return (
    <div style={{ 
      width: isCollapsed ? '80px' : '260px',
      minHeight: '100vh',
      backgroundColor: '#1c1c1c',
      display: 'flex',
      flexDirection: 'column',
      gap: '24px',
      transition: 'width 0.3s'
    }}>

       {/* Toggle Button */}
       <button onClick={toggleSidebar} style={{
        background: 'none',
        border: 'none',
        color: '#f2f4f7',
        cursor: 'pointer',
        padding: '16px',
        textAlign: 'left'
      }}>
        {isCollapsed && (<img src={hamburgerOpen} alt="" style={{ width: '45px' , height:"46px"}} /> )}
      </button>

      {/* Nav Header */}
      <div style={{ 
        width: '100%',
        padding: '32px 16px 0',
      }}>
        <div style={{
          display: 'flex',
          flexDirection: 'row',
          padding: '4px 0',
          alignItems: 'center',
          gap: '16px'
        }}>
          <div style={{ display: 'flex', gap: '16px', alignItems: 'center' }}>
            <div style={{ display: 'flex', gap: '3px', padding: '1.5px 2px' }}>
              <img src={framewhite} alt="" style={{ width: '45px' , height:"46px"}} />
            </div>
            <span style={logoTextStyle}>DnA</span>
            <div>
            <button onClick={toggleSidebar} style={{background: 'none', border: 'none', color: '#f2f4f7', cursor: 'pointer', padding: '16px',textAlign: 'left'}}>
            {! isCollapsed &&  (<img src={hamburgerClose} alt="" style={{ width: '45px' , height:"46px"}} />)}
            </button>
              </div>
          </div>
        </div>
      </div>

      {/* Navigation Items */}
      <div style={{ 
        display: 'flex',
        flexDirection: 'column',
        gap: '12px',
        padding: '0 16px'
      }}>
        <div style={navItemStyle}>
          <img src="https://dashboard.codeparrot.ai/api/image/Z-0smuGYgKEKiATf/home.png" alt="" style={{ width: '24px', height: '24px' }} />
          <span style={navTextStyle}>Home</span>
        </div>

        <div style={navItemStyle}>
          <img src="https://dashboard.codeparrot.ai/api/image/Z-0smuGYgKEKiATf/carbon-t.png" alt="" style={{ width: '24px', height: '24px' }} />
          <span style={navTextStyle}>Scenario Performance</span>
        </div>

        <div style={navItemStyle}>
          <img src="https://dashboard.codeparrot.ai/api/image/Z-0smuGYgKEKiATf/carbon-r.png" alt="" style={{ width: '24px', height: '24px' }} />
          <span style={navTextStyle}>Module Performance</span>
        </div>

        <div style={{ ...navItemStyle, backgroundColor: '#fff200' }}>
          <img src="https://dashboard.codeparrot.ai/api/image/Z-0smuGYgKEKiATf/fluent-d.png" alt="" style={{ width: '24px', height: '24px' }} />
          <span style={{ ...navTextStyle, color: '#475467' }}>Data</span>
        </div>

        <div style={navItemStyle}>
          <img src="https://dashboard.codeparrot.ai/api/image/Z-0smuGYgKEKiATf/bx-quest.png" alt="" style={{ width: '24px', height: '24px' }} />
          <span style={navTextStyle}>Query</span>
        </div>
      </div>

      {/* Logout Section */}
      <div style={{
        marginTop: 'auto',
        padding: '0 16px',
        display: 'flex',
        flexDirection: 'column',
        gap: '12px'
      }}>
        <div style={{ 
          width: '100%',
          height: '1px',
          backgroundColor: '#d0d5dd',
          margin: '12px 0'
        }} />
        <div style={navItemStyle}>
          <img src="https://dashboard.codeparrot.ai/api/image/Z-0smuGYgKEKiATf/ic-basel.png" alt="" style={{ width: '24px', height: '24px' }} />
          <span style={navTextStyle}>Log out</span>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;

// import React from 'react';
// import 'bootstrap/dist/css/bootstrap.min.css';

// const Sidebar = () => {
//   return (
//     <div className="d-flex flex-column" style={{
//       width: '260px',
//       minHeight: '100vh',
//       backgroundColor: '#1c1c1c',
//       padding: '32px 16px 0'
//     }}>
//       {/* Nav Header */}
//       <div className="d-flex align-items-center gap-3 mb-4">
//         <div className="d-flex gap-1">
//           <img src="https://dashboard.codeparrot.ai/api/image/Z-0smuGYgKEKiATf/frame-81.png" alt="" width="8" />
//           <img src="https://dashboard.codeparrot.ai/api/image/Z-0smuGYgKEKiATf/frame-81-2.png" alt="" width="8" />
//           <img src="https://dashboard.codeparrot.ai/api/image/Z-0smuGYgKEKiATf/frame-81-3.png" alt="" width="8" />
//           <img src="https://dashboard.codeparrot.ai/api/image/Z-0smuGYgKEKiATf/frame-81-4.png" alt="" width="8" />
//         </div>
//         <span className="fw-semibold fs-4 text-light">DnA</span>
//         <img src="https://dashboard.codeparrot.ai/api/image/Z-0smuGYgKEKiATf/hamburgu.png" alt="menu" width="31" height="31" className="ms-auto cursor-pointer" />
//       </div>
      
//       {/* Navigation Items */}
//       <div className="d-flex flex-column gap-3">
//         {[
//           { src: "home.png", text: "Home" },
//           { src: "carbon-t.png", text: "Scenario Performance" },
//           { src: "carbon-r.png", text: "Module Performance" },
//           { src: "fluent-d.png", text: "Data", bg: '#fff200', textColor: '#475467' },
//           { src: "bx-quest.png", text: "Query" }
//         ].map(({ src, text, bg, textColor }, index) => (
//           <div key={index} className="d-flex align-items-center gap-2 p-2 rounded" style={{
//             backgroundColor: bg || 'transparent',
//             cursor: 'pointer',
//             transition: 'background-color 0.2s'
//           }}>
//             <img src={`https://dashboard.codeparrot.ai/api/image/Z-0smuGYgKEKiATf/${src}`} alt="" width="24" height="24" />
//             <span style={{ color: textColor || '#d0d5dd' }}>{text}</span>
//           </div>
//         ))}
//       </div>
      
//       {/* Logout Section */}
//       <div className="mt-auto">
//         <hr className="text-light" />
//         <div className="d-flex align-items-center gap-2 p-2 rounded" style={{ cursor: 'pointer' }}>
//           <img src="https://dashboard.codeparrot.ai/api/image/Z-0smuGYgKEKiATf/ic-basel.png" alt="" width="24" height="24" />
//           <span className="text-light">Log out</span>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Sidebar;

// import React from 'react';
// import Navbar from 'bootstrap/Navbar';

// const Sidebar = () => {
//   const navItemStyle = {
//     width: '100%',
//     padding: '8px 12px',
//     display: 'flex',
//     flexDirection: 'row',
//     gap: '8px',
//     borderRadius: '6px',
//     cursor: 'pointer',
//     transition: 'background-color 0.2s',
//   };

//   const navItemContentStyle = {
//     display: 'flex',
//     flexDirection: 'row',
//     gap: '12px',
//     alignItems: 'center',
//     flex: 1,
//   };

//   const navTextStyle = {
//     fontFamily: 'Inter',
//     fontWeight: 500,
//     fontSize: '16px',
//     lineHeight: '24px',
//     color: '#d0d5dd',
//   };

//   const logoTextStyle = {
//     fontFamily: 'Inter',
//     fontWeight: 600,
//     fontSize: '24px',
//     lineHeight: '24px',
//     color: '#f2f4f7',
//   };

//   return (
//     <Navbar style={{ 
//       width: '260px',
//       minHeight: '100vh',
//       backgroundColor: '#1c1c1c',
//       display: 'flex',
//       flexDirection: 'column',
//       gap: '24px'
//     }}>
//       {/* Nav Header */}
//       <div style={{ 
//         width: '100%',
//         padding: '32px 16px 0',
//       }}>
//         <div style={{
//           display: 'flex',
//           flexDirection: 'row',
//           padding: '4px 0',
//           alignItems: 'center',
//           gap: '16px'
//         }}>
//           <div style={{ display: 'flex', gap: '16px', alignItems: 'center' }}>
//             <div style={{ display: 'flex', gap: '3px', padding: '1.5px 2px' }}>
//               <img src="https://dashboard.codeparrot.ai/api/image/Z-0smuGYgKEKiATf/frame-81.png" alt="" style={{ width: '8px' }} />
//               <img src="https://dashboard.codeparrot.ai/api/image/Z-0smuGYgKEKiATf/frame-81-2.png" alt="" style={{ width: '8px' }} />
//               <img src="https://dashboard.codeparrot.ai/api/image/Z-0smuGYgKEKiATf/frame-81-3.png" alt="" style={{ width: '8px' }} />
//               <img src="https://dashboard.codeparrot.ai/api/image/Z-0smuGYgKEKiATf/frame-81-4.png" alt="" style={{ width: '8px' }} />
//             </div>
//             <span style={logoTextStyle}>DnA</span>
//           </div>
//           <img 
//             src="https://dashboard.codeparrot.ai/api/image/Z-0smuGYgKEKiATf/hamburgu.png" 
//             alt="menu" 
//             style={{ 
//               width: '31px',
//               height: '31px',
//               marginLeft: 'auto',
//               cursor: 'pointer'
//             }} 
//           />
//         </div>
//       </div>

//       {/* Navigation Items */}
//       <div style={{ 
//         display: 'flex',
//         flexDirection: 'column',
//         gap: '12px',
//         padding: '0 16px'
//       }}>
//         <div style={{
//           ...navItemStyle,
//           ':hover': { backgroundColor: '#2c2c2c' }
//         }}>
//           <div style={navItemContentStyle}>
//             <img src="https://dashboard.codeparrot.ai/api/image/Z-0smuGYgKEKiATf/home.png" alt="" style={{ width: '24px', height: '24px' }} />
//             <span style={navTextStyle}>Home</span>
//           </div>
//         </div>

//         <div style={{
//           ...navItemStyle,
//           ':hover': { backgroundColor: '#2c2c2c' }
//         }}>
//           <div style={navItemContentStyle}>
//             <img src="https://dashboard.codeparrot.ai/api/image/Z-0smuGYgKEKiATf/carbon-t.png" alt="" style={{ width: '24px', height: '24px' }} />
//             <span style={navTextStyle}>Scenario Performance</span>
//           </div>
//         </div>

//         <div style={{
//           ...navItemStyle,
//           ':hover': { backgroundColor: '#2c2c2c' }
//         }}>
//           <div style={navItemContentStyle}>
//             <img src="https://dashboard.codeparrot.ai/api/image/Z-0smuGYgKEKiATf/carbon-r.png" alt="" style={{ width: '24px', height: '24px' }} />
//             <span style={navTextStyle}>Module Performance</span>
//           </div>
//         </div>

//         <div style={{
//           ...navItemStyle,
//           backgroundColor: '#fff200',
//         }}>
//           <div style={navItemContentStyle}>
//             <img src="https://dashboard.codeparrot.ai/api/image/Z-0smuGYgKEKiATf/fluent-d.png" alt="" style={{ width: '24px', height: '24px' }} />
//             <span style={{ ...navTextStyle, color: '#475467' }}>Data</span>
//           </div>
//         </div>

//         <div style={{
//           ...navItemStyle,
//           ':hover': { backgroundColor: '#2c2c2c' }
//         }}>
//           <div style={navItemContentStyle}>
//             <img src="https://dashboard.codeparrot.ai/api/image/Z-0smuGYgKEKiATf/bx-quest.png" alt="" style={{ width: '24px', height: '24px' }} />
//             <span style={navTextStyle}>Query</span>
//           </div>
//         </div>
//       </div>

//       {/* Logout Section */}
//       <div style={{
//         marginTop: 'auto',
//         padding: '0 16px',
//         display: 'flex',
//         flexDirection: 'column',
//         gap: '12px'
//       }}>
//         <div style={{ 
//           width: '100%',
//           height: '1px',
//           backgroundColor: '#d0d5dd',
//           margin: '12px 0'
//         }} />
//         <div style={{
//           ...navItemStyle,
//           ':hover': { backgroundColor: '#2c2c2c' }
//         }}>
//           <div style={navItemContentStyle}>
//             <img src="https://dashboard.codeparrot.ai/api/image/Z-0smuGYgKEKiATf/ic-basel.png" alt="" style={{ width: '24px', height: '24px' }} />
//             <span style={navTextStyle}>Log out</span>
//           </div>
//         </div>
//       </div>
//     </Navbar>
//   );
// };

// Sidebar.defaultProps = {
//   // Add default props if needed
// };

// export default Sidebar;