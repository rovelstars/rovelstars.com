let Container = await Import("src/components/container.jsx");
export default function () {
  return React.createElement(Container, null
    , React.createElement('h1', { className: "text-3xl lg:text-6xl flex justify-center items-center text-center font-bold mx-8 text-emerald-600"        ,}, "Terms Of Service"  )
    , React.createElement('p', { className: "text-xl lg:text-3xl flex justify-center items-center text-center font-bold mx-8"       ,}, "Last Updated: 25-10-2022"  )
     /* create a line below*/ 
    , React.createElement('hr', { className: "my-8 rounded-md border-2 border-slate-400 dark:border-slate-800 mx-16"     ,} )
    , React.createElement('p', { className: "text-xl lg:text-3xl flex justify-center items-center text-center font-bold mx-8"       ,}, "This is a legal agreement between you and Rovel Stars. By using our services, you agree to be bound by this agreement."                     )
    , React.createElement('h1', { className: "text-3xl lg:text-6xl flex justify-center items-center text-center font-bold mx-8"       ,}, "1. Acceptance of Terms"   )
    , React.createElement('p', { className: "text-xl lg:text-3xl flex justify-center items-center text-center font-bold mx-8"       ,}, "By using our services, you agree to be bound by this agreement. If you do not agree to this agreement, you may not use our services."                         )
    , React.createElement('h1', { className: "text-3xl lg:text-6xl flex justify-center items-center text-center font-bold mx-8"       ,}, "2. Privacy Policy"  )
    , React.createElement('p', { className: "text-xl lg:text-3xl flex justify-center items-center text-center font-bold mx-8"       ,}, "Our privacy policy is available at  "      , React.createElement('a', { className: "text-blue-600 text-underline" , href: "/privacy",}, "here"), ".")
    , React.createElement('h1', { className: "text-3xl lg:text-6xl flex justify-center items-center text-center font-bold mx-8"       ,}, "3. Changes to Terms"   )
    , React.createElement('p', { className: "text-xl lg:text-3xl flex justify-center items-center text-center font-bold mx-8"       ,}, "We may change this agreement at any time. If we do, we will post the changes on this page. If you continue to use our services after we post the changes, you agree to be bound by this agreement, as modified. We therefore suggest you to read this page periodically."                                                 )
    , React.createElement('h1', { className: "text-3xl lg:text-6xl flex justify-center items-center text-center font-bold mx-8"       ,}, "4. Changes to Services"   )
    , React.createElement('p', { className: "text-xl lg:text-3xl flex justify-center items-center text-center font-bold mx-8"       ,}, "We may change our services at any time. If we do, we will post the changes on this page. If you continue to use our services after we post the changes, you agree to be bound by this agreement, as modified. We therefore suggest you to read this page periodically."                                                 )
    , React.createElement('h1', { className: "text-3xl lg:text-6xl flex justify-center items-center text-center font-bold mx-8"       ,}, "5. Termination of Services"   )
    , React.createElement('p', { className: "text-xl lg:text-3xl flex justify-center items-center text-center font-bold mx-8"       ,}, "We may terminate your use of our services at any time, for any reason, and without notice. If we do, we will post the changes on this page. If you continue to use our services after we post the changes, you agree to be bound by this agreement, as modified. We therefore suggest you to read this page periodically."                                                          )
    , React.createElement('h1', { className: "text-3xl lg:text-6xl flex justify-center items-center text-center font-bold mx-8"       ,}, "6. Termination of Account"   )
    , React.createElement('p', { className: "text-xl lg:text-3xl flex justify-center items-center text-center font-bold mx-8"       ,}, "For Account Deletion, please contact us at  "       , React.createElement('a', { className: "text-blue-600 text-underline" , href: "mailto:deletion@rovelstars.com",}, "deletion@rovelstars.com")
      )
    , React.createElement('h1', { className: "text-3xl lg:text-6xl flex justify-center items-center text-center font-bold mx-8"       ,}, "7. Disclaimer of Warranties"   )
    , React.createElement('p', { className: "text-xl lg:text-3xl flex justify-center items-center text-center font-bold mx-8"       ,}, "We provide our services \"as is\" and \"as available\". We do not make any express or implied warranties, endorsements or representations whatsoever as to the operation of our services, information, content, materials, or products. This shall include, but not be limited to, implied warranties of merchantability and fitness for a particular purpose and non-infringement, and warranties that access to or use of the service will be uninterrupted or error-free or that defects in the service will be corrected."                                                                             )
    , React.createElement('h1', { className: "text-3xl lg:text-6xl flex justify-center items-center text-center font-bold mx-8"       ,}, "8. Limitation of Liability"   )
    , React.createElement('p', { className: "text-xl lg:text-3xl flex justify-center items-center text-center font-bold mx-8"       ,}, "In no event will we be liable for any damages of any kind arising from the use of our services, including, but not limited to direct, indirect, incidental, punitive and consequential damages."                               )
    , React.createElement('h1', { className: "text-3xl lg:text-6xl flex justify-center items-center text-center font-bold mx-8"       ,}, "9. Indemnification" )
    , React.createElement('p', { className: "text-xl lg:text-3xl flex justify-center items-center text-center font-bold mx-8"       ,}, "You agree to indemnify, defend and hold us harmless from and against any and all claims, damages, costs and expenses, including attorneys' fees, arising from or related to your use of our services."                                )
    , React.createElement('h1', { className: "text-3xl lg:text-6xl flex justify-center items-center text-center font-bold mx-8"       ,}, "10. General" )
    , React.createElement('p', { className: "text-xl lg:text-3xl flex justify-center items-center text-center font-bold mx-8"       ,}, "Incase of any dispute, you agree to resolve with us in a friendly manner. If we are unable to resolve the dispute within 30 days, you agree to resolve the dispute in the courts of India. Any typos or grammatical errors are un-intentional. Please inform us if you find any at  "

                     , React.createElement('a', { className: "text-blue-600 text-underline" , href: "mailto:tos@rovelstars.com",}, "tos@rovelstars.com")
    )
    , React.createElement('p', { className: "text-xl lg:text-3xl flex justify-center items-center text-center font-bold mx-8"       ,}, "Please read our  "   , React.createElement('a', { className: "text-blue-600 text-underline" , href: "/returns",}, "Return Policy" ))
      );
}
export function head() {
  return React.createElement(React.Fragment, null
    , React.createElement('title', null, "Rovel Stars - Terms Of Service"     )
    , React.createElement('reejs-script', { src: "/__reejs/serve/navbar.js",})
  );
}

export let config = Container.config;