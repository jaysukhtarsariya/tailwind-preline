import Image from 'next/image'
import { Inter } from 'next/font/google'
import('preline')

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <main>
 <div class="overflow-hidden">\
   <header class="flex flex-wrap md:justify-start md:flex-nowrap z-50 w-full text-sm py-3 md:py-0">
     <nav class="max-w-[85rem] w-full mx-auto px-4 md:px-6 lg:px-8" aria-label="Global">
       <div class="relative md:flex md:items-center md:justify-between">
         <div class="flex items-center justify-between">
           <a class="flex-none" href="#">
             <svg class="w-28 h-auto" width="116" height="32" viewBox="0 0 116 32" fill="none" xmlns="http://www.w3.org/2000/svg">
               <path d="M33.5696 30.2968V10.7968H37.4474V13.1789H37.6229C37.7952 12.7972 38.0445 12.4094 38.3707 12.0155C38.7031 11.6154 39.134 11.283 39.6634 11.0183C40.1989 10.7475 40.8636 10.6121 41.6577 10.6121C42.6918 10.6121 43.6458 10.8829 44.5199 11.4246C45.3939 11.9601 46.0926 12.7695 46.6158 13.8529C47.139 14.93 47.4006 16.2811 47.4006 17.9061C47.4006 19.488 47.1451 20.8237 46.6342 21.9132C46.1295 22.9966 45.4401 23.8183 44.5661 24.3784C43.6982 24.9324 42.7256 25.2094 41.6484 25.2094C40.8852 25.2094 40.2358 25.0832 39.7003 24.8308C39.1709 24.5785 38.737 24.2615 38.3984 23.8799C38.0599 23.4921 37.8014 23.1012 37.6229 22.7073H37.5028V30.2968H33.5696ZM37.4197 17.8877C37.4197 18.7309 37.5367 19.4665 37.7706 20.0943C38.0045 20.7222 38.343 21.2115 38.7862 21.5624C39.2294 21.9071 39.768 22.0794 40.402 22.0794C41.0421 22.0794 41.5838 21.904 42.027 21.5532C42.4702 21.1961 42.8056 20.7037 43.0334 20.0759C43.2673 19.4419 43.3842 18.7125 43.3842 17.8877C43.3842 17.069 43.2704 16.3488 43.0426 15.7272C42.8149 15.1055 42.4794 14.6192 42.0362 14.2683C41.593 13.9175 41.0483 13.7421 40.402 13.7421C39.7618 13.7421 39.2202 13.9113 38.777 14.2499C38.34 14.5884 38.0045 15.0685 37.7706 15.6902C37.5367 16.3119 37.4197 17.0444 37.4197 17.8877ZM49.2427 24.9786V10.7968H53.0559V13.2712H53.2037C53.4622 12.391 53.8961 11.7262 54.5055 11.2769C55.1149 10.8214 55.8166 10.5936 56.6106 10.5936C56.8076 10.5936 57.02 10.6059 57.2477 10.6306C57.4754 10.6552 57.6755 10.689 57.8478 10.7321V14.2222C57.6632 14.1668 57.4077 14.1175 57.0815 14.0745C56.7553 14.0314 56.4567 14.0098 56.1859 14.0098C55.6073 14.0098 55.0903 14.136 54.6348 14.3884C54.1854 14.6346 53.8284 14.9793 53.5638 15.4225C53.3052 15.8657 53.176 16.3765 53.176 16.9551V24.9786H49.2427ZM64.9043 25.2556C63.4455 25.2556 62.1898 24.9601 61.1373 24.3692C60.0909 23.7721 59.2845 22.9289 58.7182 21.8394C58.1519 20.7437 57.8688 19.448 57.8688 17.9523C57.8688 16.4935 58.1519 15.2132 58.7182 14.1114C59.2845 13.0096 60.0816 12.1509 61.1096 11.5354C62.1437 10.9199 63.3563 10.6121 64.7474 10.6121C65.683 10.6121 66.5539 10.7629 67.3603 11.0645C68.1728 11.36 68.8806 11.8062 69.4839 12.4033C70.0932 13.0004 70.5672 13.7513 70.9057 14.6561C71.2443 15.5548 71.4135 16.6074 71.4135 17.8138V18.8941H59.4384V16.4566H67.7111C67.7111 15.8903 67.588 15.3886 67.3418 14.9516C67.0956 14.5146 66.754 14.1729 66.317 13.9267C65.8861 13.6744 65.3844 13.5482 64.812 13.5482C64.2149 13.5482 63.6856 13.6867 63.2239 13.9637C62.7684 14.2345 62.4114 14.6007 62.1529 15.0624C61.8944 15.5179 61.762 16.0257 61.7559 16.5858V18.9033C61.7559 19.605 61.8851 20.2113 62.1437 20.7222C62.4083 21.2331 62.7807 21.627 63.2608 21.904C63.741 22.181 64.3103 22.3195 64.9689 22.3195C65.406 22.3195 65.8061 22.2579 66.1692 22.1348C66.5324 22.0117 66.8432 21.8271 67.1018 21.5808C67.3603 21.3346 67.5572 21.033 67.6927 20.676L71.3304 20.9161C71.1458 21.7901 70.7672 22.5534 70.1948 23.2058C69.6285 23.8522 68.896 24.3569 67.9974 24.7201C67.1048 25.0771 66.0738 25.2556 64.9043 25.2556ZM77.1335 6.06949V24.9786H73.2003V6.06949H77.1335ZM79.5043 24.9786V10.7968H83.4375V24.9786H79.5043ZM81.4801 8.96863C80.8954 8.96863 80.3937 8.77474 79.9752 8.38696C79.5628 7.99302 79.3566 7.52214 79.3566 6.97431C79.3566 6.43265 79.5628 5.96792 79.9752 5.58014C80.3937 5.1862 80.8954 4.98923 81.4801 4.98923C82.0649 4.98923 82.5635 5.1862 82.9759 5.58014C83.3944 5.96792 83.6037 6.43265 83.6037 6.97431C83.6037 7.52214 83.3944 7.99302 82.9759 8.38696C82.5635 8.77474 82.0649 8.96863 81.4801 8.96863ZM89.7415 16.7797V24.9786H85.8083V10.7968H89.5569V13.2989H89.723C90.037 12.4741 90.5632 11.8216 91.3019 11.3415C92.0405 10.8552 92.9361 10.6121 93.9887 10.6121C94.9735 10.6121 95.8322 10.8275 96.5647 11.2584C97.2971 11.6893 97.8665 12.3048 98.2728 13.105C98.679 13.899 98.8821 14.8469 98.8821 15.9487V24.9786H94.9489V16.6505C94.9551 15.7826 94.7335 15.1055 94.2841 14.6192C93.8348 14.1268 93.2162 13.8806 92.4283 13.8806C91.8989 13.8806 91.4311 13.9944 91.0249 14.2222C90.6248 14.4499 90.3109 14.7823 90.0831 15.2193C89.8615 15.6502 89.7477 16.1703 89.7415 16.7797ZM107.665 25.2556C106.206 25.2556 104.951 24.9601 103.898 24.3692C102.852 23.7721 102.045 22.9289 101.479 21.8394C100.913 20.7437 100.63 19.448 100.63 17.9523C100.63 16.4935 100.913 15.2132 101.479 14.1114C102.045 13.0096 102.842 12.1509 103.87 11.5354C104.905 10.9199 106.117 10.6121 107.508 10.6121C108.444 10.6121 109.315 10.7629 110.121 11.0645C110.934 11.36 111.641 11.8062 112.245 12.4033C112.854 13.0004 113.328 13.7513 113.667 14.6561C114.005 15.5548 114.174 16.6074 114.174 17.8138V18.8941H102.199V16.4566H110.472C110.472 15.8903 110.349 15.3886 110.103 14.9516C109.856 14.5146 109.515 14.1729 109.078 13.9267C108.647 13.6744 108.145 13.5482 107.573 13.5482C106.976 13.5482 106.446 13.6867 105.985 13.9637C105.529 14.2345 105.172 14.6007 104.914 15.0624C104.655 15.5179 104.523 16.0257 104.517 16.5858V18.9033C104.517 19.605 104.646 20.2113 104.905 20.7222C105.169 21.2331 105.542 21.627 106.022 21.904C106.502 22.181 107.071 22.3195 107.73 22.3195C108.167 22.3195 108.567 22.2579 108.93 22.1348C109.293 22.0117 109.604 21.8271 109.863 21.5808C110.121 21.3346 110.318 21.033 110.454 20.676L114.091 20.9161C113.907 21.7901 113.528 22.5534 112.956 23.2058C112.389 23.8522 111.657 24.3569 110.758 24.7201C109.866 25.0771 108.835 25.2556 107.665 25.2556Z" fill="currentColor" class="fill-violet-600 dark:fill-white"/>
               <path d="M1 28.9786V15.9786C1 9.35116 6.37258 3.97858 13 3.97858C19.6274 3.97858 25 9.35116 25 15.9786C25 22.606 19.6274 27.9786 13 27.9786H12" class="stroke-violet-600 dark:stroke-white" stroke="currentColor" stroke-width="2"/>
               <path d="M5 28.9786V16.1386C5 11.6319 8.58172 7.97858 13 7.97858C17.4183 7.97858 21 11.6319 21 16.1386C21 20.6452 17.4183 24.2986 13 24.2986H12" class="stroke-violet-600 dark:stroke-white" stroke="currentColor" stroke-width="2"/>
               <circle cx="13" cy="16" r="5" fill="currentColor" class="fill-violet-600 dark:fill-white"/>
             </svg>
           </a>
 
           <div class="md:hidden">
             <button type="button" class="hs-collapse-toggle p-2 inline-flex justify-center items-center gap-2 rounded-md border font-medium bg-white text-gray-700 shadow-sm align-middle hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-white focus:ring-violet-900 transition-all text-sm dark:bg-slate-900 dark:hover:bg-slate-800 dark:border-gray-700 dark:text-gray-400 dark:hover:text-white dark:focus:ring-offset-gray-800" data-hs-collapse="#navbar-collapse-with-animation" aria-controls="navbar-collapse-with-animation" aria-label="Toggle navigation">
               <svg class="hs-collapse-open:hidden w-4 h-4" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
                 <path fill-rule="evenodd" d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5z"/>
               </svg>
               <svg class="hs-collapse-open:block hidden w-4 h-4" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
                 <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z"/>
               </svg>
             </button>
           </div>
         </div>
 
         <div id="navbar-collapse-with-animation" class="hs-collapse hidden overflow-hidden transition-all duration-300 basis-full grow md:block">
           <div class="overflow-hidden overflow-y-auto max-h-[75vh] scrollbar-y">
             <div class="flex flex-col gap-x-0 mt-5 divide-y divide-dashed divide-gray-200 md:flex-row md:items-center md:justify-end md:gap-x-7 md:mt-0 md:pl-7 md:divide-y-0 md:divide-solid dark:divide-gray-700">
               <a class="font-medium text-gray-600 hover:text-gray-500 py-3 md:py-6 dark:text-gray-400 dark:hover:text-gray-500" href="#" aria-current="page">
                 Landing
               </a>
 
               <a class="font-medium text-gray-600 hover:text-gray-500 py-3 md:py-6 dark:text-gray-400 dark:hover:text-gray-500" href="#">
                 Company
               </a>
 
               <div class="hs-dropdown [--strategy:static] md:[--strategy:absolute] [--adaptive:none] md:[--trigger:hover] py-3 md:py-4">
                 <button type="button" class="flex items-center w-full text-gray-600 hover:text-gray-400 font-medium dark:text-gray-400 dark:hover:text-gray-500">
                   Resources
                   <svg class="ml-2 w-2.5 h-2.5 text-gray-600" width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                     <path d="M2 5L8.16086 10.6869C8.35239 10.8637 8.64761 10.8637 8.83914 10.6869L15 5" stroke="currentColor" stroke-width="2" stroke-linecap="round"></path>
                   </svg>
                 </button>
 
                 <div class="hs-dropdown-menu transition-[opacity,margin] duration-[0.1ms] md:duration-[150ms] hs-dropdown-open:opacity-100 opacity-0 w-full hidden z-10 top-full left-0 min-w-[15rem] bg-white md:shadow-2xl rounded-lg py-2 md:p-4 dark:bg-gray-800 dark:divide-gray-700 before:absolute before:-top-5 before:left-0 before:w-full before:h-5">
                   <div class="md:grid md:grid-cols-2 lg:grid-cols-3 gap-4">
                     <div class="flex flex-col mx-1 md:mx-0">
                       <a class="group flex gap-x-5 text-gray-800 hover:bg-gray-100 rounded-md p-4 dark:text-gray-200 dark:hover:bg-gray-900" href="#">
                         <svg class="flex-shrink-0 w-6 h-6 mt-1" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
                           <path d="M1 2.828c.885-.37 2.154-.769 3.388-.893 1.33-.134 2.458.063 3.112.752v9.746c-.935-.53-2.12-.603-3.213-.493-1.18.12-2.37.461-3.287.811V2.828zm7.5-.141c.654-.689 1.782-.886 3.112-.752 1.234.124 2.503.523 3.388.893v9.923c-.918-.35-2.107-.692-3.287-.81-1.094-.111-2.278-.039-3.213.492V2.687zM8 1.783C7.015.936 5.587.81 4.287.94c-1.514.153-3.042.672-3.994 1.105A.5.5 0 0 0 0 2.5v11a.5.5 0 0 0 .707.455c.882-.4 2.303-.881 3.68-1.02 1.409-.142 2.59.087 3.223.877a.5.5 0 0 0 .78 0c.633-.79 1.814-1.019 3.222-.877 1.378.139 2.8.62 3.681 1.02A.5.5 0 0 0 16 13.5v-11a.5.5 0 0 0-.293-.455c-.952-.433-2.48-.952-3.994-1.105C10.413.809 8.985.936 8 1.783z"/>
                         </svg>
                         <div class="grow">
                           <p class="font-medium text-gray-800 dark:text-gray-200">Support Docs</p>
                           <p class="text-sm text-gray-500 group-hover:text-gray-800 dark:group-hover:text-gray-200">Explore advice and explanations for all of Preline's features.</p>
                         </div>
                       </a>
 
                       <a class="group flex gap-x-5 text-gray-800 hover:bg-gray-100 rounded-md p-4 dark:text-gray-200 dark:hover:bg-gray-900" href="#">
                         <svg class="flex-shrink-0 w-6 h-6 mt-1" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
                           <path d="M11.251.068a.5.5 0 0 1 .227.58L9.677 6.5H13a.5.5 0 0 1 .364.843l-8 8.5a.5.5 0 0 1-.842-.49L6.323 9.5H3a.5.5 0 0 1-.364-.843l8-8.5a.5.5 0 0 1 .615-.09zM4.157 8.5H7a.5.5 0 0 1 .478.647L6.11 13.59l5.732-6.09H9a.5.5 0 0 1-.478-.647L9.89 2.41 4.157 8.5z"/>
                         </svg>
                         <div class="grow">
                           <p class="font-medium text-gray-800 dark:text-gray-200">Integrations</p>
                           <p class="text-sm text-gray-500 group-hover:text-gray-800 dark:group-hover:text-gray-200">Discover the huge range of tools that Preline integrates with.</p>
                         </div>
                       </a>
 
                       <a class="group flex gap-x-5 text-gray-800 hover:bg-gray-100 rounded-md p-4 dark:text-gray-200 dark:hover:bg-gray-900" href="#">
                         <svg class="flex-shrink-0 w-6 h-6 mt-1" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
                           <path d="M6 9a.5.5 0 0 1 .5-.5h3a.5.5 0 0 1 0 1h-3A.5.5 0 0 1 6 9zM3.854 4.146a.5.5 0 1 0-.708.708L4.793 6.5 3.146 8.146a.5.5 0 1 0 .708.708l2-2a.5.5 0 0 0 0-.708l-2-2z"/>
                           <path d="M2 1a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V3a2 2 0 0 0-2-2H2zm12 1a1 1 0 0 1 1 1v10a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1V3a1 1 0 0 1 1-1h12z"/>
                         </svg>
                         <div class="grow">
                           <p class="font-medium text-gray-800 dark:text-gray-200">API Reference</p>
                           <p class="text-sm text-gray-500 group-hover:text-gray-800 dark:group-hover:text-gray-200">Build custom integrations with our first-class API.</p>
                         </div>
                       </a>
                     </div>
 
                     <div class="flex flex-col mx-1 md:mx-0">
                       <a class="group flex gap-x-5 text-gray-800 hover:bg-gray-100 rounded-md p-4 dark:text-gray-200 dark:hover:bg-gray-900" href="#">
                         <svg class="flex-shrink-0 w-6 h-6 mt-1" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
                           <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"/>
                           <path d="M5.255 5.786a.237.237 0 0 0 .241.247h.825c.138 0 .248-.113.266-.25.09-.656.54-1.134 1.342-1.134.686 0 1.314.343 1.314 1.168 0 .635-.374.927-.965 1.371-.673.489-1.206 1.06-1.168 1.987l.003.217a.25.25 0 0 0 .25.246h.811a.25.25 0 0 0 .25-.25v-.105c0-.718.273-.927 1.01-1.486.609-.463 1.244-.977 1.244-2.056 0-1.511-1.276-2.241-2.673-2.241-1.267 0-2.655.59-2.75 2.286zm1.557 5.763c0 .533.425.927 1.01.927.609 0 1.028-.394 1.028-.927 0-.552-.42-.94-1.029-.94-.584 0-1.009.388-1.009.94z"/>
                         </svg>
                         <div class="grow">
                           <p class="font-medium text-gray-800 dark:text-gray-200">Help Center</p>
                           <p class="text-sm text-gray-500 group-hover:text-gray-800 dark:group-hover:text-gray-200">Learn how to install, set up, and use Preline.</p>
                         </div>
                       </a>
 
                       <a class="group flex gap-x-5 text-gray-800 hover:bg-gray-100 rounded-md p-4 dark:text-gray-200 dark:hover:bg-gray-900" href="#">
                         <svg class="flex-shrink-0 w-6 h-6 mt-1" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
                           <path d="M13.106 7.222c0-2.967-2.249-5.032-5.482-5.032-3.35 0-5.646 2.318-5.646 5.702 0 3.493 2.235 5.708 5.762 5.708.862 0 1.689-.123 2.304-.335v-.862c-.43.199-1.354.328-2.29.328-2.926 0-4.813-1.88-4.813-4.798 0-2.844 1.921-4.881 4.594-4.881 2.735 0 4.608 1.688 4.608 4.156 0 1.682-.554 2.769-1.416 2.769-.492 0-.772-.28-.772-.76V5.206H8.923v.834h-.11c-.266-.595-.881-.964-1.6-.964-1.4 0-2.378 1.162-2.378 2.823 0 1.737.957 2.906 2.379 2.906.8 0 1.415-.39 1.709-1.087h.11c.081.67.703 1.148 1.503 1.148 1.572 0 2.57-1.415 2.57-3.643zm-7.177.704c0-1.197.54-1.907 1.456-1.907.93 0 1.524.738 1.524 1.907S8.308 9.84 7.371 9.84c-.895 0-1.442-.725-1.442-1.914z"/>
                         </svg>
                         <div class="grow">
                           <p class="font-medium text-gray-800 dark:text-gray-200">Developer Hub</p>
                           <p class="text-sm text-gray-500 group-hover:text-gray-800 dark:group-hover:text-gray-200">Learn how to integrate or build on top of Preline.</p>
                         </div>
                       </a>
 
                       <a class="group flex gap-x-5 text-gray-800 hover:bg-gray-100 rounded-md p-4 dark:text-gray-200 dark:hover:bg-gray-900" href="#">
                         <svg class="flex-shrink-0 w-6 h-6 mt-1" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
                           <path d="M15 14s1 0 1-1-1-4-5-4-5 3-5 4 1 1 1 1h8zm-7.978-1A.261.261 0 0 1 7 12.996c.001-.264.167-1.03.76-1.72C8.312 10.629 9.282 10 11 10c1.717 0 2.687.63 3.24 1.276.593.69.758 1.457.76 1.72l-.008.002a.274.274 0 0 1-.014.002H7.022zM11 7a2 2 0 1 0 0-4 2 2 0 0 0 0 4zm3-2a3 3 0 1 1-6 0 3 3 0 0 1 6 0zM6.936 9.28a5.88 5.88 0 0 0-1.23-.247A7.35 7.35 0 0 0 5 9c-4 0-5 3-5 4 0 .667.333 1 1 1h4.216A2.238 2.238 0 0 1 5 13c0-1.01.377-2.042 1.09-2.904.243-.294.526-.569.846-.816zM4.92 10A5.493 5.493 0 0 0 4 13H1c0-.26.164-1.03.76-1.724.545-.636 1.492-1.256 3.16-1.275zM1.5 5.5a3 3 0 1 1 6 0 3 3 0 0 1-6 0zm3-2a2 2 0 1 0 0 4 2 2 0 0 0 0-4z"/>
                         </svg>
                         <div class="grow">
                           <p class="font-medium text-gray-800 dark:text-gray-200">Community Forum</p>
                           <p class="text-sm text-gray-500 group-hover:text-gray-800 dark:group-hover:text-gray-200">Learn, share, and connect with other Preline users.</p>
                         </div>
                       </a>
                     </div>
 
                     <div class="flex flex-col pt-4 md:pt-0 mx-1 md:mx-0">
                       <span class="text-sm font-semibold uppercase text-gray-800 dark:text-gray-200">Customer stories</span>
 
                       <a class="mt-4 group flex gap-x-5 items-center" href="#">
                         <img class="w-32 h-32 rounded-lg" src="https://images.unsplash.com/photo-1648737967328-690548aec14f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=320&h=320&q=80" alt="Image Description"/>
                         <div class="grow">
                           <p class="text-gray-800 dark:text-gray-200">Preline Projects has proved to be most efficient cloud based project tracking and bug tracking tool.</p>
                           <p class="mt-3 inline-flex items-center gap-x-2 text-sm font-semibold text-gray-800 dark:text-gray-200">
                             Learn more
                             <svg class="w-2.5 h-2.5 transition ease-in-out group-hover:translate-x-1" width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                               <path fill-rule="evenodd" clip-rule="evenodd" d="M0.975821 6.92249C0.43689 6.92249 -3.50468e-07 7.34222 -3.27835e-07 7.85999C-3.05203e-07 8.37775 0.43689 8.79749 0.975821 8.79749L12.7694 8.79748L7.60447 13.7596C7.22339 14.1257 7.22339 14.7193 7.60447 15.0854C7.98555 15.4515 8.60341 15.4515 8.98449 15.0854L15.6427 8.68862C16.1191 8.23098 16.1191 7.48899 15.6427 7.03134L8.98449 0.634573C8.60341 0.268455 7.98555 0.268456 7.60447 0.634573C7.22339 1.00069 7.22339 1.59428 7.60447 1.9604L12.7694 6.92248L0.975821 6.92249Z" fill="currentColor"/>
                             </svg>
                           </p>
                         </div>
                       </a>
                     </div>
                   </div>
                 </div>
               </div>
 
               <a class="font-medium text-gray-600 hover:text-gray-500 py-3 md:py-6 dark:text-gray-400 dark:hover:text-gray-500" href="#">
                 Login
               </a>
 
               <div class="pt-3 md:pt-0">
                 <a class="inline-flex justify-center items-center gap-x-2 text-center bg-violet-900 hover:bg-violet-700 border border-transparent text-white text-sm rounded-lg focus:outline-none focus:ring-2 focus:ring-violet-900 focus:ring-offset-2 focus:ring-offset-white transition py-2.5 px-3 dark:focus:ring-offset-gray-800" href="#">
                   Request demo
                 </a>
               </div>
             </div>
           </div>
         </div>
       </div>
     </nav>
   </header>
    
 
    
   <div class="relative">
      
     <div aria-hidden="true" class="flex absolute -top-48 left-0 -z-[1]">
       <div class="bg-purple-200 opacity-30 blur-3xl w-[1036px] h-[600px] dark:bg-purple-900 dark:opacity-20"></div>
       <div class="bg-slate-200 opacity-90 blur-3xl w-[577px] h-[300px] transform translate-y-32 dark:bg-slate-800/60"></div>
     </div>
     
 
     <div class="max-w-[85rem] px-4 pt-10 sm:px-6 lg:px-8 lg:pt-14 mx-auto">
       <div class="max-w-2xl mx-auto text-center mb-10">
         <h2 class="text-3xl leading-tight font-bold md:text-4xl md:leading-tight lg:text-5xl lg:leading-tight bg-clip-text bg-gradient-to-r from-violet-600 to-fuchsia-700 text-transparent">Simple, transparent pricing</h2>
         <p class="mt-2 lg:text-lg text-gray-800 dark:text-gray-200">Whatever your status, our offers evolve according to your needs.</p>
       </div>
       <div class="flex justify-center items-center">
         <label for="pricing-switch" class="min-w-[3.5rem] text-sm text-gray-600 mr-3 dark:text-gray-400">
           Monthly
         </label>
 
         <input type="checkbox" id="pricing-switch" class="relative shrink-0 w-[3.25rem] h-7 bg-gray-300 text-violet-900 checked:bg-none checked:bg-violet-900 border-2 border-transparent rounded-full cursor-pointer transition-colors ease-in-out duration-200 border border-transparent ring-1 ring-transparent focus:border-violet-900 focus:ring-violet-900 ring-offset-white focus:outline-none appearance-none dark:bg-gray-700 dark:checked:bg-violet-900 dark:focus:ring-offset-gray-800
 
         before:inline-block before:w-6 before:h-6 before:bg-white before:translate-x-0 checked:before:translate-x-full before:shadow before:rounded-full before:transform before:ring-0 before:transition before:ease-in-out before:duration-200 dark:before:bg-gray-400" checked />
 
         <label for="pricing-switch" class="min-w-[3.5rem] text-sm text-gray-600 ml-3 dark:text-gray-400">
           Annually
         </label>
       </div>
        
 
        
       <div class="mt-6 md:mt-12 grid sm:grid-cols-2 lg:grid-cols-4 gap-3 md:gap-6 lg:gap-3 xl:gap-6 lg:items-center">
         
         <div class="flex flex-col bg-white border border-gray-200 text-center rounded-2xl p-4 md:p-8 dark:bg-slate-900 dark:border-gray-700">
           <h4 class="font-medium text-lg text-gray-800 dark:text-gray-200">Free</h4>
           <span class="mt-7 font-bold text-3xl md:text-4xl xl:text-5xl text-gray-800 dark:text-gray-200">Free</span>
           <p class="mt-2 text-sm text-gray-500">Get started with basic features</p>
 
           <ul class="mt-7 space-y-2.5 text-sm">
             <li class="flex space-x-2">
               <svg class="flex-shrink-0 h-5 w-5 text-violet-900" width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                 <path d="M11.5219 4.0949C11.7604 3.81436 12.181 3.78025 12.4617 4.01871C12.7422 4.25717 12.7763 4.6779 12.5378 4.95844L6.87116 11.6251C6.62896 11.91 6.1998 11.94 5.9203 11.6916L2.9203 9.02494C2.64511 8.78033 2.62032 8.35894 2.86493 8.08375C3.10955 7.80856 3.53092 7.78378 3.80611 8.02839L6.29667 10.2423L11.5219 4.0949Z" fill="currentColor"/>
               </svg>
               <span class="text-gray-800 dark:text-gray-400">
                 1 user
               </span>
             </li>
 
             <li class="flex space-x-2">
               <svg class="flex-shrink-0 h-5 w-5 text-violet-900" width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                 <path d="M11.5219 4.0949C11.7604 3.81436 12.181 3.78025 12.4617 4.01871C12.7422 4.25717 12.7763 4.6779 12.5378 4.95844L6.87116 11.6251C6.62896 11.91 6.1998 11.94 5.9203 11.6916L2.9203 9.02494C2.64511 8.78033 2.62032 8.35894 2.86493 8.08375C3.10955 7.80856 3.53092 7.78378 3.80611 8.02839L6.29667 10.2423L11.5219 4.0949Z" fill="currentColor"/>
               </svg>
               <span class="text-gray-800 dark:text-gray-400">
                 Plan features
               </span>
             </li>
 
             <li class="flex space-x-2">
               <svg class="flex-shrink-0 h-5 w-5 text-violet-900" width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                 <path d="M11.5219 4.0949C11.7604 3.81436 12.181 3.78025 12.4617 4.01871C12.7422 4.25717 12.7763 4.6779 12.5378 4.95844L6.87116 11.6251C6.62896 11.91 6.1998 11.94 5.9203 11.6916L2.9203 9.02494C2.64511 8.78033 2.62032 8.35894 2.86493 8.08375C3.10955 7.80856 3.53092 7.78378 3.80611 8.02839L6.29667 10.2423L11.5219 4.0949Z" fill="currentColor"/>
               </svg>
               <span class="text-gray-800 dark:text-gray-400">
                 Product support
               </span>
             </li>
           </ul>
 
           <a class="mt-5 inline-flex justify-center items-center gap-2 rounded-lg border-2 border-violet-900 font-semibold text-violet-900 hover:shadow-md focus:outline-none focus:ring-2 focus:ring-violet-500 focus:ring-offset-2 transition-all text-sm py-3 px-4 dark:text-violet-500 dark:border-violet-900 dark:hover:border-violet-700" href="#">
             Get started
           </a>
         </div>
          
 
         
         <div class="flex flex-col bg-white border-2 border-violet-900 text-center shadow-xl rounded-2xl p-4 md:p-8 dark:bg-slate-900 dark:border-violet-700">
           <p class="mb-3"><span class="inline-flex items-center gap-1.5 py-1.5 px-3 rounded-md text-xs uppercase font-semibold bg-violet-100 text-violet-800 dark:bg-violet-900 dark:text-white">Most popular</span></p>
           <h4 class="font-medium text-lg text-gray-800 dark:text-gray-200">Startup</h4>
           <span class="mt-5 font-bold text-3xl md:text-4xl xl:text-5xl text-gray-800 dark:text-gray-200">
             $39
           </span>
           <p class="mt-2 text-sm text-gray-500">All the basics for starting a new business</p>
 
           <ul class="mt-7 space-y-2.5 text-sm">
             <li class="flex space-x-2">
               <svg class="flex-shrink-0 h-5 w-5 text-violet-900" width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                 <path d="M11.5219 4.0949C11.7604 3.81436 12.181 3.78025 12.4617 4.01871C12.7422 4.25717 12.7763 4.6779 12.5378 4.95844L6.87116 11.6251C6.62896 11.91 6.1998 11.94 5.9203 11.6916L2.9203 9.02494C2.64511 8.78033 2.62032 8.35894 2.86493 8.08375C3.10955 7.80856 3.53092 7.78378 3.80611 8.02839L6.29667 10.2423L11.5219 4.0949Z" fill="currentColor"/>
               </svg>
               <span class="text-gray-800 dark:text-gray-400">
                 2 users
               </span>
             </li>
 
             <li class="flex space-x-2">
               <svg class="flex-shrink-0 h-5 w-5 text-violet-900" width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                 <path d="M11.5219 4.0949C11.7604 3.81436 12.181 3.78025 12.4617 4.01871C12.7422 4.25717 12.7763 4.6779 12.5378 4.95844L6.87116 11.6251C6.62896 11.91 6.1998 11.94 5.9203 11.6916L2.9203 9.02494C2.64511 8.78033 2.62032 8.35894 2.86493 8.08375C3.10955 7.80856 3.53092 7.78378 3.80611 8.02839L6.29667 10.2423L11.5219 4.0949Z" fill="currentColor"/>
               </svg>
               <span class="text-gray-800 dark:text-gray-400">
                 Plan features
               </span>
             </li>
 
             <li class="flex space-x-2">
               <svg class="flex-shrink-0 h-5 w-5 text-violet-900" width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                 <path d="M11.5219 4.0949C11.7604 3.81436 12.181 3.78025 12.4617 4.01871C12.7422 4.25717 12.7763 4.6779 12.5378 4.95844L6.87116 11.6251C6.62896 11.91 6.1998 11.94 5.9203 11.6916L2.9203 9.02494C2.64511 8.78033 2.62032 8.35894 2.86493 8.08375C3.10955 7.80856 3.53092 7.78378 3.80611 8.02839L6.29667 10.2423L11.5219 4.0949Z" fill="currentColor"/>
               </svg>
               <span class="text-gray-800 dark:text-gray-400">
                 Product support
               </span>
             </li>
           </ul>
 
           <a class="mt-5 inline-flex justify-center items-center gap-x-3 text-center bg-violet-900 hover:bg-violet-700 text-white text-sm font-medium rounded-lg hover:shadow-md focus:outline-none focus:ring-2 focus:ring-violet-900 focus:ring-offset-2 focus:ring-offset-white transition py-3 px-4 dark:focus:ring-offset-gray-800" href="https://github.com/htmlstreamofficial/preline/tree/main/examples/html">
             Get started
           </a>
         </div>
          
 
         
         <div class="flex flex-col bg-white border border-gray-200 text-center rounded-2xl p-4 md:p-8 dark:bg-slate-900 dark:border-gray-700">
           <h4 class="font-medium text-lg text-gray-800 dark:text-gray-200">Team</h4>
           <span class="mt-5 font-bold text-3xl md:text-4xl xl:text-5xl text-gray-800 dark:text-gray-200">
             $89
           </span>
           <p class="mt-2 text-sm text-gray-500">Everything you need for a growing business</p>
 
           <ul class="mt-7 space-y-2.5 text-sm">
             <li class="flex space-x-2">
               <svg class="flex-shrink-0 h-5 w-5 text-violet-900" width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                 <path d="M11.5219 4.0949C11.7604 3.81436 12.181 3.78025 12.4617 4.01871C12.7422 4.25717 12.7763 4.6779 12.5378 4.95844L6.87116 11.6251C6.62896 11.91 6.1998 11.94 5.9203 11.6916L2.9203 9.02494C2.64511 8.78033 2.62032 8.35894 2.86493 8.08375C3.10955 7.80856 3.53092 7.78378 3.80611 8.02839L6.29667 10.2423L11.5219 4.0949Z" fill="currentColor"/>
               </svg>
               <span class="text-gray-800 dark:text-gray-400">
                 5 users
               </span>
             </li>
 
             <li class="flex space-x-2">
               <svg class="flex-shrink-0 h-5 w-5 text-violet-900" width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                 <path d="M11.5219 4.0949C11.7604 3.81436 12.181 3.78025 12.4617 4.01871C12.7422 4.25717 12.7763 4.6779 12.5378 4.95844L6.87116 11.6251C6.62896 11.91 6.1998 11.94 5.9203 11.6916L2.9203 9.02494C2.64511 8.78033 2.62032 8.35894 2.86493 8.08375C3.10955 7.80856 3.53092 7.78378 3.80611 8.02839L6.29667 10.2423L11.5219 4.0949Z" fill="currentColor"/>
               </svg>
               <span class="text-gray-800 dark:text-gray-400">
                 Plan features
               </span>
             </li>
 
             <li class="flex space-x-2">
               <svg class="flex-shrink-0 h-5 w-5 text-violet-900" width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                 <path d="M11.5219 4.0949C11.7604 3.81436 12.181 3.78025 12.4617 4.01871C12.7422 4.25717 12.7763 4.6779 12.5378 4.95844L6.87116 11.6251C6.62896 11.91 6.1998 11.94 5.9203 11.6916L2.9203 9.02494C2.64511 8.78033 2.62032 8.35894 2.86493 8.08375C3.10955 7.80856 3.53092 7.78378 3.80611 8.02839L6.29667 10.2423L11.5219 4.0949Z" fill="currentColor"/>
               </svg>
               <span class="text-gray-800 dark:text-gray-400">
                 Product support
               </span>
             </li>
           </ul>
 
           <a class="mt-5 inline-flex justify-center items-center gap-2 rounded-lg border-2 border-violet-900 font-semibold text-violet-900 hover:shadow-md focus:outline-none focus:ring-2 focus:ring-violet-500 focus:ring-offset-2 transition-all text-sm py-3 px-4 dark:text-violet-500 dark:border-violet-900 dark:hover:border-violet-700" href="#">
             Get started
           </a>
         </div>
          
 
         
         <div class="flex flex-col bg-white border border-gray-200 text-center rounded-2xl p-4 md:p-8 dark:bg-slate-900 dark:border-gray-700">
           <h4 class="font-medium text-lg text-gray-800 dark:text-gray-200">Enterprise</h4>
           <span class="mt-5 font-bold text-3xl md:text-4xl xl:text-5xl text-gray-800 dark:text-gray-200">
             $149
           </span>
           <p class="mt-2 text-sm text-gray-500">Advanced features for scaling your business</p>
 
           <ul class="mt-7 space-y-2.5 text-sm">
             <li class="flex space-x-2">
               <svg class="flex-shrink-0 h-5 w-5 text-violet-900" width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                 <path d="M11.5219 4.0949C11.7604 3.81436 12.181 3.78025 12.4617 4.01871C12.7422 4.25717 12.7763 4.6779 12.5378 4.95844L6.87116 11.6251C6.62896 11.91 6.1998 11.94 5.9203 11.6916L2.9203 9.02494C2.64511 8.78033 2.62032 8.35894 2.86493 8.08375C3.10955 7.80856 3.53092 7.78378 3.80611 8.02839L6.29667 10.2423L11.5219 4.0949Z" fill="currentColor"/>
               </svg>
               <span class="text-gray-800 dark:text-gray-400">
                 10 users
               </span>
             </li>
 
             <li class="flex space-x-2">
               <svg class="flex-shrink-0 h-5 w-5 text-violet-900" width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                 <path d="M11.5219 4.0949C11.7604 3.81436 12.181 3.78025 12.4617 4.01871C12.7422 4.25717 12.7763 4.6779 12.5378 4.95844L6.87116 11.6251C6.62896 11.91 6.1998 11.94 5.9203 11.6916L2.9203 9.02494C2.64511 8.78033 2.62032 8.35894 2.86493 8.08375C3.10955 7.80856 3.53092 7.78378 3.80611 8.02839L6.29667 10.2423L11.5219 4.0949Z" fill="currentColor"/>
               </svg>
               <span class="text-gray-800 dark:text-gray-400">
                 Plan features
               </span>
             </li>
 
             <li class="flex space-x-2">
               <svg class="flex-shrink-0 h-5 w-5 text-violet-900" width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                 <path d="M11.5219 4.0949C11.7604 3.81436 12.181 3.78025 12.4617 4.01871C12.7422 4.25717 12.7763 4.6779 12.5378 4.95844L6.87116 11.6251C6.62896 11.91 6.1998 11.94 5.9203 11.6916L2.9203 9.02494C2.64511 8.78033 2.62032 8.35894 2.86493 8.08375C3.10955 7.80856 3.53092 7.78378 3.80611 8.02839L6.29667 10.2423L11.5219 4.0949Z" fill="currentColor"/>
               </svg>
               <span class="text-gray-800 dark:text-gray-400">
                 Product support
               </span>
             </li>
           </ul>
 
           <a class="mt-5 inline-flex justify-center items-center gap-2 rounded-lg border-2 border-violet-900 font-semibold text-violet-900 hover:shadow-md focus:outline-none focus:ring-2 focus:ring-violet-500 focus:ring-offset-2 transition-all text-sm py-3 px-4 dark:text-violet-500 dark:border-violet-900 dark:hover:border-violet-700" href="#">
             Get started
           </a>
         </div>
          
       </div>
       <div class="w-2/3 sm:w-1/2 lg:w-1/3 mx-auto text-center mt-10 md:mt-14 mb-6 lg:mt-24">
         <h2 class="text-gray-600 dark:text-gray-400">Trusted by Open Source, enterprise, and more than 99,000 of you</h2>
       </div>
       <div class="flex justify-center gap-x-6 sm:gap-x-12 lg:gap-x-24">
         <svg class="py-3 lg:py-5 w-16 h-auto md:w-20 lg:w-24 mx-auto sm:mx-0 text-gray-500" enable-background="new 0 0 2499 614" viewBox="0 0 2499 614" xmlns="http://www.w3.org/2000/svg"><path d="m431.7 0h-235.5v317.8h317.8v-235.5c0-45.6-36.7-82.3-82.3-82.3zm-308.9 0h-40.5c-45.6 0-82.3 36.7-82.3 82.3v40.5h122.8zm-122.8 196.2h122.8v122.8h-122.8zm392.5 317.8h40.5c45.6 0 82.3-36.7 82.3-82.3v-39.2h-122.8zm-196.3-121.5h122.8v122.8h-122.8zm-196.2 0v40.5c0 45.6 36.7 82.3 82.3 82.3h40.5v-122.8zm828-359.6h-48.1v449.4h254.5v-43h-206.4zm360.8 119c-93.7 0-159.5 69.6-159.5 169.6v11.5c1.3 43 20.3 83.6 51.9 113.9 30.4 27.9 69.6 44.3 111.4 44.3h6.3c44.3 0 86.1-16.5 119-44.3l1.3-1.3-21.5-35.4-2.5 1.3c-26.6 24.1-59.5 38-94.9 38-58.2 0-117.7-38-121.5-122.8h243.1v-2.5s1.3-15.2 1.3-22.8c-.3-91.2-53.4-149.5-134.4-149.5zm-108.9 134.2c10.1-57 51.9-93.7 106.3-93.7 40.5 0 84.8 24.1 88.6 93.7zm521.6-96.2v16.5c-20.3-34.2-58.2-55.7-97.5-55.7h-3.8c-86.1 0-145.6 68.4-145.6 168.4 0 101.3 57 169.6 141.8 169.6 67.1 0 97.5-40.5 107.6-58.2v49.4h45.6v-447h-46.8v157zm-98.8 257c-59.5 0-98.7-50.6-98.7-126.6 0-73.4 41.8-125.3 100-125.3 49.4 0 98.7 39.2 98.7 125.3 0 93.7-51.9 126.6-100 126.6zm424.1-250.7v2.5c-8.9-15.2-36.7-48.1-103.8-48.1-84.8 0-140.5 64.6-140.5 163.3s58.2 165.8 144.3 165.8c46.8 0 78.5-16.5 100-50.6v44.3c0 62-39.2 97.5-108.9 97.5-29.1 0-59.5-7.6-86.1-21.5l-2.5-1.3-17.7 39.2 2.5 1.3c32.9 16.5 69.6 25.3 105.1 25.3 74.7 0 154.4-38 154.4-143.1v-311.3h-46.8zm-93.7 241.8c-62 0-102.5-48.1-102.5-122.8 0-76 35.4-119 96.2-119 67.1 0 98.7 39.2 98.7 119 1.3 78.5-31.6 122.8-92.4 122.8zm331.7-286.1c-93.7 0-158.2 69.6-158.2 168.4v11.4c1.3 43 20.3 83.6 51.9 113.9 30.4 27.9 69.6 44.3 111.4 44.3h6.3c44.3 0 86.1-16.5 119-44.3l1.3-1.3-22.8-35.4-2.5 1.3c-26.6 24.1-59.5 38-94.9 38-58.2 0-117.7-38-121.5-122.8h244.2v-2.5s1.3-15.2 1.3-22.8c0-89.9-53.2-148.2-135.5-148.2zm-107.6 134.2c10.1-57 51.9-93.7 106.3-93.7 40.5 0 84.8 24.1 88.6 93.7zm440.6-127.9c-6.3-1.3-11.4-1.3-17.7-2.5-44.3 0-81 27.9-100 74.7v-72.2h-46.8l1.3 320.3v2.5h48.1v-135.4c0-20.3 2.5-41.8 8.9-60.8 15.2-49.4 49.4-81 89.9-81 5.1 0 10.1 0 15.2 1.3h2.5v-46.8z" fill="currentColor"/></svg>
 
         <svg class="py-3 lg:py-5 w-16 h-auto md:w-20 lg:w-24 mx-auto sm:mx-0 text-gray-500" xmlns="http://www.w3.org/2000/svg" viewBox="-4.126838974812941 0.900767442746961 939.436838974813 230.18142889845947" width="2500" height="607"><path d="M667.21 90.58c-13.76 0-23.58 4.7-28.4 13.6l-2.59 4.82V92.9h-22.39v97.86h23.55v-58.22c0-13.91 7.56-21.89 20.73-21.89 12.56 0 19.76 7.77 19.76 21.31v58.8h23.56v-63c0-23.3-12.79-37.18-34.22-37.18zm-114.21 0c-27.79 0-45 17.34-45 45.25v13.74c0 26.84 17.41 43.51 45.44 43.51 18.75 0 31.89-6.87 40.16-21l-14.6-8.4c-6.11 8.15-15.87 13.2-25.55 13.2-14.19 0-22.66-8.76-22.66-23.44v-3.89h65.73v-16.23c0-26-17.07-42.74-43.5-42.74zm22.09 43.15h-44.38v-2.35c0-16.11 7.91-25 22.27-25 13.83 0 22.09 8.76 22.09 23.44zm360.22-56.94V58.07h-81.46v18.72h28.56V172h-28.56v18.72h81.46V172h-28.57V76.79zM317.65 55.37c-36.38 0-59 22.67-59 59.18v19.74c0 36.5 22.61 59.18 59 59.18s59-22.68 59-59.18v-19.74c-.01-36.55-22.65-59.18-59-59.18zm34.66 80.27c0 24.24-12.63 38.14-34.66 38.14S283 159.88 283 135.64v-22.45c0-24.24 12.64-38.14 34.66-38.14s34.66 13.9 34.66 38.14zm98.31-45.06c-12.36 0-23.06 5.12-28.64 13.69l-2.53 3.9V92.9h-22.4v131.53h23.56v-47.64l2.52 3.74c5.3 7.86 15.65 12.55 27.69 12.55 20.31 0 40.8-13.27 40.8-42.93v-16.64c0-21.37-12.63-42.93-41-42.93zM468.06 149c0 15.77-9.2 25.57-24 25.57-13.8 0-23.43-10.36-23.43-25.18v-14.72c0-15 9.71-25.56 23.63-25.56 14.69 0 23.82 9.79 23.82 25.56zm298.47-90.92L719 190.76h23.93l9.1-28.44h54.64l.09.28 9 28.16h23.92L792.07 58.07zm-8.66 85.53l21.44-67.08 21.22 67.08zM212.59 95.12a57.27 57.27 0 0 0-4.92-47.05 58 58 0 0 0-62.4-27.79A57.29 57.29 0 0 0 102.06 1a57.94 57.94 0 0 0-55.27 40.14A57.31 57.31 0 0 0 8.5 68.93a58 58 0 0 0 7.13 67.94 57.31 57.31 0 0 0 4.92 47A58 58 0 0 0 83 211.72 57.31 57.31 0 0 0 126.16 231a57.94 57.94 0 0 0 55.27-40.14 57.3 57.3 0 0 0 38.28-27.79 57.92 57.92 0 0 0-7.12-67.95zM126.16 216a42.93 42.93 0 0 1-27.58-10c.34-.19 1-.52 1.38-.77l45.8-26.44a7.43 7.43 0 0 0 3.76-6.51V107.7l19.35 11.17a.67.67 0 0 1 .38.54v53.45A43.14 43.14 0 0 1 126.16 216zm-92.59-39.54a43 43 0 0 1-5.15-28.88c.34.21.94.57 1.36.81l45.81 26.45a7.44 7.44 0 0 0 7.52 0L139 142.52v22.34a.67.67 0 0 1-.27.6l-46.3 26.72a43.14 43.14 0 0 1-58.86-15.77zm-12-100A42.92 42.92 0 0 1 44 57.56V112a7.45 7.45 0 0 0 3.76 6.51l55.9 32.28L84.24 162a.68.68 0 0 1-.65.06L37.3 135.33a43.13 43.13 0 0 1-15.77-58.87zm159 37l-55.9-32.28L144 70a.69.69 0 0 1 .65-.06l46.29 26.73a43.1 43.1 0 0 1-6.66 77.76V120a7.44 7.44 0 0 0-3.74-6.54zm19.27-29c-.34-.21-.94-.57-1.36-.81L152.67 57.2a7.44 7.44 0 0 0-7.52 0l-55.9 32.27V67.14a.73.73 0 0 1 .28-.6l46.29-26.72a43.1 43.1 0 0 1 64 44.65zM78.7 124.3l-19.36-11.17a.73.73 0 0 1-.37-.54V59.14A43.09 43.09 0 0 1 129.64 26c-.34.19-.95.52-1.38.77l-45.8 26.44a7.45 7.45 0 0 0-3.76 6.51zm10.51-22.67l24.9-14.38L139 101.63v28.74l-24.9 14.38-24.9-14.38z" fill="currentColor"/></svg>
 
         <svg class="py-3 lg:py-5 w-16 h-auto md:w-20 lg:w-24 mx-auto sm:mx-0 text-gray-500" fill="none" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 2428 1002"><path fill-rule="evenodd" clip-rule="evenodd" d="M311.5 389.8h191.8l67 117.5 77.8-117.5h178.3L682.7 590.7l154 220.7H648.1l-77.8-135.8-91.7 135.8h-175l153.2-220.7-145.3-200.9Z" fill="currentColor"/><path fill-rule="evenodd" clip-rule="evenodd" d="M1279.3 640.7H955.4c2.9 26 10 45.2 21 58a76.5 76.5 0 0 0 61.1 27.3c16 0 31.5-4 45.3-12 8.8-5 18.2-13.7 28.2-26.5l159.2 14.7c-24.4 42.4-53.7 72.7-88 91.2-34.5 18.2-83.8 27.5-148.2 27.5-55.8 0-99.7-7.9-131.8-23.6a193.2 193.2 0 0 1-79.6-75c-21-34.4-31.6-74.6-31.6-121 0-65.8 21.2-119.2 63.3-159.8 42.3-40.8 100.6-61.3 175-61.3 60.3 0 108 9.2 142.8 27.5a184 184 0 0 1 79.8 79.3c18.3 34.7 27.4 79.8 27.4 135.3v18.4ZM1115 563.3c-3.2-31.3-11.6-53.7-25.2-67.1a73.1 73.1 0 0 0-53.8-20.3 73.6 73.6 0 0 0-61.6 30.6c-9.7 12.7-16 31.6-18.5 56.8H1115Zm137-173.5h168.3l81.9 267.1 84.5-267H1750l-179.1 421.5h-143.3L1252 389.8Zm463.2 212c0-64.3 21.7-117.4 65-159 43.5-41.7 102-62.6 176-62.6 84.4 0 148.2 24.5 191.3 73.5 34.6 39.4 52 88 52 145.8 0 64.7-21.5 117.8-64.5 159.3-43 41.3-102.4 62-178.5 62-67.7 0-122.5-17.1-164.3-51.5-51.4-42.6-77-98.4-77-167.6Zm162-.5c0 37.7 7.5 65.5 22.8 83.4a72 72 0 0 0 57.3 27.1c23.4 0 42.5-9 57.4-26.7 15-17.8 22.5-46 22.5-85.4 0-36.4-7.6-63.7-22.7-81.5a70.5 70.5 0 0 0-56-26.7c-23.5 0-43 9-58.3 27-15.4 18.2-23 45.9-23 82.8ZM2363.1.1a64 64 0 0 1 0 127.9 64 64 0 0 1 0-128Z" fill="currentColor"/><path fill-rule="evenodd" clip-rule="evenodd" d="M1912.1 671.5c220.3-135 326.4-327 334-419.2 8.7-106.7-71-235.9-358.9-238-345 3.6-790 158.3-1163.6 360.4h138c315.8-152.6 672-266.2 1000.8-275.2 287.7-7.8 304.4 149.2 302 199-3.6 71-74.7 234.5-252.3 373Zm-1315.7-222-36 22.7 10 17.5 26-40.1ZM419.8 567.5C212 717 57 873.2.8 1001.9 77.8 897.1 217 771 394.9 647l40.4-58.1-15.5-21.4Z" fill="currentColor"/><path fill-rule="evenodd" clip-rule="evenodd" d="M2036.3 580a819.8 819.8 0 0 0 114.2-122.8l-3-3.5c-8-9.2-17-17.5-26.5-25-21 39.8-50 83.7-88.2 128.3 1.6 7 2.8 14.7 3.5 23Z" fill="currentColor"/></svg>
 
         <svg class="py-3 lg:py-5 w-16 h-auto md:w-20 lg:w-24 mx-auto sm:mx-0 text-gray-500" viewBox="0 -8.881784197001252e-16 267.51517722360785 65.24679557585003" xmlns="http://www.w3.org/2000/svg" width="2500" height="610"><path d="M263.043 56.411a4.418 4.418 0 1 0 .085 0zm0 8.33a3.874 3.874 0 1 1 3.809-3.938v.065a3.791 3.791 0 0 1-3.708 3.871h-.1m-16.96-9.535h-9.6V40.17c0-3.585-.064-8.2-4.993-8.2-5 0-5.765 3.906-5.765 7.939v15.294h-9.6V24.287h9.216v4.225h.129a10.1 10.1 0 0 1 9.093-4.994c9.73 0 11.524 6.4 11.524 14.726zm-40.79-35.143a5.571 5.571 0 1 1 5.57-5.572 5.571 5.571 0 0 1-5.57 5.572m4.8 35.143h-9.61V24.287h9.61zM250.87.004h-55.21a4.728 4.728 0 0 0-4.781 4.67v55.439a4.731 4.731 0 0 0 4.781 4.675h55.21a4.741 4.741 0 0 0 4.8-4.675V4.67a4.738 4.738 0 0 0-4.8-4.67m-86.12 31.749c-4.8 0-7.68 3.205-7.68 7.875s2.879 7.878 7.68 7.878 7.687-3.2 7.687-7.878-2.881-7.875-7.687-7.875m16.525 23.437h-8.838v-4.1h-.131a12.071 12.071 0 0 1-9.544 4.868c-9.224 0-15.3-6.657-15.3-16.071 0-8.646 5.377-16.585 14.216-16.585 3.973 0 7.684 1.087 9.861 4.1h.126V9.577h9.609zm-46.139-19.048a5.756 5.756 0 0 0-5.894-5.89 6.406 6.406 0 0 0-6.784 5.89zm8.132 13.7a16.909 16.909 0 0 1-13.128 6.151c-9.6 0-17.286-6.408-17.286-16.331s7.685-16.328 17.286-16.328c8.973 0 14.6 6.4 14.6 16.328v3.01h-22.282a7.171 7.171 0 0 0 7.235 6.019 8.193 8.193 0 0 0 6.851-3.778zM47.834 24.279h9.219v4.225h.131a10.085 10.085 0 0 1 9.09-4.994c9.735 0 11.527 6.405 11.527 14.726V55.19h-9.6V40.159c0-3.588-.066-8.2-5-8.2-4.99 0-5.76 3.907-5.76 7.939v15.288h-9.6zM82.669 9.58h9.6v27.265l10.88-12.583h11.77l-12.6 14.313 12.335 16.63h-12.066L92.397 39.923h-.126v15.28h-9.6zM32.911 24.276h9.6v30.916h-9.6zm4.8-15.37a5.569 5.569 0 1 1-5.57 5.569 5.569 5.569 0 0 1 5.57-5.569M0 9.587h9.993v36.4h18.5v9.222H0zm263.744 51.522a1.2 1.2 0 0 0 1.21-1.269c0-.9-.543-1.33-1.657-1.33h-1.8v4.712h.677v-2.054h.832l.019.025 1.291 2.029h.724l-1.389-2.1zm-.783-.472h-.785v-1.593h.995c.514 0 1.1.084 1.1.757 0 .774-.593.836-1.314.836" fill="currentColor"/></svg>
       </div>
        
     </div>
 
     <div class="absolute top-1/2 left-1/2 -z-[1] transform -translate-y-1/2 -translate-x-1/2 w-[340px] h-[340px] border border-dashed border-violet-200 rounded-full dark:border-violet-900/60"></div>
     <div class="absolute top-1/2 left-1/2 -z-[1] transform -translate-y-1/2 -translate-x-1/2 w-[575px] h-[575px] border border-dashed border-violet-200 rounded-full opacity-80 dark:border-violet-900/60"></div>
     <div class="absolute top-1/2 left-1/2 -z-[1] transform -translate-y-1/2 -translate-x-1/2 w-[840px] h-[840px] border border-dashed border-violet-200 rounded-full opacity-60 dark:border-violet-900/60"></div>
     <div class="absolute top-1/2 left-1/2 -z-[1] transform -translate-y-1/2 -translate-x-1/2 w-[1080px] h-[1080px] border border-dashed border-violet-200 rounded-full opacity-40 dark:border-violet-900/60"></div>
   </div>
    
 </div>
 
  
 <div class="relative">
   <div class="max-w-[85rem] px-4 py-10 sm:px-6 lg:px-8 md:py-14 lg:py-20 mx-auto">
     <div class="max-w-2xl mx-auto text-center mb-10 lg:mb-14">
       <h2 class="text-2xl font-bold md:text-3xl md:leading-tight dark:text-white">Compare plans</h2>
     </div>
 
      
     <div class="hidden lg:block sticky top-0 left-0 py-2 bg-white/60 backdrop-blur-md dark:bg-slate-900/60">
        
       <div class="grid grid-cols-6 gap-6">
         <div class="col-span-2">
           <span class="font-semibold text-lg text-gray-800 dark:text-gray-200">
             Features
           </span>
         </div>
          
 
         <div class="col-span-1">
           <span class="font-semibold text-lg text-gray-800 dark:text-gray-200">
             Free
           </span>
           <p class="mt-2 text-sm text-gray-500">
             Free forever
           </p>
         </div>
          
 
         <div class="col-span-1">
           <span class="font-semibold text-lg text-gray-800 dark:text-gray-200">
             Startup
           </span>
           <p class="mt-2 text-sm text-gray-500">
             $39 per month billed annually
           </p>
         </div>
          
 
         <div class="col-span-1">
           <span class="font-semibold text-lg text-gray-800 dark:text-gray-200">
             Team
           </span>
           <p class="mt-2 text-sm text-gray-500">
             $89 per month billed annually
           </p>
         </div>
          
 
         <div class="col-span-1">
           <span class="font-semibold text-lg text-gray-800 dark:text-gray-200">
             Enterprise
           </span>
           <p class="mt-2 text-sm text-gray-500">
             $149 per month billed annually
           </p>
         </div>
          
       </div>
        
     </div>
      
 
      
     <div class="space-y-4 lg:space-y-0">
        
       <ul class="grid lg:grid-cols-6 lg:gap-6">
    
         <li class="lg:col-span-2 lg:py-3">
           <span class="text-lg font-semibold text-gray-800 dark:text-gray-200">
             General
           </span>
         </li>
          
 
    
         <li class="hidden lg:block lg:col-span-1 py-1.5 lg:py-3 px-4 lg:px-0 lg:text-center">
         </li>
          
 
    
         <li class="hidden lg:block lg:col-span-1 py-1.5 lg:py-3 px-4 lg:px-0 lg:text-center">
         </li>
          
 
    
         <li class="hidden lg:block lg:col-span-1 py-1.5 lg:py-3 px-4 lg:px-0 lg:text-center">
         </li>
          
 
    
         <li class="hidden lg:block lg:col-span-1 py-1.5 lg:py-3 px-4 lg:px-0 lg:text-center">
         </li>
          
       </ul>
       
 
        
       <ul class="grid lg:grid-cols-6 lg:gap-6">
    
         <li class="lg:col-span-2 pb-1.5 lg:py-3">
           <span class="font-semibold lg:font-normal text-sm text-gray-800 dark:text-gray-200">
             Number of seats
           </span>
         </li>
          
 
    
         <li class="col-span-1 py-1.5 lg:py-3 border-b border-gray-200 dark:border-gray-700">
           <div class="grid grid-cols-2 md:grid-cols-6 lg:block">
             <span class="lg:hidden md:col-span-2 text-sm text-gray-800 dark:text-gray-200">
               Free
             </span>
             <span class="text-sm text-gray-800 dark:text-gray-200">
               1
             </span>
           </div>
         </li>
          
 
    
         <li class="col-span-1 py-1.5 lg:py-3 border-b border-gray-200 dark:border-gray-700">
           <div class="grid grid-cols-2 md:grid-cols-6 lg:block">
             <span class="lg:hidden md:col-span-2 text-sm text-gray-800 dark:text-gray-200">
               Startup
             </span>
             <span class="text-sm text-gray-800 dark:text-gray-200">
               Up to 3
             </span>
           </div>
         </li>
          
 
    
         <li class="col-span-1 py-1.5 lg:py-3 border-b border-gray-200 dark:border-gray-700">
           <div class="grid grid-cols-2 md:grid-cols-6 lg:block">
             <span class="lg:hidden md:col-span-2 text-sm text-gray-800 dark:text-gray-200">
               Team
             </span>
             <span class="text-sm text-gray-800 dark:text-gray-200">
               Up to 10
             </span>
           </div>
         </li>
          
 
    
         <li class="col-span-1 py-1.5 lg:py-3 border-b border-gray-200 dark:border-gray-700">
           <div class="grid grid-cols-2 md:grid-cols-6 lg:block">
             <span class="lg:hidden md:col-span-2 text-sm text-gray-800 dark:text-gray-200">
               Enterprise
             </span>
             <span class="text-sm text-gray-800 dark:text-gray-200">
               Unlimited
             </span>
           </div>
         </li>
          
       </ul>
       
 
        
       <ul class="grid lg:grid-cols-6 lg:gap-6">
    
         <li class="lg:col-span-2 pb-1.5 lg:py-3">
           <span class="font-semibold lg:font-normal text-sm text-gray-800 dark:text-gray-200">
             Storage
           </span>
         </li>
          
 
    
         <li class="col-span-1 py-1.5 lg:py-3 border-b border-gray-200 dark:border-gray-700">
           <div class="grid grid-cols-2 md:grid-cols-6 lg:block">
             <span class="lg:hidden md:col-span-2 text-sm text-gray-800 dark:text-gray-200">
               Free
             </span>
             <span class="text-sm text-gray-800 dark:text-gray-200">
               15 GB
             </span>
           </div>
         </li>
          
 
    
         <li class="col-span-1 py-1.5 lg:py-3 border-b border-gray-200 dark:border-gray-700">
           <div class="grid grid-cols-2 md:grid-cols-6 lg:block">
             <span class="lg:hidden md:col-span-2 text-sm text-gray-800 dark:text-gray-200">
               Startup
             </span>
             <span class="text-sm text-gray-800 dark:text-gray-200">
               1 TB
             </span>
           </div>
         </li>
          
 
    
         <li class="col-span-1 py-1.5 lg:py-3 border-b border-gray-200 dark:border-gray-700">
           <div class="grid grid-cols-2 md:grid-cols-6 lg:block">
             <span class="lg:hidden md:col-span-2 text-sm text-gray-800 dark:text-gray-200">
               Team
             </span>
             <span class="text-sm text-gray-800 dark:text-gray-200">
               15 TB
             </span>
           </div>
         </li>
          
 
    
         <li class="col-span-1 py-1.5 lg:py-3 border-b border-gray-200 dark:border-gray-700">
           <div class="grid grid-cols-2 md:grid-cols-6 lg:block">
             <span class="lg:hidden md:col-span-2 text-sm text-gray-800 dark:text-gray-200">
               Enterprise
             </span>
             <span class="text-sm text-gray-800 dark:text-gray-200">
               Unlimited
             </span>
           </div>
         </li>
          
       </ul>
       
 
        
       <ul class="grid lg:grid-cols-6 lg:gap-6">
    
         <li class="lg:col-span-2 pb-1.5 lg:py-3">
           <span class="font-semibold lg:font-normal text-sm text-gray-800 dark:text-gray-200">
             Email sharing
           </span>
         </li>
          
 
    
         <li class="col-span-1 py-1.5 lg:py-3 border-b border-gray-200 dark:border-gray-700">
           <div class="grid grid-cols-2 md:grid-cols-6 lg:block">
             <span class="lg:hidden md:col-span-2 text-sm text-gray-800 dark:text-gray-200">
               Free
             </span>
             <svg class="w-5 h-5 text-violet-600" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
               <path d="M12.736 3.97a.733.733 0 0 1 1.047 0c.286.289.29.756.01 1.05L7.88 12.01a.733.733 0 0 1-1.065.02L3.217 8.384a.757.757 0 0 1 0-1.06.733.733 0 0 1 1.047 0l3.052 3.093 5.4-6.425a.247.247 0 0 1 .02-.022Z"/>
             </svg>
           </div>
         </li>
          
 
    
         <li class="col-span-1 py-1.5 lg:py-3 border-b border-gray-200 dark:border-gray-700">
           <div class="grid grid-cols-2 md:grid-cols-6 lg:block">
             <span class="lg:hidden md:col-span-2 text-sm text-gray-800 dark:text-gray-200">
               Startup
             </span>
             <svg class="w-5 h-5 text-violet-600" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
               <path d="M12.736 3.97a.733.733 0 0 1 1.047 0c.286.289.29.756.01 1.05L7.88 12.01a.733.733 0 0 1-1.065.02L3.217 8.384a.757.757 0 0 1 0-1.06.733.733 0 0 1 1.047 0l3.052 3.093 5.4-6.425a.247.247 0 0 1 .02-.022Z"/>
             </svg>
           </div>
         </li>
          
 
    
         <li class="col-span-1 py-1.5 lg:py-3 border-b border-gray-200 dark:border-gray-700">
           <div class="grid grid-cols-2 md:grid-cols-6 lg:block">
             <span class="lg:hidden md:col-span-2 text-sm text-gray-800 dark:text-gray-200">
               Team
             </span>
             <svg class="w-5 h-5 text-violet-600" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
               <path d="M12.736 3.97a.733.733 0 0 1 1.047 0c.286.289.29.756.01 1.05L7.88 12.01a.733.733 0 0 1-1.065.02L3.217 8.384a.757.757 0 0 1 0-1.06.733.733 0 0 1 1.047 0l3.052 3.093 5.4-6.425a.247.247 0 0 1 .02-.022Z"/>
             </svg>
           </div>
         </li>
          
 
    
         <li class="col-span-1 py-1.5 lg:py-3 border-b border-gray-200 dark:border-gray-700">
           <div class="grid grid-cols-2 md:grid-cols-6 lg:block">
             <span class="lg:hidden md:col-span-2 text-sm text-gray-800 dark:text-gray-200">
               Enterprise
             </span>
             <svg class="w-5 h-5 text-violet-600" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
               <path d="M12.736 3.97a.733.733 0 0 1 1.047 0c.286.289.29.756.01 1.05L7.88 12.01a.733.733 0 0 1-1.065.02L3.217 8.384a.757.757 0 0 1 0-1.06.733.733 0 0 1 1.047 0l3.052 3.093 5.4-6.425a.247.247 0 0 1 .02-.022Z"/>
             </svg>
           </div>
         </li>
          
       </ul>
       
 
        
       <ul class="grid lg:grid-cols-6 lg:gap-6">
    
         <li class="lg:col-span-2 pb-1.5 lg:py-3">
           <span class="font-semibold lg:font-normal text-sm text-gray-800 dark:text-gray-200">
             Any time, anywhere access
           </span>
         </li>
          
 
    
         <li class="col-span-1 py-1.5 lg:py-3 border-b border-gray-200 dark:border-gray-700">
           <div class="grid grid-cols-2 md:grid-cols-6 lg:block">
             <span class="lg:hidden md:col-span-2 text-sm text-gray-800 dark:text-gray-200">
               Free
             </span>
             <svg class="w-4 h-4 text-gray-500" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
               <path fill-rule="evenodd" d="M2 8a.5.5 0 0 1 .5-.5h11a.5.5 0 0 1 0 1h-11A.5.5 0 0 1 2 8Z"/>
             </svg>
           </div>
         </li>
          
 
    
         <li class="col-span-1 py-1.5 lg:py-3 border-b border-gray-200 dark:border-gray-700">
           <div class="grid grid-cols-2 md:grid-cols-6 lg:block">
             <span class="lg:hidden md:col-span-2 text-sm text-gray-800 dark:text-gray-200">
               Startup
             </span>
             <svg class="w-5 h-5 text-violet-600" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
               <path d="M12.736 3.97a.733.733 0 0 1 1.047 0c.286.289.29.756.01 1.05L7.88 12.01a.733.733 0 0 1-1.065.02L3.217 8.384a.757.757 0 0 1 0-1.06.733.733 0 0 1 1.047 0l3.052 3.093 5.4-6.425a.247.247 0 0 1 .02-.022Z"/>
             </svg>
           </div>
         </li>
          
 
    
         <li class="col-span-1 py-1.5 lg:py-3 border-b border-gray-200 dark:border-gray-700">
           <div class="grid grid-cols-2 md:grid-cols-6 lg:block">
             <span class="lg:hidden md:col-span-2 text-sm text-gray-800 dark:text-gray-200">
               Team
             </span>
             <svg class="w-5 h-5 text-violet-600" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
               <path d="M12.736 3.97a.733.733 0 0 1 1.047 0c.286.289.29.756.01 1.05L7.88 12.01a.733.733 0 0 1-1.065.02L3.217 8.384a.757.757 0 0 1 0-1.06.733.733 0 0 1 1.047 0l3.052 3.093 5.4-6.425a.247.247 0 0 1 .02-.022Z"/>
             </svg>
           </div>
         </li>
          
 
    
         <li class="col-span-1 py-1.5 lg:py-3 border-b border-gray-200 dark:border-gray-700">
           <div class="grid grid-cols-2 md:grid-cols-6 lg:block">
             <span class="lg:hidden md:col-span-2 text-sm text-gray-800 dark:text-gray-200">
               Enterprise
             </span>
             <svg class="w-5 h-5 text-violet-600" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
               <path d="M12.736 3.97a.733.733 0 0 1 1.047 0c.286.289.29.756.01 1.05L7.88 12.01a.733.733 0 0 1-1.065.02L3.217 8.384a.757.757 0 0 1 0-1.06.733.733 0 0 1 1.047 0l3.052 3.093 5.4-6.425a.247.247 0 0 1 .02-.022Z"/>
             </svg>
           </div>
         </li>
          
       </ul>
        
     </div>
      
 
      
     <div class="mt-6 space-y-4 lg:space-y-0">
        
       <ul class="grid lg:grid-cols-6 lg:gap-6">
    
         <li class="lg:col-span-2 lg:py-3">
           <span class="text-lg font-semibold text-gray-800 dark:text-gray-200">
             Financial data
           </span>
         </li>
          
 
    
         <li class="hidden lg:block lg:col-span-1 py-1.5 lg:py-3 px-4 lg:px-0 lg:text-center">
         </li>
          
 
    
         <li class="hidden lg:block lg:col-span-1 py-1.5 lg:py-3 px-4 lg:px-0 lg:text-center">
         </li>
          
 
    
         <li class="hidden lg:block lg:col-span-1 py-1.5 lg:py-3 px-4 lg:px-0 lg:text-center">
         </li>
          
 
    
         <li class="hidden lg:block lg:col-span-1 py-1.5 lg:py-3 px-4 lg:px-0 lg:text-center">
         </li>
          
       </ul>
       
 
        
       <ul class="grid lg:grid-cols-6 lg:gap-6">
    
         <li class="lg:col-span-2 pb-1.5 lg:py-3">
           <span class="font-semibold lg:font-normal text-sm text-gray-800 dark:text-gray-200">
             Open/High/Low/Close
           </span>
         </li>
          
 
    
         <li class="col-span-1 py-1.5 lg:py-3 border-b border-gray-200 dark:border-gray-700">
           <div class="grid grid-cols-2 md:grid-cols-6 lg:block">
             <span class="lg:hidden md:col-span-2 text-sm text-gray-800 dark:text-gray-200">
               Free
             </span>
             <svg class="w-4 h-4 text-gray-500" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
               <path fill-rule="evenodd" d="M2 8a.5.5 0 0 1 .5-.5h11a.5.5 0 0 1 0 1h-11A.5.5 0 0 1 2 8Z"/>
             </svg>
           </div>
         </li>
          
 
    
         <li class="col-span-1 py-1.5 lg:py-3 border-b border-gray-200 dark:border-gray-700">
           <div class="grid grid-cols-2 md:grid-cols-6 lg:block">
             <span class="lg:hidden md:col-span-2 text-sm text-gray-800 dark:text-gray-200">
               Startup
             </span>
             <svg class="w-4 h-4 text-gray-500" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
               <path fill-rule="evenodd" d="M2 8a.5.5 0 0 1 .5-.5h11a.5.5 0 0 1 0 1h-11A.5.5 0 0 1 2 8Z"/>
             </svg>
           </div>
         </li>
          
 
    
         <li class="col-span-1 py-1.5 lg:py-3 border-b border-gray-200 dark:border-gray-700">
           <div class="grid grid-cols-2 md:grid-cols-6 lg:block">
             <span class="lg:hidden md:col-span-2 text-sm text-gray-800 dark:text-gray-200">
               Team
             </span>
             <svg class="w-5 h-5 text-violet-600" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
               <path d="M12.736 3.97a.733.733 0 0 1 1.047 0c.286.289.29.756.01 1.05L7.88 12.01a.733.733 0 0 1-1.065.02L3.217 8.384a.757.757 0 0 1 0-1.06.733.733 0 0 1 1.047 0l3.052 3.093 5.4-6.425a.247.247 0 0 1 .02-.022Z"/>
             </svg>
           </div>
         </li>
          
 
    
         <li class="col-span-1 py-1.5 lg:py-3 border-b border-gray-200 dark:border-gray-700">
           <div class="grid grid-cols-2 md:grid-cols-6 lg:block">
             <span class="lg:hidden md:col-span-2 text-sm text-gray-800 dark:text-gray-200">
               Enterprise
             </span>
             <svg class="w-5 h-5 text-violet-600" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
               <path d="M12.736 3.97a.733.733 0 0 1 1.047 0c.286.289.29.756.01 1.05L7.88 12.01a.733.733 0 0 1-1.065.02L3.217 8.384a.757.757 0 0 1 0-1.06.733.733 0 0 1 1.047 0l3.052 3.093 5.4-6.425a.247.247 0 0 1 .02-.022Z"/>
             </svg>
           </div>
         </li>
          
       </ul>
       
 
        
       <ul class="grid lg:grid-cols-6 lg:gap-6">
    
         <li class="lg:col-span-2 pb-1.5 lg:py-3">
           <span class="font-semibold lg:font-normal text-sm text-gray-800 dark:text-gray-200">
             Price-volume difference indicator
           </span>
         </li>
          
 
    
         <li class="col-span-1 py-1.5 lg:py-3 border-b border-gray-200 dark:border-gray-700">
           <div class="grid grid-cols-2 md:grid-cols-6 lg:block">
             <span class="lg:hidden md:col-span-2 text-sm text-gray-800 dark:text-gray-200">
               Free
             </span>
             <svg class="w-4 h-4 text-gray-500" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
               <path fill-rule="evenodd" d="M2 8a.5.5 0 0 1 .5-.5h11a.5.5 0 0 1 0 1h-11A.5.5 0 0 1 2 8Z"/>
             </svg>
           </div>
         </li>
          
 
    
         <li class="col-span-1 py-1.5 lg:py-3 border-b border-gray-200 dark:border-gray-700">
           <div class="grid grid-cols-2 md:grid-cols-6 lg:block">
             <span class="lg:hidden md:col-span-2 text-sm text-gray-800 dark:text-gray-200">
               Startup
             </span>
             <svg class="w-5 h-5 text-violet-600" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
               <path d="M12.736 3.97a.733.733 0 0 1 1.047 0c.286.289.29.756.01 1.05L7.88 12.01a.733.733 0 0 1-1.065.02L3.217 8.384a.757.757 0 0 1 0-1.06.733.733 0 0 1 1.047 0l3.052 3.093 5.4-6.425a.247.247 0 0 1 .02-.022Z"/>
             </svg>
           </div>
         </li>
          
 
    
         <li class="col-span-1 py-1.5 lg:py-3 border-b border-gray-200 dark:border-gray-700">
           <div class="grid grid-cols-2 md:grid-cols-6 lg:block">
             <span class="lg:hidden md:col-span-2 text-sm text-gray-800 dark:text-gray-200">
               Team
             </span>
             <svg class="w-5 h-5 text-violet-600" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
               <path d="M12.736 3.97a.733.733 0 0 1 1.047 0c.286.289.29.756.01 1.05L7.88 12.01a.733.733 0 0 1-1.065.02L3.217 8.384a.757.757 0 0 1 0-1.06.733.733 0 0 1 1.047 0l3.052 3.093 5.4-6.425a.247.247 0 0 1 .02-.022Z"/>
             </svg>
           </div>
         </li>
          
 
    
         <li class="col-span-1 py-1.5 lg:py-3 border-b border-gray-200 dark:border-gray-700">
           <div class="grid grid-cols-2 md:grid-cols-6 lg:block">
             <span class="lg:hidden md:col-span-2 text-sm text-gray-800 dark:text-gray-200">
               Enterprise
             </span>
             <svg class="w-5 h-5 text-violet-600" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
               <path d="M12.736 3.97a.733.733 0 0 1 1.047 0c.286.289.29.756.01 1.05L7.88 12.01a.733.733 0 0 1-1.065.02L3.217 8.384a.757.757 0 0 1 0-1.06.733.733 0 0 1 1.047 0l3.052 3.093 5.4-6.425a.247.247 0 0 1 .02-.022Z"/>
             </svg>
           </div>
         </li>
          
       </ul>
        
     </div>
      
 
      
     <div class="mt-6 space-y-4 lg:space-y-0">
        
       <ul class="grid lg:grid-cols-6 lg:gap-6">
    
         <li class="lg:col-span-2 lg:py-3">
           <span class="text-lg font-semibold text-gray-800 dark:text-gray-200">
             On-chain data
           </span>
         </li>
          
 
    
         <li class="hidden lg:block lg:col-span-1 py-1.5 lg:py-3 px-4 lg:px-0 lg:text-center">
         </li>
          
 
    
         <li class="hidden lg:block lg:col-span-1 py-1.5 lg:py-3 px-4 lg:px-0 lg:text-center">
         </li>
          
 
    
         <li class="hidden lg:block lg:col-span-1 py-1.5 lg:py-3 px-4 lg:px-0 lg:text-center">
         </li>
          
 
    
         <li class="hidden lg:block lg:col-span-1 py-1.5 lg:py-3 px-4 lg:px-0 lg:text-center">
         </li>
          
       </ul>
        
 
        
       <ul class="grid lg:grid-cols-6 lg:gap-6">
    
         <li class="lg:col-span-2 pb-1.5 lg:py-3">
           <span class="font-semibold lg:font-normal text-sm text-gray-800 dark:text-gray-200">
             Network growth
           </span>
         </li>
          
 
    
         <li class="col-span-1 py-1.5 lg:py-3 border-b border-gray-200 dark:border-gray-700">
           <div class="grid grid-cols-2 md:grid-cols-6 lg:block">
             <span class="lg:hidden md:col-span-2 text-sm text-gray-800 dark:text-gray-200">
               Free
             </span>
             <svg class="w-4 h-4 text-gray-500" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
               <path fill-rule="evenodd" d="M2 8a.5.5 0 0 1 .5-.5h11a.5.5 0 0 1 0 1h-11A.5.5 0 0 1 2 8Z"/>
             </svg>
           </div>
         </li>
          
 
    
         <li class="col-span-1 py-1.5 lg:py-3 border-b border-gray-200 dark:border-gray-700">
           <div class="grid grid-cols-2 md:grid-cols-6 lg:block">
             <span class="lg:hidden md:col-span-2 text-sm text-gray-800 dark:text-gray-200">
               Startup
             </span>
             <svg class="w-4 h-4 text-gray-500" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
               <path fill-rule="evenodd" d="M2 8a.5.5 0 0 1 .5-.5h11a.5.5 0 0 1 0 1h-11A.5.5 0 0 1 2 8Z"/>
             </svg>
           </div>
         </li>
          
 
    
         <li class="col-span-1 py-1.5 lg:py-3 border-b border-gray-200 dark:border-gray-700">
           <div class="grid grid-cols-2 md:grid-cols-6 lg:block">
             <span class="lg:hidden md:col-span-2 text-sm text-gray-800 dark:text-gray-200">
               Team
             </span>
             <svg class="w-5 h-5 text-violet-600" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
               <path d="M12.736 3.97a.733.733 0 0 1 1.047 0c.286.289.29.756.01 1.05L7.88 12.01a.733.733 0 0 1-1.065.02L3.217 8.384a.757.757 0 0 1 0-1.06.733.733 0 0 1 1.047 0l3.052 3.093 5.4-6.425a.247.247 0 0 1 .02-.022Z"/>
             </svg>
           </div>
         </li>
          
 
    
         <li class="col-span-1 py-1.5 lg:py-3 border-b border-gray-200 dark:border-gray-700">
           <div class="grid grid-cols-2 md:grid-cols-6 lg:block">
             <span class="lg:hidden md:col-span-2 text-sm text-gray-800 dark:text-gray-200">
               Enterprise
             </span>
             <svg class="w-5 h-5 text-violet-600" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
               <path d="M12.736 3.97a.733.733 0 0 1 1.047 0c.286.289.29.756.01 1.05L7.88 12.01a.733.733 0 0 1-1.065.02L3.217 8.384a.757.757 0 0 1 0-1.06.733.733 0 0 1 1.047 0l3.052 3.093 5.4-6.425a.247.247 0 0 1 .02-.022Z"/>
             </svg>
           </div>
         </li>
          
       </ul>
        
 
        
       <ul class="grid lg:grid-cols-6 lg:gap-6">
    
         <li class="lg:col-span-2 pb-1.5 lg:py-3">
           <span class="font-semibold lg:font-normal text-sm text-gray-800 dark:text-gray-200">
             Average token age consumed
           </span>
         </li>
          
 
    
         <li class="col-span-1 py-1.5 lg:py-3 border-b border-gray-200 dark:border-gray-700">
           <div class="grid grid-cols-2 md:grid-cols-6 lg:block">
             <span class="lg:hidden md:col-span-2 text-sm text-gray-800 dark:text-gray-200">
               Free
             </span>
             <svg class="w-4 h-4 text-gray-500" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
               <path fill-rule="evenodd" d="M2 8a.5.5 0 0 1 .5-.5h11a.5.5 0 0 1 0 1h-11A.5.5 0 0 1 2 8Z"/>
             </svg>
           </div>
         </li>
          
 
    
         <li class="col-span-1 py-1.5 lg:py-3 border-b border-gray-200 dark:border-gray-700">
           <div class="grid grid-cols-2 md:grid-cols-6 lg:block">
             <span class="lg:hidden md:col-span-2 text-sm text-gray-800 dark:text-gray-200">
               Startup
             </span>
             <svg class="w-5 h-5 text-violet-600" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
               <path d="M12.736 3.97a.733.733 0 0 1 1.047 0c.286.289.29.756.01 1.05L7.88 12.01a.733.733 0 0 1-1.065.02L3.217 8.384a.757.757 0 0 1 0-1.06.733.733 0 0 1 1.047 0l3.052 3.093 5.4-6.425a.247.247 0 0 1 .02-.022Z"/>
             </svg>
           </div>
         </li>
          
 
    
         <li class="col-span-1 py-1.5 lg:py-3 border-b border-gray-200 dark:border-gray-700">
           <div class="grid grid-cols-2 md:grid-cols-6 lg:block">
             <span class="lg:hidden md:col-span-2 text-sm text-gray-800 dark:text-gray-200">
               Team
             </span>
             <svg class="w-5 h-5 text-violet-600" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
               <path d="M12.736 3.97a.733.733 0 0 1 1.047 0c.286.289.29.756.01 1.05L7.88 12.01a.733.733 0 0 1-1.065.02L3.217 8.384a.757.757 0 0 1 0-1.06.733.733 0 0 1 1.047 0l3.052 3.093 5.4-6.425a.247.247 0 0 1 .02-.022Z"/>
             </svg>
           </div>
         </li>
          
 
    
         <li class="col-span-1 py-1.5 lg:py-3 border-b border-gray-200 dark:border-gray-700">
           <div class="grid grid-cols-2 md:grid-cols-6 lg:block">
             <span class="lg:hidden md:col-span-2 text-sm text-gray-800 dark:text-gray-200">
               Enterprise
             </span>
             <svg class="w-5 h-5 text-violet-600" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
               <path d="M12.736 3.97a.733.733 0 0 1 1.047 0c.286.289.29.756.01 1.05L7.88 12.01a.733.733 0 0 1-1.065.02L3.217 8.384a.757.757 0 0 1 0-1.06.733.733 0 0 1 1.047 0l3.052 3.093 5.4-6.425a.247.247 0 0 1 .02-.022Z"/>
             </svg>
           </div>
         </li>
          
       </ul>
        
 
        
       <ul class="grid lg:grid-cols-6 lg:gap-6">
    
         <li class="lg:col-span-2 pb-1.5 lg:py-3">
           <span class="font-semibold lg:font-normal text-sm text-gray-800 dark:text-gray-200">
             Exchange flow
           </span>
         </li>
          
 
    
         <li class="col-span-1 py-1.5 lg:py-3 border-b border-gray-200 dark:border-gray-700">
           <div class="grid grid-cols-2 md:grid-cols-6 lg:block">
             <span class="lg:hidden md:col-span-2 text-sm text-gray-800 dark:text-gray-200">
               Free
             </span>
             <svg class="w-4 h-4 text-gray-500" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
               <path fill-rule="evenodd" d="M2 8a.5.5 0 0 1 .5-.5h11a.5.5 0 0 1 0 1h-11A.5.5 0 0 1 2 8Z"/>
             </svg>
           </div>
         </li>
          
 
    
         <li class="col-span-1 py-1.5 lg:py-3 border-b border-gray-200 dark:border-gray-700">
           <div class="grid grid-cols-2 md:grid-cols-6 lg:block">
             <span class="lg:hidden md:col-span-2 text-sm text-gray-800 dark:text-gray-200">
               Startup
             </span>
             <svg class="w-4 h-4 text-gray-500" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
               <path fill-rule="evenodd" d="M2 8a.5.5 0 0 1 .5-.5h11a.5.5 0 0 1 0 1h-11A.5.5 0 0 1 2 8Z"/>
             </svg>
           </div>
         </li>
          
 
    
         <li class="col-span-1 py-1.5 lg:py-3 border-b border-gray-200 dark:border-gray-700">
           <div class="grid grid-cols-2 md:grid-cols-6 lg:block">
             <span class="lg:hidden md:col-span-2 text-sm text-gray-800 dark:text-gray-200">
               Team
             </span>
             <svg class="w-4 h-4 text-gray-500" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
               <path fill-rule="evenodd" d="M2 8a.5.5 0 0 1 .5-.5h11a.5.5 0 0 1 0 1h-11A.5.5 0 0 1 2 8Z"/>
             </svg>
           </div>
         </li>
          
 
    
         <li class="col-span-1 py-1.5 lg:py-3 border-b border-gray-200 dark:border-gray-700">
           <div class="grid grid-cols-2 md:grid-cols-6 lg:block">
             <span class="lg:hidden md:col-span-2 text-sm text-gray-800 dark:text-gray-200">
               Enterprise
             </span>
             <svg class="w-5 h-5 text-violet-600" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
               <path d="M12.736 3.97a.733.733 0 0 1 1.047 0c.286.289.29.756.01 1.05L7.88 12.01a.733.733 0 0 1-1.065.02L3.217 8.384a.757.757 0 0 1 0-1.06.733.733 0 0 1 1.047 0l3.052 3.093 5.4-6.425a.247.247 0 0 1 .02-.022Z"/>
             </svg>
           </div>
         </li>
          
       </ul>
        
 
        
       <ul class="grid lg:grid-cols-6 lg:gap-6">
    
         <li class="lg:col-span-2 pb-1.5 lg:py-3">
           <span class="font-semibold lg:font-normal text-sm text-gray-800 dark:text-gray-200">
             Total ERC20 exchange funds flow
           </span>
         </li>
          
 
    
         <li class="col-span-1 py-1.5 lg:py-3 border-b border-gray-200 dark:border-gray-700">
           <div class="grid grid-cols-2 md:grid-cols-6 lg:block">
             <span class="lg:hidden md:col-span-2 text-sm text-gray-800 dark:text-gray-200">
               Free
             </span>
             <svg class="w-4 h-4 text-gray-500" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
               <path fill-rule="evenodd" d="M2 8a.5.5 0 0 1 .5-.5h11a.5.5 0 0 1 0 1h-11A.5.5 0 0 1 2 8Z"/>
             </svg>
           </div>
         </li>
          
 
    
         <li class="col-span-1 py-1.5 lg:py-3 border-b border-gray-200 dark:border-gray-700">
           <div class="grid grid-cols-2 md:grid-cols-6 lg:block">
             <span class="lg:hidden md:col-span-2 text-sm text-gray-800 dark:text-gray-200">
               Startup
             </span>
             <svg class="w-5 h-5 text-violet-600" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
               <path d="M12.736 3.97a.733.733 0 0 1 1.047 0c.286.289.29.756.01 1.05L7.88 12.01a.733.733 0 0 1-1.065.02L3.217 8.384a.757.757 0 0 1 0-1.06.733.733 0 0 1 1.047 0l3.052 3.093 5.4-6.425a.247.247 0 0 1 .02-.022Z"/>
             </svg>
           </div>
         </li>
          
 
    
         <li class="col-span-1 py-1.5 lg:py-3 border-b border-gray-200 dark:border-gray-700">
           <div class="grid grid-cols-2 md:grid-cols-6 lg:block">
             <span class="lg:hidden md:col-span-2 text-sm text-gray-800 dark:text-gray-200">
               Team
             </span>
             <svg class="w-5 h-5 text-violet-600" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
               <path d="M12.736 3.97a.733.733 0 0 1 1.047 0c.286.289.29.756.01 1.05L7.88 12.01a.733.733 0 0 1-1.065.02L3.217 8.384a.757.757 0 0 1 0-1.06.733.733 0 0 1 1.047 0l3.052 3.093 5.4-6.425a.247.247 0 0 1 .02-.022Z"/>
             </svg>
           </div>
         </li>
          
 
    
         <li class="col-span-1 py-1.5 lg:py-3 border-b border-gray-200 dark:border-gray-700">
           <div class="grid grid-cols-2 md:grid-cols-6 lg:block">
             <span class="lg:hidden md:col-span-2 text-sm text-gray-800 dark:text-gray-200">
               Enterprise
             </span>
             <svg class="w-5 h-5 text-violet-600" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
               <path d="M12.736 3.97a.733.733 0 0 1 1.047 0c.286.289.29.756.01 1.05L7.88 12.01a.733.733 0 0 1-1.065.02L3.217 8.384a.757.757 0 0 1 0-1.06.733.733 0 0 1 1.047 0l3.052 3.093 5.4-6.425a.247.247 0 0 1 .02-.022Z"/>
             </svg>
           </div>
         </li>
          
       </ul>
        
 
        
       <ul class="grid lg:grid-cols-6 lg:gap-6">
    
         <li class="lg:col-span-2 pb-1.5 lg:py-3">
           <span class="font-semibold lg:font-normal text-sm text-gray-800 dark:text-gray-200">
             Transaction volume
           </span>
         </li>
          
 
    
         <li class="col-span-1 py-1.5 lg:py-3 border-b border-gray-200 dark:border-gray-700">
           <div class="grid grid-cols-2 md:grid-cols-6 lg:block">
             <span class="lg:hidden md:col-span-2 text-sm text-gray-800 dark:text-gray-200">
               Free
             </span>
             <svg class="w-4 h-4 text-gray-500" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
               <path fill-rule="evenodd" d="M2 8a.5.5 0 0 1 .5-.5h11a.5.5 0 0 1 0 1h-11A.5.5 0 0 1 2 8Z"/>
             </svg>
           </div>
         </li>
          
 
    
         <li class="col-span-1 py-1.5 lg:py-3 border-b border-gray-200 dark:border-gray-700">
           <div class="grid grid-cols-2 md:grid-cols-6 lg:block">
             <span class="lg:hidden md:col-span-2 text-sm text-gray-800 dark:text-gray-200">
               Startup
             </span>
             <svg class="w-4 h-4 text-gray-500" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
               <path fill-rule="evenodd" d="M2 8a.5.5 0 0 1 .5-.5h11a.5.5 0 0 1 0 1h-11A.5.5 0 0 1 2 8Z"/>
             </svg>
           </div>
         </li>
          
 
    
         <li class="col-span-1 py-1.5 lg:py-3 border-b border-gray-200 dark:border-gray-700">
           <div class="grid grid-cols-2 md:grid-cols-6 lg:block">
             <span class="lg:hidden md:col-span-2 text-sm text-gray-800 dark:text-gray-200">
               Team
             </span>
             <svg class="w-5 h-5 text-violet-600" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
               <path d="M12.736 3.97a.733.733 0 0 1 1.047 0c.286.289.29.756.01 1.05L7.88 12.01a.733.733 0 0 1-1.065.02L3.217 8.384a.757.757 0 0 1 0-1.06.733.733 0 0 1 1.047 0l3.052 3.093 5.4-6.425a.247.247 0 0 1 .02-.022Z"/>
             </svg>
           </div>
         </li>
          
 
    
         <li class="col-span-1 py-1.5 lg:py-3 border-b border-gray-200 dark:border-gray-700">
           <div class="grid grid-cols-2 md:grid-cols-6 lg:block">
             <span class="lg:hidden md:col-span-2 text-sm text-gray-800 dark:text-gray-200">
               Enterprise
             </span>
             <svg class="w-5 h-5 text-violet-600" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
               <path d="M12.736 3.97a.733.733 0 0 1 1.047 0c.286.289.29.756.01 1.05L7.88 12.01a.733.733 0 0 1-1.065.02L3.217 8.384a.757.757 0 0 1 0-1.06.733.733 0 0 1 1.047 0l3.052 3.093 5.4-6.425a.247.247 0 0 1 .02-.022Z"/>
             </svg>
           </div>
         </li>
          
       </ul>
        
 
        
       <ul class="grid lg:grid-cols-6 lg:gap-6">
    
         <li class="lg:col-span-2 pb-1.5 lg:py-3">
           <span class="font-semibold lg:font-normal text-sm text-gray-800 dark:text-gray-200">
             Total circulation (beta)
           </span>
         </li>
          
 
    
         <li class="col-span-1 py-1.5 lg:py-3 border-b border-gray-200 dark:border-gray-700">
           <div class="grid grid-cols-2 md:grid-cols-6 lg:block">
             <span class="lg:hidden md:col-span-2 text-sm text-gray-800 dark:text-gray-200">
               Free
             </span>
             <svg class="w-4 h-4 text-gray-500" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
               <path fill-rule="evenodd" d="M2 8a.5.5 0 0 1 .5-.5h11a.5.5 0 0 1 0 1h-11A.5.5 0 0 1 2 8Z"/>
             </svg>
           </div>
         </li>
          
 
    
         <li class="col-span-1 py-1.5 lg:py-3 border-b border-gray-200 dark:border-gray-700">
           <div class="grid grid-cols-2 md:grid-cols-6 lg:block">
             <span class="lg:hidden md:col-span-2 text-sm text-gray-800 dark:text-gray-200">
               Startup
             </span>
             <svg class="w-5 h-5 text-violet-600" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
               <path d="M12.736 3.97a.733.733 0 0 1 1.047 0c.286.289.29.756.01 1.05L7.88 12.01a.733.733 0 0 1-1.065.02L3.217 8.384a.757.757 0 0 1 0-1.06.733.733 0 0 1 1.047 0l3.052 3.093 5.4-6.425a.247.247 0 0 1 .02-.022Z"/>
             </svg>
           </div>
         </li>
          
 
    
         <li class="col-span-1 py-1.5 lg:py-3 border-b border-gray-200 dark:border-gray-700">
           <div class="grid grid-cols-2 md:grid-cols-6 lg:block">
             <span class="lg:hidden md:col-span-2 text-sm text-gray-800 dark:text-gray-200">
               Team
             </span>
             <svg class="w-4 h-4 text-gray-500" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
               <path fill-rule="evenodd" d="M2 8a.5.5 0 0 1 .5-.5h11a.5.5 0 0 1 0 1h-11A.5.5 0 0 1 2 8Z"/>
             </svg>
           </div>
         </li>
          
 
    
         <li class="col-span-1 py-1.5 lg:py-3 border-b border-gray-200 dark:border-gray-700">
           <div class="grid grid-cols-2 md:grid-cols-6 lg:block">
             <span class="lg:hidden md:col-span-2 text-sm text-gray-800 dark:text-gray-200">
               Enterprise
             </span>
             <svg class="w-5 h-5 text-violet-600" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
               <path d="M12.736 3.97a.733.733 0 0 1 1.047 0c.286.289.29.756.01 1.05L7.88 12.01a.733.733 0 0 1-1.065.02L3.217 8.384a.757.757 0 0 1 0-1.06.733.733 0 0 1 1.047 0l3.052 3.093 5.4-6.425a.247.247 0 0 1 .02-.022Z"/>
             </svg>
           </div>
         </li>
          
       </ul>
        
 
        
       <ul class="grid lg:grid-cols-6 lg:gap-6">
    
         <li class="lg:col-span-2 pb-1.5 lg:py-3">
           <span class="font-semibold lg:font-normal text-sm text-gray-800 dark:text-gray-200">
             Velocity of tokens (beta)
           </span>
         </li>
          
 
    
         <li class="col-span-1 py-1.5 lg:py-3 border-b border-gray-200 dark:border-gray-700">
           <div class="grid grid-cols-2 md:grid-cols-6 lg:block">
             <span class="lg:hidden md:col-span-2 text-sm text-gray-800 dark:text-gray-200">
               Free
             </span>
             <svg class="w-4 h-4 text-gray-500" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
               <path fill-rule="evenodd" d="M2 8a.5.5 0 0 1 .5-.5h11a.5.5 0 0 1 0 1h-11A.5.5 0 0 1 2 8Z"/>
             </svg>
           </div>
         </li>
          
 
    
         <li class="col-span-1 py-1.5 lg:py-3 border-b border-gray-200 dark:border-gray-700">
           <div class="grid grid-cols-2 md:grid-cols-6 lg:block">
             <span class="lg:hidden md:col-span-2 text-sm text-gray-800 dark:text-gray-200">
               Startup
             </span>
             <svg class="w-4 h-4 text-gray-500" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
               <path fill-rule="evenodd" d="M2 8a.5.5 0 0 1 .5-.5h11a.5.5 0 0 1 0 1h-11A.5.5 0 0 1 2 8Z"/>
             </svg>
           </div>
         </li>
          
 
    
         <li class="col-span-1 py-1.5 lg:py-3 border-b border-gray-200 dark:border-gray-700">
           <div class="grid grid-cols-2 md:grid-cols-6 lg:block">
             <span class="lg:hidden md:col-span-2 text-sm text-gray-800 dark:text-gray-200">
               Team
             </span>
             <svg class="w-4 h-4 text-gray-500" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
               <path fill-rule="evenodd" d="M2 8a.5.5 0 0 1 .5-.5h11a.5.5 0 0 1 0 1h-11A.5.5 0 0 1 2 8Z"/>
             </svg>
           </div>
         </li>
          
 
    
         <li class="col-span-1 py-1.5 lg:py-3 border-b border-gray-200 dark:border-gray-700">
           <div class="grid grid-cols-2 md:grid-cols-6 lg:block">
             <span class="lg:hidden md:col-span-2 text-sm text-gray-800 dark:text-gray-200">
               Enterprise
             </span>
             <svg class="w-5 h-5 text-violet-600" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
               <path d="M12.736 3.97a.733.733 0 0 1 1.047 0c.286.289.29.756.01 1.05L7.88 12.01a.733.733 0 0 1-1.065.02L3.217 8.384a.757.757 0 0 1 0-1.06.733.733 0 0 1 1.047 0l3.052 3.093 5.4-6.425a.247.247 0 0 1 .02-.022Z"/>
             </svg>
           </div>
         </li>
          
       </ul>
        
 
        
       <ul class="grid lg:grid-cols-6 lg:gap-6">
    
         <li class="lg:col-span-2 pb-1.5 lg:py-3">
           <span class="font-semibold lg:font-normal text-sm text-gray-800 dark:text-gray-200">
             ETH gas used
           </span>
         </li>
          
 
    
         <li class="col-span-1 py-1.5 lg:py-3 border-b border-gray-200 dark:border-gray-700">
           <div class="grid grid-cols-2 md:grid-cols-6 lg:block">
             <span class="lg:hidden md:col-span-2 text-sm text-gray-800 dark:text-gray-200">
               Free
             </span>
             <svg class="w-4 h-4 text-gray-500" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
               <path fill-rule="evenodd" d="M2 8a.5.5 0 0 1 .5-.5h11a.5.5 0 0 1 0 1h-11A.5.5 0 0 1 2 8Z"/>
             </svg>
           </div>
         </li>
          
 
    
         <li class="col-span-1 py-1.5 lg:py-3 border-b border-gray-200 dark:border-gray-700">
           <div class="grid grid-cols-2 md:grid-cols-6 lg:block">
             <span class="lg:hidden md:col-span-2 text-sm text-gray-800 dark:text-gray-200">
               Startup
             </span>
             <svg class="w-5 h-5 text-violet-600" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
               <path d="M12.736 3.97a.733.733 0 0 1 1.047 0c.286.289.29.756.01 1.05L7.88 12.01a.733.733 0 0 1-1.065.02L3.217 8.384a.757.757 0 0 1 0-1.06.733.733 0 0 1 1.047 0l3.052 3.093 5.4-6.425a.247.247 0 0 1 .02-.022Z"/>
             </svg>
           </div>
         </li>
          
 
    
         <li class="col-span-1 py-1.5 lg:py-3 border-b border-gray-200 dark:border-gray-700">
           <div class="grid grid-cols-2 md:grid-cols-6 lg:block">
             <span class="lg:hidden md:col-span-2 text-sm text-gray-800 dark:text-gray-200">
               Team
             </span>
             <svg class="w-5 h-5 text-violet-600" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
               <path d="M12.736 3.97a.733.733 0 0 1 1.047 0c.286.289.29.756.01 1.05L7.88 12.01a.733.733 0 0 1-1.065.02L3.217 8.384a.757.757 0 0 1 0-1.06.733.733 0 0 1 1.047 0l3.052 3.093 5.4-6.425a.247.247 0 0 1 .02-.022Z"/>
             </svg>
           </div>
         </li>
          
 
    
         <li class="col-span-1 py-1.5 lg:py-3 border-b border-gray-200 dark:border-gray-700">
           <div class="grid grid-cols-2 md:grid-cols-6 lg:block">
             <span class="lg:hidden md:col-span-2 text-sm text-gray-800 dark:text-gray-200">
               Enterprise
             </span>
             <svg class="w-5 h-5 text-violet-600" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
               <path d="M12.736 3.97a.733.733 0 0 1 1.047 0c.286.289.29.756.01 1.05L7.88 12.01a.733.733 0 0 1-1.065.02L3.217 8.384a.757.757 0 0 1 0-1.06.733.733 0 0 1 1.047 0l3.052 3.093 5.4-6.425a.247.247 0 0 1 .02-.022Z"/>
             </svg>
           </div>
         </li>
          
       </ul>
        
     </div>
      
 
      
     <div class="mt-6 space-y-4 lg:space-y-0">
        
       <ul class="grid lg:grid-cols-6 lg:gap-6">
    
         <li class="lg:col-span-2 lg:py-3">
           <span class="text-lg font-semibold text-gray-800 dark:text-gray-200">
             Social data
           </span>
         </li>
          
 
    
         <li class="hidden lg:block lg:col-span-1 py-1.5 lg:py-3 px-4 lg:px-0 lg:text-center">
         </li>
          
 
    
         <li class="hidden lg:block lg:col-span-1 py-1.5 lg:py-3 px-4 lg:px-0 lg:text-center">
         </li>
          
 
    
         <li class="hidden lg:block lg:col-span-1 py-1.5 lg:py-3 px-4 lg:px-0 lg:text-center">
         </li>
          
 
    
         <li class="hidden lg:block lg:col-span-1 py-1.5 lg:py-3 px-4 lg:px-0 lg:text-center">
         </li>
          
       </ul>
       
 
        
       <ul class="grid lg:grid-cols-6 lg:gap-6">
    
         <li class="lg:col-span-2 pb-1.5 lg:py-3">
           <span class="font-semibold lg:font-normal text-sm text-gray-800 dark:text-gray-200">
             Dev activity
           </span>
         </li>
          
 
    
         <li class="col-span-1 py-1.5 lg:py-3 border-b border-gray-200 dark:border-gray-700">
           <div class="grid grid-cols-2 md:grid-cols-6 lg:block">
             <span class="lg:hidden md:col-span-2 text-sm text-gray-800 dark:text-gray-200">
               Free
             </span>
             <svg class="w-4 h-4 text-gray-500" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
               <path fill-rule="evenodd" d="M2 8a.5.5 0 0 1 .5-.5h11a.5.5 0 0 1 0 1h-11A.5.5 0 0 1 2 8Z"/>
             </svg>
           </div>
         </li>
          
 
    
         <li class="col-span-1 py-1.5 lg:py-3 border-b border-gray-200 dark:border-gray-700">
           <div class="grid grid-cols-2 md:grid-cols-6 lg:block">
             <span class="lg:hidden md:col-span-2 text-sm text-gray-800 dark:text-gray-200">
               Startup
             </span>
             <svg class="w-4 h-4 text-gray-500" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
               <path fill-rule="evenodd" d="M2 8a.5.5 0 0 1 .5-.5h11a.5.5 0 0 1 0 1h-11A.5.5 0 0 1 2 8Z"/>
             </svg>
           </div>
         </li>
          
 
    
         <li class="col-span-1 py-1.5 lg:py-3 border-b border-gray-200 dark:border-gray-700">
           <div class="grid grid-cols-2 md:grid-cols-6 lg:block">
             <span class="lg:hidden md:col-span-2 text-sm text-gray-800 dark:text-gray-200">
               Team
             </span>
             <svg class="w-5 h-5 text-violet-600" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
               <path d="M12.736 3.97a.733.733 0 0 1 1.047 0c.286.289.29.756.01 1.05L7.88 12.01a.733.733 0 0 1-1.065.02L3.217 8.384a.757.757 0 0 1 0-1.06.733.733 0 0 1 1.047 0l3.052 3.093 5.4-6.425a.247.247 0 0 1 .02-.022Z"/>
             </svg>
           </div>
         </li>
          
 
    
         <li class="col-span-1 py-1.5 lg:py-3 border-b border-gray-200 dark:border-gray-700">
           <div class="grid grid-cols-2 md:grid-cols-6 lg:block">
             <span class="lg:hidden md:col-span-2 text-sm text-gray-800 dark:text-gray-200">
               Enterprise
             </span>
             <svg class="w-5 h-5 text-violet-600" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
               <path d="M12.736 3.97a.733.733 0 0 1 1.047 0c.286.289.29.756.01 1.05L7.88 12.01a.733.733 0 0 1-1.065.02L3.217 8.384a.757.757 0 0 1 0-1.06.733.733 0 0 1 1.047 0l3.052 3.093 5.4-6.425a.247.247 0 0 1 .02-.022Z"/>
             </svg>
           </div>
         </li>
          
       </ul>
       
 
        
       <ul class="grid lg:grid-cols-6 lg:gap-6">
    
         <li class="lg:col-span-2 pb-1.5 lg:py-3">
           <span class="font-semibold lg:font-normal text-sm text-gray-800 dark:text-gray-200">
             Topic search
           </span>
         </li>
          
 
    
         <li class="col-span-1 py-1.5 lg:py-3 border-b border-gray-200 dark:border-gray-700">
           <div class="grid grid-cols-2 md:grid-cols-6 lg:block">
             <span class="lg:hidden md:col-span-2 text-sm text-gray-800 dark:text-gray-200">
               Free
             </span>
             <svg class="w-4 h-4 text-gray-500" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
               <path fill-rule="evenodd" d="M2 8a.5.5 0 0 1 .5-.5h11a.5.5 0 0 1 0 1h-11A.5.5 0 0 1 2 8Z"/>
             </svg>
           </div>
         </li>
          
 
    
         <li class="col-span-1 py-1.5 lg:py-3 border-b border-gray-200 dark:border-gray-700">
           <div class="grid grid-cols-2 md:grid-cols-6 lg:block">
             <span class="lg:hidden md:col-span-2 text-sm text-gray-800 dark:text-gray-200">
               Startup
             </span>
             <svg class="w-5 h-5 text-violet-600" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
               <path d="M12.736 3.97a.733.733 0 0 1 1.047 0c.286.289.29.756.01 1.05L7.88 12.01a.733.733 0 0 1-1.065.02L3.217 8.384a.757.757 0 0 1 0-1.06.733.733 0 0 1 1.047 0l3.052 3.093 5.4-6.425a.247.247 0 0 1 .02-.022Z"/>
             </svg>
           </div>
         </li>
          
 
    
         <li class="col-span-1 py-1.5 lg:py-3 border-b border-gray-200 dark:border-gray-700">
           <div class="grid grid-cols-2 md:grid-cols-6 lg:block">
             <span class="lg:hidden md:col-span-2 text-sm text-gray-800 dark:text-gray-200">
               Team
             </span>
             <svg class="w-5 h-5 text-violet-600" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
               <path d="M12.736 3.97a.733.733 0 0 1 1.047 0c.286.289.29.756.01 1.05L7.88 12.01a.733.733 0 0 1-1.065.02L3.217 8.384a.757.757 0 0 1 0-1.06.733.733 0 0 1 1.047 0l3.052 3.093 5.4-6.425a.247.247 0 0 1 .02-.022Z"/>
             </svg>
           </div>
         </li>
          
 
    
         <li class="col-span-1 py-1.5 lg:py-3 border-b border-gray-200 dark:border-gray-700">
           <div class="grid grid-cols-2 md:grid-cols-6 lg:block">
             <span class="lg:hidden md:col-span-2 text-sm text-gray-800 dark:text-gray-200">
               Enterprise
             </span>
             <svg class="w-5 h-5 text-violet-600" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
               <path d="M12.736 3.97a.733.733 0 0 1 1.047 0c.286.289.29.756.01 1.05L7.88 12.01a.733.733 0 0 1-1.065.02L3.217 8.384a.757.757 0 0 1 0-1.06.733.733 0 0 1 1.047 0l3.052 3.093 5.4-6.425a.247.247 0 0 1 .02-.022Z"/>
             </svg>
           </div>
         </li>
          
       </ul>
       
 
        
       <ul class="grid lg:grid-cols-6 lg:gap-6">
    
         <li class="lg:col-span-2 pb-1.5 lg:py-3">
           <span class="font-semibold lg:font-normal text-sm text-gray-800 dark:text-gray-200">
             Relative social dominance
           </span>
         </li>
          
 
    
         <li class="col-span-1 py-1.5 lg:py-3 border-b border-gray-200 dark:border-gray-700">
           <div class="grid grid-cols-2 md:grid-cols-6 lg:block">
             <span class="lg:hidden md:col-span-2 text-sm text-gray-800 dark:text-gray-200">
               Free
             </span>
             <svg class="w-4 h-4 text-gray-500" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
               <path fill-rule="evenodd" d="M2 8a.5.5 0 0 1 .5-.5h11a.5.5 0 0 1 0 1h-11A.5.5 0 0 1 2 8Z"/>
             </svg>
           </div>
         </li>
          
 
    
         <li class="col-span-1 py-1.5 lg:py-3 border-b border-gray-200 dark:border-gray-700">
           <div class="grid grid-cols-2 md:grid-cols-6 lg:block">
             <span class="lg:hidden md:col-span-2 text-sm text-gray-800 dark:text-gray-200">
               Startup
             </span>
             <svg class="w-4 h-4 text-gray-500" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
               <path fill-rule="evenodd" d="M2 8a.5.5 0 0 1 .5-.5h11a.5.5 0 0 1 0 1h-11A.5.5 0 0 1 2 8Z"/>
             </svg>
           </div>
         </li>
          
 
    
         <li class="col-span-1 py-1.5 lg:py-3 border-b border-gray-200 dark:border-gray-700">
           <div class="grid grid-cols-2 md:grid-cols-6 lg:block">
             <span class="lg:hidden md:col-span-2 text-sm text-gray-800 dark:text-gray-200">
               Team
             </span>
             <svg class="w-4 h-4 text-gray-500" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
               <path fill-rule="evenodd" d="M2 8a.5.5 0 0 1 .5-.5h11a.5.5 0 0 1 0 1h-11A.5.5 0 0 1 2 8Z"/>
             </svg>
           </div>
         </li>
          
 
    
         <li class="col-span-1 py-1.5 lg:py-3 border-b border-gray-200 dark:border-gray-700">
           <div class="grid grid-cols-2 md:grid-cols-6 lg:block">
             <span class="lg:hidden md:col-span-2 text-sm text-gray-800 dark:text-gray-200">
               Enterprise
             </span>
             <svg class="w-5 h-5 text-violet-600" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
               <path d="M12.736 3.97a.733.733 0 0 1 1.047 0c.286.289.29.756.01 1.05L7.88 12.01a.733.733 0 0 1-1.065.02L3.217 8.384a.757.757 0 0 1 0-1.06.733.733 0 0 1 1.047 0l3.052 3.093 5.4-6.425a.247.247 0 0 1 .02-.022Z"/>
             </svg>
           </div>
         </li>
          
       </ul>
        
     </div>
      
 
     <div class="hidden lg:block mt-6">
        
       <div class="grid grid-cols-6 gap-6">
         <div class="col-span-2">
         </div>
          
 
         <div class="col-span-1">
           <a class="w-full py-3 px-4 inline-flex justify-center items-center gap-2 rounded-md border font-medium bg-white text-gray-700 shadow-sm align-middle hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-white focus:ring-violet-600 transition-all text-sm dark:bg-slate-900 dark:hover:bg-slate-800 dark:border-gray-700 dark:text-gray-400 dark:hover:text-white dark:focus:ring-offset-gray-800" href="#">
             Get started
           </a>
         </div>
          
 
         <div class="col-span-1">
           <a class="w-full py-3 px-4 inline-flex justify-center items-center gap-x-3 text-center bg-violet-900 hover:bg-violet-700 text-white text-sm font-medium rounded-lg hover:shadow-md focus:outline-none focus:ring-2 focus:ring-violet-900 focus:ring-offset-2 focus:ring-offset-white transition dark:focus:ring-offset-gray-800" href="#">
             Get started
           </a>
         </div>
          
 
         <div class="col-span-1">
           <a class="w-full py-3 px-4 inline-flex justify-center items-center gap-2 rounded-md border font-medium bg-white text-gray-700 shadow-sm align-middle hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-white focus:ring-violet-600 transition-all text-sm dark:bg-slate-900 dark:hover:bg-slate-800 dark:border-gray-700 dark:text-gray-400 dark:hover:text-white dark:focus:ring-offset-gray-800" href="#">
             Get started
           </a>
         </div>
          
 
         <div class="col-span-1">
           <a class="w-full py-3 px-4 inline-flex justify-center items-center gap-2 rounded-md border font-medium bg-white text-gray-700 shadow-sm align-middle hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-white focus:ring-violet-600 transition-all text-sm dark:bg-slate-900 dark:hover:bg-slate-800 dark:border-gray-700 dark:text-gray-400 dark:hover:text-white dark:focus:ring-offset-gray-800" href="#">
             Get started
           </a>
         </div>
          
       </div>
        
     </div>
      
     <div class="mt-8 md:mt-12 flex justify-center items-center gap-x-3">
       <p class="text-sm text-gray-500 dark:text-gray-400">
         Need a custom plan?
       </p>
 
       <button type="button" class="py-2 px-3 inline-flex justify-center items-center gap-2 rounded-lg border font-medium bg-white text-gray-700 shadow-sm align-middle hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-white focus:ring-violet-600 transition-all text-sm dark:bg-slate-900 dark:hover:bg-slate-800 dark:border-gray-700 dark:text-gray-400 dark:hover:text-white dark:focus:ring-offset-gray-800">
         Contact us
       </button>
     </div>
   </div>
 </div>
 <div class="relative overflow-hidden">
   <div class="max-w-[85rem] px-4 py-12 sm:px-6 lg:px-8 lg:pt-16 lg:pb-28 mx-auto">
      
     <div aria-hidden="true" class="flex absolute left-0 -z-[1]">
       <div class="bg-purple-200 opacity-20 blur-3xl w-[1036px] h-[300px] dark:bg-purple-900 dark:opacity-20"></div>
     </div>
      
 
      
     <div class="lg:grid lg:grid-cols-6 lg:gap-8 lg:items-center">
       <div class="hidden lg:block lg:col-span-2">
         <img class="rounded-xl" src="https://images.unsplash.com/photo-1671726203390-cdc4354ee2eb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80" alt="Image Description" />
       </div>
        
 
       <div class="lg:col-span-4">
         <blockquote>
           <svg class="w-24 h-auto mb-4" viewBox="-0.3 0 320.3999999999999 99.9" xmlns="http://www.w3.org/2000/svg" width="2500" height="779"><path d="M168.7 25.1c0 3.6-2.9 6.5-6.5 6.5s-6.5-2.9-6.5-6.5 2.8-6.5 6.5-6.5c3.7.1 6.5 3 6.5 6.5zm-26.8 13.1v1.6s-3.1-4-9.7-4c-10.9 0-19.4 8.3-19.4 19.8 0 11.4 8.4 19.8 19.4 19.8 6.7 0 9.7-4.1 9.7-4.1V73c0 .8.6 1.4 1.4 1.4h8.1V36.8h-8.1c-.8 0-1.4.7-1.4 1.4zm0 24.1c-1.5 2.2-4.5 4.1-8.1 4.1-6.4 0-11.3-4-11.3-10.8s4.9-10.8 11.3-10.8c3.5 0 6.7 2 8.1 4.1zm15.5-25.5h9.6v37.6h-9.6zm143.4-1c-6.6 0-9.7 4-9.7 4V18.7h-9.6v55.7h8.1c.8 0 1.4-.7 1.4-1.4v-1.7s3.1 4.1 9.7 4.1c10.9 0 19.4-8.4 19.4-19.8s-8.5-19.8-19.3-19.8zm-1.6 30.5c-3.7 0-6.6-1.9-8.1-4.1V48.8c1.5-2 4.7-4.1 8.1-4.1 6.4 0 11.3 4 11.3 10.8s-4.9 10.8-11.3 10.8zm-22.7-14.2v22.4h-9.6V53.2c0-6.2-2-8.7-7.4-8.7-2.9 0-5.9 1.5-7.8 3.7v26.2h-9.6V36.8h7.6c.8 0 1.4.7 1.4 1.4v1.6c2.8-2.9 6.5-4 10.2-4 4.2 0 7.7 1.2 10.5 3.6 3.4 2.8 4.7 6.4 4.7 12.7zm-57.7-16.3c-6.6 0-9.7 4-9.7 4V18.7h-9.6v55.7h8.1c.8 0 1.4-.7 1.4-1.4v-1.7s3.1 4.1 9.7 4.1c10.9 0 19.4-8.4 19.4-19.8.1-11.4-8.4-19.8-19.3-19.8zm-1.6 30.5c-3.7 0-6.6-1.9-8.1-4.1V48.8c1.5-2 4.7-4.1 8.1-4.1 6.4 0 11.3 4 11.3 10.8s-4.9 10.8-11.3 10.8zm-26-30.5c2.9 0 4.4.5 4.4.5v8.9s-8-2.7-13 3v26.3H173V36.8h8.1c.8 0 1.4.7 1.4 1.4v1.6c1.8-2.1 5.7-4 8.7-4zM91.5 71c-.5-1.2-1-2.5-1.5-3.6-.8-1.8-1.6-3.5-2.3-5.1l-.1-.1C80.7 47.2 73.3 32 65.5 17l-.3-.6c-.8-1.5-1.6-3.1-2.4-4.7-1-1.8-2-3.7-3.6-5.5C56 2.2 51.4 0 46.5 0c-5 0-9.5 2.2-12.8 6-1.5 1.8-2.6 3.7-3.6 5.5-.8 1.6-1.6 3.2-2.4 4.7l-.3.6C19.7 31.8 12.2 47 5.3 62l-.1.2c-.7 1.6-1.5 3.3-2.3 5.1-.5 1.1-1 2.3-1.5 3.6C.1 74.6-.3 78.1.2 81.7c1.1 7.5 6.1 13.8 13 16.6 2.6 1.1 5.3 1.6 8.1 1.6.8 0 1.8-.1 2.6-.2 3.3-.4 6.7-1.5 10-3.4 4.1-2.3 8-5.6 12.4-10.4 4.4 4.8 8.4 8.1 12.4 10.4 3.3 1.9 6.7 3 10 3.4.8.1 1.8.2 2.6.2 2.8 0 5.6-.5 8.1-1.6 7-2.8 11.9-9.2 13-16.6.8-3.5.4-7-.9-10.7zm-45.1 5.2C41 69.4 37.5 63 36.3 57.6c-.5-2.3-.6-4.3-.3-6.1.2-1.6.8-3 1.6-4.2 1.9-2.7 5.1-4.4 8.8-4.4s7 1.6 8.8 4.4c.8 1.2 1.4 2.6 1.6 4.2.3 1.8.2 3.9-.3 6.1-1.2 5.3-4.7 11.7-10.1 18.6zm39.9 4.7c-.7 5.2-4.2 9.7-9.1 11.7-2.4 1-5 1.3-7.6 1-2.5-.3-5-1.1-7.6-2.6-3.6-2-7.2-5.1-11.4-9.7 6.6-8.1 10.6-15.5 12.1-22.1.7-3.1.8-5.9.5-8.5-.4-2.5-1.3-4.8-2.7-6.8-3.1-4.5-8.3-7.1-14.1-7.1s-11 2.7-14.1 7.1c-1.4 2-2.3 4.3-2.7 6.8-.4 2.6-.3 5.5.5 8.5 1.5 6.6 5.6 14.1 12.1 22.2-4.1 4.6-7.8 7.7-11.4 9.7-2.6 1.5-5.1 2.3-7.6 2.6-2.7.3-5.3-.1-7.6-1-4.9-2-8.4-6.5-9.1-11.7-.3-2.5-.1-5 .9-7.8.3-1 .8-2 1.3-3.2.7-1.6 1.5-3.3 2.3-5l.1-.2c6.9-14.9 14.3-30.1 22-44.9l.3-.6c.8-1.5 1.6-3.1 2.4-4.6.8-1.6 1.7-3.1 2.8-4.4 2.1-2.4 4.9-3.7 8-3.7s5.9 1.3 8 3.7c1.1 1.3 2 2.8 2.8 4.4.8 1.5 1.6 3.1 2.4 4.6l.3.6c7.6 14.9 15 30.1 21.9 45v.1c.8 1.6 1.5 3.4 2.3 5 .5 1.2 1 2.2 1.3 3.2.8 2.6 1.1 5.1.7 7.7z" fill="#ff5a5f"/></svg>
 
           <p class="text-xl font-medium text-gray-800 lg:text-2xl lg:leading-normal dark:text-gray-200">
             To say that switching to Preline has been life-changing is an understatement. My business has tripled and I got my life back.
           </p>
 
           <footer class="mt-6">
             <div class="flex items-center">
               <div class="lg:hidden flex-shrink-0">
                 <img class="h-12 w-12 rounded-full" src="https://images.unsplash.com/photo-1671726203390-cdc4354ee2eb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=facearea&facepad=2&w=320&h=320&q=80" alt="Image Description" />
               </div>
               <div class="ml-4 lg:ml-0">
                 <p class="font-medium text-gray-800 dark:text-gray-200">
                   Nicole Grazioso
                 </p>
                 <p class="text-sm text-gray-600 dark:text-gray-400">
                   Head of Finance
                 </p>
               </div>
             </div>
           </footer>
         </blockquote> 
       </div>
        
     </div>
      
   </div>
 </div>
 <div class="max-w-[85rem] px-4 py-10 sm:px-6 lg:px-8 lg:py-14 mx-auto">
    
   <div class="grid md:grid-cols-6 gap-6">
     <div class="md:col-span-2">
       <div class="max-w-xs">
         <h2 class="text-2xl font-bold md:text-3xl md:leading-tight dark:text-white">Frequently<br/>asked questions</h2>
         <p class="mt-1 hidden md:block text-gray-600 dark:text-gray-400">Answers to the most frequently asked questions.</p>
       </div>
     </div>
      
 
     <div class="md:col-span-4">
       <div class="hs-accordion-group divide-y divide-gray-200 dark:divide-gray-700">
         <div class="hs-accordion pb-3 active" id="hs-basic-with-title-and-arrow-stretched-heading-one">
           <button class="hs-accordion-toggle group pb-3 inline-flex items-center justify-between gap-x-3 w-full md:text-lg font-semibold text-left text-gray-800 transition hover:text-gray-500 dark:text-gray-200 dark:hover:text-gray-400" aria-controls="hs-basic-with-title-and-arrow-stretched-collapse-one">
             Can I cancel at anytime?
             <svg class="hs-accordion-active:hidden block w-3 h-3 text-gray-600 group-hover:text-gray-500 dark:text-gray-400" width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
               <path d="M2 5L8.16086 10.6869C8.35239 10.8637 8.64761 10.8637 8.83914 10.6869L15 5" stroke="currentColor" stroke-width="2" stroke-linecap="round"/>
             </svg>
             <svg class="hs-accordion-active:block hidden w-3 h-3 text-gray-600 group-hover:text-gray-500 dark:text-gray-400" width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
               <path d="M2 11L8.16086 5.31305C8.35239 5.13625 8.64761 5.13625 8.83914 5.31305L15 11" stroke="currentColor" stroke-width="2" stroke-linecap="round"/>
             </svg>
           </button>
           <div id="hs-basic-with-title-and-arrow-stretched-collapse-one" class="hs-accordion-content w-full overflow-hidden transition-[height] duration-300" aria-labelledby="hs-basic-with-title-and-arrow-stretched-heading-one">
             <div class="pr-8">
               <p class="text-gray-600 dark:text-gray-400">
                 Yes, you can cancel anytime no questions are asked while you cancel but we would highly appreciate if you will give us some feedback.
               </p>
             </div>
           </div>
         </div>
 
         <div class="hs-accordion pt-6 pb-3" id="hs-basic-with-title-and-arrow-stretched-heading-two">
           <button class="hs-accordion-toggle group pb-3 inline-flex items-center justify-between gap-x-3 w-full md:text-lg font-semibold text-left text-gray-800 transition hover:text-gray-500 dark:text-gray-200 dark:hover:text-gray-400" aria-controls="hs-basic-with-title-and-arrow-stretched-collapse-two">
             My team has credits. How do we use them?
             <svg class="hs-accordion-active:hidden block w-3 h-3 text-gray-600 group-hover:text-gray-500 dark:text-gray-400" width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
               <path d="M2 5L8.16086 10.6869C8.35239 10.8637 8.64761 10.8637 8.83914 10.6869L15 5" stroke="currentColor" stroke-width="2" stroke-linecap="round"/>
             </svg>
             <svg class="hs-accordion-active:block hidden w-3 h-3 text-gray-600 group-hover:text-gray-500 dark:text-gray-400" width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
               <path d="M2 11L8.16086 5.31305C8.35239 5.13625 8.64761 5.13625 8.83914 5.31305L15 11" stroke="currentColor" stroke-width="2" stroke-linecap="round"/>
             </svg>
           </button>
           <div id="hs-basic-with-title-and-arrow-stretched-collapse-two" class="hs-accordion-content hidden w-full overflow-hidden transition-[height] duration-300" aria-labelledby="hs-basic-with-title-and-arrow-stretched-heading-two">
             <div class="pr-8">
               <p class="text-gray-600 dark:text-gray-400">
                 Once your team signs up for a subscription plan. This is where we sit down, grab a cup of coffee and dial in the details.
               </p>
             </div>
           </div>
         </div>
 
         <div class="hs-accordion pt-6 pb-3" id="hs-basic-with-title-and-arrow-stretched-heading-three">
           <button class="hs-accordion-toggle group pb-3 inline-flex items-center justify-between gap-x-3 w-full md:text-lg font-semibold text-left text-gray-800 transition hover:text-gray-500 dark:text-gray-200 dark:hover:text-gray-400" aria-controls="hs-basic-with-title-and-arrow-stretched-collapse-three">
             How does Preline's pricing work?
             <svg class="hs-accordion-active:hidden block w-3 h-3 text-gray-600 group-hover:text-gray-500 dark:text-gray-400" width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
               <path d="M2 5L8.16086 10.6869C8.35239 10.8637 8.64761 10.8637 8.83914 10.6869L15 5" stroke="currentColor" stroke-width="2" stroke-linecap="round"/>
             </svg>
             <svg class="hs-accordion-active:block hidden w-3 h-3 text-gray-600 group-hover:text-gray-500 dark:text-gray-400" width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
               <path d="M2 11L8.16086 5.31305C8.35239 5.13625 8.64761 5.13625 8.83914 5.31305L15 11" stroke="currentColor" stroke-width="2" stroke-linecap="round"/>
             </svg>
           </button>
           <div id="hs-basic-with-title-and-arrow-stretched-collapse-three" class="hs-accordion-content hidden w-full overflow-hidden transition-[height] duration-300" aria-labelledby="hs-basic-with-title-and-arrow-stretched-heading-three">
             <div class="pr-8">
               <p class="text-gray-600 dark:text-gray-400">
                 Our subscriptions are tiered. Understanding the task at hand and ironing out the wrinkles is key.
               </p>
             </div>
           </div>
         </div>
 
         <div class="hs-accordion pt-6 pb-3" id="hs-basic-with-title-and-arrow-stretched-heading-four">
           <button class="hs-accordion-toggle group pb-3 inline-flex items-center justify-between gap-x-3 w-full md:text-lg font-semibold text-left text-gray-800 transition hover:text-gray-500 dark:text-gray-200 dark:hover:text-gray-400" aria-controls="hs-basic-with-title-and-arrow-stretched-collapse-four">
             How secure is Preline?
             <svg class="hs-accordion-active:hidden block w-3 h-3 text-gray-600 group-hover:text-gray-500 dark:text-gray-400" width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
               <path d="M2 5L8.16086 10.6869C8.35239 10.8637 8.64761 10.8637 8.83914 10.6869L15 5" stroke="currentColor" stroke-width="2" stroke-linecap="round"/>
             </svg>
             <svg class="hs-accordion-active:block hidden w-3 h-3 text-gray-600 group-hover:text-gray-500 dark:text-gray-400" width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
               <path d="M2 11L8.16086 5.31305C8.35239 5.13625 8.64761 5.13625 8.83914 5.31305L15 11" stroke="currentColor" stroke-width="2" stroke-linecap="round"/>
             </svg>
           </button>
           <div id="hs-basic-with-title-and-arrow-stretched-collapse-four" class="hs-accordion-content hidden w-full overflow-hidden transition-[height] duration-300" aria-labelledby="hs-basic-with-title-and-arrow-stretched-heading-four">
             <div class="pr-8">
               <p class="text-gray-600 dark:text-gray-400">
                 Protecting the data you trust to Preline is our first priority. This part is really crucial in keeping the project in line to completion.
               </p>
             </div>
           </div>
         </div>
 
         <div class="hs-accordion pt-6 pb-3" id="hs-basic-with-title-and-arrow-stretched-heading-five">
           <button class="hs-accordion-toggle group pb-3 inline-flex items-center justify-between gap-x-3 w-full md:text-lg font-semibold text-left text-gray-800 transition hover:text-gray-500 dark:text-gray-200 dark:hover:text-gray-400" aria-controls="hs-basic-with-title-and-arrow-stretched-collapse-five">
             How do I get access to a theme I purchased?
             <svg class="hs-accordion-active:hidden block w-3 h-3 text-gray-600 group-hover:text-gray-500 dark:text-gray-400" width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
               <path d="M2 5L8.16086 10.6869C8.35239 10.8637 8.64761 10.8637 8.83914 10.6869L15 5" stroke="currentColor" stroke-width="2" stroke-linecap="round"/>
             </svg>
             <svg class="hs-accordion-active:block hidden w-3 h-3 text-gray-600 group-hover:text-gray-500 dark:text-gray-400" width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
               <path d="M2 11L8.16086 5.31305C8.35239 5.13625 8.64761 5.13625 8.83914 5.31305L15 11" stroke="currentColor" stroke-width="2" stroke-linecap="round"/>
             </svg>
           </button>
           <div id="hs-basic-with-title-and-arrow-stretched-collapse-five" class="hs-accordion-content hidden w-full overflow-hidden transition-[height] duration-300" aria-labelledby="hs-basic-with-title-and-arrow-stretched-heading-five">
             <div class="pr-8">
               <p class="text-gray-600 dark:text-gray-400">
                 If you lose the link for a theme you purchased, don't panic! We've got you covered. You can login to your account, tap your avatar in the upper right corner, and tap Purchases. If you didn't create a login or can't remember the information, you can use our handy Redownload page, just remember to use the same email you originally made your purchases with.
               </p>
             </div>
           </div>
         </div>
 
         <div class="hs-accordion pt-6 pb-3" id="hs-basic-with-title-and-arrow-stretched-heading-six">
           <button class="hs-accordion-toggle group pb-3 inline-flex items-center justify-between gap-x-3 w-full md:text-lg font-semibold text-left text-gray-800 transition hover:text-gray-500 dark:text-gray-200 dark:hover:text-gray-400" aria-controls="hs-basic-with-title-and-arrow-stretched-collapse-six">
             Upgrade License Type
             <svg class="hs-accordion-active:hidden block w-3 h-3 text-gray-600 group-hover:text-gray-500 dark:text-gray-400" width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
               <path d="M2 5L8.16086 10.6869C8.35239 10.8637 8.64761 10.8637 8.83914 10.6869L15 5" stroke="currentColor" stroke-width="2" stroke-linecap="round"/>
             </svg>
             <svg class="hs-accordion-active:block hidden w-3 h-3 text-gray-600 group-hover:text-gray-500 dark:text-gray-400" width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
               <path d="M2 11L8.16086 5.31305C8.35239 5.13625 8.64761 5.13625 8.83914 5.31305L15 11" stroke="currentColor" stroke-width="2" stroke-linecap="round"/>
             </svg>
           </button>
           <div id="hs-basic-with-title-and-arrow-stretched-collapse-six" class="hs-accordion-content hidden w-full overflow-hidden transition-[height] duration-300" aria-labelledby="hs-basic-with-title-and-arrow-stretched-heading-six">
             <div class="pr-8">
               <p class="text-gray-600 dark:text-gray-400">
                 There may be times when you need to upgrade your license from the original type you purchased and we have a solution that ensures you can apply your original purchase cost to the new license purchase.
               </p>
             </div>
           </div>
         </div>
       </div>
     </div>
      
   </div>
    
 </div>
 <footer class="relative overflow-hidden">
    
   <div aria-hidden="true" class="flex absolute left-0 -z-[1]">
     <div class="bg-purple-200 opacity-10 blur-3xl w-[1036px] h-[600px] dark:bg-purple-900 dark:opacity-20"></div>
     <div class="bg-slate-200 opacity-20 blur-3xl w-[577px] h-[300px] transform translate-y-32 dark:bg-slate-800/60"></div>
   </div>
    
 
   <div class="w-full max-w-[85rem] py-10 px-4 sm:px-6 lg:px-8 mx-auto">
      
     <div class="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-6 mb-10">
       <div class="col-span-full hidden lg:col-span-1 lg:block">
         <a class="flex-none" href="#">
           <svg class="w-24 h-auto" width="116" height="32" viewBox="0 0 116 32" fill="none" xmlns="http://www.w3.org/2000/svg">
             <path d="M33.5696 30.2968V10.7968H37.4474V13.1789H37.6229C37.7952 12.7972 38.0445 12.4094 38.3707 12.0155C38.7031 11.6154 39.134 11.283 39.6634 11.0183C40.1989 10.7475 40.8636 10.6121 41.6577 10.6121C42.6918 10.6121 43.6458 10.8829 44.5199 11.4246C45.3939 11.9601 46.0926 12.7695 46.6158 13.8529C47.139 14.93 47.4006 16.2811 47.4006 17.9061C47.4006 19.488 47.1451 20.8237 46.6342 21.9132C46.1295 22.9966 45.4401 23.8183 44.5661 24.3784C43.6982 24.9324 42.7256 25.2094 41.6484 25.2094C40.8852 25.2094 40.2358 25.0832 39.7003 24.8308C39.1709 24.5785 38.737 24.2615 38.3984 23.8799C38.0599 23.4921 37.8014 23.1012 37.6229 22.7073H37.5028V30.2968H33.5696ZM37.4197 17.8877C37.4197 18.7309 37.5367 19.4665 37.7706 20.0943C38.0045 20.7222 38.343 21.2115 38.7862 21.5624C39.2294 21.9071 39.768 22.0794 40.402 22.0794C41.0421 22.0794 41.5838 21.904 42.027 21.5532C42.4702 21.1961 42.8056 20.7037 43.0334 20.0759C43.2673 19.4419 43.3842 18.7125 43.3842 17.8877C43.3842 17.069 43.2704 16.3488 43.0426 15.7272C42.8149 15.1055 42.4794 14.6192 42.0362 14.2683C41.593 13.9175 41.0483 13.7421 40.402 13.7421C39.7618 13.7421 39.2202 13.9113 38.777 14.2499C38.34 14.5884 38.0045 15.0685 37.7706 15.6902C37.5367 16.3119 37.4197 17.0444 37.4197 17.8877ZM49.2427 24.9786V10.7968H53.0559V13.2712H53.2037C53.4622 12.391 53.8961 11.7262 54.5055 11.2769C55.1149 10.8214 55.8166 10.5936 56.6106 10.5936C56.8076 10.5936 57.02 10.6059 57.2477 10.6306C57.4754 10.6552 57.6755 10.689 57.8478 10.7321V14.2222C57.6632 14.1668 57.4077 14.1175 57.0815 14.0745C56.7553 14.0314 56.4567 14.0098 56.1859 14.0098C55.6073 14.0098 55.0903 14.136 54.6348 14.3884C54.1854 14.6346 53.8284 14.9793 53.5638 15.4225C53.3052 15.8657 53.176 16.3765 53.176 16.9551V24.9786H49.2427ZM64.9043 25.2556C63.4455 25.2556 62.1898 24.9601 61.1373 24.3692C60.0909 23.7721 59.2845 22.9289 58.7182 21.8394C58.1519 20.7437 57.8688 19.448 57.8688 17.9523C57.8688 16.4935 58.1519 15.2132 58.7182 14.1114C59.2845 13.0096 60.0816 12.1509 61.1096 11.5354C62.1437 10.9199 63.3563 10.6121 64.7474 10.6121C65.683 10.6121 66.5539 10.7629 67.3603 11.0645C68.1728 11.36 68.8806 11.8062 69.4839 12.4033C70.0932 13.0004 70.5672 13.7513 70.9057 14.6561C71.2443 15.5548 71.4135 16.6074 71.4135 17.8138V18.8941H59.4384V16.4566H67.7111C67.7111 15.8903 67.588 15.3886 67.3418 14.9516C67.0956 14.5146 66.754 14.1729 66.317 13.9267C65.8861 13.6744 65.3844 13.5482 64.812 13.5482C64.2149 13.5482 63.6856 13.6867 63.2239 13.9637C62.7684 14.2345 62.4114 14.6007 62.1529 15.0624C61.8944 15.5179 61.762 16.0257 61.7559 16.5858V18.9033C61.7559 19.605 61.8851 20.2113 62.1437 20.7222C62.4083 21.2331 62.7807 21.627 63.2608 21.904C63.741 22.181 64.3103 22.3195 64.9689 22.3195C65.406 22.3195 65.8061 22.2579 66.1692 22.1348C66.5324 22.0117 66.8432 21.8271 67.1018 21.5808C67.3603 21.3346 67.5572 21.033 67.6927 20.676L71.3304 20.9161C71.1458 21.7901 70.7672 22.5534 70.1948 23.2058C69.6285 23.8522 68.896 24.3569 67.9974 24.7201C67.1048 25.0771 66.0738 25.2556 64.9043 25.2556ZM77.1335 6.06949V24.9786H73.2003V6.06949H77.1335ZM79.5043 24.9786V10.7968H83.4375V24.9786H79.5043ZM81.4801 8.96863C80.8954 8.96863 80.3937 8.77474 79.9752 8.38696C79.5628 7.99302 79.3566 7.52214 79.3566 6.97431C79.3566 6.43265 79.5628 5.96792 79.9752 5.58014C80.3937 5.1862 80.8954 4.98923 81.4801 4.98923C82.0649 4.98923 82.5635 5.1862 82.9759 5.58014C83.3944 5.96792 83.6037 6.43265 83.6037 6.97431C83.6037 7.52214 83.3944 7.99302 82.9759 8.38696C82.5635 8.77474 82.0649 8.96863 81.4801 8.96863ZM89.7415 16.7797V24.9786H85.8083V10.7968H89.5569V13.2989H89.723C90.037 12.4741 90.5632 11.8216 91.3019 11.3415C92.0405 10.8552 92.9361 10.6121 93.9887 10.6121C94.9735 10.6121 95.8322 10.8275 96.5647 11.2584C97.2971 11.6893 97.8665 12.3048 98.2728 13.105C98.679 13.899 98.8821 14.8469 98.8821 15.9487V24.9786H94.9489V16.6505C94.9551 15.7826 94.7335 15.1055 94.2841 14.6192C93.8348 14.1268 93.2162 13.8806 92.4283 13.8806C91.8989 13.8806 91.4311 13.9944 91.0249 14.2222C90.6248 14.4499 90.3109 14.7823 90.0831 15.2193C89.8615 15.6502 89.7477 16.1703 89.7415 16.7797ZM107.665 25.2556C106.206 25.2556 104.951 24.9601 103.898 24.3692C102.852 23.7721 102.045 22.9289 101.479 21.8394C100.913 20.7437 100.63 19.448 100.63 17.9523C100.63 16.4935 100.913 15.2132 101.479 14.1114C102.045 13.0096 102.842 12.1509 103.87 11.5354C104.905 10.9199 106.117 10.6121 107.508 10.6121C108.444 10.6121 109.315 10.7629 110.121 11.0645C110.934 11.36 111.641 11.8062 112.245 12.4033C112.854 13.0004 113.328 13.7513 113.667 14.6561C114.005 15.5548 114.174 16.6074 114.174 17.8138V18.8941H102.199V16.4566H110.472C110.472 15.8903 110.349 15.3886 110.103 14.9516C109.856 14.5146 109.515 14.1729 109.078 13.9267C108.647 13.6744 108.145 13.5482 107.573 13.5482C106.976 13.5482 106.446 13.6867 105.985 13.9637C105.529 14.2345 105.172 14.6007 104.914 15.0624C104.655 15.5179 104.523 16.0257 104.517 16.5858V18.9033C104.517 19.605 104.646 20.2113 104.905 20.7222C105.169 21.2331 105.542 21.627 106.022 21.904C106.502 22.181 107.071 22.3195 107.73 22.3195C108.167 22.3195 108.567 22.2579 108.93 22.1348C109.293 22.0117 109.604 21.8271 109.863 21.5808C110.121 21.3346 110.318 21.033 110.454 20.676L114.091 20.9161C113.907 21.7901 113.528 22.5534 112.956 23.2058C112.389 23.8522 111.657 24.3569 110.758 24.7201C109.866 25.0771 108.835 25.2556 107.665 25.2556Z" fill="currentColor" class="fill-violet-600 dark:fill-white"/>
             <path d="M1 28.9786V15.9786C1 9.35116 6.37258 3.97858 13 3.97858C19.6274 3.97858 25 9.35116 25 15.9786C25 22.606 19.6274 27.9786 13 27.9786H12" class="stroke-violet-600 dark:stroke-white" stroke="currentColor" stroke-width="2"/>
             <path d="M5 28.9786V16.1386C5 11.6319 8.58172 7.97858 13 7.97858C17.4183 7.97858 21 11.6319 21 16.1386C21 20.6452 17.4183 24.2986 13 24.2986H12" class="stroke-violet-600 dark:stroke-white" stroke="currentColor" stroke-width="2"/>
             <circle cx="13" cy="16" r="5" fill="currentColor" class="fill-violet-600 dark:fill-white"/>
           </svg>
         </a>
         <p class="mt-3 text-xs sm:text-sm text-gray-600 dark:text-gray-400">© 2023 Preline.</p>
       </div>
        
 
       <div>
         <h4 class="text-xs font-semibold text-gray-900 uppercase dark:text-gray-100">Product</h4>
 
         <div class="mt-3 grid space-y-3 text-sm">
           <p><a class="inline-flex gap-x-2 text-gray-600 hover:text-gray-800 dark:text-gray-400 dark:hover:text-gray-200" href="#">Pricing</a></p>
           <p><a class="inline-flex gap-x-2 text-gray-600 hover:text-gray-800 dark:text-gray-400 dark:hover:text-gray-200" href="#">Changelog</a></p>
           <p><a class="inline-flex gap-x-2 text-gray-600 hover:text-gray-800 dark:text-gray-400 dark:hover:text-gray-200" href="#">Docs</a></p>
           <p><a class="inline-flex gap-x-2 text-gray-600 hover:text-gray-800 dark:text-gray-400 dark:hover:text-gray-200" href="#">Download</a></p>
         </div>
       </div>
        
 
       <div>
         <h4 class="text-xs font-semibold text-gray-900 uppercase dark:text-gray-100">Company</h4>
 
         <div class="mt-3 grid space-y-3 text-sm">
           <p><a class="inline-flex gap-x-2 text-gray-600 hover:text-gray-800 dark:text-gray-400 dark:hover:text-gray-200" href="#">About us</a></p>
           <p><a class="inline-flex gap-x-2 text-gray-600 hover:text-gray-800 dark:text-gray-400 dark:hover:text-gray-200" href="#">Blog</a></p>
           <p><a class="inline-flex gap-x-2 text-gray-600 hover:text-gray-800 dark:text-gray-400 dark:hover:text-gray-200" href="#">Careers</a> <span class="inline text-violet-600 dark:text-violet-500">— We're hiring</span></p>
           <p><a class="inline-flex gap-x-2 text-gray-600 hover:text-gray-800 dark:text-gray-400 dark:hover:text-gray-200" href="#">Customers</a></p>
           <p><a class="inline-flex gap-x-2 text-gray-600 hover:text-gray-800 dark:text-gray-400 dark:hover:text-gray-200" href="#">Newsroom</a></p>
           <p><a class="inline-flex gap-x-2 text-gray-600 hover:text-gray-800 dark:text-gray-400 dark:hover:text-gray-200" href="#">Sitemap</a></p>
         </div>
       </div>
        
 
       <div>
         <h4 class="text-xs font-semibold text-gray-900 uppercase dark:text-gray-100">Resources</h4>
 
         <div class="mt-3 grid space-y-3 text-sm">
           <p><a class="inline-flex gap-x-2 text-gray-600 hover:text-gray-800 dark:text-gray-400 dark:hover:text-gray-200" href="#">Community</a></p>
           <p><a class="inline-flex gap-x-2 text-gray-600 hover:text-gray-800 dark:text-gray-400 dark:hover:text-gray-200" href="#">Help & Support</a></p>
           <p><a class="inline-flex gap-x-2 text-gray-600 hover:text-gray-800 dark:text-gray-400 dark:hover:text-gray-200" href="#">eBook</a></p>
           <p><a class="inline-flex gap-x-2 text-gray-600 hover:text-gray-800 dark:text-gray-400 dark:hover:text-gray-200" href="#">What's New</a></p>
           <p><a class="inline-flex gap-x-2 text-gray-600 hover:text-gray-800 dark:text-gray-400 dark:hover:text-gray-200" href="#">Status</a></p>
         </div>
       </div>
        
 
       <div>
         <h4 class="text-xs font-semibold text-gray-900 uppercase dark:text-gray-100">Developers</h4>
 
         <div class="mt-3 grid space-y-3 text-sm">
           <p><a class="inline-flex gap-x-2 text-gray-600 hover:text-gray-800 dark:text-gray-400 dark:hover:text-gray-200" href="#">Api</a></p>
           <p><a class="inline-flex gap-x-2 text-gray-600 hover:text-gray-800 dark:text-gray-400 dark:hover:text-gray-200" href="#">Status</a></p>
           <p><a class="inline-flex gap-x-2 text-gray-600 hover:text-gray-800 dark:text-gray-400 dark:hover:text-gray-200" href="#">GitHub</a> <span class="inline text-violet-600 dark:text-violet-500">— New</span></p>
         </div>
 
         <h4 class="mt-7 text-xs font-semibold text-gray-900 uppercase dark:text-gray-100">Industries</h4>
 
         <div class="mt-3 grid space-y-3 text-sm">
           <p><a class="inline-flex gap-x-2 text-gray-600 hover:text-gray-800 dark:text-gray-400 dark:hover:text-gray-200" href="#">Financial Services</a></p>
           <p><a class="inline-flex gap-x-2 text-gray-600 hover:text-gray-800 dark:text-gray-400 dark:hover:text-gray-200" href="#">Education</a></p>
         </div>
       </div>
        
     </div>
      
 
     <div class="pt-5 mt-5 border-t border-gray-200 dark:border-gray-700">
       <div class="sm:flex sm:justify-between sm:items-center">
         <div class="flex items-center gap-x-3">
           <div class="hs-dropdown relative inline-flex [--placement:top-left]">
             <button id="footer-language-dropdown" type="button" class="hs-dropdown-toggle py-2 px-3 inline-flex justify-center items-center gap-2 rounded-md border bg-white text-gray-700 align-middle hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-white focus:ring-violet-600 transition-all text-sm dark:bg-slate-900 dark:hover:bg-slate-800 dark:border-gray-700 dark:text-gray-400 dark:hover:text-white dark:focus:ring-offset-gray-800">
               <svg class="w-3 h-3 rounded-full" xmlns="http://www.w3.org/2000/svg" id="flag-icon-css-us" viewBox="0 0 512 512">
                 <g fill-rule="evenodd">
                   <g stroke-width="1pt">
                     <path fill="#bd3d44" d="M0 0h247v10H0zm0 20h247v10H0zm0 20h247v10H0zm0 20h247v10H0zm0 20h247v10H0zm0 20h247v10H0zm0 20h247v10H0z" transform="scale(3.9385)"/>
                     <path fill="#fff" d="M0 10h247v10H0zm0 20h247v10H0zm0 20h247v10H0zm0 20h247v10H0zm0 20h247v10H0zm0 20h247v10H0z" transform="scale(3.9385)"/>
                   </g>
                   <path fill="#192f5d" d="M0 0h98.8v70H0z" transform="scale(3.9385)"/>
                   <path fill="#fff" d="M8.2 3l1 2.8H12L9.7 7.5l.9 2.7-2.4-1.7L6 10.2l.9-2.7-2.4-1.7h3zm16.5 0l.9 2.8h2.9l-2.4 1.7 1 2.7-2.4-1.7-2.4 1.7 1-2.7-2.4-1.7h2.9zm16.5 0l.9 2.8H45l-2.4 1.7 1 2.7-2.4-1.7-2.4 1.7 1-2.7-2.4-1.7h2.9zm16.4 0l1 2.8h2.8l-2.3 1.7.9 2.7-2.4-1.7-2.3 1.7.9-2.7-2.4-1.7h3zm16.5 0l.9 2.8h2.9l-2.4 1.7 1 2.7L74 8.5l-2.3 1.7.9-2.7-2.4-1.7h2.9zm16.5 0l.9 2.8h2.9L92 7.5l1 2.7-2.4-1.7-2.4 1.7 1-2.7-2.4-1.7h2.9zm-74.1 7l.9 2.8h2.9l-2.4 1.7 1 2.7-2.4-1.7-2.4 1.7 1-2.7-2.4-1.7h2.9zm16.4 0l1 2.8h2.8l-2.3 1.7.9 2.7-2.4-1.7-2.3 1.7.9-2.7-2.4-1.7h3zm16.5 0l.9 2.8h2.9l-2.4 1.7 1 2.7-2.4-1.7-2.4 1.7 1-2.7-2.4-1.7h2.9zm16.5 0l.9 2.8h2.9l-2.4 1.7 1 2.7-2.4-1.7-2.4 1.7 1-2.7-2.4-1.7H65zm16.4 0l1 2.8H86l-2.3 1.7.9 2.7-2.4-1.7-2.3 1.7.9-2.7-2.4-1.7h3zm-74 7l.8 2.8h3l-2.4 1.7.9 2.7-2.4-1.7L6 24.2l.9-2.7-2.4-1.7h3zm16.4 0l.9 2.8h2.9l-2.3 1.7.9 2.7-2.4-1.7-2.3 1.7.9-2.7-2.4-1.7h2.9zm16.5 0l.9 2.8H45l-2.4 1.7 1 2.7-2.4-1.7-2.4 1.7 1-2.7-2.4-1.7h2.9zm16.4 0l1 2.8h2.8l-2.3 1.7.9 2.7-2.4-1.7-2.3 1.7.9-2.7-2.4-1.7h3zm16.5 0l.9 2.8h2.9l-2.3 1.7.9 2.7-2.4-1.7-2.3 1.7.9-2.7-2.4-1.7h2.9zm16.5 0l.9 2.8h2.9L92 21.5l1 2.7-2.4-1.7-2.4 1.7 1-2.7-2.4-1.7h2.9zm-74.1 7l.9 2.8h2.9l-2.4 1.7 1 2.7-2.4-1.7-2.4 1.7 1-2.7-2.4-1.7h2.9zm16.4 0l1 2.8h2.8l-2.3 1.7.9 2.7-2.4-1.7-2.3 1.7.9-2.7-2.4-1.7h3zm16.5 0l.9 2.8h2.9l-2.3 1.7.9 2.7-2.4-1.7-2.3 1.7.9-2.7-2.4-1.7h2.9zm16.5 0l.9 2.8h2.9l-2.4 1.7 1 2.7-2.4-1.7-2.4 1.7 1-2.7-2.4-1.7H65zm16.4 0l1 2.8H86l-2.3 1.7.9 2.7-2.4-1.7-2.3 1.7.9-2.7-2.4-1.7h3zm-74 7l.8 2.8h3l-2.4 1.7.9 2.7-2.4-1.7L6 38.2l.9-2.7-2.4-1.7h3zm16.4 0l.9 2.8h2.9l-2.3 1.7.9 2.7-2.4-1.7-2.3 1.7.9-2.7-2.4-1.7h2.9zm16.5 0l.9 2.8H45l-2.4 1.7 1 2.7-2.4-1.7-2.4 1.7 1-2.7-2.4-1.7h2.9zm16.4 0l1 2.8h2.8l-2.3 1.7.9 2.7-2.4-1.7-2.3 1.7.9-2.7-2.4-1.7h3zm16.5 0l.9 2.8h2.9l-2.3 1.7.9 2.7-2.4-1.7-2.3 1.7.9-2.7-2.4-1.7h2.9zm16.5 0l.9 2.8h2.9L92 35.5l1 2.7-2.4-1.7-2.4 1.7 1-2.7-2.4-1.7h2.9zm-74.1 7l.9 2.8h2.9l-2.4 1.7 1 2.7-2.4-1.7-2.4 1.7 1-2.7-2.4-1.7h2.9zm16.4 0l1 2.8h2.8l-2.3 1.7.9 2.7-2.4-1.7-2.3 1.7.9-2.7-2.4-1.7h3zm16.5 0l.9 2.8h2.9l-2.3 1.7.9 2.7-2.4-1.7-2.3 1.7.9-2.7-2.4-1.7h2.9zm16.5 0l.9 2.8h2.9l-2.4 1.7 1 2.7-2.4-1.7-2.4 1.7 1-2.7-2.4-1.7H65zm16.4 0l1 2.8H86l-2.3 1.7.9 2.7-2.4-1.7-2.3 1.7.9-2.7-2.4-1.7h3zm-74 7l.8 2.8h3l-2.4 1.7.9 2.7-2.4-1.7L6 52.2l.9-2.7-2.4-1.7h3zm16.4 0l.9 2.8h2.9l-2.3 1.7.9 2.7-2.4-1.7-2.3 1.7.9-2.7-2.4-1.7h2.9zm16.5 0l.9 2.8H45l-2.4 1.7 1 2.7-2.4-1.7-2.4 1.7 1-2.7-2.4-1.7h2.9zm16.4 0l1 2.8h2.8l-2.3 1.7.9 2.7-2.4-1.7-2.3 1.7.9-2.7-2.4-1.7h3zm16.5 0l.9 2.8h2.9l-2.3 1.7.9 2.7-2.4-1.7-2.3 1.7.9-2.7-2.4-1.7h2.9zm16.5 0l.9 2.8h2.9L92 49.5l1 2.7-2.4-1.7-2.4 1.7 1-2.7-2.4-1.7h2.9zm-74.1 7l.9 2.8h2.9l-2.4 1.7 1 2.7-2.4-1.7-2.4 1.7 1-2.7-2.4-1.7h2.9zm16.4 0l1 2.8h2.8l-2.3 1.7.9 2.7-2.4-1.7-2.3 1.7.9-2.7-2.4-1.7h3zm16.5 0l.9 2.8h2.9l-2.3 1.7.9 2.7-2.4-1.7-2.3 1.7.9-2.7-2.4-1.7h2.9zm16.5 0l.9 2.8h2.9l-2.4 1.7 1 2.7-2.4-1.7-2.4 1.7 1-2.7-2.4-1.7H65zm16.4 0l1 2.8H86l-2.3 1.7.9 2.7-2.4-1.7-2.3 1.7.9-2.7-2.4-1.7h3zm-74 7l.8 2.8h3l-2.4 1.7.9 2.7-2.4-1.7L6 66.2l.9-2.7-2.4-1.7h3zm16.4 0l.9 2.8h2.9l-2.3 1.7.9 2.7-2.4-1.7-2.3 1.7.9-2.7-2.4-1.7h2.9zm16.5 0l.9 2.8H45l-2.4 1.7 1 2.7-2.4-1.7-2.4 1.7 1-2.7-2.4-1.7h2.9zm16.4 0l1 2.8h2.8l-2.3 1.7.9 2.7-2.4-1.7-2.3 1.7.9-2.7-2.4-1.7h3zm16.5 0l.9 2.8h2.9l-2.3 1.7.9 2.7-2.4-1.7-2.3 1.7.9-2.7-2.4-1.7h2.9zm16.5 0l.9 2.8h2.9L92 63.5l1 2.7-2.4-1.7-2.4 1.7 1-2.7-2.4-1.7h2.9z" transform="scale(3.9385)"/>
                 </g>
               </svg>
               English (US)
               <svg class="hs-dropdown-open:rotate-180 w-2.5 h-2.5 text-gray-600" width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                 <path d="M2 11L8.16086 5.31305C8.35239 5.13625 8.64761 5.13625 8.83914 5.31305L15 11" stroke="currentColor" stroke-width="2" stroke-linecap="round"/>
               </svg>
             </button>
 
             <div class="hs-dropdown-menu w-40 transition-[opacity,margin] duration hs-dropdown-open:opacity-100 opacity-0 hidden z-10 bg-white shadow-md rounded-lg p-2 dark:bg-gray-800 dark:border dark:border-gray-700 dark:divide-gray-700" aria-labelledby="footer-language-dropdown">
               <a class="flex items-center gap-x-2 py-2 px-3 rounded-md text-sm text-gray-800 hover:bg-gray-100 focus:ring-2 focus:ring-violet-500 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-gray-300" href="#">
                 <svg class="w-3.5 h-3.5 rounded-full" xmlns="http://www.w3.org/2000/svg" id="flag-icon-css-us" viewBox="0 0 512 512">
                   <g fill-rule="evenodd">
                     <g stroke-width="1pt">
                       <path fill="#bd3d44" d="M0 0h247v10H0zm0 20h247v10H0zm0 20h247v10H0zm0 20h247v10H0zm0 20h247v10H0zm0 20h247v10H0zm0 20h247v10H0z" transform="scale(3.9385)"/>
                       <path fill="#fff" d="M0 10h247v10H0zm0 20h247v10H0zm0 20h247v10H0zm0 20h247v10H0zm0 20h247v10H0zm0 20h247v10H0z" transform="scale(3.9385)"/>
                     </g>
                     <path fill="#192f5d" d="M0 0h98.8v70H0z" transform="scale(3.9385)"/>
                     <path fill="#fff" d="M8.2 3l1 2.8H12L9.7 7.5l.9 2.7-2.4-1.7L6 10.2l.9-2.7-2.4-1.7h3zm16.5 0l.9 2.8h2.9l-2.4 1.7 1 2.7-2.4-1.7-2.4 1.7 1-2.7-2.4-1.7h2.9zm16.5 0l.9 2.8H45l-2.4 1.7 1 2.7-2.4-1.7-2.4 1.7 1-2.7-2.4-1.7h2.9zm16.4 0l1 2.8h2.8l-2.3 1.7.9 2.7-2.4-1.7-2.3 1.7.9-2.7-2.4-1.7h3zm16.5 0l.9 2.8h2.9l-2.4 1.7 1 2.7L74 8.5l-2.3 1.7.9-2.7-2.4-1.7h2.9zm16.5 0l.9 2.8h2.9L92 7.5l1 2.7-2.4-1.7-2.4 1.7 1-2.7-2.4-1.7h2.9zm-74.1 7l.9 2.8h2.9l-2.4 1.7 1 2.7-2.4-1.7-2.4 1.7 1-2.7-2.4-1.7h2.9zm16.4 0l1 2.8h2.8l-2.3 1.7.9 2.7-2.4-1.7-2.3 1.7.9-2.7-2.4-1.7h3zm16.5 0l.9 2.8h2.9l-2.4 1.7 1 2.7-2.4-1.7-2.4 1.7 1-2.7-2.4-1.7h2.9zm16.5 0l.9 2.8h2.9l-2.4 1.7 1 2.7-2.4-1.7-2.4 1.7 1-2.7-2.4-1.7H65zm16.4 0l1 2.8H86l-2.3 1.7.9 2.7-2.4-1.7-2.3 1.7.9-2.7-2.4-1.7h3zm-74 7l.8 2.8h3l-2.4 1.7.9 2.7-2.4-1.7L6 24.2l.9-2.7-2.4-1.7h3zm16.4 0l.9 2.8h2.9l-2.3 1.7.9 2.7-2.4-1.7-2.3 1.7.9-2.7-2.4-1.7h2.9zm16.5 0l.9 2.8H45l-2.4 1.7 1 2.7-2.4-1.7-2.4 1.7 1-2.7-2.4-1.7h2.9zm16.4 0l1 2.8h2.8l-2.3 1.7.9 2.7-2.4-1.7-2.3 1.7.9-2.7-2.4-1.7h3zm16.5 0l.9 2.8h2.9l-2.3 1.7.9 2.7-2.4-1.7-2.3 1.7.9-2.7-2.4-1.7h2.9zm16.5 0l.9 2.8h2.9L92 21.5l1 2.7-2.4-1.7-2.4 1.7 1-2.7-2.4-1.7h2.9zm-74.1 7l.9 2.8h2.9l-2.4 1.7 1 2.7-2.4-1.7-2.4 1.7 1-2.7-2.4-1.7h2.9zm16.4 0l1 2.8h2.8l-2.3 1.7.9 2.7-2.4-1.7-2.3 1.7.9-2.7-2.4-1.7h3zm16.5 0l.9 2.8h2.9l-2.3 1.7.9 2.7-2.4-1.7-2.3 1.7.9-2.7-2.4-1.7h2.9zm16.5 0l.9 2.8h2.9l-2.4 1.7 1 2.7-2.4-1.7-2.4 1.7 1-2.7-2.4-1.7H65zm16.4 0l1 2.8H86l-2.3 1.7.9 2.7-2.4-1.7-2.3 1.7.9-2.7-2.4-1.7h3zm-74 7l.8 2.8h3l-2.4 1.7.9 2.7-2.4-1.7L6 38.2l.9-2.7-2.4-1.7h3zm16.4 0l.9 2.8h2.9l-2.3 1.7.9 2.7-2.4-1.7-2.3 1.7.9-2.7-2.4-1.7h2.9zm16.5 0l.9 2.8H45l-2.4 1.7 1 2.7-2.4-1.7-2.4 1.7 1-2.7-2.4-1.7h2.9zm16.4 0l1 2.8h2.8l-2.3 1.7.9 2.7-2.4-1.7-2.3 1.7.9-2.7-2.4-1.7h3zm16.5 0l.9 2.8h2.9l-2.3 1.7.9 2.7-2.4-1.7-2.3 1.7.9-2.7-2.4-1.7h2.9zm16.5 0l.9 2.8h2.9L92 35.5l1 2.7-2.4-1.7-2.4 1.7 1-2.7-2.4-1.7h2.9zm-74.1 7l.9 2.8h2.9l-2.4 1.7 1 2.7-2.4-1.7-2.4 1.7 1-2.7-2.4-1.7h2.9zm16.4 0l1 2.8h2.8l-2.3 1.7.9 2.7-2.4-1.7-2.3 1.7.9-2.7-2.4-1.7h3zm16.5 0l.9 2.8h2.9l-2.3 1.7.9 2.7-2.4-1.7-2.3 1.7.9-2.7-2.4-1.7h2.9zm16.5 0l.9 2.8h2.9l-2.4 1.7 1 2.7-2.4-1.7-2.4 1.7 1-2.7-2.4-1.7H65zm16.4 0l1 2.8H86l-2.3 1.7.9 2.7-2.4-1.7-2.3 1.7.9-2.7-2.4-1.7h3zm-74 7l.8 2.8h3l-2.4 1.7.9 2.7-2.4-1.7L6 52.2l.9-2.7-2.4-1.7h3zm16.4 0l.9 2.8h2.9l-2.3 1.7.9 2.7-2.4-1.7-2.3 1.7.9-2.7-2.4-1.7h2.9zm16.5 0l.9 2.8H45l-2.4 1.7 1 2.7-2.4-1.7-2.4 1.7 1-2.7-2.4-1.7h2.9zm16.4 0l1 2.8h2.8l-2.3 1.7.9 2.7-2.4-1.7-2.3 1.7.9-2.7-2.4-1.7h3zm16.5 0l.9 2.8h2.9l-2.3 1.7.9 2.7-2.4-1.7-2.3 1.7.9-2.7-2.4-1.7h2.9zm16.5 0l.9 2.8h2.9L92 49.5l1 2.7-2.4-1.7-2.4 1.7 1-2.7-2.4-1.7h2.9zm-74.1 7l.9 2.8h2.9l-2.4 1.7 1 2.7-2.4-1.7-2.4 1.7 1-2.7-2.4-1.7h2.9zm16.4 0l1 2.8h2.8l-2.3 1.7.9 2.7-2.4-1.7-2.3 1.7.9-2.7-2.4-1.7h3zm16.5 0l.9 2.8h2.9l-2.3 1.7.9 2.7-2.4-1.7-2.3 1.7.9-2.7-2.4-1.7h2.9zm16.5 0l.9 2.8h2.9l-2.4 1.7 1 2.7-2.4-1.7-2.4 1.7 1-2.7-2.4-1.7H65zm16.4 0l1 2.8H86l-2.3 1.7.9 2.7-2.4-1.7-2.3 1.7.9-2.7-2.4-1.7h3zm-74 7l.8 2.8h3l-2.4 1.7.9 2.7-2.4-1.7L6 66.2l.9-2.7-2.4-1.7h3zm16.4 0l.9 2.8h2.9l-2.3 1.7.9 2.7-2.4-1.7-2.3 1.7.9-2.7-2.4-1.7h2.9zm16.5 0l.9 2.8H45l-2.4 1.7 1 2.7-2.4-1.7-2.4 1.7 1-2.7-2.4-1.7h2.9zm16.4 0l1 2.8h2.8l-2.3 1.7.9 2.7-2.4-1.7-2.3 1.7.9-2.7-2.4-1.7h3zm16.5 0l.9 2.8h2.9l-2.3 1.7.9 2.7-2.4-1.7-2.3 1.7.9-2.7-2.4-1.7h2.9zm16.5 0l.9 2.8h2.9L92 63.5l1 2.7-2.4-1.7-2.4 1.7 1-2.7-2.4-1.7h2.9z" transform="scale(3.9385)"/>
                   </g>
                 </svg>
                 English (US)
               </a>
               <a class="flex items-center gap-x-2 py-2 px-3 rounded-md text-sm text-gray-800 hover:bg-gray-100 focus:ring-2 focus:ring-violet-500 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-gray-300" href="#">
                 <svg class="w-3 h-3 rounded-full" xmlns="http://www.w3.org/2000/svg" id="flag-icon-css-de" viewBox="0 0 512 512">
                   <path fill="#ffce00" d="M0 341.3h512V512H0z"/>
                   <path d="M0 0h512v170.7H0z"/>
                   <path fill="#d00" d="M0 170.7h512v170.6H0z"/>
                 </svg>
                 Deutsch
               </a>
               <a class="flex items-center gap-x-2 py-2 px-3 rounded-md text-sm text-gray-800 hover:bg-gray-100 focus:ring-2 focus:ring-violet-500 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-gray-300" href="#">
                 <svg class="w-3 h-3 rounded-full" xmlns="http://www.w3.org/2000/svg" id="flag-icon-css-dk" viewBox="0 0 512 512">
                   <path fill="#c8102e" d="M0 0h512.1v512H0z"/>
                   <path fill="#fff" d="M144 0h73.1v512H144z"/>
                   <path fill="#fff" d="M0 219.4h512.1v73.2H0z"/>
                 </svg>
                 Dansk
               </a>
               <a class="flex items-center gap-x-2 py-2 px-3 rounded-md text-sm text-gray-800 hover:bg-gray-100 focus:ring-2 focus:ring-violet-500 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-gray-300" href="#">
                 <svg class="w-3 h-3 rounded-full" xmlns="http://www.w3.org/2000/svg" id="flag-icon-css-it" viewBox="0 0 512 512">
                   <g fill-rule="evenodd" stroke-width="1pt">
                     <path fill="#fff" d="M0 0h512v512H0z"/>
                     <path fill="#009246" d="M0 0h170.7v512H0z"/>
                     <path fill="#ce2b37" d="M341.3 0H512v512H341.3z"/>
                   </g>
                 </svg>
                 Italiano
               </a>
               <a class="flex items-center gap-x-2 py-2 px-3 rounded-md text-sm text-gray-800 hover:bg-gray-100 focus:ring-2 focus:ring-violet-500 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-gray-300" href="#">
               </a>
             </div>
           </div>
 
           <div class="space-x-4 text-sm ml-4">
             <a class="inline-flex gap-x-2 text-gray-600 hover:text-gray-800 dark:text-gray-400 dark:hover:text-gray-200" href="#">Terms</a>
             <a class="inline-flex gap-x-2 text-gray-600 hover:text-gray-800 dark:text-gray-400 dark:hover:text-gray-200" href="#">Privacy</a>
             <a class="inline-flex gap-x-2 text-gray-600 hover:text-gray-800 dark:text-gray-400 dark:hover:text-gray-200" href="#">Status</a>
           </div>
         </div>
 
         <div class="flex justify-between items-center">
           <div class="mt-3 sm:hidden">
             <a class="flex-none text-xl font-semibold dark:text-white" href="#" aria-label="Brand">Brand</a>
             <p class="mt-1 text-xs sm:text-sm text-gray-600 dark:text-gray-400">© 2022 Preline.</p>
           </div>
           <div class="space-x-4">
             <a class="inline-block text-gray-500 hover:text-gray-800 dark:hover:text-gray-200" href="#">
               <svg class="w-4 h-4" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
                 <path d="M5.026 15c6.038 0 9.341-5.003 9.341-9.334 0-.14 0-.282-.006-.422A6.685 6.685 0 0 0 16 3.542a6.658 6.658 0 0 1-1.889.518 3.301 3.301 0 0 0 1.447-1.817 6.533 6.533 0 0 1-2.087.793A3.286 3.286 0 0 0 7.875 6.03a9.325 9.325 0 0 1-6.767-3.429 3.289 3.289 0 0 0 1.018 4.382A3.323 3.323 0 0 1 .64 6.575v.045a3.288 3.288 0 0 0 2.632 3.218 3.203 3.203 0 0 1-.865.115 3.23 3.23 0 0 1-.614-.057 3.283 3.283 0 0 0 3.067 2.277A6.588 6.588 0 0 1 .78 13.58a6.32 6.32 0 0 1-.78-.045A9.344 9.344 0 0 0 5.026 15z"/>
               </svg>
             </a>
             <a class="inline-block text-gray-500 hover:text-gray-800 dark:hover:text-gray-200" href="#">
               <svg class="w-4 h-4" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
                 <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.012 8.012 0 0 0 16 8c0-4.42-3.58-8-8-8z"/>
               </svg>
             </a>
             <a class="inline-block text-gray-500 hover:text-gray-800 dark:hover:text-gray-200" href="#">
               <svg class="w-4 h-4" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
                 <path d="M3.362 10.11c0 .926-.756 1.681-1.681 1.681S0 11.036 0 10.111C0 9.186.756 8.43 1.68 8.43h1.682v1.68zm.846 0c0-.924.756-1.68 1.681-1.68s1.681.756 1.681 1.68v4.21c0 .924-.756 1.68-1.68 1.68a1.685 1.685 0 0 1-1.682-1.68v-4.21zM5.89 3.362c-.926 0-1.682-.756-1.682-1.681S4.964 0 5.89 0s1.68.756 1.68 1.68v1.682H5.89zm0 .846c.924 0 1.68.756 1.68 1.681S6.814 7.57 5.89 7.57H1.68C.757 7.57 0 6.814 0 5.89c0-.926.756-1.682 1.68-1.682h4.21zm6.749 1.682c0-.926.755-1.682 1.68-1.682.925 0 1.681.756 1.681 1.681s-.756 1.681-1.68 1.681h-1.681V5.89zm-.848 0c0 .924-.755 1.68-1.68 1.68A1.685 1.685 0 0 1 8.43 5.89V1.68C8.43.757 9.186 0 10.11 0c.926 0 1.681.756 1.681 1.68v4.21zm-1.681 6.748c.926 0 1.682.756 1.682 1.681S11.036 16 10.11 16s-1.681-.756-1.681-1.68v-1.682h1.68zm0-.847c-.924 0-1.68-.755-1.68-1.68 0-.925.756-1.681 1.68-1.681h4.21c.924 0 1.68.756 1.68 1.68 0 .926-.756 1.681-1.68 1.681h-4.21z"/>
               </svg>
             </a>
           </div> 
         </div>
          
       </div>
     </div>
   </div>
 </footer>
    </main>
  )
}
