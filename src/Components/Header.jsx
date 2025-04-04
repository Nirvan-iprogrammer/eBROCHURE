import React from 'react';

const Header = () => {
  return (
    <div style={{ 
      width: '100%',
      minHeight: '138px',
      display: 'flex',
      flexDirection: 'column',
      backgroundColor: '#ffffff',
      padding: '32px'
    }}>
      {/* Top Navigation */}
      <div style={{
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        width: '100%',
        height: '58px'
      }}>
        {/* Breadcrumb */}
        <div style={{
          display: 'flex',
          flexDirection: 'row',
          alignItems: 'center',
          gap: '8px'
        }}>
          <button style={{
            padding: '4px',
            borderRadius: '6px',
            border: 'none',
            background: 'transparent',
            cursor: 'pointer'
          }}>
            <img src="https://dashboard.codeparrot.ai/api/image/Z-0smuGYgKEKiATf/home-2.png" alt="home" width="20" height="20" />
          </button>
          <img src="https://dashboard.codeparrot.ai/api/image/Z-0smuGYgKEKiATf/chevron.png" alt="chevron" width="16" height="16" />
          <button style={{
            padding: '4px 8px',
            borderRadius: '6px',
            border: 'none',
            background: '#f9fafb',
            cursor: 'pointer'
          }}>
            <span style={{
              fontFamily: 'Inter',
              fontWeight: 500,
              fontSize: '14px',
              lineHeight: '20px',
              color: '#344054'
            }}>Data</span>
          </button>
        </div>

        {/* Logo */}
        <img src="https://dashboard.codeparrot.ai/api/image/Z-0smuGYgKEKiATf/image-15.png" alt="logo" width="102" height="58" />
      </div>

      {/* Header Content */}
      <div style={{
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginTop: '40px',
        width: '100%',
        flexWrap: 'wrap'
      }}>
        {/* Title */}
        <h1 style={{
          fontFamily: 'Inter',
          fontWeight: 500,
          fontSize: '30px',
          lineHeight: '38px',
          color: '#101828',
          margin: 0
        }}>Data</h1>

        {/* Actions */}
        <div style={{
          display: 'flex',
          flexDirection: 'row',
          gap: '16px',
          alignItems: 'center'
        }}>
          {/* Settings Button */}
          <button style={{
            padding: '10px',
            borderRadius: '6px',
            border: 'none',
            background: '#ffffff',
            cursor: 'pointer'
          }}>
            <img src="https://dashboard.codeparrot.ai/api/image/Z-0smuGYgKEKiATf/settings.png" alt="settings" width="20" height="20" />
          </button>

          {/* Notifications Button */}
          <button style={{
            padding: '10px',
            borderRadius: '6px',
            border: 'none',
            background: '#ffffff',
            cursor: 'pointer'
          }}>
            <img src="https://dashboard.codeparrot.ai/api/image/Z-0smuGYgKEKiATf/bell.png" alt="notifications" width="20" height="20" />
          </button>

          {/* User Avatar */}
          <div style={{
            width: '40px',
            height: '40px',
            borderRadius: '200px',
            background: '#f9fafb',
            border: '4px solid #f2f4f7',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center'
          }}>
            <img src="https://dashboard.codeparrot.ai/api/image/Z-0smuGYgKEKiATf/user.png" alt="user" width="20" height="20" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;


// import React from 'react';
// import 'bootstrap/dist/css/bootstrap.min.css';

// const Header = () => {
//   return (
//     <div className="d-flex flex-column bg-white p-4" style={{ minHeight: '138px' }}>
//       {/* Top Navigation */}
//       <div className="d-flex justify-content-between align-items-center w-100" style={{ height: '58px' }}>
//         {/* Breadcrumb */}
//         <div className="d-flex align-items-center gap-2">
//           <button className="btn p-1 border-0 bg-transparent">
//             <img src="https://dashboard.codeparrot.ai/api/image/Z-0smuGYgKEKiATf/home-2.png" alt="home" width="20" height="20" />
//           </button>
//           <img src="https://dashboard.codeparrot.ai/api/image/Z-0smuGYgKEKiATf/chevron.png" alt="chevron" width="16" height="16" />
//           <button className="btn px-2 py-1 border-0" style={{ background: '#f9fafb', borderRadius: '6px' }}>
//             <span className="fw-medium text-secondary" style={{ fontSize: '14px', lineHeight: '20px' }}>Data</span>
//           </button>
//         </div>

//         {/* Logo */}
//         <img src="https://dashboard.codeparrot.ai/api/image/Z-0smuGYgKEKiATf/image-15.png" alt="logo" width="102" height="58" />
//       </div>

//       {/* Header Content */}
//       <div className="d-flex justify-content-between align-items-center mt-4 flex-wrap w-100">
//         {/* Title */}
//         <h1 className="m-0" style={{ fontSize: '30px', fontWeight: 500, lineHeight: '38px', color: '#101828' }}>Data</h1>

//         {/* Actions */}
//         <div className="d-flex align-items-center gap-3">
//           {/* Settings Button */}
//           <button className="btn p-2 border-0 bg-white">
//             <img src="https://dashboard.codeparrot.ai/api/image/Z-0smuGYgKEKiATf/settings.png" alt="settings" width="20" height="20" />
//           </button>

//           {/* Notifications Button */}
//           <button className="btn p-2 border-0 bg-white">
//             <img src="https://dashboard.codeparrot.ai/api/image/Z-0smuGYgKEKiATf/bell.png" alt="notifications" width="20" height="20" />
//           </button>

//           {/* User Avatar */}
//           <div className="rounded-circle d-flex align-items-center justify-content-center" style={{ width: '40px', height: '40px', background: '#f9fafb', border: '4px solid #f2f4f7' }}>
//             <img src="https://dashboard.codeparrot.ai/api/image/Z-0smuGYgKEKiATf/user.png" alt="user" width="20" height="20" />
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// Header.defaultProps = {
//   title: 'Data',
//   logoSrc: 'https://dashboard.codeparrot.ai/api/image/Z-0smuGYgKEKiATf/image-15.png',
//   userAvatarSrc: 'https://dashboard.codeparrot.ai/api/image/Z-0smuGYgKEKiATf/user.png'
// };

// export default Header;

// // import React from 'react';
// // import Dropdown from 'react-bootstrap/Dropdown';

// // const Header = () => {
// //   return (
// //     <div style={{ 
// //       width: '100%',
// //       minHeight: '138px',
// //       display: 'flex',
// //       flexDirection: 'column',
// //       backgroundColor: '#ffffff',
// //       padding: '32px'
// //     }}>
// //       {/* Top Navigation */}
// //       <div style={{
// //         display: 'flex',
// //         flexDirection: 'row',
// //         justifyContent: 'space-between',
// //         alignItems: 'center',
// //         width: '100%',
// //         height: '58px'
// //       }}>
// //         {/* Breadcrumb */}
// //         <div style={{
// //           display: 'flex',
// //           flexDirection: 'row',
// //           alignItems: 'center',
// //           gap: '8px'
// //         }}>
// //           <button style={{
// //             padding: '4px',
// //             borderRadius: '6px',
// //             border: 'none',
// //             background: 'transparent',
// //             cursor: 'pointer'
// //           }}>
// //             <img src="https://dashboard.codeparrot.ai/api/image/Z-0smuGYgKEKiATf/home-2.png" alt="home" width="20" height="20" />
// //           </button>
// //           <img src="https://dashboard.codeparrot.ai/api/image/Z-0smuGYgKEKiATf/chevron.png" alt="chevron" width="16" height="16" />
// //           <button style={{
// //             padding: '4px 8px',
// //             borderRadius: '6px',
// //             border: 'none',
// //             background: '#f9fafb',
// //             cursor: 'pointer'
// //           }}>
// //             <span style={{
// //               fontFamily: 'Inter',
// //               fontWeight: 500,
// //               fontSize: '14px',
// //               lineHeight: '20px',
// //               color: '#344054'
// //             }}>Data</span>
// //           </button>
// //         </div>

// //         {/* Logo */}
// //         <img src="https://dashboard.codeparrot.ai/api/image/Z-0smuGYgKEKiATf/image-15.png" alt="logo" width="102" height="58" />
// //       </div>

// //       {/* Header Content */}
// //       <div style={{
// //         display: 'flex',
// //         flexDirection: 'row',
// //         justifyContent: 'space-between',
// //         alignItems: 'center',
// //         marginTop: '40px',
// //         width: '100%',
// //         flexWrap: 'wrap'
// //       }}>
// //         {/* Title */}
// //         <h1 style={{
// //           fontFamily: 'Inter',
// //           fontWeight: 500,
// //           fontSize: '30px',
// //           lineHeight: '38px',
// //           color: '#101828',
// //           margin: 0
// //         }}>Data</h1>

// //         {/* Actions */}
// //         <div style={{
// //           display: 'flex',
// //           flexDirection: 'row',
// //           gap: '16px',
// //           alignItems: 'center'
// //         }}>
// //           {/* Settings Button */}
// //           <button style={{
// //             padding: '10px',
// //             borderRadius: '6px',
// //             border: 'none',
// //             background: '#ffffff',
// //             cursor: 'pointer'
// //           }}>
// //             <img src="https://dashboard.codeparrot.ai/api/image/Z-0smuGYgKEKiATf/settings.png" alt="settings" width="20" height="20" />
// //           </button>

// //           {/* Notifications Button */}
// //           <button style={{
// //             padding: '10px',
// //             borderRadius: '6px',
// //             border: 'none',
// //             background: '#ffffff',
// //             cursor: 'pointer'
// //           }}>
// //             <img src="https://dashboard.codeparrot.ai/api/image/Z-0smuGYgKEKiATf/bell.png" alt="notifications" width="20" height="20" />
// //           </button>

// //           {/* User Avatar */}
// //           <div style={{
// //             width: '40px',
// //             height: '40px',
// //             borderRadius: '200px',
// //             background: '#f9fafb',
// //             border: '4px solid #f2f4f7',
// //             display: 'flex',
// //             alignItems: 'center',
// //             justifyContent: 'center'
// //           }}>
// //             <img src="https://dashboard.codeparrot.ai/api/image/Z-0smuGYgKEKiATf/user.png" alt="user" width="20" height="20" />
// //           </div>
// //         </div>
// //       </div>
// //     </div>
// //   );
// // };

// // Header.defaultProps = {
// //   title: 'Data',
// //   logoSrc: 'https://dashboard.codeparrot.ai/api/image/Z-0smuGYgKEKiATf/image-15.png',
// //   userAvatarSrc: 'https://dashboard.codeparrot.ai/api/image/Z-0smuGYgKEKiATf/user.png'
// // };

// // export default Header;

