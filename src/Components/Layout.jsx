import React, { useState } from 'react';
import Sidebar from './Sidebar';
import Header from './Header';
import MainContent from './MainContent';

const Layout = () => {
  const [isCollapsed, setIsCollapsed] = useState(false);

  const toggleSidebar = () => {
    setIsCollapsed(!isCollapsed);
  };

  return (
    <div style={{ display: 'flex', flexDirection: 'row', minHeight: '100vh', backgroundColor: '#f9fafb' }}>
      {/* Sidebar */}
      <div style={{ flexGrow: 0, width: isCollapsed ? '80px' : '260px', backgroundColor: '#1c1c1c' }}>
        <Sidebar isCollapsed={isCollapsed} toggleSidebar={toggleSidebar} />
      </div>

      {/* Main Content Area */}
      <div style={{ flexGrow: 1, display: 'flex', flexDirection: 'column',backgroundColor: '#ffffff' }}>
        {/* Header */}
        <div style={{ flexGrow: 0, height: 'auto' }}>
          <Header />
        </div>

        {/* Main Content */}
        {/* <div style={{ flexGrow: 1, height: 'auto', padding: '32px' }}>
          <MainContent />
        </div> */}
      </div>
    </div>
  );
};

export default Layout;


// import React from 'react';
// import Sidebar from './Sidebar';
// import Header from './Header';
// import MainContent from './MainContent';

// {/* <div className='flex h-full'>
//         <SideNavBar />
//         <div className='ml-[20px] p-[20px] w-full'>
//           <Header />
//           <Component />
//         </div>
//       </div> */}

// const Layout = () => {
//   return (
//     <div style={{ display: 'flex', flexDirection: 'row', minHeight: '100vh', backgroundColor: '#f9fafb' }}>
//       {/* Sidebar */}
//       <div style={{ flexGrow: 0, backgroundColor: '#1c1c1c' }}>
//         <Sidebar />
//       </div>

//       {/* Main Content Area */}
//       <div style={{ flexGrow: 1, display: 'flex', flexDirection: 'column', backgroundColor: '#ffffff' }}>
//         {/* Header */}
//         <div style={{ flexGrow: 0, height: 'auto' }}>
//           <Header />
//         </div>

//         {/* Main Content */}
//         <div style={{ flexGrow: 1, height: 'auto', padding: '32px' }}>
//           <MainContent />
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Layout;