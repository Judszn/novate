const IntroEM = {
  exam_details: {
    university: "Level 100 Semester 1",
    course_code: "Enivironmental Management",
    course_name: "INTRODUCTION TO ENVIRONMENTAL MANAGEMENT",
  },
  multiple_choice_questions: [
    // First few questions from the provided JSON for demonstration
    {
      question_number: 1,
      question_text:
        "What is the EPA's permissible level of noise for light industrial areas at night?",
      options: {
        A: "55",
        B: "48",
        C: "60",
        D: "65",
      },
      correct_answer: "C",
      explanation:
        "The Environmental Protection Agency (EPA) sets specific noise level standards for different areas and times. For light industrial areas at night, the permissible level is 60 decibels. This is higher than residential areas but lower than heavy industrial zones to balance industrial activity with reasonable noise control.",
    },
    {
      question_number: 2,
      question_text: "Which of the following is a renewable resource?",
      options: {
        A: "rock",
        B: "solar energy",
        C: "fossil fuel",
        D: "Gold",
      },
      correct_answer: "B",
      explanation:
        "Solar energy is a renewable resource because it is naturally replenished on a human timescale. The sun continuously provides energy that can be harnessed without depletion. In contrast, rocks, fossil fuels, and gold are non-renewable resources as they form over millions of years and cannot be replenished within human timeframes once extracted.",
    },
    {
      question_number: 3,
      question_text:
        "Which of the following pollutants is a classic example of regional pollutant?",
      options: {
        A: "noise pollution",
        B: "chlorofluorocarbons",
        C: "affluent",
        D: "plastics",
      },
      correct_answer: "B",
      explanation:
        "Chlorofluorocarbons (CFCs) are considered regional pollutants because their effects span large geographical areas beyond local boundaries. They contribute to ozone depletion and can travel through air currents affecting entire regions. Noise pollution is typically localized, affluent refers to wealthy individuals (not a pollutant), and plastics, while widespread, are classified differently.",
    },
    {
      question_number: 4,
      question_text: "Noise is measured in:",
      options: {
        A: "kilowatts",
        B: "noise levels",
        C: "giga-hertz",
        D: "decibels",
      },
      correct_answer: "D",
      explanation:
        "Noise is measured in decibels (dB), which is a logarithmic unit that expresses the ratio of a physical quantity relative to a specified reference level. Kilowatts measure power, giga-hertz measures frequency, and 'noise levels' is an imprecise general term, not a specific unit of measurement.",
    },
    {
      question_number: 5,
      question_text:
        "Which of the following is not a global environmental problem?",
      options: {
        A: "Greenhouse effect",
        B: "Marine pollution",
        C: "Methane emissions",
        D: "Solid waste incineration",
      },
      correct_answer: "D",
      explanation:
        "Solid waste incineration is primarily a local or regional issue, not a global environmental problem. While it can contribute to air pollution, its impacts are generally confined to the surrounding area. In contrast, the greenhouse effect, marine pollution, and methane emissions have demonstrated global impacts affecting the entire planet's ecosystems and climate.",
    },
    {
      question_number: 6,
      question_text:
        "When the carrying capacity of the environment is exceeded, which of the following will most likely occur?",
      options: {
        A: "The quantity of goods and services are reduced",
        B: "The colour of goods are affected",
        C: "The price of goods and services are reduced",
        D: "The quality of goods and services are reduced",
      },
      correct_answer: "D",
      explanation:
        "When an environment's carrying capacity is exceeded, the quality of goods and services typically deteriorates first. This occurs because environmental degradation impacts the integrity of natural resources, affecting their quality before quantity. Environmental stress leads to compromised ecosystems that provide lower quality outputs while continuing to function, albeit at diminished levels.",
    },
    {
      question_number: 7,
      question_text:
        "What is the largest constituent of the air in the lower atmosphere?",
      options: {
        A: "Hydrogen",
        B: "Nitrogen",
        C: "Oxygen",
        D: "Carbon dioxide",
      },
      correct_answer: "B",
      explanation:
        "Nitrogen is the largest constituent of air in the lower atmosphere, making up approximately 78% of the atmospheric composition. Oxygen comprises about 21%, while carbon dioxide is only about 0.04%. Hydrogen exists in trace amounts in the atmosphere but is not a major constituent.",
    },
    {
      question_number: 8,
      question_text:
        'Identify the source of this definition of the environment: "it is the circumstances or conditions that surround an organism or group of organisms and the complex of social or cultural conditions that affect an individual or community."',
      options: {
        A: "Buchanan (1983)",
        B: "Cunningham and Saigo (1997)",
        C: "The Black's Law Dictionary (6TH Ed. 1998)",
        D: "Bernie and Boyle (1998)",
      },
      correct_answer: "C",
      explanation:
        "This specific definition of the environment comes from The Black's Law Dictionary (6th Edition, 1998). This legal dictionary provides authoritative definitions used in law and policy, and this particular definition is notable for including both natural conditions and social/cultural factors as components of the environment.",
    },
    {
      question_number: 9,
      question_text:
        "All the following are the major causes of environmental changes according to the AGENDA 21 document except?",
      options: {
        A: "rapid population growth",
        B: "change in consumption patterns",
        C: "Urbanization",
        D: "change in technology",
      },
      correct_answer: "D",
      explanation:
        "According to Agenda 21, the major causes of environmental changes include rapid population growth, changing consumption patterns, and urbanization. While technological change is discussed in Agenda 21, it is not identified as a major cause of environmental change but rather as a potential solution when properly managed. In fact, Agenda 21 promotes environmentally sound technology transfer.",
    },
    {
      question_number: 10,
      question_text: "Examples of pressing environmental problems include:",
      options: {
        A: "Contaminated water bodies",
        B: "Climate change",
        C: "Loss of biodiversity",
        D: "All the above",
      },
      correct_answer: "D",
      explanation:
        "Contaminated water bodies, climate change, and loss of biodiversity are all recognized as serious pressing environmental problems. Each represents a major threat to ecosystem health and human wellbeing. These issues are interconnected and addressed in international environmental agreements and sustainability frameworks.",
    },
    {
      question_number: 11,
      question_text:
        "All the following are principal gases in the atmosphere that traps heat except:",
      options: {
        A: "Ozone",
        B: "NO2",
        C: "CO2",
        D: "Water vapor",
      },
      correct_answer: "A",
      explanation:
        "While ozone (O₃) is an important atmospheric gas, it is not considered one of the principal heat-trapping (greenhouse) gases. The main greenhouse gases are carbon dioxide (CO₂), methane (CH₄), nitrous oxide (N₂O), and water vapor. Nitrogen dioxide (NO₂) contributes to smog and acid rain but also has heat-trapping properties. Ozone's primary role in the upper atmosphere is to block harmful UV radiation.",
    },
    {
      question_number: 12,
      question_text: "The chief source of energy in the environment is:",
      options: {
        A: "Nuclear energy",
        B: "Fossil fuel",
        C: "The Sun",
        D: "Hydroelectric energy",
      },
      correct_answer: "C",
      explanation:
        "The Sun is the chief source of energy in the environment, powering nearly all ecological processes on Earth. Solar energy drives photosynthesis, weather patterns, and the water cycle. All other energy sources listed (nuclear, fossil fuels, hydroelectric) are either derived from solar energy indirectly or represent a much smaller portion of the Earth's energy budget.",
    },
    {
      question_number: 13,
      question_text:
        "Deforestation: I lead to localized flooding. II reduces sustainable logging potential. III reduces watershed stability. IV augments carbon sequestration provided by forests.",
      options: {
        A: "I and II only.",
        B: "III and IV only.",
        C: "I, II and III only.",
        D: "I, II, III and IV.",
      },
      correct_answer: "C",
      explanation:
        "Deforestation leads to localized flooding (I) by removing vegetation that would otherwise absorb rainfall, reduces sustainable logging potential (II) by eliminating future timber resources, and reduces watershed stability (III) by increasing erosion and disrupting water cycles. Statement IV is incorrect because deforestation decreases (not augments) carbon sequestration, as fewer trees mean less carbon dioxide is removed from the atmosphere.",
    },
    {
      question_number: 14,
      question_text:
        "Which of the following is not a major source of groundwater contamination?",
      options: {
        A: "Landfills.",
        B: "Septic tanks",
        C: "Underground storage tanks",
        D: "All of the above are major sources of groundwater contamination",
      },
      correct_answer: "D",
      explanation:
        "The correct answer is D because landfills, septic tanks, and underground storage tanks are all major sources of groundwater contamination. Landfills can leach contaminants, septic tanks may release untreated waste if failing, and underground storage tanks containing petroleum products or chemicals can leak. The question asks which is NOT a source, but all listed options ARE sources.",
    },
    {
      question_number: 15,
      question_text:
        "Which of the following will benefit future generations in terms of sustainability?",
      options: {
        A: "Building silos to store food",
        B: "Stopping the use of crude oil",
        C: "Using the profits of the stock instead of the stock",
        D: "Eating two square meals a day instead of three",
      },
      correct_answer: "C",
      explanation:
        "Using the profits (interest/dividends) while preserving the principal (stock) is a fundamental principle of sustainability. This approach ensures resources remain available for future generations while meeting current needs. This concept applies to natural capital as well as financial capital. Options A, B, and D represent short-term solutions or personal sacrifices that don't necessarily ensure long-term sustainability.",
    },
    {
      question_number: 16,
      question_text: "Which of the following is an unsustainable practice?",
      options: {
        A: "Pair trawling",
        B: "Hydroponics",
        C: "Promoting the Ramsar convention",
        D: "Urban agriculture",
      },
      correct_answer: "A",
      explanation:
        "Pair trawling is considered unsustainable because it involves dragging large nets between two boats, often resulting in significant bycatch (unintended capture of non-target species) and habitat destruction on the ocean floor. In contrast, hydroponics (growing plants without soil), promoting the Ramsar Convention (protecting wetlands), and urban agriculture are generally considered sustainable practices that minimize environmental impact.",
    },
    {
      question_number: 17,
      question_text:
        "The number of individuals that an ecosystem can support without being destroyed is referred to as:",
      options: {
        A: "The ecosystem",
        B: "The ecological system",
        C: "The carrying capacity",
        D: "biodiversity",
      },
      correct_answer: "C",
      explanation:
        "Carrying capacity refers to the maximum population size of a species that an environment can sustainably support without degrading the environment. It represents the balance point where resource availability matches resource consumption. Ecosystem refers to the entire biological community and its environment, ecological system is a synonym for ecosystem, and biodiversity refers to the variety of life forms in an area.",
    },
    {
      question_number: 18,
      question_text: "An example of a green pack is material that is:",
      options: {
        A: "Aluminum foil",
        B: "Recycled Paper",
        C: "3-layer paper",
        D: "Plastic",
      },
      correct_answer: "B",
      explanation:
        "Recycled paper is considered a 'green' packaging material because it reuses existing materials, reduces the need for virgin resources (trees), and typically requires less energy to produce than new paper. Aluminum foil, while recyclable, requires significant energy in production; 3-layer paper often contains non-recyclable components; and conventional plastic is derived from non-renewable petroleum and creates persistent waste.",
    },
    {
      question_number: 19,
      question_text:
        "All the following are environmentally friendly practices except:",
      options: {
        A: "e-bank statements",
        B: "recyclable paper",
        C: "Re-usable bottles",
        D: "Production of shoes from endanger species",
      },
      correct_answer: "D",
      explanation:
        "Using endangered species to produce shoes is not environmentally friendly and is often illegal under international conservation laws like CITES (Convention on International Trade in Endangered Species). It directly contributes to biodiversity loss. In contrast, e-bank statements reduce paper usage, recyclable paper minimizes waste, and reusable bottles reduce single-use plastic consumption—all practices that help conserve resources.",
    },
    {
      question_number: 20,
      question_text:
        "Which of the following is an example of a waste to energy recovery method?",
      options: {
        A: "Incineration",
        B: "Landfilling",
        C: "Natural degradation of organic matter into compost",
        D: "Treatment",
      },
      correct_answer: "A",
      explanation:
        "Incineration is a waste-to-energy recovery method because it involves burning waste materials to generate heat, which can then be converted to electricity. Modern incinerators capture the heat energy released during combustion. Landfilling primarily stores waste, composting converts waste to soil amendments rather than energy, and 'treatment' is too general a term but typically refers to reducing toxicity rather than energy recovery.",
    },
    {
      question_number: 21,
      question_text: "Noise above 90db may:",
      options: {
        A: "Cause no harm to the ear",
        B: "Cause minimal damage to the ear",
        C: "Not affect the ear",
        D: "Cause damage to the ear",
      },
      correct_answer: "D",
      explanation:
        "Noise above 90 decibels (dB) can cause damage to the ear, particularly with prolonged exposure. The Occupational Safety and Health Administration (OSHA) requires hearing protection for workers exposed to 90 dB for 8 hours or more. Exposure to sounds at or above 85 dB can cause gradual hearing loss, and higher levels can cause more rapid damage to the delicate structures of the inner ear.",
    },
    {
      question_number: 22,
      question_text:
        "The following are all signs of environmental degradation except:",
      options: {
        A: "Deforestation",
        B: "Loss of biodiversity",
        C: "Small-scale mining",
        D: "Pollution",
      },
      correct_answer: "C",
      explanation:
        "Small-scale mining is not inherently a sign of environmental degradation, as it can be conducted in an environmentally responsible manner with proper management. In contrast, deforestation, loss of biodiversity, and pollution are direct indicators of environmental degradation, representing clear negative changes to ecosystems and environmental quality.",
    },
    {
      question_number: 23,
      question_text:
        "Which of the following is not a global environmental problem?",
      options: {
        E: "Greenhouse effect",
        F: "Marine pollution",
        G: "Methane emissions",
        H: "Solid waste incineration",
      },
      correct_answer: "H",
      explanation:
        "Solid waste incineration is primarily a local or regional issue rather than a global environmental problem. While it can contribute to air pollution, its impacts are generally confined to the surrounding area. The greenhouse effect, marine pollution, and methane emissions have demonstrated impacts on a global scale, affecting climate systems, oceans, and atmospheric composition worldwide.",
    },
    {
      question_number: 24,
      question_text:
        "The Rio +20 conference on sustainable development was held in:",
      options: {
        A: "1999",
        B: "2010",
        C: "2014",
        D: "2012",
      },
      correct_answer: "D",
      explanation:
        "The Rio+20 Conference (officially called the United Nations Conference on Sustainable Development) was held in Rio de Janeiro, Brazil, in June 2012. It marked the 20th anniversary of the 1992 Earth Summit, also held in Rio. The conference focused on two themes: the green economy in the context of sustainable development and poverty eradication, and the institutional framework for sustainable development.",
    },
    {
      question_number: 25,
      question_text:
        "The basic difference between conservation and preservation is that:",
      options: {
        A: "Conservation forbids any use whereas preservation allows limited use",
        B: "Conservation forbids any use whereas preservation allows use",
        C: "Conservation allows efficient use whereas preservation forbids any form of use",
        D: "Conservation allows minimal use whereas preservation encourages full use",
      },
      correct_answer: "C",
      explanation:
        "Conservation promotes the responsible use of natural resources in a way that preserves their long-term availability (sustainable use). Preservation, on the other hand, aims to protect resources by keeping them completely untouched by human activities. Conservation is about wise use while preservation is about protection from use. This distinction has historical roots in the conservation movement, particularly the debate between Gifford Pinchot (conservation) and John Muir (preservation).",
    },
    {
      question_number: 26,
      question_text:
        "When the carrying capacity of the environment is exceeded, which of the following will most likely occur?",
      options: {
        E: "The quantity of goods and services are reduced",
        F: "The colour of goods are affected",
        G: "The price of goods and services are reduced",
        H: "The quality of goods and services are reduced",
      },
      correct_answer: "H",
      explanation:
        "When environmental carrying capacity is exceeded, the quality of goods and services typically deteriorates first. Environmental stress leads to diminished resource quality before quantity is affected. For example, soil degradation first reduces crop quality before yields decline, and water pollution affects water quality before quantity. The environment continues to provide resources but at lower quality when under stress.",
    },
    {
      question_number: 27,
      question_text: "UNCED means:",
      options: {
        A: "United Nation Convention on Environment and Development",
        B: "United Nation Commission on Environment and Development",
        C: "United Nation Conference on Environment and Development",
        D: "United Nation Committee on Environment and Development",
      },
      correct_answer: "C",
      explanation:
        "UNCED stands for United Nations Conference on Environment and Development. This was a major international conference (also known as the Earth Summit) held in Rio de Janeiro in 1992. It resulted in several important agreements including the Rio Declaration, Agenda 21, the Convention on Biological Diversity, the Framework Convention on Climate Change, and the Statement of Forest Principles.",
    },
    {
      question_number: 28,
      question_text: "This abbreviation UNEP means:",
      options: {
        A: "United Nations Environmental Problem",
        B: "United Nations Environmental Program",
        C: "United Nations Environment Program",
        D: "United Nations Environment Projects",
      },
      correct_answer: "C",
      explanation:
        "UNEP stands for United Nations Environment Programme. Established in 1972 following the Stockholm Conference on the Human Environment, UNEP is the designated authority of the United Nations system for environmental issues. It coordinates environmental activities and assists developing countries in implementing environmentally sound policies and practices.",
    },
    {
      question_number: 29,
      question_text: "Which of the following is not a renewable energy source?",
      options: {
        A: "Solar",
        B: "Coal",
        C: "Waves",
        D: "Wind",
      },
      correct_answer: "B",
      explanation:
        "Coal is not a renewable energy source because it forms over millions of years from decomposed plant matter under specific geological conditions. Once extracted and used, it cannot be replenished within a human lifetime. Solar, wave, and wind energy are all renewable sources because they are naturally replenished on a human timescale and derive ultimately from ongoing natural processes.",
    },
    {
      question_number: 30,
      question_text:
        "All the following relates to Terrestrial ecosystem except:",
      options: {
        A: "Desert",
        B: "Agro-ecosystems",
        C: "Pond",
        D: "Urban ecosystems",
      },
      correct_answer: "C",
      explanation:
        "A pond is an aquatic ecosystem, not a terrestrial ecosystem. Terrestrial ecosystems are land-based systems where organisms interact with each other and their environment. Deserts, agro-ecosystems (agricultural lands), and urban ecosystems are all examples of terrestrial ecosystems because they exist primarily on land, while ponds are freshwater ecosystems.",
    },
    {
      question_number: 31,
      question_text: "Which of the following is true about the environment?",
      options: {
        A: "It is the sum of biotic and abiotic elements",
        B: "There is interactive and functional relationship between the biotic and the abiotic",
        C: "There is maintenance of ecological balance",
        D: "All of the above",
      },
      correct_answer: "D",
      explanation:
        "All statements about the environment are correct. The environment comprises both living (biotic) and non-living (abiotic) components. These components interact in functional relationships, such as energy flow and nutrient cycling. These interactions help maintain ecological balance through various feedback mechanisms and self-regulating processes, creating a dynamic but stable system when undisturbed.",
    },
    {
      question_number: 32,
      question_text: "All of the following are renewable resources except:",
      options: {
        A: "Wildlife",
        B: "Soil",
        C: "Natural Gas",
        D: "Water",
      },
      correct_answer: "C",
      explanation:
        "Natural gas is not a renewable resource because it forms over millions of years from organic matter under specific pressure and temperature conditions. Once extracted and used, it cannot be replenished within human timeframes. Wildlife, soil, and water are considered renewable resources because they can regenerate naturally within human timescales if managed sustainably.",
    },
    {
      question_number: 33,
      question_text: "Which of the following pair is/are correct?",
      options: {
        A: "Primary consumers --- cow, insects and grasshoppers",
        B: "Secondary consumers --- lizards and frogs",
        C: "Tertiary consumers --- tiger, lion and leopard",
        D: "None of the above",
      },
      correct_answer: "A",
      explanation:
        "Primary consumers are herbivores that eat plants directly. Cows, insects (many species), and grasshoppers are all herbivores that feed directly on plant material, making them primary consumers in food chains. While lizards, frogs, tigers, lions, and leopards are consumers, they are not correctly paired with their trophic levels in the other options. Many lizards and frogs eat insects (making them secondary consumers), but some are omnivores or herbivores.",
    },
    {
      question_number: 34,
      question_text:
        "Which continent has the highest amount of forest in the world?",
      options: {
        A: "Central and South America",
        B: "Africa",
        C: "Asia",
        D: "Europe",
      },
      correct_answer: "A",
      explanation:
        "Central and South America, particularly the Amazon Basin, contains the largest contiguous forest area in the world. The Amazon rainforest alone accounts for about 40% of the remaining tropical rainforests globally. While Asia also has substantial forest coverage, the biodiversity and density of forests in Central and South America, particularly the Amazon, make it the region with the highest amount of forest cover.",
    },
    {
      question_number: 35,
      question_text: "Carrying capacity applies to:",
      options: {
        A: "Humans",
        B: "Plant",
        C: "Animals",
        D: "All of the above",
      },
      correct_answer: "D",
      explanation:
        "Carrying capacity applies to all living organisms, including humans, plants, and animals. It refers to the maximum population size of any species that can be sustainably supported by a specific environment without degrading the resources. Every species has a carrying capacity determined by resource availability, waste removal, competition, predation, and disease within their habitat.",
    },
    {
      question_number: 36,
      question_text:
        "The process of enhancing the environmental management system to achieve improvement in overall environmental performance is called",
      options: {
        A: "Environmental Management System",
        B: "Continual improvement",
        C: "Environmental Control Systems",
        D: "None of the above",
      },
      correct_answer: "B",
      explanation:
        "Continual improvement is a core principle in environmental management systems (like ISO 14001) that involves the ongoing enhancement of processes, practices, and performance to achieve better environmental outcomes. It represents the cyclic nature of effective environmental management—planning, implementing, checking, and acting to constantly refine and improve environmental performance through systematic review and adjustment.",
    },
    {
      question_number: 37,
      question_text: "What is the theme of World Environment Day 2020?",
      options: {
        A: "Air pollution",
        B: "Three Billion People, One Planet, Consume with Care",
        C: "Biodiversity",
        D: "Raise Your Voice, Not the Sea Level",
      },
      correct_answer: "C",
      explanation:
        "The theme for World Environment Day 2020 was 'Biodiversity'. The event focused on the urgent need to protect biodiversity and address the accelerating species loss worldwide. The theme highlighted how human actions, including deforestation, land-use change, and wildlife exploitation, contribute to biodiversity loss and how this loss affects ecosystem services that sustain human life.",
    },
    {
      question_number: 38,
      question_text:
        "Where was the first major conference on environmental issues under the United Nations was held?",
      options: {
        A: "Rio de Janeiro, Brazil",
        B: "Johannesburg, South Africa",
        C: "Stockholm, Sweden",
        D: "New York, USA",
      },
      correct_answer: "C",
      explanation:
        "The first major UN conference on environmental issues was the United Nations Conference on the Human Environment, held in Stockholm, Sweden in June 1972. This landmark conference led to the creation of the United Nations Environment Programme (UNEP) and marked the beginning of modern international environmental cooperation. It also produced the Stockholm Declaration, containing 26 principles concerning the environment and development.",
    },
    {
      question_number: 39,
      question_text:
        "The Rio + 10 World Summit on Sustainable Development was held in:",
      options: {
        A: "Rio de Janeiro, Brazil",
        B: "Johannesburg, South Africa",
        C: "Stockholm, Sweden",
        D: "New York, USA",
      },
      correct_answer: "B",
      explanation:
        "The Rio+10 World Summit on Sustainable Development was held in Johannesburg, South Africa in 2002. This summit, officially known as the World Summit on Sustainable Development (WSSD), marked the 10-year follow-up to the 1992 Earth Summit in Rio. It focused on reviewing progress made since the Earth Summit and strengthening global commitments to sustainable development.",
    },
    {
      question_number: 40,
      question_text: "SMOG is derived from: I. Fog II. Smoke III. GHGs",
      options: {
        A: "I only",
        B: "I and II only",
        C: "I, II and III only",
        D: "II and III only",
      },
      correct_answer: "B",
      explanation:
        "The term 'smog' is a portmanteau (combination) of the words 'smoke' and 'fog'. It was coined in the early 20th century to describe the mixture of smoke and fog that characterized air pollution in many industrial cities. While greenhouse gases (GHGs) may contribute to certain atmospheric conditions, they are not part of the etymology of the word 'smog'.",
    },
    {
      question_number: 41,
      question_text: "What does Agenda 21 mean?",
      options: {
        A: "It's a free trade agreement between 7 developed countries of the world.",
        B: "It's an agreement between 20 developing countries of the world on climate change",
        C: "Agenda 21 is non-binding, voluntarily implemented action plan of the United Nations with regards to sustainable development.",
        D: "None of the above",
      },
      correct_answer: "C",
      explanation:
        "Agenda 21 is a non-binding, voluntarily implemented action plan of the United Nations regarding sustainable development. It was a product of the Earth Summit (UN Conference on Environment and Development) held in Rio de Janeiro in 1992. The '21' in Agenda 21 refers to the 21st century, as it outlined global actions to promote sustainability into the new century across economic, social, and environmental dimensions.",
    },
    {
      question_number: 42,
      question_text:
        "All the following are sources of air pollution in the atmosphere except:",
      options: {
        A: "Industries",
        B: "Coal powered power plants",
        C: "Petrol",
        D: "Vehicle exhausts",
      },
      correct_answer: "C",
      explanation:
        "Petrol (gasoline) itself is not a source of air pollution in the atmosphere—it's a fuel. The burning of petrol in engines creates pollutants, but the unburned fuel is not typically released into the atmosphere as pollution. Industries, coal-powered plants, and vehicle exhausts are all direct sources that emit pollutants like particulate matter, sulfur dioxide, nitrogen oxides, and carbon monoxide into the air.",
    },
    {
      question_number: 43,
      question_text:
        "Which of the following energy is produced from animal dung?",
      options: {
        A: "Fossil fuel",
        B: "Biomass",
        C: "Biofuel",
        D: "Biogas",
      },
      correct_answer: "D",
      explanation:
        "Biogas is produced from animal dung through anaerobic digestion (decomposition without oxygen). This process produces a mixture of gases, primarily methane and carbon dioxide, which can be used for cooking, heating, electricity generation, and as vehicle fuel. While animal dung can be considered biomass, and can be used to create certain biofuels, biogas specifically refers to the gaseous product of anaerobic digestion.",
    },
    {
      question_number: 44,
      question_text:
        "Increased levels of ultraviolet (UV) radiations reaching the surface of the earth has been linked to:",
      options: {
        A: "Skin cancers",
        B: "Lung disease",
        C: "Cataracts",
        D: "Infections",
      },
      correct_answer: "A",
      explanation:
        "Increased ultraviolet (UV) radiation exposure has been directly linked to higher rates of skin cancers, including melanoma, basal cell carcinoma, and squamous cell carcinoma. UV radiation damages DNA in skin cells, leading to mutations that can develop into cancer. While UV radiation can also contribute to cataracts and suppress immune function (potentially increasing susceptibility to infections), skin cancer has the strongest and most well-documented causal relationship with UV exposure.",
    },
    {
      question_number: 45,
      question_text: "The earth is surrounded by a layer of:",
      options: {
        A: "Water",
        B: "Air",
        C: "Gas",
        D: "Soil",
      },
      correct_answer: "B",
      explanation:
        "The Earth is surrounded by a layer of air known as the atmosphere. This gaseous envelope extends from the Earth's surface up to several hundred kilometers and consists primarily of nitrogen (78%) and oxygen (21%), with small amounts of other gases. The atmosphere protects life on Earth by absorbing ultraviolet solar radiation, warming the surface through heat retention, and reducing temperature extremes between day and night.",
    },
    {
      question_number: 46,
      question_text:
        "Which of the following is not a cause of environmental degradation?",
      options: {
        A: "Poverty",
        B: "Bad farming practices",
        C: "Unfair International Trade",
        D: "All of the above are causes of environmental degradation",
      },
      correct_answer: "D",
      explanation:
        "All of the listed factors—poverty, bad farming practices, and unfair international trade—can contribute to environmental degradation. Poverty may force people to overexploit natural resources for survival. Bad farming practices like excessive use of chemicals, monoculture, and overgrazing deplete soil and water resources. Unfair international trade can encourage unsustainable resource extraction in developing countries to meet export demands.",
    },
    {
      question_number: 47,
      question_text: "Which of these is an example of episodic pollutant?",
      options: {
        A: "Acid rain and CFCs",
        B: "Chemical or oil spillage",
        C: "Carbon dioxide",
        D: "Plastics",
      },
      correct_answer: "B",
      explanation:
        "Chemical or oil spillage is an example of episodic pollution, which refers to pollution events that occur suddenly and irregularly rather than continuously. These are acute, one-time events with immediate impacts. In contrast, acid rain, CFCs, carbon dioxide emissions, and plastic pollution represent more chronic, ongoing forms of pollution that occur continuously or build up gradually over time.",
    },
    {
      question_number: 48,
      question_text:
        "Which of the following water body in Ghana is not polluted by illegal mining (galamsey) activities?",
      options: {
        A: "River Tano",
        B: "River Pra",
        C: "Keta Lagoon",
        D: "River Ankobra",
      },
      correct_answer: "C",
      explanation:
        "Keta Lagoon is not significantly affected by illegal mining (galamsey) activities, primarily due to its coastal location in Ghana's Volta Region, away from the major gold mining areas. Rivers Tano, Pra, and Ankobra flow through Ghana's mineral-rich regions where illegal mining is prevalent, resulting in severe water pollution from mercury contamination, sedimentation, and other mining-related pollutants.",
    },
    {
      question_number: 49,
      question_text:
        "How can extreme events like hurricanes, drought, & wildfires impact energy production?",
      options: {
        A: "Water shortages",
        B: "Power outages",
        C: "Higher electricity & gas prices",
        D: "All of the above",
      },
      correct_answer: "D",
      explanation:
        "Extreme weather events affect energy production in multiple ways: droughts reduce water availability for hydroelectric power and cooling of thermal plants; hurricanes and wildfires damage energy infrastructure causing power outages; and these disruptions to supply chains and infrastructure lead to higher electricity and gas prices. Climate change is increasing the frequency and severity of these events, creating growing challenges for energy security and resilience.",
    },
    {
      question_number: 50,
      question_text: "Why are forests important for mitigating climate change?",
      options: {
        A: "Forests serve as a sink in the carbon cycle",
        B: "Trees provide building materials",
        C: "Trees are an important food source",
        D: "Leaves of trees reflect all sunlight away from the Earth",
      },
      correct_answer: "A",
      explanation:
        "Forests are crucial for mitigating climate change because they act as carbon sinks, absorbing carbon dioxide from the atmosphere through photosynthesis and storing it in biomass and soils. This carbon sequestration helps reduce atmospheric greenhouse gas concentrations. While trees do provide building materials and food, and their leaves reflect some sunlight, these functions aren't primary mechanisms for climate change mitigation.",
    },
    {
      question_number: 51,
      question_text:
        "Which of the following are consequences associated with climate change?",
      options: {
        A: "The ice sheets are declining, glaciers are in retreat globally, and our oceans are more acidic than ever",
        B: "More extreme weather like droughts, heat waves, and hurricanes",
        C: "Global sea levels are rising at an alarmingly fast rate --- 17 centimeters (6.7 inches) in the last century alone and going higher.",
        D: "All of the above",
      },
      correct_answer: "D",
      explanation:
        "All of the listed phenomena are documented consequences of climate change. Rising global temperatures are causing ice sheets and glaciers to melt, contributing to sea level rise. Carbon dioxide absorption is increasing ocean acidity. Climate change is also linked to more frequent and intense extreme weather events including droughts, heat waves, and hurricanes. These interconnected impacts reinforce each other and compound the overall effects of climate change on natural and human systems.",
    },
    {
      question_number: 52,
      question_text:
        "Which of the following is not part of goal 15 of the SDGs on ecosystems?",
      options: {
        A: "Use ecosystems sustainably and protecting and restoring them",
        B: "Halt the use of biotechnology and genetic engineering",
        C: "Halt biodiversity loss",
        D: "Halt and reverse land degradation",
      },
      correct_answer: "B",
      explanation:
        "SDG 15 (Life on Land) does not aim to halt biotechnology and genetic engineering. Instead, it focuses on protecting, restoring, and promoting sustainable use of terrestrial ecosystems, sustainable forest management, combating desertification, halting and reversing land degradation, and halting biodiversity loss. The SDGs recognize that properly regulated biotechnology may contribute to sustainable development goals when used appropriately.",
    },
    {
      question_number: 53,
      question_text: "Which of the following is not true about the SGDs?",
      options: {
        A: "They include the development of sustainable cities, infrastructure and industries",
        B: "They are legally binding on all nations",
        C: "They promote innovation",
        D: "The promote health, wellbeing and education for all, at all ages.",
      },
      correct_answer: "B",
      explanation:
        "The Sustainable Development Goals (SDGs) are not legally binding on nations. They represent a voluntary commitment framework that countries are encouraged to implement according to their own priorities and capabilities. While the SDGs do address sustainable cities and infrastructure (Goal 11), innovation (Goal 9), and health, wellbeing and education (Goals 3 and 4), they rely on political will rather than legal enforcement mechanisms.",
    },
    {
      question_number: 54,
      question_text:
        "Landfills are the main choice for waste disposal in Ghana and they cause a lot of environmental problems",
      options: {
        A: "True",
        B: "False",
      },
      correct_answer: "A",
      explanation:
        "This statement is true. Landfills are the primary waste disposal method in Ghana, and they cause numerous environmental problems including groundwater contamination from leachate, methane emissions contributing to climate change, air pollution from burning waste, breeding grounds for disease vectors, and loss of potentially valuable land. Many landfills in Ghana are poorly managed, exacerbating these environmental impacts.",
    },
  ],
};

export default IntroEM;
