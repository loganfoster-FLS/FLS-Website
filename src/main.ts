{\rtf1\ansi\ansicpg1252\cocoartf2868
\cocoatextscaling0\cocoaplatform0{\fonttbl\f0\fnil\fcharset0 .AppleSystemUIFontMonospaced-Regular;}
{\colortbl;\red255\green255\blue255;\red218\green221\blue226;\red48\green211\blue59;\red245\green92\blue112;
\red104\green167\blue255;\red142\green190\blue255;\red163\green122\blue236;\red253\green154\blue93;\red87\green96\blue106;
}
{\*\expandedcolortbl;;\cssrgb\c88235\c89412\c90980;\cssrgb\c19608\c84314\c29412\c20000;\cssrgb\c97647\c45882\c51373;
\cssrgb\c47451\c72157\c100000;\cssrgb\c61961\c79608\c100000;\cssrgb\c70196\c57255\c94118;\cssrgb\c100000\c67059\c43922;\cssrgb\c41569\c45098\c49020;
}
\margl1440\margr1440\vieww11520\viewh8400\viewkind0
\deftab720
\pard\pardeftab720\partightenfactor0

\f0\fs24 \cf2 \cb3 \expnd0\expndtw0\kerning0
\outl0\strokewidth0 \strokec2     currentPage \cf4 \strokec4 =\cf2 \strokec2  page\
  \}\
\
\pard\pardeftab720\partightenfactor0
\cf4 \strokec4   const\cf5 \strokec5  isHome\cf4 \strokec4  =\cf2 \strokec2  page \cf4 \strokec4 ===\cf6 \strokec6  'home'\cf2 \strokec2 \
\
  document.\cf7 \strokec7 getElementById\cf2 \strokec2 (\cf6 \strokec6 'top-nav'\cf2 \strokec2 )?.classList.\cf7 \strokec7 toggle\cf2 \strokec2 (\cf6 \strokec6 'hidden'\cf2 \strokec2 , \cf4 \strokec4 !\cf2 \strokec2 isHome)\
\
\cf4 \strokec4   const\cf5 \strokec5  rail\cf4 \strokec4  =\cf2 \strokec2  document.\cf7 \strokec7 getElementById\cf2 \strokec2 (\cf6 \strokec6 'icon-rail'\cf2 \strokec2 ) \cf4 \strokec4 as\cf7 \strokec7  HTMLElement\cf2 \strokec2 \
\cf4 \strokec4   const\cf5 \strokec5  app\cf4 \strokec4  =\cf2 \strokec2  document.\cf7 \strokec7 getElementById\cf2 \strokec2 (\cf6 \strokec6 'app'\cf2 \strokec2 ) \cf4 \strokec4 as\cf7 \strokec7  HTMLElement\cf2 \strokec2 \
\
\cf4 \strokec4   if\cf2 \strokec2  (\cf4 \strokec4 !\cf2 \strokec2 isHome) \{\
    rail.classList.\cf7 \strokec7 add\cf2 \strokec2 (\cf6 \strokec6 'visible'\cf2 \strokec2 )\
    app.classList.\cf7 \strokec7 add\cf2 \strokec2 (\cf6 \strokec6 'rail-shifted'\cf2 \strokec2 )\
  \} \cf4 \strokec4 else\cf2 \strokec2  \{\
    rail.classList.\cf7 \strokec7 remove\cf2 \strokec2 (\cf6 \strokec6 'visible'\cf2 \strokec2 )\
    app.classList.\cf7 \strokec7 remove\cf2 \strokec2 (\cf6 \strokec6 'rail-shifted'\cf2 \strokec2 )\
  \}\
\
  ;[\cf6 \strokec6 'about'\cf2 \strokec2 , \cf6 \strokec6 'portfolio'\cf2 \strokec2 , \cf6 \strokec6 'services'\cf2 \strokec2 ].\cf7 \strokec7 forEach\cf2 \strokec2 (\cf8 \strokec8 p\cf4 \strokec4  =>\cf2 \strokec2  \{\
    document.\cf7 \strokec7 getElementById\cf2 \strokec2 (\cf6 \strokec6 'rail-'\cf4 \strokec4  +\cf2 \strokec2  p)?.classList.\cf7 \strokec7 toggle\cf2 \strokec2 (\cf6 \strokec6 'active'\cf2 \strokec2 , p \cf4 \strokec4 ===\cf2 \strokec2  page)\
  \})\
\
  document.\cf7 \strokec7 getElementById\cf2 \strokec2 (\cf6 \strokec6 'rail-home'\cf2 \strokec2 )?.classList.\cf7 \strokec7 toggle\cf2 \strokec2 (\cf6 \strokec6 'active'\cf2 \strokec2 , isHome)\
  document.\cf7 \strokec7 getElementById\cf2 \strokec2 (\cf6 \strokec6 'top-home'\cf2 \strokec2 )?.classList.\cf7 \strokec7 toggle\cf2 \strokec2 (\cf6 \strokec6 'active'\cf2 \strokec2 , isHome)\
\
  window.\cf7 \strokec7 scrollTo\cf2 \strokec2 (\{ top: \cf5 \strokec5 0\cf2 \strokec2 , behavior: \cf6 \strokec6 'smooth'\cf2 \strokec2  \})\
\}\
\
\cf4 \strokec4 function\cf7 \strokec7  toggleSideNav\cf2 \strokec2 ()\cf4 \strokec4 :\cf5 \strokec5  void\cf2 \strokec2  \{\
\pard\pardeftab720\partightenfactor0
\cf9 \strokec9   // Legacy stub \'97 retained for backward compatibility\cf2 \strokec2 \
\}\
\
\pard\pardeftab720\partightenfactor0
\cf4 \strokec4 function\cf7 \strokec7  activatePrinciple\cf2 \strokec2 (\cf8 \strokec8 card\cf4 \strokec4 :\cf7 \strokec7  HTMLElement\cf2 \strokec2 )\cf4 \strokec4 :\cf5 \strokec5  void\cf2 \strokec2  \{\
\cf4 \strokec4   if\cf2 \strokec2  (card.classList.\cf7 \strokec7 contains\cf2 \strokec2 (\cf6 \strokec6 'active'\cf2 \strokec2 )) \cf4 \strokec4 return\cf2 \strokec2 \
  document.\cf7 \strokec7 querySelectorAll\cf2 \strokec2 <\cf7 \strokec7 HTMLElement\cf2 \strokec2 >(\cf6 \strokec6 '.ps-card'\cf2 \strokec2 ).\cf7 \strokec7 forEach\cf2 \strokec2 (\cf8 \strokec8 c\cf4 \strokec4  =>\cf2 \strokec2  c.classList.\cf7 \strokec7 remove\cf2 \strokec2 (\cf6 \strokec6 'active'\cf2 \strokec2 ))\
  card.classList.\cf7 \strokec7 add\cf2 \strokec2 (\cf6 \strokec6 'active'\cf2 \strokec2 )\
\}\
\
\cf4 \strokec4 function\cf7 \strokec7  goHome\cf2 \strokec2 ()\cf4 \strokec4 :\cf5 \strokec5  void\cf2 \strokec2  \{\
\pard\pardeftab720\partightenfactor0
\cf7 \strokec7   navigate\cf2 \strokec2 (\cf6 \strokec6 'home'\cf2 \strokec2 )\
\}\
\
\pard\pardeftab720\partightenfactor0
\cf4 \strokec4 function\cf7 \strokec7  selectTier\cf2 \strokec2 (\cf8 \strokec8 el\cf4 \strokec4 :\cf7 \strokec7  HTMLElement\cf2 \strokec2 )\cf4 \strokec4 :\cf5 \strokec5  void\cf2 \strokec2  \{\
  document.\cf7 \strokec7 querySelectorAll\cf2 \strokec2 <\cf7 \strokec7 HTMLElement\cf2 \strokec2 >(\cf6 \strokec6 '.tier-option'\cf2 \strokec2 ).\cf7 \strokec7 forEach\cf2 \strokec2 (\cf8 \strokec8 t\cf4 \strokec4  =>\cf2 \strokec2  t.classList.\cf7 \strokec7 remove\cf2 \strokec2 (\cf6 \strokec6 'selected'\cf2 \strokec2 ))\
  el.classList.\cf7 \strokec7 add\cf2 \strokec2 (\cf6 \strokec6 'selected'\cf2 \strokec2 )\
\}\
\
\cf4 \strokec4 function\cf7 \strokec7  submitForm\cf2 \strokec2 ()\cf4 \strokec4 :\cf5 \strokec5  void\cf2 \strokec2  \{\
\cf4 \strokec4   const\cf5 \strokec5  wrap\cf4 \strokec4  =\cf2 \strokec2  document.\cf7 \strokec7 getElementById\cf2 \strokec2 (\cf6 \strokec6 'contact-form-wrap'\cf2 \strokec2 ) \cf4 \strokec4 as\cf7 \strokec7  HTMLElement\cf4 \strokec4  |\cf5 \strokec5  null\cf2 \strokec2 \
\cf4 \strokec4   const\cf5 \strokec5  success\cf4 \strokec4  =\cf2 \strokec2  document.\cf7 \strokec7 getElementById\cf2 \strokec2 (\cf6 \strokec6 'form-success'\cf2 \strokec2 ) \cf4 \strokec4 as\cf7 \strokec7  HTMLElement\cf4 \strokec4  |\cf5 \strokec5  null\cf2 \strokec2 \
\cf4 \strokec4   if\cf2 \strokec2  (wrap) wrap.style.display \cf4 \strokec4 =\cf6 \strokec6  'none'\cf2 \strokec2 \
\cf4 \strokec4   if\cf2 \strokec2  (success) success.classList.\cf7 \strokec7 add\cf2 \strokec2 (\cf6 \strokec6 'show'\cf2 \strokec2 )\
\}\
\
\cf4 \strokec4 function\cf7 \strokec7  staggerReveal\cf2 \strokec2 (\cf8 \strokec8 pageId\cf4 \strokec4 :\cf5 \strokec5  string\cf2 \strokec2 )\cf4 \strokec4 :\cf5 \strokec5  void\cf2 \strokec2  \{\
\cf4 \strokec4   const\cf5 \strokec5  page\cf4 \strokec4  =\cf2 \strokec2  document.\cf7 \strokec7 getElementById\cf2 \strokec2 (pageId)\
\cf4 \strokec4   if\cf2 \strokec2  (\cf4 \strokec4 !\cf2 \strokec2 page) \cf4 \strokec4 return\cf2 \strokec2 \
\cf4 \strokec4   const\cf5 \strokec5  selector\cf4 \strokec4  =\cf2 \strokec2 \
\pard\pardeftab720\partightenfactor0
\cf6 \strokec6     '.portfolio-card, .tier-card, .value-card, .phase-item, .tech-item, .project-info-block'\cf2 \strokec2 \
\pard\pardeftab720\partightenfactor0
\cf4 \strokec4   const\cf5 \strokec5  items\cf4 \strokec4  =\cf2 \strokec2  page.\cf7 \strokec7 querySelectorAll\cf2 \strokec2 <\cf7 \strokec7 HTMLElement\cf2 \strokec2 >(selector)\
  items.\cf7 \strokec7 forEach\cf2 \strokec2 ((\cf8 \strokec8 item\cf2 \strokec2 , \cf8 \strokec8 i\cf2 \strokec2 ) \cf4 \strokec4 =>\cf2 \strokec2  \{\
    item.style.opacity \cf4 \strokec4 =\cf6 \strokec6  '0'\cf2 \strokec2 \
    item.style.transform \cf4 \strokec4 =\cf6 \strokec6  'translateY(20px)'\cf2 \strokec2 \
    item.style.transition \cf4 \strokec4 =\cf6 \strokec6  'opacity 0.5s ease, transform 0.5s ease'\cf2 \strokec2 \
    item.style.transitionDelay \cf4 \strokec4 =\cf6 \strokec6  `$\{\cf2 \strokec2 i\cf4 \strokec4  *\cf5 \strokec5  0.07\cf6 \strokec6 \}s`\cf2 \strokec2 \
\pard\pardeftab720\partightenfactor0
\cf7 \strokec7     setTimeout\cf2 \strokec2 (() \cf4 \strokec4 =>\cf2 \strokec2  \{\
      item.style.opacity \cf4 \strokec4 =\cf6 \strokec6  '1'\cf2 \strokec2 \
      item.style.transform \cf4 \strokec4 =\cf6 \strokec6  'translateY(0)'\cf2 \strokec2 \
    \}, \cf5 \strokec5 50\cf2 \strokec2 )\
  \})\
\}\
\
\pard\pardeftab720\partightenfactor0
\cf4 \strokec4 const\cf5 \strokec5  _nav\cf4 \strokec4  =\cf2 \strokec2  navigate\
\cf4 \strokec4 const\cf7 \strokec7  navigateWithStagger\cf4 \strokec4  =\cf2 \strokec2  (\cf8 \strokec8 page\cf4 \strokec4 :\cf5 \strokec5  string\cf2 \strokec2 )\cf4 \strokec4 :\cf5 \strokec5  void\cf4 \strokec4  =>\cf2 \strokec2  \{\
\pard\pardeftab720\partightenfactor0
\cf7 \strokec7   _nav\cf2 \strokec2 (page)\
\cf7 \strokec7   setTimeout\cf2 \strokec2 (() \cf4 \strokec4 =>\cf7 \strokec7  staggerReveal\cf2 \strokec2 (\cf6 \strokec6 'page-'\cf4 \strokec4  +\cf2 \strokec2  page), \cf5 \strokec5 80\cf2 \strokec2 )\
\}\
\
document.\cf7 \strokec7 addEventListener\cf2 \strokec2 (\cf6 \strokec6 'keydown'\cf2 \strokec2 , (\cf8 \strokec8 e\cf4 \strokec4 :\cf7 \strokec7  KeyboardEvent\cf2 \strokec2 ) \cf4 \strokec4 =>\cf2 \strokec2  \{\
\pard\pardeftab720\partightenfactor0
\cf4 \strokec4   if\cf2 \strokec2  (e.key \cf4 \strokec4 ===\cf6 \strokec6  'Escape'\cf4 \strokec4  &&\cf2 \strokec2  currentPage \cf4 \strokec4 !==\cf6 \strokec6  'home'\cf2 \strokec2 ) \cf7 \strokec7 goHome\cf2 \strokec2 ()\
\})\
\
\cf4 \strokec4 const\cf5 \strokec5  FORM_SCRIPT_URL\cf4 \strokec4  =\cf2 \strokec2 \
\pard\pardeftab720\partightenfactor0
\cf6 \strokec6   'https://script.google.com/macros/s/AKfycbyH5CsJaxr4fUrdUXUgI3hWtbxoRO-JcQ56FP4gk3REnSxnFwi360yNodWTuC7ecJarVg/exec'\cf2 \strokec2 \
\
\pard\pardeftab720\partightenfactor0
\cf4 \strokec4 function\cf7 \strokec7  showSuccessMessage\cf2 \strokec2 (\cf8 \strokec8 container\cf4 \strokec4 :\cf7 \strokec7  HTMLElement\cf2 \strokec2 )\cf4 \strokec4 :\cf5 \strokec5  void\cf2 \strokec2  \{\
\cf4 \strokec4   const\cf5 \strokec5  success\cf4 \strokec4  =\cf2 \strokec2  document.\cf7 \strokec7 createElement\cf2 \strokec2 (\cf6 \strokec6 'div'\cf2 \strokec2 )\
  success.className \cf4 \strokec4 =\cf6 \strokec6  'form-success show'\cf2 \strokec2 \
  success.innerHTML \cf4 \strokec4 =\cf6 \strokec6  `\cf2 \strokec2 \
\pard\pardeftab720\partightenfactor0
\cf6 \strokec6     <div class="form-success-icon">\uc0\u10022 </div>\cf2 \strokec2 \
\cf6 \strokec6     <div class="form-success-title">Transmission Received.</div>\cf2 \strokec2 \
\cf6 \strokec6     <div class="form-success-body">Your inquiry has been logged. We will reach out within one business day.</div>\cf2 \strokec2 \
\cf6 \strokec6   `\cf2 \strokec2 \
  container.\cf7 \strokec7 appendChild\cf2 \strokec2 (success)\
\}\
\
document.\cf7 \strokec7 addEventListener\cf2 \strokec2 (\cf6 \strokec6 'DOMContentLoaded'\cf2 \strokec2 , () \cf4 \strokec4 =>\cf2 \strokec2  \{\
\pard\pardeftab720\partightenfactor0
\cf4 \strokec4   const\cf7 \strokec7  form\cf4 \strokec4  =\cf2 \strokec2  (\
    document.\cf7 \strokec7 getElementById\cf2 \strokec2 (\cf6 \strokec6 'project-form'\cf2 \strokec2 ) \cf4 \strokec4 ??\cf2 \strokec2  document.\cf7 \strokec7 getElementById\cf2 \strokec2 (\cf6 \strokec6 'contact-form'\cf2 \strokec2 )\
  ) \cf4 \strokec4 as\cf7 \strokec7  HTMLFormElement\cf4 \strokec4  |\cf5 \strokec5  null\cf2 \strokec2 \
\cf4 \strokec4   if\cf2 \strokec2  (\cf4 \strokec4 !\cf2 \strokec2 form) \cf4 \strokec4 return\cf2 \strokec2 \
\
  form.\cf7 \strokec7 addEventListener\cf2 \strokec2 (\cf6 \strokec6 'submit'\cf2 \strokec2 , (\cf8 \strokec8 e\cf4 \strokec4 :\cf7 \strokec7  Event\cf2 \strokec2 ) \cf4 \strokec4 =>\cf2 \strokec2  \{\
    e.\cf7 \strokec7 preventDefault\cf2 \strokec2 ()\
\
\cf4 \strokec4     const\cf5 \strokec5  nameField\cf4 \strokec4  =\cf2 \strokec2  form.\cf7 \strokec7 querySelector\cf2 \strokec2 <\cf7 \strokec7 HTMLInputElement\cf2 \strokec2 >(\cf6 \strokec6 '#field-name'\cf2 \strokec2 )\
\cf4 \strokec4     const\cf5 \strokec5  emailField\cf4 \strokec4  =\cf2 \strokec2  form.\cf7 \strokec7 querySelector\cf2 \strokec2 <\cf7 \strokec7 HTMLInputElement\cf2 \strokec2 >(\cf6 \strokec6 '#field-email'\cf2 \strokec2 )\
\cf4 \strokec4     const\cf5 \strokec5  legalCheck\cf4 \strokec4  =\cf2 \strokec2  form.\cf7 \strokec7 querySelector\cf2 \strokec2 <\cf7 \strokec7 HTMLInputElement\cf2 \strokec2 >(\cf6 \strokec6 '#legal-acknowledge'\cf2 \strokec2 )\
\cf4 \strokec4     let\cf2 \strokec2  valid \cf4 \strokec4 =\cf5 \strokec5  true\cf2 \strokec2 \
\
\cf4 \strokec4     for\cf2 \strokec2  (\cf4 \strokec4 const\cf5 \strokec5  field\cf4 \strokec4  of\cf2 \strokec2  [nameField, emailField]) \{\
\cf4 \strokec4       if\cf2 \strokec2  (\cf4 \strokec4 !\cf2 \strokec2 field) \cf4 \strokec4 continue\cf2 \strokec2 \
\cf4 \strokec4       if\cf2 \strokec2  (\cf4 \strokec4 !\cf2 \strokec2 field.value.\cf7 \strokec7 trim\cf2 \strokec2 ()) \{\
        field.style.borderColor \cf4 \strokec4 =\cf6 \strokec6  'rgba(255,80,80,0.6)'\cf2 \strokec2 \
        valid \cf4 \strokec4 =\cf5 \strokec5  false\cf2 \strokec2 \
      \} \cf4 \strokec4 else\cf2 \strokec2  \{\
        field.style.borderColor \cf4 \strokec4 =\cf6 \strokec6  ''\cf2 \strokec2 \
      \}\
    \}\
\
\cf4 \strokec4     if\cf2 \strokec2  (legalCheck \cf4 \strokec4 && !\cf2 \strokec2 legalCheck.checked) \{\
\cf4 \strokec4       if\cf2 \strokec2  (legalCheck.parentElement) legalCheck.parentElement.style.color \cf4 \strokec4 =\cf6 \strokec6  '#ff5050'\cf2 \strokec2 \
      valid \cf4 \strokec4 =\cf5 \strokec5  false\cf2 \strokec2 \
    \} \cf4 \strokec4 else if\cf2 \strokec2  (legalCheck?.parentElement) \{\
      legalCheck.parentElement.style.color \cf4 \strokec4 =\cf6 \strokec6  ''\cf2 \strokec2 \
    \}\
\
\cf4 \strokec4     if\cf2 \strokec2  (\cf4 \strokec4 !\cf2 \strokec2 valid) \{\
\pard\pardeftab720\partightenfactor0
\cf7 \strokec7       alert\cf2 \strokec2 (\cf6 \strokec6 'Please fill in all required fields and acknowledge the legal notice.'\cf2 \strokec2 )\
\pard\pardeftab720\partightenfactor0
\cf4 \strokec4       return\cf2 \strokec2 \
    \}\
\
\cf4 \strokec4     const\cf5 \strokec5  btn\cf4 \strokec4  =\cf2 \strokec2  form.\cf7 \strokec7 querySelector\cf2 \strokec2 <\cf7 \strokec7 HTMLButtonElement\cf2 \strokec2 >(\cf6 \strokec6 'button[type="submit"]'\cf2 \strokec2 )\
\cf4 \strokec4     if\cf2 \strokec2  (\cf4 \strokec4 !\cf2 \strokec2 btn) \cf4 \strokec4 return\cf2 \strokec2 \
\cf4 \strokec4     const\cf5 \strokec5  originalText\cf4 \strokec4  =\cf2 \strokec2  btn.innerText\
    btn.innerText \cf4 \strokec4 =\cf6 \strokec6  'Sending...'\cf2 \strokec2 \
    btn.disabled \cf4 \strokec4 =\cf5 \strokec5  true\cf2 \strokec2 \
\
\pard\pardeftab720\partightenfactor0
\cf7 \strokec7     fetch\cf2 \strokec2 (\cf5 \strokec5 FORM_SCRIPT_URL\cf2 \strokec2 , \{ method: \cf6 \strokec6 'POST'\cf2 \strokec2 , body: \cf4 \strokec4 new\cf7 \strokec7  FormData\cf2 \strokec2 (form) \})\
      .\cf7 \strokec7 then\cf2 \strokec2 (() \cf4 \strokec4 =>\cf2 \strokec2  \{\
        form.style.display \cf4 \strokec4 =\cf6 \strokec6  'none'\cf2 \strokec2 \
\pard\pardeftab720\partightenfactor0
\cf4 \strokec4         if\cf2 \strokec2  (form.parentElement) \cf7 \strokec7 showSuccessMessage\cf2 \strokec2 (form.parentElement)\
      \})\
      .\cf7 \strokec7 catch\cf2 \strokec2 ((\cf8 \strokec8 error\cf4 \strokec4 :\cf7 \strokec7  Error\cf2 \strokec2 ) \cf4 \strokec4 =>\cf2 \strokec2  \{\
        console.\cf7 \strokec7 error\cf2 \strokec2 (\cf6 \strokec6 'Submission error:'\cf2 \strokec2 , error.message)\
        btn.innerText \cf4 \strokec4 =\cf2 \strokec2  originalText\
        btn.disabled \cf4 \strokec4 =\cf5 \strokec5  false\cf2 \strokec2 \
\pard\pardeftab720\partightenfactor0
\cf7 \strokec7         alert\cf2 \strokec2 (\cf6 \strokec6 'Submission failed. Please check your connection and try again.'\cf2 \strokec2 )\
      \})\
  \})\
\
  form.\cf7 \strokec7 querySelectorAll\cf2 \strokec2 <\cf7 \strokec7 HTMLInputElement\cf2 \strokec2 >(\cf6 \strokec6 '.field-input, .field-textarea'\cf2 \strokec2 ).\cf7 \strokec7 forEach\cf2 \strokec2 (\cf8 \strokec8 field\cf4 \strokec4  =>\cf2 \strokec2  \{\
    field.\cf7 \strokec7 addEventListener\cf2 \strokec2 (\cf6 \strokec6 'input'\cf2 \strokec2 , \cf4 \strokec4 function\cf2 \strokec2  (\cf5 \strokec5 this\cf4 \strokec4 :\cf7 \strokec7  HTMLInputElement\cf2 \strokec2 ) \{\
\pard\pardeftab720\partightenfactor0
\cf5 \strokec5       this\cf2 \strokec2 .style.borderColor \cf4 \strokec4 =\cf6 \strokec6  ''\cf2 \strokec2 \
    \})\
  \})\
\})\
\
\pard\pardeftab720\partightenfactor0
\cf9 \strokec9 // Expose to global scope for inline HTML event handlers\cf2 \strokec2 \
window.navigate \cf4 \strokec4 =\cf2 \strokec2  navigateWithStagger\
window.goHome \cf4 \strokec4 =\cf2 \strokec2  goHome\
window.togglePhase \cf4 \strokec4 =\cf2 \strokec2  togglePhase\
window.toggleRail \cf4 \strokec4 =\cf2 \strokec2  toggleRail\
window.collapseRail \cf4 \strokec4 =\cf2 \strokec2  collapseRail\
window.activatePrinciple \cf4 \strokec4 =\cf2 \strokec2  activatePrinciple\
window.selectTier \cf4 \strokec4 =\cf2 \strokec2  selectTier\
window.submitForm \cf4 \strokec4 =\cf2 \strokec2  submitForm\
window.toggleSideNav \cf4 \strokec4 =\cf2 \strokec2  toggleSideNav\
}