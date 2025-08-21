import React from "react";
import Image from "next/image";

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="flex min-h-[100vh] mx-1 my-1 rounded-2xl shadow-xl overflow-hidden">
      {/* Left Section - 1/3 width */}
      <section className="hidden w-1/3 items-center justify-center bg-brand p-6 lg:flex">
        <div className="flex max-h-[600px] max-w-[360px] flex-col justify-center space-y-6">
          <Image
            src="/assets/icons/logo-full.svg"
            alt="logo"
            width={180}
            height={62}
            className="h-auto mt-4"
          />

          <div className="space-y-3 text-white">
            <h1 className="text-2xl font-bold">Manage your files efficiently</h1>
            <p className="text-sm">
              Store all your documents in one place securely.
            </p>
          </div>

          <Image
            src="/assets/images/files.png"
            alt="Files"
            width={280}
            height={280}
            className="transition-all hover:rotate-2 hover:scale-105"
          />
        </div>
      </section>

      {/* Right Section - 2/3 width */}
      <section className="flex flex-1 flex-col items-center bg-white p-4 py-6 lg:justify-center lg:p-6">
        <div className="mb-8 lg:hidden">
          <Image
            src="/assets/icons/logo-full-brand.svg"
            alt="logo"
            width={180}
            height={52}
            className="h-auto w-[180px] lg:w-[220px]"
          />
        </div>

        {children}
      </section>
    </div>
  );
};

export default Layout;












// import React from "react";
// import Image from "next/image";

// const Layout = ({ children }: { children: React.ReactNode }) => {
//   return (
//     <div className="flex min-h-screen">
//       <section className="hidden w-1/2 items-center justify-center bg-brand p-10 lg:flex xl:w-2/5">
//         <div className="flex max-h-[800px] max-w-[430px] flex-col justify-center space-y-12">
//           <Image
//             src="/assets/icons/logo-full.svg"
//             alt="logo"
//             width={224}
//             height={52}
//             className="h-auto"
//           />

//           <div className="space-y-5 text-white">
//             <h1 className="h1">Manage your files the best way</h1>
//             <p className="body-1">
//               This is a place where you can store all your documents.
//             </p>
//           </div>
//           <Image
//             src="/assets/images/files.png"
//             alt="Files"
//             width={342}
//             height={342}
//             className="transition-all hover:rotate-2 hover:scale-105"
//           />
//         </div>
//       </section>

//       <section className="flex flex-1 flex-col items-center bg-white p-4 py-10 lg:justify-center lg:p-10 lg:py-0">
//         <div className="mb-16 lg:hidden">
//           <Image
//             src="/assets/icons/logo-full-brand.svg"
//             alt="logo"
//             width={224}
//             height={82}
//             className="h-auto w-[200px] lg:w-[250px]"
//           />
//         </div>

//         {children}
//       </section>
//     </div>
//   );
// };

// export default Layout;