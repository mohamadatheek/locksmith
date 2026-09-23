type Guide = {
  description: string;
  sections: { heading: string; text: string }[];
  prepare: string[];
};

export const serviceGuides: Record<string, Guide> = {
  "door-unlocking-colombo": {
    description: "Household door unlocking in Colombo and nearby suburbs. Call KeyHome on 077 438 0935 with your location and lock details to confirm assistance.",
    sections: [
      { heading: "Describe the lockout before booking", text: "A door that has closed with keys inside, a lost key and a broken key in the lock can require different work. Tell us whether there is another authorized way to enter and describe the type of door. A clear photo of the lock can help with the initial assessment." },
      { heading: "Confirm the scope and attendance charge", text: "Ask about technician availability, the estimated arrival time and any attendance or assessment charge. The condition and design of the lock determine what work may be needed. Agree on the proposed approach before work starts, including whether replacement parts could be required." },
      { heading: "Arrange access with the property owner", text: "If you rent the property, contact your landlord or property manager when appropriate. Have identification and evidence of your right to enter ready. After access is restored, ask about any damaged parts and check that the door can close and lock correctly." },
    ],
    prepare: ["Your location and contact number", "Door and lock details, with a photo if possible", "Evidence of occupancy or the property owner’s authorization"],
  },
  "car-key-programming-colombo": {
    description: "Car key and transponder programming in Colombo for supported remotes, smart keys and immobilizer keys. Contact KeyHome to check vehicle compatibility.",
    sections: [
      { heading: "A cut key may still need programming", text: "A mechanical blade operates the lock, while a transponder communicates with the vehicle’s immobilizer. Car key reprogramming, keyless-entry remote programming and proximity functions may require different equipment. Tell us whether the problem is starting the engine, operating the buttons or unlocking the door so we can assess the right service." },
      { heading: "Spare keys and all-keys-lost work", text: "Adding a spare while a working key is available can involve a different process from replacing every lost key. Equipment, compatible parts and access requirements vary by vehicle. We confirm support for your model and year before arranging the work; brand name alone does not establish compatibility." },
      { heading: "What affects a programming quote?", text: "The quote depends on the key type, whether a usable key remains, required replacement parts and whether mobile attendance is needed. Ask whether the quoted work includes the blade, remote, programming and testing. Share your location to check mobile availability in Colombo and nearby suburbs." },
    ],
    prepare: ["Vehicle make, model and year", "Whether you have a working key or all keys are lost", "Your location and proof you are authorized to request the work"],
  },
  "car-key-replacement-colombo": {
    description: "Car key replacement and duplication in Colombo for lost, damaged and spare keys. Call KeyHome with your vehicle make, model and year.",
    sections: [
      { heading: "Replace a lost key or make a spare", text: "A replacement needs to match both the mechanical lock and any electronic security system. A spare-key request and an all-keys-lost request can require different work. Tell us which keys are still available, including any emergency blade, before we arrange a replacement." },
      { heading: "Repair or replace a damaged key?", text: "A worn shell or damaged button does not always mean the complete key needs replacing. If the electronics or blade are also damaged, a different solution may be necessary. Describe what still works: door access, remote locking and engine starting help narrow down the fault." },
      { heading: "Confirm the complete scope of the quote", text: "Replacement costs depend on the compatible key, blade cutting, programming and any mobile attendance. Ask which of these are included and whether parts are available before visiting. After the work, check the door lock, engine start and each supported remote function." },
    ],
    prepare: ["Make, model and year of the vehicle", "Any remaining keys or damaged key components", "Vehicle access and proof of authorization"],
  },
  "emergency-car-unlocking": {
    description: "Mobile car door unlock and vehicle lockout service in Colombo. Call KeyHome with your location and vehicle model to confirm availability.",
    sections: [
      { heading: "Tell us exactly what is locked", text: "Keys inside the passenger area, keys in the boot and a key that will not turn can require different assessments. Give the vehicle make and model, its location and a description of the problem. This helps the technician decide what equipment and access may be needed." },
      { heading: "Confirm attendance before waiting", text: "Mobile availability depends on the technician, your location and the vehicle. Ask for an estimated arrival time and the attendance charge when you call. A response estimate is specific to the enquiry; traffic and the current workload can affect it." },
      { heading: "Unlocking and replacing keys are different services", text: "Opening the vehicle restores access but does not replace a lost key or resolve every remote or ignition fault. If no working key remains, mention this when booking so programming or replacement can be assessed as well. Ownership or authorization must be confirmed before access work." },
    ],
    prepare: ["Your exact location and a nearby landmark", "Vehicle make, model and where the keys are", "Proof that you are authorized to access the vehicle"],
  },
  "smart-key-repair": {
    description: "Smart key, remote car key and key-fob repair in Colombo. KeyHome assesses batteries, buttons, casings and electronic faults for supported keys.",
    sections: [
      { heading: "Describe which functions have stopped working", text: "A remote that no longer locks the doors may still start the vehicle. A proximity key that is not detected can have a different fault from a broken casing or flat key-fob battery. Tell us whether a spare works and whether the issue started after a drop, moisture exposure or a battery change." },
      { heading: "Repair depends on the condition of the key", text: "The casing, buttons, battery contacts and electronics need assessment before a repair can be recommended. Compatible parts may not be available for every key. We assess whether repair is practical or whether a replacement key and programming should be considered." },
      { heading: "Replacement fobs need a compatibility check", text: "Keys with similar-looking cases are not necessarily interchangeable. The vehicle’s model, year and key system determine which replacement can be used. Check compatibility before buying a fob, and ask whether a quote covers the key, programming and any emergency blade." },
    ],
    prepare: ["The faulty key and any working spare", "Vehicle make, model and year", "A description of the fault and when it started"],
  },
  "key-cutting-maharagama": {
    description: "Key cutting and key duplication in Colombo from KeyHome in Maharagama. Car keys and supported general keys; call to confirm your key type.",
    sections: [
      { heading: "General keys and vehicle blades", text: "The correct blank must match the key and lock before a copy can be cut. Bring an existing key when available and confirm support for your key type before travelling. A worn or bent original needs assessment because copying its damage can leave the new key difficult to use." },
      { heading: "Car key cutting does not always include programming", text: "A new blade may operate the door but still need a transponder programmed before it starts the engine. Remote locking and smart-key functions are separate from the blade. Let us know whether you need a mechanical spare, a complete remote key or a replacement for all lost keys." },
      { heading: "Plan your visit to Maharagama", text: "Call to confirm the compatible blank, availability and current visiting arrangements. General key cutting is arranged through the Maharagama location; ask separately about mobile automotive work in Colombo. The quote depends on the key type, blade work and any electronic programming needed." },
    ],
    prepare: ["An original key if available", "Vehicle make, model and year for automotive keys", "Your key type and whether cutting alone or programming is needed"],
  },
  "toyota-key-programming": {
    description: "Toyota key programming in Colombo for supported transponder and smart-key systems. Contact KeyHome with your Toyota model, year and remaining key details.",
    sections: [
      { heading: "Confirm the Toyota model and key system", text: "Toyota vehicles can use a conventional transponder key, a remote key or a proximity smart key. Model name alone is not enough to confirm support: the year, key system and vehicle specification also matter. Share these details before arranging a visit or purchasing a replacement." },
      { heading: "Adding a spare versus replacing every lost key", text: "A working key changes the information and access available for the job. If all keys are lost, tell us whether the vehicle is locked and where it is located. We confirm equipment and compatible key availability for the vehicle before recommending the next step." },
      { heading: "Check the blade and electronic functions", text: "If the key has an emergency blade, confirm whether cutting it is included in the quote. Starting, remote locking and proximity entry should each be checked where supported. Tell us about any existing lock or starting problem so it can be distinguished from the new-key work." },
    ],
    prepare: ["Toyota model, year and key type", "Whether a working key remains", "Vehicle location and proof of authorization"],
  },
  "lock-repair-colombo": {
    description: "Car lock and ignition lock repair in Colombo. Contact KeyHome about worn keys, sticking vehicle locks and broken-key extraction options.",
    sections: [
      { heading: "A key fault can look like a lock fault", text: "A worn blade, a damaged lock and an electronic remote problem can produce similar symptoms. Tell us whether the key inserts, turns and operates the door, and whether a spare behaves differently. Avoid forcing a sticking key, which can make the damage harder to assess." },
      { heading: "Door locks and ignition problems need different checks", text: "A key that will not turn in the ignition is different from an engine that turns over but will not start. Describe the symptom accurately when you contact us. Some starting faults require vehicle electrical or mechanical diagnosis beyond locksmith work." },
      { heading: "Repair availability depends on the fault", text: "The condition of the key and lock, compatible parts and access to the vehicle determine the options. An assessment may lead to repair, blade replacement or a replacement lock rather than one standard solution. Confirm the assessment charge and proposed work before proceeding." },
    ],
    prepare: ["Vehicle make, model and year", "The faulty key and a spare if available", "Which door or ignition is affected and what happens when you try the key"],
  },
};
