export interface GameData {
    title: string,
    imgs: string[],
    release: string,
    rating: number,
    description: string,
    system: string
    tags: string[],
    reviews: any[]
}

const gamedata: GameData[] = [
    {
        title: "Omori",
        imgs: ["hero.png", "omori.jpg", "OmoriMenu.png", "OmoriFriends.png"],
        release: "December 25, 2020",
        rating: 4.5,
        description: "Explore a strange world full of colorful friends and foes. Navigate through the vibrant and the mundane in order to uncover a forgotten past. When the time comes, the path you’ve chosen will determine your fate... and perhaps the fate of others as well.",
        system: "PC",
        tags: ["Story", "Pixel", "Horror", "Psychological"],
        reviews: [
            {
                username: "GmRvwr20",
                date: "May 11, 2023",
                userRating: 4.5,
                comment: "Omori is such a wholesome experience which I’ll never forget. I’m not one for horror games, so I don’t usually check them out. This is one of the few that I actually am very glad I did so. It’s not too heavy on the horror aspect, and it’s like a slice of life. It has rpg elements, and a art style that doesn’t mind being too playful. Not to mention the soundtrack that compliments the art style like pb&j. Storywise, it’s a rollercoaster which lead me to many paths I never expected a game to take me.  I learned a lot, and on the way I felt many emotions. Moments that’ll gladly be burrowed in my memories. If your hesitant to get OMORI, trust me, you won’t regret buying this game."
            }
        ]
    },
    {
        title: "Tears of The Kingdom",
        imgs: ["totkpromo.png", "totkLink.png", "totkZelda.png", "totkGanondorf.jpg"],
        release: "May 12, 2023",
        rating: 4.8,
        description: "Sequel to The Legend of Zelda: Breath of the Wild (2017), that takes place just after the events occurred in its predecessor.",
        system: "Nintendo Switch",
        tags: ["Adeventure", "Action", "Fantasy"],
        reviews: [
            {
                username: "ZeldaMaster",
                date: "May 12, 2023",
                userRating: 5,
                comment: "An absolutely amazing game! It has everything you can want in a open world rpg game. The sandbox elements are definitely a breath of fresh air, the ability to build and experiment is top notch! I started playing at midnight when it came out and stayed playing until 5 in the morning and I would have kept playing if my switch didn't die. If you loved breath of the wild, you will lose your mind with this game. Worth the 70 bucks 100%"
            }
        ]
    },
    {
        title: "Banjo Kazooie",
        imgs: ["banjokazooie.png", "grunty.png", "gobisvalley.png", "mumbotoken.jpg"],
        release: "June 29, 1998",
        rating: 4.3,
        description: "The witch Gruntilda has captured Banjo's beloved sister, intending to leech the girl's youth and beauty through black magic and mad science. Banjo and Kazooie set out across nine worlds to get her back.",
        system: "Nintendo 64",
        tags: ["Adeventure", "Action", "Comedy"],
        reviews: []
    },
    {
        title: "Ocarina of Time",
        imgs: ["ootpromo.jpg", "linkshiek.png", "ootsages.png", "firetemple.png"],
        release: "November 21, 1998",
        rating: 4.9,
        description: "A young Kokiri boy discovers that his destiny is to free the Seven Sages and save the land of Hyrule from the treacherous sorcerer Ganondorf.",
        system: "Nintendo 64",
        tags: ["Adeventure", "Action", "Fantasy"],
        reviews: [
            {
                username: "xSarahx",
                date: "May 12, 2023",
                userRating: 5,
                comment: "The greatest, single experience of my life. The joy I feel when playing and thinking about this single game is insurmountable in words."
            },
            {
                username: "Doge4Life",
                date: "May 10, 2023",
                userRating: 5,
                comment: "I'm very new to the Zelda series playing Ocarina of Time in 2019, I didn't get the nostalgia thing everyone else is saying about but this is still an incredible game and I ca see why it's said by most gamers to be the best game of all time."
            }
        ]
    },
    {
        title: "Before Your Eyes",
        imgs: ["beforeyoureyespromo.jpg", "byemom.png", "byechloe.jpg", "byegatekeeper.png"],
        release: "April 8, 2021",
        rating: 4.2,
        description: "The recently deceased Benjamin Brynn is on his way to the afterlife. The player must interact with Brynn's memories through an eye-tracking webcam to progress, as the game reads and responds to the player's eye movement and blinking.",
        system: "PC",
        tags: ["Story", "Psychological"],
        reviews: []
    },
    {
        title: "Kingdom Hearts",
        imgs: ["khpromo.jpg", "kh.jpg", "khkairi.png", "khsora.jpg"],
        release: "March 28, 2002",
        rating: 4.6,
        description: "When his world is destroyed and his friends mysteriously disappear, a young boy named Sora is thrust into a quest to find his missing friends and prevent the armies of darkness from destroying many other worlds.",
        system: "Playstation",
        tags: ["Story", "Fantasy", "Action", "Adventure"],
        reviews: [
            {
                username: "NotxLea",
                date: "May 24, 2023",
                userRating: 4.2,
                comment: "Years in the making and hyped like crazy, Kingdom Hearts for the PlayStation 2 had me eagerly awaiting for months. Although not a big Disney fan, I salivated at the dream of seeing all the great Disney and SquareSoft characters together in one DVD game. When September 17, 2002 came, I ran out to get my copy and have been enthralled by this game's beauty, charm, and playability."
            }
        ]
    },
    {
        title: "A Way Out",
        imgs: ["awayoutpromo.jpg", "awoLeo.jpg", "awoVincent.jpg", "awotwo.jpg"],
        release: "March 23, 2018",
        rating: 4.1,
        description: "Prison inmates Vincent and Leo initially clash, but after Vincent helps Leo win a fight, they warm up to each other and decide to escape together.",
        system: "Playstation 4",
        tags: ["Story", "Action", "Adventure"],
        reviews: [
            {
                username: "NoFaceLuvr",
                date: "May 23, 2023",
                userRating: 5,
                comment: "You'll find nearly everything in this game: action, escape from prison, family drama and a surprising ending!"
            }
        ]
    },
    {
        title: "One Shot",
        imgs: ["oneshotpromo.png", "oneshotboat.jpg", "oneshotgame.jpg", "nikopancakes.png"],
        release: "December 8, 2016",
        rating: 4,
        description: "Summoned to a self contained digital universe, a young child with catlike features and eyes, waking up, learns about their role as 'the messiah'. And begins their journey, a pilgrimage, to restore the world's long dead sun.",
        system: "PC",
        tags: ["Story", "Adventure", "Puzzle"],
        reviews: []
    },
    {
        title: "Wind Waker",
        imgs: ["windwakerpromo.jpg", "wwlink.png", "wwgame.png", "wwtetra.png"],
        release: "December 13, 2002",
        rating: 4.7,
        description: "After his sister gets kidnapped from their peaceful island, a young boy aims to emulate the Hero of Time by saving her.",
        system: "Nintendo GameCube",
        tags: ["Action", "Adventure"],
        reviews: [
            {
                username: "K!ngDaph3z",
                date: "May 21, 2023",
                userRating: 5,
                comment: "This was the first real zelda game I ever played, and I love it with all my heart. This game has no flaws, and is great for beginners to the zelda series. Spoiler warning: My god. The ending is so violent for such a cartoony game, I gasped when I saw ganondorf's head get stabbed. Five out of five stars."
            }
        ]
    },
    {
        title: "Super Princess Peach",
        imgs: ["superprincesspeachpromo.jpg", "sppgame.png", "spphappy.png", "sppemotions.png"],
        release: "May 26, 2006",
        rating: 3.5,
        description: "The  Bowser and his koopa horde are plottingto capture Mario and Luigi. The plan is successful, and with Mario and Luigi out of the picture, who else is going to save the day but Peach? Join Peach as she makes her way to a showdown with Bowser and the rescue of the plumbing pair.",
        system: "Nintendo DS",
        tags: ["Action", "Adventure"],
        reviews: []
    },
    {
        title: "Pikmin 4",
        imgs: ["pikminpromo.jpg", "pmain.png", "pgame.png", "phunt.png"],
        release: "July 21, 2023",
        rating: 0,
        description: "Meet Pikmin, small, plantlike creatures you can grow, pluck, command, and overpower your enemies with! These curious helpers come in different types—fire is no sweat for Red Pikmin and the brand-new Ice Pikmin can freeze enemies and the environment. Use your Pikmin’s might to explore this mysterious planet.",
        system: "Nintendo Switch",
        tags: ["Adventure", "Puzzle"],
        reviews: []
    },
    {
        title: "Detroit: Become Human",
        imgs: ["detroitpromo.jpg", "detroitmarkus.jpg", "detroitconnor.png", "detroitlady.png"],
        release: "May 25, 2018",
        rating: 4,
        description: "Detroit: Become Human puts the destiny of both mankind and androids in your hands, taking you to a near future where machines have become more intelligent than humans.",
        system: "Playstation 4",
        tags: ["Story", "Action", "Adventure"],
        reviews: [
            {
                username: "ConnurxHaynk",
                date: "May 28, 2023",
                userRating: 4.5,
                comment: "One of the best story-driven games out there, if not THE best. Somehow, even if you make bad choices along the way and fail QTEs, the story doesn't become any worse, it's just different, but equally amazing"
            }
        ]
    },
    {
        title: "Assassin's Creed: Brotherhood",
        imgs: ["assassinscreedpromo.jpg", "acattack.jpg", "acstory.jpg", "acgame.png"],
        release: "May 25, 2018",
        rating: 4.2,
        description: "Live and breathe as Ezio, a legendary Master Assassin, in his enduring struggle against the powerful Templar order.",
        system: "Playstation 3",
        tags: ["Story", "Action", "Adventure"],
        reviews: []
    },
    {
        title: "Spyro the Dragon",
        imgs: ["spyropromo.jpg", "spyrogame.jpg", "spyroplay.jpg", "spyropower.jpg"],
        release: "September 10, 1998",
        rating: 4,
        description: "A young cute purple dragon named Spyro sets out to free his dragon buddies, after they had fallen victim to the villainous Gnasty Gnorc, who has turned them into crystal statues.",
        system: "Playstation",
        tags: ["Action", "Adventure"],
        reviews: []
    },
    {
        title: "Sly 2: Band of Thieves",
        imgs: ["sly2promo.png", "Sly2game.jpg", "sly2char.jpg", "Sly2main.jpg"],
        release: "September 10, 1998",
        rating: 4,
        description: "Two years after defeating Clockwerk, Sly Cooper and his band of thieves must recover and destroy all of the stolen Clockwerk parts from a sinister organization before their old nemesis can return from the dead.",
        system: "Playstation 2",
        tags: ["Action", "Adventure", "Story"],
        reviews: []
    },
]

export default gamedata
