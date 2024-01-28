import { createServer, Model } from "miragejs"


    createServer({
        models: {
            blogs: Model,
        },

        seeds(server) {
            server.create("blog", {
                id:"1",
                title:"Digital Camera Buying Guide For Beginners",
                image:"https://i3.ytimg.com/vi/Jm457ImVv78/maxresdefault.jpg",
                link:"https://www.youtube.com/watch?v=Jm457ImVv78",
                reading_time:"10 minute",
                content:[
                    {
                        id:"1",
                        title:"Megapixel",
                        description:"There is a myth about the megapixel. But you should know the higher megapixel count is no guarantee\n" +
                            "of quality when it comes to actual results. It is helpful to have a considerable amount of megapixels. But\n" +
                            "in some cases, more megapixels can be worse. So that you should not give more priority to it when you\n" +
                            "choose your camera."

                    },
                    {
                        id:"2",
                        title:"Zoom",
                        description:"There are two parts in the zoom,\n" +
                            "The first one is a digital zoom. The second one is optical zoom. Among those two parts, we should pay\n" +
                            "more attention to optical zoom. Because when we take a photo using digital zoom, the camera tends to\n" +
                            "crop and enlarge that part. So it affects the poor quality of the image. The higher the optical zoom rating\n" +
                            "on your camera, the better you can photograph distant subjects. 5times optical zoom is the minimum\n" +
                            "acceptable standard."

                    },
                    {
                        id:"3",
                        title:"Sensor Size",
                        description:"There are two types of sensors, CCD and CMOS. CCD sensors create high-quality, low-noise images. But\n" +
                            "CCD sensors are more expensive and consume more battery. The larger sensor results in more detailed\n" +
                            "photos and videos. Because it can grasp more light through lenses. DSLR cameras have a larger sensor\n" +
                            "when considering all other digital cameras."

                    },
                    {
                        id:"4",
                        title:"Built Quality",
                        description:"Be sure to choose a camera with a metal or high-density plastic casing. Also, look for a solid, well-placed\n" +
                            "button. And also, there are weather resistance cameras. You can choose it according to your purpose."

                    },
                    {
                        id:"5",
                        title:"Manual Control",
                        description:"If you want to be a professional photographer, you have to pay more attention to the manual control of\n" +
                            "the camera. Such as aperture, ISO level, and shutter speed. Because you can increase the quality of the\n" +
                            "photo by adjusting these settings."

                    },
                    {
                        id:"6",
                        title:"Image Stabilisation",
                        description:"This helps to reduce any blurriness in photos, and it causes sharp and crisp images. To test the image\n" +
                            "stabilisation, you should want to take pictures in various ranges of shutter speed with and without\n" +
                            "image stabilisation. Then check the sharpness of the photos without image stabilisation than with image\n" +
                            "stabilisation."

                    },
                    {
                        id:"7",
                        title:"Lenses",
                        description:"All cameras do not exist with interchangeable lenses. Different types of lenses are suitable for different\n" +
                            "kinds of scenarios. This mainly affects the quality of the picture. So it is better to try a digital camera\n" +
                            "with interchangeable lenses. But it depends on your purpose and budget."

                    },
                    {
                        id:"8",
                        title:"Low light Photo Quality",
                        description:"A poor digital camera will offer fuzzy low light photos with imbalanced colors and trim the detail."

                    },
                    {
                        id:"9",
                        title:"Wireless Connectivity",
                        description:"Most digital cameras now offer wireless connection types such as Bluetooth and wifi. Some mobile\n" +
                            "phone apps can be used as a remote controllers. So, it helps take a family photo because you can see\n" +
                            "the camera view through your mobile phone. And also, The type of mobile application depends on the\n" +
                            "kind of camera we use. As an example \" Canon Camera Connect\" app is used for canon cameras. So that\n" +
                            "you can store your photos on the smartphone safely. But make sure to use a secure wifi network.\n" +
                            "Otherwise, someone can steal your images."

                    },
                    {
                        id:"10",
                        title:"Recording Video",
                        description:"Video recording depends on the camera type and the subjects recording the most. The compact and\n" +
                            "Bridge camera are suitable for video recording. But for a better result, it is good to use a mirrorless or\n" +
                            "DSLR camera. Because it gives us 4k ultra HD and 6k video output."

                    }

                ]


            })
            server.create("blog", {

                id: "2",
                title: "Camping Guide for Beginners",
                image: "https://i3.ytimg.com/vi/iYPkWF5Isgs/maxresdefault.jpg",
                link: "https://www.youtube.com/watch?v=iYPkWF5Isgs",
                reading_time: "10 minute",
                content:[
                    {
                        id:"1",
                        title:"Check the weather forecast",
                        description:"If we want better camping experiences, " +
                            "checking the weather forecast is essential. Considering that point, we should choose our " +
                            "camping site, meals, outdoor activities, and outfits. But if the weather forecast is too bad, " +
                            "don't think twice about putting off camping."

                    },
                    {
                        id:"2",
                        title:"Get better information about camping places",
                        description:"Choosing a camping site near your house is better if you are a beginner. " +
                            "Because we should give first place for our safety. By getting experience from our " +
                            "first camping, we can arrange the next camping site in the distance in a better way. " +
                            "Be sure to choose a camping site near a river, tank, or water stream because it will " +
                            "be more helpful in fulfilling our daily requirements. Also, you should check whether " +
                            "your chosen camping site is a secure place."

                    },
                    {
                        id:"3",
                        title:"Make a checklist",
                        description:"Portable chairs, tents, mattresses, and cooking equipment are more beneficial for camping. " +
                            "When making a checklist, we should give more priority to essential goods. We can make a list by " +
                            "including everything you want and cutting off unnecessary items. We should not overload traveling " +
                            "bags and packs because if we overload them, it will be a burden for us, and we can't get better experiences. " +
                            "Then I will tell you some of the most essential items we should take while camping.tent,sleeping bag,portable chair," +
                            "first-aid kit,pocket knife,charge gps,weather appropriate clothings,torch,power bank,mobile phone,insect replents,regular " +
                            "medicine,tooth paste,tooth brush,soap,fuel,lighter,cooking and eating utensils,sun protection cream,sun glass,water bottles," +
                            "spare clothes,suitable foot wear,light weight and fast drying clothes."

                    },
                    {
                        id:"4",
                        title:"Setting up an aid first aid kit",
                        description:"While camping, we have to face injuries. It's very cliche, but if we didn't arrange the items for injuries, " +
                            "that means we haven't a first aid kit. It would be a headache for us. For the first aid kit, we should include bandages, " +
                            "gauze, plasters, tweezers, burn cream, scissors, an emergency blanket, antibiotic wipes or spray, paracetamol, etc."

                    },
                    {
                        id:"5",
                        title:"Select the outfits",
                        description:"Some people try to wear bizarre outfits for camping. But we should select light outfits for that. " +
                            "If it's cold, we can wear boots, trousers and long-sleeved t-shirts. If it's hot, we should wear shorts and " +
                            "light t-shirts and also, we can wear hats and sunglasses. Under this topic, foot-wears are such an essential item. " +
                            "We must choose our shoes according to the outdoor activities, place, and weather. For example, if we go to a mountain " +
                            "for camping, we want to wear shoes that avoid slippering."

                    },
                    {
                        id:"6",
                        title:"Buy a perfect tent",
                        description:"The tent is the main item in camping. So, we should give more priority to it. " +
                            "We should pay attention to many features when buying a tent. First of all, we should consider " +
                            "the space requirement inside the tent. Then, the tent should provide the best shield for us from wild animals, " +
                            "mosquitos, wind, and rain. And also, it should protect our privacy. Two doors tent is ideal, and there should " +
                            "be some windows and storage pockets."

                    },
                    {
                        id:"7",
                        title:"Meal plan",
                        description:"When we are going camping,it's hard to carry fresh vegetables and fruits. " +
                            "So, we should pay attention to tinned, canned, and dried items. Be sure to care about the expiry date. " +
                            "Because there's nothing worst than getting ill while camping. We can get food items the day before camping. " +
                            "Because of that, we can keep them fresh and should not try new dishes while camping. " +
                            "I think you know why I told you like that. Because we should not get others for the experiment. " +
                            "If you want the best experience, it's better to plan different meals for different days."

                    },
                    {
                        id:"8",
                        title:"Safety and Rules",
                        description:"Safety is number one. So while camping, doesn't go to play with wild animals. " +
                            "Be sure to keep up lighting a campfire throughout the night because it will help protect yourself from animals. " +
                            "Don't try to trespass and cross dangerous places. Make your camping bed one or two feet high from the ground level. " +
                            "If you feel any sickness, don't try to stop there or hide the discomfort from others until the journey's end. " +
                            "Come back immediately to a secure place and take the help."

                    },
                    {
                        id:"9",
                        title:"Health tips",
                        description:"While camping we should separate our dirty and wetted clothes from other items. " +
                            "Keep an insect repellent spray or coil with you to eliminate mosquitoes and insects. " +
                            "If it's a hot day, try to dress in cotton clothes, which will keep you cool, apply sun protection cream, " +
                            "and wear sunglasses. If the weather is so cool, try to dress in sleeved clothes and if it's raining, " +
                            "wear a raincoat. Sometimes environmental situations change very quickly in some regions. " +
                            "So you have to have outfits for facing any possible situations while camping. " +
                            "Keep some chocolates and candies in your pocket, and it will give you instant energy. " +
                            "Don't forget to keep your regular medicine with you."

                    },
                    {
                        id:"10",
                        title:"Campfire safety",
                        description:"Campfire is the main item in camping. That you should get better practice for that. " +
                            "While camping we want to make a campfire for relaxing and cooking.If we have any problem with " +
                            "the campfire. Please bring help from the campsite officer. Choose an open area and clean the " +
                            "site at least 10 feet when making a campfire. Because many flammable materials carry you when " +
                            "you are camping, you should carefully place those items away from the campfire. " +
                            "And also, To ensure safety, you can make a fire ring. If there is no fire ring, " +
                            "you can make a fire pit. You should keep a water bucket nearby and pay attention to your " +
                            "children gathered around the campfire. The most important thing is don't leave the campfire alone. " +
                            "Because it will create dangerous situations."

                    }

                ]


            })
            server.create("blog", {
                id:"3",
                title:"10 IMPRESSIVE BUILDINGS In The World",
                image:"https://i3.ytimg.com/vi/HB94AsRNlzk/maxresdefault.jpg",
                link:"https://www.youtube.com/watch?v=HB94AsRNlzk",
                reading_time:"8 minute",
                content:[
                    {
                        id:"1",
                        title:"Sydney opera house - Australia",
                        description:"Sydney Opera House is one of the most iconic buildings in Australia and the world. The main\n" +
                            "reason for that is its structure. The Opera house is situated nearby the Sydney harbour. That\n" +
                            "incredible landmark was built from 1957 - 1973 according to the idea of danish architect John\n" +
                            "Utzon, and $ 102 million has been spent for made this one.It is 185m long, 120m wide, and 67m\n" +
                            "high. The seating capacity is 5738. This incredible architecture has drama thearters, a concert\n" +
                            "hall, a play house, restaurants and studios. More than 10.9 million local and foreign visitors visit\n" +
                            "that place annually. The New South Wales government body is the owner of the incredible\n" +
                            "structure. The UNESCO organization named that place a world heritage in 2007."

                    },
                    {
                        id:"2",
                        title:"Marina Bay Sand - Singapore",
                        description:"Marina Bay sand is Situated in Singapore. American Architect Moshe Safdie designed that " +
                            "Building and has contributed to designing many world-famous architectures. It is owned by Las " +
                            "Vegas sands cooperation, And it was opened in 2010 and has spent $5.6 billion. It is 198m tall " +
                            "and above 300m long and consists of three towers and 55 floors in each Building. Marina Bay " +
                            "Sand includes 2561 hotel rooms, a convention exhibition centre, shops, a museum, theatres, an " +
                            "infinity pool and a sky park."

                    },
                    {
                        id:"3",
                        title:"Space Needle - USA",
                        description:"The space needle is situated in Seattle, Washington, America. Architects Victor Steinbrueck, " +
                            "John Graham and Edward Carlson designed the structure of that Building. Space needle holding " +
                            "corporation is the owner of this beautiful Building. The construction process started in 1961, and " +
                            "they could complete it within eight months and spent $ 4.5 million. In 2018, They repaired that " +
                            "massive structure by paying $ 100 million. The space needle is 184m tall and has a unique " +
                            "feature: a rotating glass floor. Around 10.3 million visitors come there annually to look at this " +
                            "beautiful structure."

                    },
                    {
                        id:"4",
                        title:"National Library - Belarus",
                        description:"This library was designed by architects Mihail Vinogradov and Viktor Kramarenko. It is situated  " +
                            "in the capital of Belarus, Minsk. The Project was started in November 2002 and completed in 2006. " +
                            "It is a 74m tall structure, and it has 22 floors. Apart from the library, it has a conference hall. " +
                            "The most important thing is that this library has about 9 million book collections of different languages."

                    },
                    {
                        id:"5",
                        title:"Lotus Temple - India",
                        description:"Lotus temple is located in New Delhi in, India, and it was designed by Iranian architect Fariborz sabha. " +
                            "They have continued their construction process since 1980 and have 6 years to complete this Project." +
                            " For the construction process, they have spent about $10 million. This vast structure is spread over 26 acres. " +
                            "The height of that Building is about 40m. The nine pools around that temple add extra beauty to that incredible construction."

                    },
                    {
                        id:"6",
                        title:"Burj Khalifa - UAE",
                        description:"This Building is situated in Dubai, UAE. That was Designed by architects Adran Smith, Marshall Strabala, and George J Efstathiou. That Project was started in 2004, and they could " +
                            "complete that in 2010. For the construction, the owners have spent $ 1.5 billion. Let's consider " +
                            "the dimensions of this excellent design. This is the world's tallest Building, and its height is 828m. " +
                            "Burj Khalifa has 163 floors, and this is the world's tallest free-standing structure. Dubai is a world-famous tourist destination. " +
                            "Out of all destinations in Dubai, this is number one. Burj khalifa includes hotel rooms, Restaurants, Night clubs, shops, pools, residential apartments, work offices, gyms etc."

                    },
                    {
                        id:"7",
                        title:"City of wine museum - France",
                        description:"The City of Wine was designed by the XTV agency. This was opened for people on the 1st of June 2016. " +
                            "From This museum, we can study the history of wine products. This is the largest wine museum in the world. " +
                            "In addition to the exhibition area, there are restaurants, a wine shop and a library. " +
                            "The exhibition area consists of six areas. In the first area, they show videos of the famous wine regions in the world. " +
                            "In the second area, they show how to prepare wine with grapes. In the third area, you can learn about the history of wines with civilization. " +
                            "In the fourth area, you can enjoy the music. The fifth area is named 'wine and you'." +
                            " So, there you can taste different types of wines. The final area is reserved for studying wines in Bordeaux city."

                    },
                    {
                        id:"8",
                        title:"Taipei 101 - Taiwan",
                        description:"This building is in Taipei city in Taiwan. This building was designed by C.Y.Lee andC.P.Wang. " +
                            "The construction process of this 508m tall building started in 1999. They could complete the process in 2004 entirely. " +
                            "Since then, it was the tallest building in the world for five consecutive years." +
                            " This massive construction is owned by Taipei Financial Centre Corporation. For the construction process, they had to spend 1.895 " +
                            "billion dollars. The building consists of 101 floors. That's why this building is named Taipei 101. " +
                            "Taiwan is situated in the pacific ring of fire's earthquakes and the region's tropical storms. " +
                            "Therefore, Taipei 101 is designed to withstand them. In there, There is a massive steel ball located between 87th and 92nd floors. " +
                            "It swings like a pendulum to counterbalance earthquakes, this ball weighs 660 metric tons and has a diameter of 5.5m."

                    },
                    {
                        id:"9",
                        title:"Faisal Mosque - Pakistan",
                        description:"This awesome structure was designed by Turkish architect Vedat Dalokay and has a different shape than a traditional mosque. " +
                            "The mosque is situated in a beautiful hilly area in Islamabad. The construction process was started in 1976 and they could complete it in 1986. " +
                            "For that whole project, they had to spend about 120 million dollars. " +
                            "Faisal mosque is the 7th largest mosque in the world. It can accommodate about 300,000 worshipers."

                    },
                    {
                        id:"10",
                        title:"Petronas Towers - Malaysia",
                        description:"This building is also called the KLCC twin tower and was designed by the Argentina architect Cesar Pelli. " +
                            "The construction process was started in March 1993 and they could complete it in 1996. " +
                            "For that, the owner, KLCC holdings had to spend 1.6 billion dollars. " +
                            "The height of this incredible building is 451.9m. There are 38 lifts in each tower and consists of 88 floors, " +
                            "and this was the world's tallest building until 2004. " +
                            "There is a sky bridge located between the 41st and 42nd floors connecting these two buildings."

                    }

                ]


            })
            server.create("blog", {
                id:"4",
                title:"Top 10 Cleanest Countries in the World",
                image:"https://i3.ytimg.com/vi/xlRiLG7DPRM/maxresdefault.jpg",
                link:"https://www.youtube.com/watch?v=xlRiLG7DPRM",
                reading_time:"10 minute",
                content:[
                    {
                        id:"1",
                        title:"Denmark",
                        description:"Denmark is spread over 42,951 square kilometers, and the population is 5.7 million.\n" +
                            "They give more priority to renewable energies. Denmark's government has paid\n" +
                            "more attention to biomass technology and wind power. In addition, they have\n" +
                            "introduced bike lanes to reduce traffic congestion and emissions. They generate\n" +
                            "67% of their electricity requirements from renewable energies. Their sanitation\n" +
                            "facilities are at the higher levels are in a higher level. 100% of waste in their\n" +
                            "country is converted into compost or incinerated. And also they use energy-efficient\n" +
                            "water treatment methods for water treatment plants."

                    },
                    {
                        id:"2",
                        title:"United Kingdom",
                        description:"In the UK, they have reduced the coal industry. From there, they hope to close coalfired power stations by 2024. In addition, they produce a considerable amount of\n" +
                            "renewable energy, primarily wind power, and tend to build small-scale hydroelectric\n" +
                            "power stations. In addition, they work on infrastructure related to electric vehicles.\n" +
                            "They hope to stop selling gasoline vehicles by 2040 and diesel vehicles by 2030."

                    },
                    {
                        id:"3",
                        title:"Finland",
                        description:"Finland is spread over 338,455 square kilometers, and its population is 5.6 million.\n" +
                            "They have taken actions to minimize small-scale wood burnings Because it's the\n" +
                            "largest source of black carbon there. And also, Finland's government has taken\n" +
                            "many precautions to elevate walking and cycling and develop the infrastructure\n" +
                            "related to those. In addition, they have introduced easy payment methods for\n" +
                            "electrical vehicle buyers. They have also installed 3,000 charging stations across the country. They have conducted some programs to minimize the methane\n" +
                            "emissions from biogas plants."

                    },
                    {
                        id:"4",
                        title:"Malta",
                        description:"Malta is spread over 316 square kilometers, and the population is 0.52 million.\n" +
                            "Malta is a country with a lack of natural resources; they fulfill their water\n" +
                            "requirements by desalinating sea water and underground water."

                    },
                    {
                        id:"5",
                        title:"Sweden",
                        description:"Sweden is spread over 450,295 square kilometers, and the population is about 10.5\n" +
                            "million. Most of Sweden has vast knowledge about how environmental issues affect\n" +
                            "their lifestyle. As a result, the majority of consumers prefer to purchase\n" +
                            "environmentally friendly products. There are 34 waste-to-energy power plants in\n" +
                            "Sweden. They burn 50% of the country's total garbage and supply energy for\n" +
                            "millions of houses from there."

                    },
                    {
                        id:"6",
                        title:"Luxembourg",
                        description:"The area of Luxembourg is 2586 square kilometers, and the population is about\n" +
                            "0.65 million. There, they have free public transportation services for all citizens. And\n" +
                            "also, they have placed electric and pedal bikes in more than 100 places. From that,\n" +
                            "they expect to decrease carbon dioxide emissions into the air. In addition to those\n" +
                            "matters, they have paid more attention to using renewable energies such as wind\n" +
                            "and solar power to minimize the consumption of fossil fuels."

                    },
                    {
                        id:"7",
                        title:"Slovenia",
                        description:"Slovenia is spread over 20,271 square kilometers, and the population is about 2.2\n" +
                            "million. When considering the factors that affect Slovenia's cleanliness, there are\n" +
                            "many protected land areas. In addition, they have been banned from using singleuse plastic products, such as plastic cutlery, plates, straws, and balloons. They are\n" +
                            "also prohibited from using expanded polystyrene food and beverage packaging.\n" +
                            "There is also another main factor, namely that they have given more priority to\n" +
                            "sustainable development in education."

                    },
                    {
                        id:"8",
                        title:"Austria",
                        description:"Austria is spread over 82,000 square kilometers, and the population is 9 million.\n" +
                            "There, they have made strict rules for dumping waste. They face a two-year prison\n" +
                            "sentence or a 36,340 euro fine for illegally dumping waste. And also, the Austrian\n" +
                            "government has paid more attention to the recycling system. The waste separation\n" +
                            "bins should be segregated according to the categories. In addition, they plan to stop\n" +
                            "using coal for heating by 2035. Austria closed their last coal plant in 2020 to\n" +
                            "implement that plan effectively."

                    },
                    {
                        id:"9",
                        title:"Switzerland",
                        description:"The area of Switzerland is about 40,000 square kilometers, and the population is 8.8\n" +
                            "million. They prioritize protecting the environment, so they arrange events on an\n" +
                            "environmental day to increase public awareness about protecting the environment.\n" +
                            "And they also have a unique waste management system. They collect recyclable\n" +
                            "organic waste as well as recyclable waste. The rest of that is used for generating\n" +
                            "energy. There is the best water treatment technology in Europe. In there, they use\n" +
                            "the byproduct to create the biogas. They use that for public transportation. In\n" +
                            "addition, they have carbon capture plants, like Iceland."

                    },
                    {
                        id:"10",
                        title:"Iceland",
                        description:"Iceland has a land area of 103,000 square kilometers and a population of 372,000\n" +
                            "people.\n" +
                            "In Iceland, they have placed machines to suck up carbon dioxide because, as you\n" +
                            "know, carbon dioxide affects global warming. They collect 4000 tons of CO2 per\n" +
                            "year using this machine. Then they inject it deep into the ground and mineralize it.\n" +
                            "Another specialty of Iceland is that they use geothermal energy for cooking,\n" +
                            "bathing, space heating, and electrical power generation."

                    }

                ]



            })
            server.create("blog", {
                id:"5",
                title:"Top 10 Trending Travel Destinations",
                image:"https://i3.ytimg.com/vi/2u8buo_D-Qw/maxresdefault.jpg",
                link:"https://www.youtube.com/watch?v=2u8buo_D-Qw",
                reading_time:"8 minute",
                content:[
                    {
                        id:"1",
                        title:"New Zealand",
                        description:"New Zealand has beautiful landscapes, scenic beaches, forests, and caves. The specialty of that\n" +
                            "country is we can see a lot of beautiful scenery within a shorter distance. And also this country is\n" +
                            "famous for its adventures. Queenstown is the leading tourist destination in Newzelannd because\n" +
                            "there are so many adventurous places for bungee jumping and jet boating. So, This is called the\n" +
                            "adventure capital of the world. As well as Tongariro alpine is famous among tourists. That is the\n" +
                            "area filmed Mordor in the world-famous movie series, \"Lord of the ring\".And also you can visit\n" +
                            "hobit village. The average cost per person per day for tourists is U.S $120."

                    },
                    {
                        id:"2",
                        title:"Turkey",
                        description:"Turkey is famous for its clothes designs, carpets, scenery, beaches, and historical places. If you\n" +
                            "hope to go to turkey, remember to mark Cappadocia at the top of your travel list. Because\n" +
                            "Cappadocia is famous for hot balloon rides and beautiful scenery, Istanbul is the most famous\n" +
                            "destination among tourists. It is renowned for shopping and consists of historical sites like the Hagia\n" +
                            "Sophia. Patara is another critical historical place there because it is the birthplace of St. Nicolas.\n" +
                            "Antalya is another popular place there due to its waterfalls and beautiful beaches. The average cost\n" +
                            "per person per day is USD 90$."

                    },
                    {
                        id:"3",
                        title:"Australia",
                        description:"Australia has beautiful landscapes, scenery, beaches, forests, and red deserts. Another specialty of\n" +
                            "Australia is its lifestyle. They are such friendly people. When we discuss Australia, we can't forget\n" +
                            "the Sydney opera house. That is the number one tourist attraction place in Australia. Royal\n" +
                            "Botanical garden in Sydney is another critical spot in there. It is home to more than 27,000 trees\n" +
                            "worldwide and is the oldest botanical garden in Australia. Great ocean road is one of the best areas\n" +
                            "considering the beautiful scenery. That road runs along the southwest coast. When we go along that\n" +
                            "road, we can get a chance to visit twelve apostles. The average cost per day per person is USD 130$\n" +
                            "in Australia."

                    },
                    {
                        id:"4",
                        title:"Switzerland",
                        description:"Switzerland is famous for cheese, chocolates, watches, charming villages, and historical places.\n" +
                            "Another specialty is this is the most innovative country in the world. When considering the most\n" +
                            "photographed mountains in the world, Matterhorn is at the top of that list. And also, there, tourists\n" +
                            "can get the experience of the cable car ride. From that, you can enjoy the beauty of nature. Another\n" +
                            "picture-perfect place in Switzerland is lucern city. It's situated near lucern lake. The Chillon castle is\n" +
                            "situated in geneva lake. This is the most tourist attraction castle in Europe. The average cost per\n" +
                            "person per day is US 270$ in Switzerland."

                    },
                    {
                        id:"5",
                        title:"Italy",
                        description:"Italy is the country with the most world heritage sites. And also, it is the country that has the longest\n" +
                            "coastline in Europe and one of the best countries for foodies, and is full of artistic areas. Colosseum\n" +
                            "is the most famous place among tourists. The specialty is it's older than 1900 years. Venice is\n" +
                            "another special tourist attraction place in Italy. In there, you can get the experience of gondola rides.\n" +
                            "The leaning tower of Pisa is famous among tourists. It's one of the iconic landmarks in Italy. The\n" +
                            "average cost per person per day is US$ 150 in Italy."

                    },
                    {
                        id:"6",
                        title:"Thailand",
                        description:"Thailand is situated in Southeast Asia and is one of the world's most beautiful countries. It's famous,\n" +
                            "especially for ancient temples and Thai foods. Bangkok is the capital of Thailand and is a worldfamous place for nightlife. In addition, you can visit Wat Arun temple, floating markets, and the\n" +
                            "grand temple. Phuket Island is another special tourist attraction place in Thailand. This island is\n" +
                            "famous for its scenery, beaches, and seafood. As well as, Khao Sok park is famous among tourists.\n" +
                            "There, there are breathtaking lakes, caves, and limestone mountains. The average cost per person\n" +
                            "per day is US$100 in Thailand."

                    },
                    {
                        id:"7",
                        title:"Greece",
                        description:"When we consider the archeological structures, we must remember Greece. There are a lot of world\n" +
                            "heritage sites. As well Greece is another world-famous country for beaches. The Acropolis of\n" +
                            "Athens is the number one tourist destination and the most important place in Greece. Because It is a\n" +
                            "fortress, harboring of many kings, and this is the capital of art and culture. Meteora is also famous\n" +
                            "among tourists Because there is a unique rock formation area, and Meteora was added to the\n" +
                            "UNESCO world heritage list in 1988. The average cost per person per day is US$ 130 in Greece."

                    },
                    {
                        id:"8",
                        title:"USA",
                        description:"The USA is a country with a lot of national parks and surfing spots. One for each state, you can\n" +
                            "enjoy local foods. As well you can enjoy beach sides like Ocracoke Island and Hawaii. New York is\n" +
                            "one of the best tourist destinations in the USA. Liberty statues and the Empire state building are so\n" +
                            "famous among tourists. As well as the golden gate bridge in San Francisco has a great tourist\n" +
                            "attraction and is the most photographed bridge in the world. In addition, Las Vegas is another\n" +
                            "popular destination among tourists due to its entertainment, nightlife, and shopping. And also\n" +
                            "another specialty in Las Vegas is so many replicas, including the liberty statue, Eiffel tower, and\n" +
                            "Egyptian pyramid. The average cost per person per day is US$230 in the USA."

                    },
                    {
                        id:"9",
                        title:"France",
                        description:"France is a country with a lot of iconic landmarks, scenic beaches, and historical places. The\n" +
                            "leading tourist destination in France is Paris. You can visit France's number one tourist attraction,\n" +
                            "the Eiffel tower, the Louvre museum, and Notre Dame Cathedral. Among those, the Eiffel tower is\n" +
                            "the no one tourist destination in the world. And also when considering the Louvre museum is the\n" +
                            "largest and most visited museum in the world. Another important place in France in Provence.\n" +
                            "Provence is Famous for lavender and Sunflower fields. The average cost per person per day is US$\n" +
                            "200 in France."

                    },
                    {
                        id:"10",
                        title:"Mexico",
                        description:"Mexico is especially famous for its beautiful landscapes, beaches, food, and culture. You can see\n" +
                            "scenery beaches in Cancun and Mexico City. And also, Chichen Itza is one of the most tourist\n" +
                            "attractions places and is located in Yucatan state in Mexico. And that is a world-famous site Because\n" +
                            "this is one of the best-preserved architectural works of ancient Mayans. The monument of\n" +
                            "revolution is another tourist attraction and Mexico City's landmark. They have built this one to\n" +
                            "remember the heroes of the Mexican revolution. The average cost per person per day is US$ 100 in\n" +
                            "Mexico."

                    }

                ]




            })
            server.create("blog", {
                id:"6",
                title:"Top 10 Tourist Destinations In BRAZIL",
                image:"https://i3.ytimg.com/vi/x-hs-pCiqNo/maxresdefault.jpg",
                link:"https://www.youtube.com/watch?v=x-hs-pCiqNo",
                reading_time:"5 minute",
                content:[
                    {
                        id:"1",
                        title:"Christ the Redeemer",
                        description:"As soon as Brazil is mentioned, We remember the Christ the Redeemer statue. It is\n" +
                            "about 30m in height. And also, the length between the arms is about 28m. This\n" +
                            "statue is situated in Tijuca National Park on Corcovado Mounta"

                    },
                    {
                        id:"2",
                        title:"Sugar Loaf",
                        description:"Sugarloaf mountain is located in Guanabara Bay in Rio de Janeiro. The height of that\n" +
                            "mountain is about 396m. This is one of the most famous mountain climbing spots in\n" +
                            "the world. Also, there is an opportunity to see the most beautiful scenery by cable\n" +
                            "car riding."

                    },
                    {
                        id:"3",
                        title:"Iguazu Falls",
                        description:"Iguazu falls are located on Argentina and Brazil border. There are about 280\n" +
                            "separate falls. From time to time, the number of waterfalls varies according to the\n" +
                            "water level. This is one of the most beautiful waterfalls in the world."

                    },
                    {
                        id:"4",
                        title:"Copacabana",
                        description:"Copacabana beach is one of the most famous beaches in the world. It spreads over\n" +
                            "4km. And also this place is renowned for open-water swimming and beach\n" +
                            "volleyball. In the 2016 Rio Olympics, a 10km marathon swim was held on this\n" +
                            "Copacabana beach."

                    },
                    {
                        id:"5",
                        title:"Amazon Rainforest",
                        description:"Amazon rainforest spreads over eight countries. It is home to 10% of species in the\n" +
                            "world. And also, 60% percent of the amazon forest belongs to Brazil. A lot of tourist\n" +
                            "love to take a tour of the amazon river."

                    },
                    {
                        id:"6",
                        title:"Botanical Garden of Curitiba",
                        description:"The botanical garden of Curitiba was opened in 1991 and spread over 24,000\n" +
                            "square meters. This is designed according to the french garden style. In 2007, an\n" +
                            "online election selected this as the seven wonders of Brazil."

                    },
                    {
                        id:"7",
                        title:"Museum of Tomorrow",
                        description:"The museum of tomorrow is a science museum in Rio de Janeiro, Brazil. Here you\n" +
                            "can learn about climate changes, biodiversity changes, the advancement of\n" +
                            "technology in the next five years, and the earth's and spaces' history"

                    },
                    {
                        id:"8",
                        title:"Lencois Maranhense National Park",
                        description:"This park spreads over 155,000 hectares and is located in Maranhao state in Brazil.\n" +
                            "It has a 70km long coastal line, white sand dunes, and small lagoons that create\n" +
                            "beautiful scenery."

                    },
                    {
                        id:"9",
                        title:"Niteroi contemporary art museum",
                        description:"This UFO like building is m high and 50m in diameter at the top and has three floors.\n" +
                            "In there, there are about 1200 artworks collections. This museum is located in\n" +
                            "Niteroi city. Many tourists visit this place because they can enjoy the beautiful\n" +
                            "sceneries of Sugarloaf mountain and Guanabara bay by staying here."

                    },
                    {
                        id:"10",
                        title:"Cathedral of Brasilia",
                        description:"This crown-shaped catholic cathedral is located in the capital of Brazil, Brasilia.\n" +
                            "Inside, you can see beautiful glasswork and hanging sculptures. This is 40m high,\n" +
                            "and this cathedral was opened in 1970 for people."

                    }

                ]




            })
            server.create("blog", {
                id:"7",
                title:"Top 10 Places in Switzerland",
                image:"https://i3.ytimg.com/vi/CV3TxEe5F7o/maxresdefault.jpg",
                link:"https://www.youtube.com/watch?v=CV3TxEe5F7o",
                reading_time:"10 minute",
                content:[
                    {
                        id:"1",
                        title:"Lake Geneva",
                        description:"Geneva is situated in a beautiful area of Switzerland. There, there is a great opportunity to see\n" +
                            "plenty of scenic places. Out of them, Lake Geneva occupies a leading position. This is one of the\n" +
                            "largest lakes in Europe. Lake Geneva spreads over 580 square kilometers. In addition, the water jet\n" +
                            "in the lake's harbor is a landmark of Geneva. This injects water at a height of about 10 meters at a\n" +
                            "speed of 200 kilometers per hour. On top of that, this area is famous for swimming, boating, hiking,\n" +
                            "and cycling."

                    },
                    {
                        id:"2",
                        title:"Matterhorn",
                        description:"Materhorn is a location in Zermatt. This place is famous worldwide because of its unique shape.\n" +
                            "And there is also the highest cable car station in Europe. In addition, this area is famous for skiing.\n" +
                            "If you hope to visit Zermatt, don't miss the chance to take a train ride up the highest railway in\n" +
                            "Europe, Gornegrat. From this ride, you can get a lot of beautiful scenery along the Matterhorn."

                    },
                    {
                        id:"3",
                        title:"Bern",
                        description:"IBern is the capital of Switzerland. Bern's old town is an area that is famous among tourists. The city\n" +
                            "is bounded on three sides by the Aare River. There, you can visit beautiful ponds and sculptures.\n" +
                            "Another specialty of this city is that there are so many outdoor swimming pools, such as the Freibad\n" +
                            "Marzili, based on the Aare River. In addition, Zytglogge is another tourist destination, and this is\n" +
                            "also called the clock tower in Bern's old city."

                    },
                    {
                        id:"4",
                        title:"Rhine falls",
                        description:"Rhinefalls is situated on the border of Zurich and Schaffhausen. This is about 23 meters high, and\n" +
                            "the width is about 150m. In the summer, the flow rate of this waterfall is about 600 cubic meters per\n" +
                            "second. There are some observation platforms to get closer to waterfalls, and you can enjoy a boat\n" +
                            "trip in here."

                    },
                    {
                        id:"5",
                        title:"Grindelwald",
                        description:"Grindelwald is one of the most beautiful villages in Switzerland. By remaining on the viewing\n" +
                            "platform of the first mountain's cliff walk, tourists can enjoy wonderful views of the region. In\n" +
                            "addition, you can get the experience of a gondolaride, a glider ride, and a flight ride."

                    },
                    {
                        id:"6",
                        title:"Lucern",
                        description:"Lucerne is located in central Switzerland. Chapel Bridge is one of the most popular bridges in\n" +
                            "Lucern city.This bridge is the oldest truss bridge in the world. On top of that, there are paintings and\n" +
                            "the water tower located near Chapel Bridge. This tower is 34 meters tall and was previously used as\n" +
                            "a prison. In addition, the Lion Monument, the Swiss Museum of Transportation, and the Jesuit\n" +
                            "Church are some of the city's most iconic attractions."

                    },
                    {
                        id:"7",
                        title:"Interlaken",
                        description:"Interlaken is one of the most popular tourist destinations in Switzerland. Brienz and Thun lakes are\n" +
                            "located on the east and west sides of the city, respectively. Because of that, this city was named\n" +
                            "Interlaken. And also, this city is famous for bungee jumping and lake boat tours. On top of that,\n" +
                            "Harder Kulm is another tourist attraction, and from there we can get a mind-blowing city view of\n" +
                            "Interlaken."

                    },
                    {
                        id:"8",
                        title:"Chillon Castle",
                        description:"Chillon Castle is the most visited medieval castle in Europe and is located on the Genewa Lake\n" +
                            "Bank. In the past, this has been used as a prison."

                    },
                    {
                        id:"9",
                        title:"Zurich",
                        description:"Zurich is the largest city in Switzerland. According to the global liveability index score, this city\n" +
                            "remains in third place. Zurich is an old city. Because of that, there are a lot of mind-blowing places,\n" +
                            "including museums. Lake Zurich and the Limmat River are flowing near the city. And also, the\n" +
                            "cleanliness of the water adds extra beauty to the city. In addition, there are plenty of swimming\n" +
                            "spots for tourists."

                    },
                    {
                        id:"10",
                        title:"Lauterbrunnen",
                        description:"Lauterbrunnen is another tourist destination with beautiful scenery. Staubbach Falls is one of\n" +
                            "Lauterbrunnen's most popular tourist attractions. This is one of the highest free-falling waterfalls in\n" +
                            "Europe. Staubbach Falls is a landmark of Lauterbrunnen, and the height is about 300 m. In addition,\n" +
                            "this area is popular for hiking."

                    }

                ]


            })
        },

        routes() {




            this.get("/api/v1/blogs", (schema, request) => {
                console.log(request,"get request")
                return schema.blogs.all()
            },{timing:0})

            this.get("/api/v1/blogs/:id", (schema, request) => {
                console.log(request)
                let id = request.params.id
                return schema.blogs.find(id)
            },{timing:0})

            this.passthrough('https://api.emailjs.com/api/v1.0/email/send-form',['post'])


        },
    })
