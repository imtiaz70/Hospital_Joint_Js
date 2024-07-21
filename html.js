


let cardStarting = `<div class="w-screen h-[65rem] bg-[#0b3842] flex flex-col gap-14" >`;
let cardEnd = `</div>`;

// let logo = `<div class="text-white font-semibold" >Logo</div>`;

// let dashboardSvg = `<svg fill="white" viewBox="0 0 32 32" version="1.1" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <title>grid1</title> <path d="M8 15h7v-7h-7v7zM17 8v7h7v-7h-7zM17 24h7v-7h-7v7zM8 24h7v-7h-7v7z"></path> </g></svg>`;
// let cardSvg = `<svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path fill-rule="evenodd" clip-rule="evenodd" d="M21.1009 8.00353C21.0442 7.99996 20.9825 7.99998 20.9186 8L20.9026 8.00001H18.3941C16.3264 8.00001 14.5572 9.62757 14.5572 11.75C14.5572 13.8724 16.3264 15.5 18.3941 15.5H20.9026L20.9186 15.5C20.9825 15.5 21.0442 15.5001 21.1009 15.4965C21.9408 15.4434 22.6835 14.7862 22.746 13.8682C22.7501 13.808 22.75 13.7431 22.75 13.683L22.75 13.6667V9.83334L22.75 9.81702C22.75 9.75688 22.7501 9.69199 22.746 9.6318C22.6835 8.71381 21.9408 8.05657 21.1009 8.00353ZM18.1717 12.75C18.704 12.75 19.1355 12.3023 19.1355 11.75C19.1355 11.1977 18.704 10.75 18.1717 10.75C17.6394 10.75 17.2078 11.1977 17.2078 11.75C17.2078 12.3023 17.6394 12.75 18.1717 12.75Z" fill="#ffffff"></path> <path fill-rule="evenodd" clip-rule="evenodd" d="M20.9179 17C21.067 16.9961 21.1799 17.1342 21.1394 17.2778C20.9387 17.9902 20.62 18.5975 20.1088 19.1088C19.3604 19.8571 18.4114 20.1892 17.239 20.3469C16.0998 20.5 14.6442 20.5 12.8064 20.5H10.6936C8.85583 20.5 7.40019 20.5 6.26098 20.3469C5.08856 20.1892 4.13961 19.8571 3.39124 19.1088C2.64288 18.3604 2.31076 17.4114 2.15314 16.239C1.99997 15.0998 1.99998 13.6442 2 11.8064V11.6936C1.99998 9.85583 1.99997 8.40019 2.15314 7.26098C2.31076 6.08856 2.64288 5.13961 3.39124 4.39124C4.13961 3.64288 5.08856 3.31076 6.26098 3.15314C7.40019 2.99997 8.85582 2.99998 10.6936 3L12.8064 3C14.6442 2.99998 16.0998 2.99997 17.239 3.15314C18.4114 3.31076 19.3604 3.64288 20.1088 4.39124C20.62 4.90252 20.9386 5.50974 21.1394 6.22218C21.1799 6.36575 21.067 6.50387 20.9179 6.5L18.394 6.50001C15.5574 6.50001 13.0571 8.74091 13.0571 11.75C13.0571 14.7591 15.5574 17 18.394 17L20.9179 17ZM7 15.5C6.58579 15.5 6.25 15.1642 6.25 14.75V8.75C6.25 8.33579 6.58579 8 7 8C7.41421 8 7.75 8.33579 7.75 8.75V14.75C7.75 15.1642 7.41421 15.5 7 15.5Z" fill="#ffffff"></path> </g></svg>`;
// let staticSvg = `<svg fill="#ffffff" viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg" stroke="#ffffff"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"><title>ionicons-v5-p</title><path d="M480,496H48a32,32,0,0,1-32-32V32a16,16,0,0,1,32,0V464H480a16,16,0,0,1,0,32Z"></path><path d="M156,432H116a36,36,0,0,1-36-36V244a36,36,0,0,1,36-36h40a36,36,0,0,1,36,36V396A36,36,0,0,1,156,432Z"></path><path d="M300,432H260a36,36,0,0,1-36-36V196a36,36,0,0,1,36-36h40a36,36,0,0,1,36,36V396A36,36,0,0,1,300,432Z"></path><path d="M443.64,432h-40a36,36,0,0,1-36-36V132a36,36,0,0,1,36-36h40a36,36,0,0,1,36,36V396A36,36,0,0,1,443.64,432Z"></path></g></svg>`;
// let PremiumSvg = `<svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path fill-rule="evenodd" clip-rule="evenodd" d="M21.8382 11.1263L21.609 13.5616C21.2313 17.5742 21.0425 19.5805 19.8599 20.7902C18.6773 22 16.9048 22 13.3599 22H10.6401C7.09517 22 5.32271 22 4.14009 20.7902C2.95748 19.5805 2.76865 17.5742 2.391 13.5616L2.16181 11.1263C1.9818 9.2137 1.8918 8.25739 2.21899 7.86207C2.39598 7.64823 2.63666 7.5172 2.89399 7.4946C3.36968 7.45282 3.96708 8.1329 5.16187 9.49307C5.77977 10.1965 6.08872 10.5482 6.43337 10.6027C6.62434 10.6328 6.81892 10.6018 6.99526 10.5131C7.31351 10.3529 7.5257 9.91812 7.95007 9.04852L10.1869 4.46486C10.9888 2.82162 11.3898 2 12 2C12.6102 2 13.0112 2.82162 13.8131 4.46485L16.0499 9.04851C16.4743 9.91812 16.6865 10.3529 17.0047 10.5131C17.1811 10.6018 17.3757 10.6328 17.5666 10.6027C17.9113 10.5482 18.2202 10.1965 18.8381 9.49307C20.0329 8.1329 20.6303 7.45282 21.106 7.4946C21.3633 7.5172 21.604 7.64823 21.781 7.86207C22.1082 8.25739 22.0182 9.2137 21.8382 11.1263ZM12.9524 12.699L12.8541 12.5227C12.4741 11.841 12.2841 11.5002 12 11.5002C11.7159 11.5002 11.5259 11.841 11.1459 12.5227L11.0476 12.699C10.9397 12.8927 10.8857 12.9896 10.8015 13.0535C10.7173 13.1174 10.6125 13.1411 10.4028 13.1886L10.2119 13.2318C9.47396 13.3987 9.10501 13.4822 9.01723 13.7645C8.92945 14.0468 9.18097 14.3409 9.68403 14.9291L9.81418 15.0813C9.95713 15.2485 10.0286 15.3321 10.0608 15.4355C10.0929 15.5389 10.0821 15.6504 10.0605 15.8734L10.0408 16.0765C9.96476 16.8613 9.92674 17.2538 10.1565 17.4282C10.3864 17.6027 10.7318 17.4436 11.4227 17.1255L11.6014 17.0432C11.7978 16.9528 11.8959 16.9076 12 16.9076C12.1041 16.9076 12.2022 16.9528 12.3986 17.0432L12.5773 17.1255C13.2682 17.4436 13.6136 17.6027 13.8435 17.4282C14.0733 17.2538 14.0352 16.8613 13.9592 16.0765L13.9395 15.8734C13.9179 15.6504 13.9071 15.5389 13.9392 15.4355C13.9714 15.3321 14.0429 15.2485 14.1858 15.0813L14.316 14.9291C14.819 14.3409 15.0706 14.0468 14.9828 13.7645C14.895 13.4822 14.526 13.3987 13.7881 13.2318L13.5972 13.1886C13.3875 13.1411 13.2827 13.1174 13.1985 13.0535C13.1143 12.9896 13.0603 12.8927 12.9524 12.699Z" fill="#ffffff"></path> </g></svg>`;
// let profileSvg = `<svg  viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"><path fill-rule="evenodd" clip-rule="evenodd" d="M16.5 7.063C16.5 10.258 14.57 13 12 13c-2.572 0-4.5-2.742-4.5-5.938C7.5 3.868 9.16 2 12 2s4.5 1.867 4.5 5.063zM4.102 20.142C4.487 20.6 6.145 22 12 22c5.855 0 7.512-1.4 7.898-1.857a.416.416 0 0 0 .09-.317C19.9 18.944 19.106 15 12 15s-7.9 3.944-7.989 4.826a.416.416 0 0 0 .091.317z" fill="#ffffff"></path></g></svg>`;
// let settingSvg = `<svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M20.1 9.2214C18.29 9.2214 17.55 7.9414 18.45 6.3714C18.97 5.4614 18.66 4.3014 17.75 3.7814L16.02 2.7914C15.23 2.3214 14.21 2.6014 13.74 3.3914L13.63 3.5814C12.73 5.1514 11.25 5.1514 10.34 3.5814L10.23 3.3914C9.78 2.6014 8.76 2.3214 7.97 2.7914L6.24 3.7814C5.33 4.3014 5.02 5.4714 5.54 6.3814C6.45 7.9414 5.71 9.2214 3.9 9.2214C2.86 9.2214 2 10.0714 2 11.1214V12.8814C2 13.9214 2.85 14.7814 3.9 14.7814C5.71 14.7814 6.45 16.0614 5.54 17.6314C5.02 18.5414 5.33 19.7014 6.24 20.2214L7.97 21.2114C8.76 21.6814 9.78 21.4014 10.25 20.6114L10.36 20.4214C11.26 18.8514 12.74 18.8514 13.65 20.4214L13.76 20.6114C14.23 21.4014 15.25 21.6814 16.04 21.2114L17.77 20.2214C18.68 19.7014 18.99 18.5314 18.47 17.6314C17.56 16.0614 18.3 14.7814 20.11 14.7814C21.15 14.7814 22.01 13.9314 22.01 12.8814V11.1214C22 10.0814 21.15 9.2214 20.1 9.2214ZM12 15.2514C10.21 15.2514 8.75 13.7914 8.75 12.0014C8.75 10.2114 10.21 8.7514 12 8.7514C13.79 8.7514 15.25 10.2114 15.25 12.0014C15.25 13.7914 13.79 15.2514 12 15.2514Z" fill="#ffffff"></path> </g></svg>`;

let navDiv = () =>{

    return `<div class="w-screen h-[8rem] flex justify-center items-center fixed z-50">
            <div class="w-[97%] h-[6rem] p-8 flex items-center gap-6 glassEffect rounded-3xl ">

                <a class="text-white hover:text-gray-200 text-xl cursor-pointer">
                    adonis    
                </a>
                
                <div class="w-0.5 h-[2.5rem] bg-white ml-4"> </div>

                <div class="flex gap-10 ml-4">
                    <a href="#" class="text-white w-[9rem] text-center text-xl self-center cursor-pointer hover:bg-white hover:text-black p-3 rounded-full">
                        how it works
                    </a>

                    <a href="#" class="text-white w-[9rem] text-center text-xl self-center cursor-pointer hover:bg-white hover:text-black p-3 rounded-full"">
                        Why adonis?
                    </a>

                    <a href="#" class="text-white w-[7rem] text-center text-xl self-center cursor-pointer hover:bg-white hover:text-black p-3 rounded-full">
                        About
                    </a>

                    <a href="#" class="text-white w-[7rem] text-center text-xl self-center cursor-pointer hover:bg-white hover:text-black p-3 rounded-full">
                        Blog
                    </a>

                    <a href="#" class="text-white w-[7rem] text-center text-xl self-center cursor-pointer hover:bg-white hover:text-black p-3 rounded-full">
                        Careers    
                    </a>
                </div>

                <div class="flex gap-5 justify-end w-full">
                    <a href="./loginPage.html" class="text-white w-[7rem] text-center text-xl self-center cursor-pointer hover:bg-white hover:text-black p-3 rounded-full">
                        Login    
                    </a>

                    <div class="text-white text-xl">
                        <div class=" w-[12rem] h-[3.5rem] flex justify-center items-center border border-white rounded-full">Sign up for free</div>
                    </div>   
                </div>
                </div>

            </div>`;
}

let headlineDiv = () =>{

    return `<div class="w-screen h-[8rem] flex justify-center items-center">
                <div class="w-[97%] h-[6rem] p-8 flex items-center gap-6 glassEffect rounded-3xl overflow-hidden">

                <marquee>
                    <div class="flex justify-between"> 
                        <div class="text-3xl font-semibold text-white">hmd</div>
                        <div class="text-3xl font-semibold text-white">Eisai</div>
                        <div class="text-3xl font-semibold text-white">BRADKEN</div>
                        <div class="text-3xl font-semibold text-white">Lemonade</div>
                        <div class="text-3xl font-semibold text-white">taboola</div>
                        <div class="text-3xl font-semibold text-white">workris</div>
                    
                    </div>
                </marquee>
                
                </div>

            </div>`;
}

let TextDiv = () =>{
    
    return `<div class=" flex flex-col gap-10">
                <div class="text-8xl font-semibold text-white " > Revenue in <br> healthcare is hard. <br> We can help. </div>
                <div class="text-xl text-white " > Adonis is the first revenue intelligence <br>
                    platform that delivers Al-driven insights to <br>
                    help your medical practice, hospital.
                </div>
                
                <div class="p-4 rounded-full text-black text-center text-lg font-semibold w-[13rem] bg-[#dbfb74] hover:bg-[#c2e944] cursor-pointer" >Get started</div>
            </div>`;
}

let boxDiv = () =>{
    
    return `<div class="w-[42rem] h-[36rem] rounded-3xl glassEffect2 p-3 flex flex-col gap-4 justify-center items-center">

                <div class="text-white font-semibold text-4xl " > Visit type and date </div>
                <div class="text-[#cccdd2] font-semibold text-lg" > Book your appointment day your life</div>

                <div class="bg-gray-300 rounded-full w-full h-20 p-2 flex gap-3 justify-between mt-6">
                    <div id="general" onclick="disInfo('general')" class="bg-white rounded-full h-full w-1/4 flex justify-center items-center font-semibold cursor-pointer">General</div>
                    <div id="dentist" onclick="disInfo('dentist')" class="hover:bg-white rounded-full h-full w-1/4 flex justify-center items-center font-semibold cursor-pointer">Dentist</div>
                    <div id="ped" onclick="disInfo('ped')" class="hover:bg-white rounded-full h-full w-1/4 flex justify-center items-center font-semibold cursor-pointer">Pediatric</div>
                    <div id="heart" onclick="disInfo('heart')" class="hover:bg-white rounded-full h-full w-1/4 flex justify-center items-center font-semibold cursor-pointer">Heart</div>
                </div>
                <div id="generalDiv" class="flex flex-col gap-4 w-full">
        <div class="glassEffect rounded-full w-full h-16 p-3 pr-5 flex justify-between items-center gap-3 mt-6">
            <div class="flex gap-4">
                <div class="text-[#e1e1e1]">type1</div>
                <div class="text-[#bebec6]">general consultation </div>
            </div>
            <div class="">arrow </div>
        </div>
        <div class="glassEffect rounded-full w-full h-16 p-3 pr-5 flex justify-between items-center gap-3">
            <div class="flex gap-4">
                <div class="text-[#e1e1e1]">time</div>
                <div class="text-[#bebec6]">6:30 pm </div>
            </div>
            <div class="">arrow </div>
        </div>
        <div class="glassEffect rounded-full w-full h-16 p-3 pr-5 flex justify-between items-center gap-3">
            <div class="flex gap-4">
                <div class="text-[#e1e1e1]">date</div>
                <div class="text-[#bebec6]">Monday , July 5th</div>
            </div>
            <div class="">arrow </div>
        </div>
        <div class="bg-[#5879fd] text-white text-xl font-semibold rounded-full w-full h-16 flex justify-center items-center cursor-pointer mt-6" id="submitGeneralData">Submit</div>
    </div>

                <div id="dentistDiv" class="hidden flex-col gap-4 w-full">
                    <div class="glassEffect rounded-full w-full h-16 p-3 pr-5 flex justify-between items-center gap-3 mt-6">
                        <div class="flex gap-4">
                            <div class="text-[#e1e1e1]">type2</div>
                            <div class="text-[#bebec6]">general consultation </div>
                        </div>
                        <div class="">arrow </div>
                    </div>
                    <div class="glassEffect rounded-full w-full h-16 p-3 pr-5 flex justify-between items-center gap-3">
                        <div class="flex gap-4">
                            <div class="text-[#e1e1e1]">time</div>
                            <div class="text-[#bebec6]">6:30 pm </div>
                        </div>
                        <div class="">arrow </div>
                    </div>
                    <div class="glassEffect rounded-full w-full h-16 p-3 pr-5 flex justify-between items-center gap-3">
                        <div class="flex gap-4">
                            <div class="text-[#e1e1e1]">date</div>
                            <div class="text-[#bebec6]">Monday , July 5th</div>
                        </div>
                        <div class="">arrow </div>
                    </div>
                    <div class="bg-[#5879fd] text-white text-xl font-semibold rounded-full w-full h-16 flex justify-center items-center cursor-pointer mt-6">Submit</div>
                </div>

                <div id="pedDiv" class="hidden flex-col gap-4 w-full">
                    <div class="glassEffect rounded-full w-full h-16 p-3 pr-5 flex justify-between items-center gap-3 mt-6">
                        <div class="flex gap-4">
                            <div class="text-[#e1e1e1]">type3</div>
                            <div class="text-[#bebec6]">general consultation </div>
                        </div>
                        <div class="">arrow </div>
                    </div>
                    <div class="glassEffect rounded-full w-full h-16 p-3 pr-5 flex justify-between items-center gap-3">
                        <div class="flex gap-4">
                            <div class="text-[#e1e1e1]">time</div>
                            <div class="text-[#bebec6]">6:30 pm </div>
                        </div>
                        <div class="">arrow </div>
                    </div>
                    <div class="glassEffect rounded-full w-full h-16 p-3 pr-5 flex justify-between items-center gap-3">
                        <div class="flex gap-4">
                            <div class="text-[#e1e1e1]">date</div>
                            <div class="text-[#bebec6]">Monday , July 5th</div>
                        </div>
                        <div class="">arrow </div>
                    </div>
                    <div class="bg-[#5879fd] text-white text-xl font-semibold rounded-full w-full h-16 flex justify-center items-center cursor-pointer mt-6">Submit</div>
                </div>

                <div id="heartDiv" class="hidden flex-col gap-4 w-full">
                    <div class="glassEffect rounded-full w-full h-16 p-3 pr-5 flex justify-between items-center gap-3 mt-6">
                        <div class="flex gap-4">
                            <div class="text-[#e1e1e1]">type4</div>
                            <div class="text-[#bebec6]">general consultation </div>
                        </div>
                        <div class="">arrow </div>
                    </div>
                    <div class="glassEffect rounded-full w-full h-16 p-3 pr-5 flex justify-between items-center gap-3">
                        <div class="flex gap-4">
                            <div class="text-[#e1e1e1]">time</div>
                            <div class="text-[#bebec6]">6:30 pm </div>
                        </div>
                        <div class="">arrow </div>
                    </div>
                    <div class="glassEffect rounded-full w-full h-16 p-3 pr-5 flex justify-between items-center gap-3">
                        <div class="flex gap-4">
                            <div class="text-[#e1e1e1]">date</div>
                            <div class="text-[#bebec6]">Monday , July 5th</div>
                        </div>
                        <div class="">arrow </div>
                    </div>
                    <div class="bg-[#5879fd] text-white text-xl font-semibold rounded-full w-full h-16 flex justify-center items-center cursor-pointer mt-6">Submit</div>
                </div>
    
            </div>`;
}

let sliderMainFunc = () =>{

    return `<div class="flex justify-center gap-32 mt-48" > 

                <div class="flex gap-6">
                    ${TextDiv()}
                </div>

                <div class="" >
                    ${boxDiv()}
                </div>
    
            </div>`
}

let mainDiv = document.getElementById("mainDiv");

mainDiv.className="w-screen h-screen flex flex-col overflow-x-hidden";

mainDiv.innerHTML =
                    `
                        ${navDiv()}
                        ${cardStarting}
                            ${sliderMainFunc()}
                            ${headlineDiv()}
                        ${cardEnd}
                    `;